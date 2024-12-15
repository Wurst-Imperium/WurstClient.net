import argparse
import json
import os
import requests
import util
from dataclasses import dataclass
from util import JekyllPost


@dataclass
class WurstForumDiscussion:
	title: str
	tags: list[int]
	content: str


announcement_template = """
@"Everyone"#g7 Wurst {wurst_version} is now available. Download it here: <{update_url}>

[![{title}]({image_url})]({update_url})

{changelog}
""".strip()


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


def create_announcement(wurst_update: JekyllPost) -> WurstForumDiscussion:
	"""Create an announcement from a Wurst update post."""
	# Title
	title = wurst_update.front_matter["title"]

	# Tag IDs - check these at https://wurstforum.net/api/tags
	tags = {
		"Announcements": 3,
		"Wurst updates": 22,
	}

	# Content
	wurst_version = wurst_update.front_matter["wurst-version"]
	content = announcement_template.format(
		title=title,
		wurst_version=wurst_version,
		update_url=f"https://www.wurstclient.net/updates/wurst-{wurst_version.replace('.', '-')}/",
		image_url=wurst_update.front_matter["image"],
		changelog=parse_changelog(wurst_update.content),
	)

	return WurstForumDiscussion(title, list(tags.values()), content)


def upload_discussion(discussion: WurstForumDiscussion) -> int:
	"""Upload a new discussion to WurstForum and return its ID."""
	url = "https://wurstforum.net/api/discussions"
	headers = {"Authorization": f"Token {os.getenv('WURSTFORUM_TOKEN')}"}
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
	response = requests.post(url, headers=headers, json=data)
	if not response.ok:
		raise requests.HTTPError(f"Request failed (code {response.status_code}): {response.text}")
	discussion_id = response.json().get("data", {}).get("id")
	if not discussion_id:
		raise ValueError(f"No discussion ID in response: {response.text}")
	return discussion_id


def link_update_to_discussion(wurst_update: JekyllPost, discussion_id: int) -> None:
	"""Add a link to a WurstForum discussion to a Wurst update post."""
	wurst_update.front_matter["wurstforum_thread"] = discussion_id
	util.write_front_matter(wurst_update.path, wurst_update.front_matter)


def main(wurst_version):
	jekyll_post = util.find_wurst_update_post(wurst_version)

	announcement = create_announcement(jekyll_post)
	print(f"Title: {announcement.title}")
	print(f"Content: {announcement.content}")

	discussion_id = upload_discussion(announcement)
	print(f"https://wurstforum.net/d/{discussion_id}")
	util.set_github_output("discussion_id", discussion_id)

	link_update_to_discussion(jekyll_post, discussion_id)


if __name__ == "__main__":
	parser = argparse.ArgumentParser(description="Announces a new Wurst update on WurstForum")
	parser.add_argument("wurst_version", help="Wurst version (without v or -MC)")
	args = parser.parse_args()
	main(args.wurst_version)
