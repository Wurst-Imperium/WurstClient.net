import argparse
import util
from datetime import datetime
from pathlib import Path
from util import WurstForumDiscussion, read_post

announcement_template = """
Wurst {wurst_version} has been backported to Minecraft {mc_version}. Download it here: <{update_url}>

This backport makes the following changes accessible to Minecraft {mc_version} players:

{changelogs}

**Note:** These changelogs are directly copied from Wurst updates that did not originally support Minecraft \
{mc_version}. Some of them may not make sense in this context.
""".strip()


def find_previous_wurst_update(mc_version: str, before_date: datetime) -> Path | None:
	"""Find the newest Wurst update before before_date that was available for the given MC version."""
	latest_post = None
	latest_date = None

	for post_path in util.get_wurst_update_posts():
		post_date = datetime.strptime(post_path.name[:10], "%Y-%m-%d")
		if post_date >= before_date:
			continue

		post = read_post(post_path)
		if mc_version in post.front_matter.get("minecraft-versions", []):
			if latest_date is None or post_date > latest_date:
				latest_date = post_date
				latest_post = post_path

	return latest_post


def find_updates_between(start_post: Path, end_version: str) -> list[Path]:
	"""Find all update posts between start_post and the post for end_version, ordered by date."""
	updates = []
	start_date = datetime.strptime(start_post.name[:10], "%Y-%m-%d")

	for post_path in util.get_wurst_update_posts():
		post_date = datetime.strptime(post_path.name[:10], "%Y-%m-%d")
		if post_date <= start_date:
			continue

		post = read_post(post_path)
		if post.front_matter["wurst-version"] == end_version:
			updates.append(post_path)
			break
		updates.append(post_path)

	return sorted(updates, key=lambda p: p.name[:10])


def main(wurst_version: str, mc_version: str, dry_run: bool = False):
	# Title
	title = f"Wurst {wurst_version} backported to Minecraft {mc_version}"

	# Tag IDs - check these at https://wurstforum.net/api/tags
	tags = {
		"Announcements": 3,
		"Backports": 26,
	}

	# Find previous update for this MC version
	current_update = util.find_wurst_update_post(wurst_version)
	current_update_date = datetime.strptime(current_update.path.name[:10], "%Y-%m-%d")
	prev_update = find_previous_wurst_update(mc_version, current_update_date)
	if prev_update is None:
		raise ValueError(f"No previous update found for Minecraft {mc_version}")
	print(f"Previous update: {prev_update.path.name}")

	# Combine changelogs
	changelogs = []
	update_posts = find_updates_between(prev_update, wurst_version)
	print(f"Updates between {prev_update.path.name} and {wurst_version}: {update_posts}")
	for post_path in update_posts:
		post = read_post(post_path)
		changelog = util.parse_changelog(post.content)
		update_url = post.get_update_url()
		new_heading = (
			f"## Changes from [Wurst {post.front_matter['wurst-version']}]({update_url})\n"
		)

		# Filter out posts with multiple "## Changelog" headings
		if changelog.startswith("## Changelog\n") and changelog.count("## Changelog") == 1:
			changelog = changelog[len("## Changelog\n") :]
			changelogs.append(new_heading + changelog)
		else:
			changelogs.append(new_heading + "Multiple changelogs found. See <{update_url}>.")

	# Create announcement
	content = announcement_template.format(
		wurst_version=wurst_version,
		mc_version=mc_version,
		update_url=f"{post.get_update_url()}/?mc={mc_version}",
		changelogs="\n\n".join(changelogs),
	)
	announcement = WurstForumDiscussion(title, list(tags.values()), content)
	print(f"Title: {announcement.title}")
	print(f"Content: {announcement.content}")

	# Upload announcement
	discussion_id = util.upload_discussion(announcement, dry_run=dry_run)
	print(f"https://wurstforum.net/d/{discussion_id}")
	util.set_github_output("discussion_id", discussion_id)


if __name__ == "__main__":
	parser = argparse.ArgumentParser(description="Announces a new Wurst backport on WurstForum")
	parser.add_argument("wurst_version", help="Wurst version (without v or -MC)")
	parser.add_argument("mc_version", help="Minecraft version")
	parser.add_argument(
		"--dry-run", action="store_true", help="Don't actually upload the announcement"
	)
	args = parser.parse_args()
	main(args.wurst_version, args.mc_version, args.dry_run)
