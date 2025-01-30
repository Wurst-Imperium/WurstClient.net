import util
from argparse import ArgumentParser
from datetime import datetime
from util import JekyllPost, WurstForumDiscussion

announcement_template = """
Wurst {wurst_version} has been backported to Minecraft {mc_version}. Download it here: <{update_url}>

This backport makes the following changes accessible to Minecraft {mc_version} players:

{changelogs}

**Note:** These changelogs are directly copied from Wurst updates that did not originally support Minecraft \
{mc_version}. Some of them may not make sense in this context.
""".strip()


def find_update_before(before_date: datetime, mc_version: str) -> JekyllPost | None:
	"""Find the newest Wurst update before before_date that was available for mc_version."""
	latest_post = None
	for post in util.get_wurst_update_posts():
		if post.get_date() >= before_date:
			continue
		if mc_version in post.get_mc_versions_including_snapshots():
			if latest_post is None or post.get_date() > latest_post.get_date():
				latest_post = post
	return latest_post


def find_updates_between(start_date: datetime, end_date: datetime) -> list[JekyllPost]:
	"""Find all update posts between start_date and end_date, in chronological order."""
	updates = []
	for post in util.get_wurst_update_posts():
		post_date = post.get_date()
		if post_date > start_date and post_date <= end_date:
			updates.append(post)
	return sorted(updates, key=lambda p: p.get_date())


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
	prev_update = find_update_before(current_update.get_date(), mc_version)
	if prev_update is None:
		raise ValueError(f"No previous update found for Minecraft {mc_version}")
	print(f"Previous update: {prev_update.get_wurst_version()}")

	# Combine changelogs
	changelogs = []
	update_posts = find_updates_between(prev_update.get_date(), current_update.get_date())
	print(
		f"Updates between {prev_update.get_wurst_version()} and {wurst_version}: {[post.get_wurst_version() for post in update_posts]}"
	)
	for post in update_posts:
		changelog = util.parse_changelog(post.content)
		update_url = post.get_update_url()
		new_heading = f"## Changes from [Wurst {post.get_wurst_version()}]({update_url})\n"

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
		update_url=f"{current_update.get_update_url()}?mc={mc_version}",
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
	parser = ArgumentParser(description="Announces a new Wurst backport on WurstForum")
	parser.add_argument("wurst_version", help="Wurst version (without v or -MC)")
	parser.add_argument("mc_version", help="Minecraft version")
	parser.add_argument(
		"--dry-run", action="store_true", help="Don't actually upload the announcement"
	)
	args = parser.parse_args()
	main(args.wurst_version, args.mc_version, args.dry_run)
