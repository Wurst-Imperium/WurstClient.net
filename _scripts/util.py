import json
import os
import requests
from dataclasses import dataclass
from datetime import datetime
from io import StringIO
from pathlib import Path
from ruamel.yaml import YAML
from ruamel.yaml.comments import CommentedMap, CommentedSeq
from typing import Iterator

yaml = YAML()
yaml.preserve_quotes = True

_wurstforum_headers = {"Authorization": f"Token {os.getenv('WURSTFORUM_TOKEN')}"}


@dataclass
class JekyllPost:
	front_matter: CommentedMap
	content: str
	path: Path

	def get_update_url(self) -> str:
		return f"https://www.wurstclient.net/updates/wurst-{self.front_matter['wurst-version'].replace('.', '-')}/"

	def get_date(self) -> datetime:
		return datetime.strptime(self.path.name[:10], "%Y-%m-%d")

	def get_wurst_version(self) -> str:
		return self.front_matter["wurst-version"]

	def get_mc_versions_including_snapshots(self) -> list[str]:
		return [
			v
			for v in self.front_matter.get("minecraft-versions", [])
			+ self.front_matter.get("snapshots", [])
		]


@dataclass
class WurstForumDiscussion:
	title: str
	tags: list[int]
	content: str


def read_post(path: Path) -> JekyllPost:
	"""Read front matter and content from a Jekyll/Hugo post."""
	content = path.read_text(encoding="utf-8")
	parts = content.split("---", 2)
	if len(parts) < 3:
		raise ValueError(f"Invalid front matter format in {path}")

	return JekyllPost(yaml.load(parts[1]), parts[2].strip(), path)


def write_front_matter(path: Path, front_matter: CommentedMap):
	"""Write YAML front matter to a Jekyll/Hugo post while preserving content."""
	content = path.read_text(encoding="utf-8")
	parts = content.split("---", 2)
	if len(parts) < 3:
		raise ValueError(f"Invalid front matter format in {path}")

	output = StringIO()
	yaml.dump(front_matter, output)
	new_content = f"---\n{output.getvalue()}---{parts[2]}"
	path.write_text(new_content, encoding="utf-8")


def get_wurst_update_posts() -> Iterator[JekyllPost]:
	"""Get all Wurst update post paths."""
	for post_path in Path("_updates").rglob("????-??-??-Wurst-*.md"):
		if post_path.is_file():
			yield read_post(post_path)


def find_wurst_update_post(version: str) -> JekyllPost:
	"""Find and read the Wurst update post for a specific version."""
	for post in get_wurst_update_posts():
		if post.front_matter["wurst-version"] == version:
			return post

	raise ValueError(f"Could not find post for Wurst version {version}")


def parse_changelog(content: str) -> str:
	"""Parse the changelog from the content of a Wurst update post."""
	changelog_lines = []
	for line in content[content.find("## Changelog") :].splitlines():
		stripped = line.strip()
		if not stripped or stripped.startswith("-") or stripped.startswith("## Changelog"):
			changelog_lines.append(line)
			continue
		break
	return "\n".join(changelog_lines).strip()


def upload_discussion(discussion: WurstForumDiscussion, dry_run: bool = False) -> int:
	"""Upload a new discussion to WurstForum and return its ID."""
	url = "https://wurstforum.net/api/discussions"
	data = {
		"data": {
			"type": "discussions",
			"attributes": {
				"title": discussion.title,
				"content": discussion.content,
			},
			"relationships": {
				"tags": {
					"data": [{"type": "tags", "id": tag_id} for tag_id in discussion.tags],
				},
			},
		},
	}

	print(f"Request data: {json.dumps(data, indent=2)}")
	if dry_run:
		add_github_summary("Dry-run mode, would have posted the following:")
		add_github_summary(f"Title: {discussion.title}")
		add_github_summary(f"Tags: {discussion.tags}")
		add_github_summary(discussion.content)
		assert (
			len(discussion.title) <= 80
		), "Title is longer than 80 characters, WurstForum would have rejected this request"
		set_github_output("discussion_id", "123")
		return 123

	response = requests.post(url, headers=_wurstforum_headers, json=data)
	if not response.ok:
		raise requests.HTTPError(f"Request failed (code {response.status_code}): {response.text}")
	discussion_id = response.json().get("data", {}).get("id")
	if not discussion_id:
		raise ValueError(f"No discussion ID in response: {response.text}")

	add_github_summary(f"Discussion ID: {discussion_id}")
	add_github_summary(f"Link: <https://wurstforum.net/d/{discussion_id}>")
	set_github_output("discussion_id", discussion_id)
	return discussion_id


def upload_post(discussion_id: str | int, content: str, dry_run: bool = False) -> int:
	"""Upload a post to an existing WurstForum discussion and return its ID."""
	url = "https://wurstforum.net/api/posts"
	data = {
		"data": {
			"type": "posts",
			"attributes": {
				"content": content,
			},
			"relationships": {
				"discussion": {
					"data": {"type": "discussions", "id": str(discussion_id)},
				},
			},
		},
	}

	print(f"Request data: {json.dumps(data, indent=2)}")
	if dry_run:
		add_github_summary("Dry-run mode, would have posted the following:")
		add_github_summary(f"Discussion ID: {discussion_id}")
		add_github_summary(content)
		set_github_output("post_id", "123")
		return 123

	response = requests.post(url, headers=_wurstforum_headers, json=data)
	if not response.ok:
		raise requests.HTTPError(f"Request failed (code {response.status_code}): {response.text}")
	post_id = response.json().get("data", {}).get("id")
	if not post_id:
		raise ValueError(f"No post ID in response: {response.text}")

	add_github_summary(f"Post ID: {post_id}")
	set_github_output("post_id", post_id)
	return post_id


def read_data_file(path: Path) -> CommentedMap | CommentedSeq:
	"""Read a YAML data file."""
	return yaml.load(path.read_text(encoding="utf-8"))


def write_data_file(path: Path, data: CommentedMap | CommentedSeq):
	"""Write a YAML data file."""
	output = StringIO()
	yaml.dump(data, output)
	path.write_text(output.getvalue(), encoding="utf-8")


def read_gradle_properties(branch: str) -> dict[str, str]:
	"""Get a dict of gradle.properties entries for the given Wurst7 branch."""
	response = requests.get(
		f"https://raw.githubusercontent.com/Wurst-Imperium/Wurst7/{branch}/gradle.properties"
	)
	if not response.ok:
		raise ValueError(
			f"Failed to read gradle.properties from Wurst7@{branch}: {response.status_code}\n{response.text}"
		)

	props = {}
	for line in response.text.splitlines():
		if "=" not in line or line.startswith("#"):
			continue
		key, value = line.split("=", 1)
		props[key.strip()] = value.strip()
	return props


def set_github_output(key: str, value: str):
	"""Set a key-value pair in the GitHub Actions output."""
	if "GITHUB_OUTPUT" not in os.environ:
		print(f"Not running on GHA, would have set output: {key}={value}")
		return
	with open(os.environ["GITHUB_OUTPUT"], "a") as env:
		print(f"{key}={value}", file=env)


def add_github_summary(summary: str):
	"""Add a line to the GitHub Actions summary for the current step."""
	if "GITHUB_STEP_SUMMARY" not in os.environ:
		print(summary)
		return
	with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as summary_file:
		print(summary, file=summary_file)
