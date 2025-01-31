import util
from argparse import ArgumentParser
from datetime import datetime
from util import JekyllPost, WurstForumDiscussion


def mc_version_from_branch(branch: str) -> str:
	"""Extract MC version from gradle.properties in the given branch."""
	props = util.read_gradle_properties(branch)
	mc_version = props.get("minecraft_version")
	if not mc_version:
		raise ValueError(f"Could not find Minecraft version in Wurst7@{branch}")
	return mc_version


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
	"""Find all Wurst update posts between start_date and end_date, in chronological order."""
	updates = []
	for post in util.get_wurst_update_posts():
		post_date = post.get_date()
		if post_date > start_date and post_date <= end_date:
			updates.append(post)
	return sorted(updates, key=lambda p: p.get_date())


def combine_changelogs(
	mc_version: str, current_update: JekyllPost, prev_update: JekyllPost | None
) -> str:
	if prev_update is None:
		print(f"No previous update found for {mc_version}")
		return f"This is the first Wurst version to support Minecraft {mc_version}!"
	print(f"Previous update for {mc_version}: {prev_update.get_wurst_version()}")
	changelogs = []
	update_posts = find_updates_between(prev_update.get_date(), current_update.get_date())
	print(
		f"Updates for {mc_version} between {prev_update.get_wurst_version()} and {current_update.get_wurst_version()}: "
		f"{[post.get_wurst_version() for post in update_posts]}"
	)
	for post in update_posts:
		changelog = util.parse_changelog(post.content)
		update_url = post.get_update_url()
		new_heading = f"### Changes from [Wurst {post.get_wurst_version()}]({update_url})\n"
		# Filter out posts with multiple "## Changelog" headings
		if changelog.startswith("## Changelog\n") and changelog.count("## Changelog") == 1:
			changelog = changelog[len("## Changelog\n") :]
			changelogs.append(new_heading + changelog)
		else:
			changelogs.append(
				new_heading
				+ "Multiple changelogs found. Don't know which one to show here. See <{update_url}>."
			)
	return "\n\n".join(changelogs)


announcement_template_one_no_changes = """
Wurst {wurst_version} has been ported to Minecraft {mc_version}.

Download it here: <{update_url}>

This is the first Wurst version to support Minecraft {mc_version}!
""".strip()


announcement_template_one = """
Wurst {wurst_version} has been ported to Minecraft {mc_version}.

Download it here: <{update_url}>

This port makes the following changes accessible to Minecraft {mc_version} players:

{changelogs}

**Note:** Since these changelogs are taken directly from previous Wurst updates that did not originally support \
Minecraft {mc_version}, they might sometimes not make sense in this context.
""".strip()


announcement_template_multiple = """
Wurst {wurst_version} has been ported to several new Minecraft versions: {mc_versions}.

Download it here: <{update_url}>

This port makes the following changes accessible to players of each Minecraft version:

{changelogs}

**Note:** Since these changelogs are taken directly from previous Wurst updates that did not originally support \
these Minecraft versions, they might sometimes not make sense in this context.
""".strip()


def main(wurst_version: str, mc_versions: list[str], dry_run: bool):
	# Title
	formatted_targets = " / ".join(str(target) for target in mc_versions)
	title = f"Wurst {wurst_version} ported to Minecraft {formatted_targets}"
	if len(title) > 80:
		title = f"Wurst {wurst_version} ported to new Minecraft versions"

	# Tag IDs - check these at https://wurstforum.net/api/tags
	tags = {
		"Announcements": 3,
		"Wurst updates": 22,
	}

	# Content (changelogs)
	current_update = util.find_wurst_update_post(wurst_version)
	if len(mc_versions) == 1:
		mc_version = mc_versions[0]
		prev_update = find_update_before(current_update.get_date(), mc_version)
		if prev_update is None:
			content = announcement_template_one_no_changes.format(
				wurst_version=wurst_version,
				mc_version=mc_version,
				update_url=f"{current_update.get_update_url()}?mc={mc_version}",
			)
		else:
			content = announcement_template_one.format(
				wurst_version=wurst_version,
				mc_version=mc_version,
				update_url=f"{current_update.get_update_url()}?mc={mc_version}",
				changelogs=combine_changelogs(mc_version, current_update, prev_update),
			)
	else:
		changelogs = []
		for mc_version in mc_versions:
			prev_update = find_update_before(current_update.get_date(), mc_version)
			changelogs.append(
				f"## Changes for Minecraft {mc_version} players\n\n"
				+ combine_changelogs(mc_version, current_update, prev_update)
			)
		content = announcement_template_multiple.format(
			wurst_version=wurst_version,
			mc_versions=", ".join(str(mc_version) for mc_version in mc_versions),
			update_url=current_update.get_update_url(),
			changelogs="\n\n".join(changelogs),
		)

	# Upload announcement
	announcement = WurstForumDiscussion(title, list(tags.values()), content)
	util.upload_discussion(announcement, dry_run=dry_run)


if __name__ == "__main__":
	parser = ArgumentParser(description="Announces a new set of Wurst ports on WurstForum")
	parser.add_argument("wurst_version", help="Wurst version (without v or -MC)")
	parser.add_argument("branches", nargs="+", help="Branch names (e.g. 'master 1.21.3')")
	parser.add_argument(
		"--dry-run", action="store_true", help="Don't actually upload the announcement"
	)
	args = parser.parse_args()
	mc_versions = [mc_version_from_branch(branch) for branch in args.branches]
	main(args.wurst_version, mc_versions, args.dry_run)
