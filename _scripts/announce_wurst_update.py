import util
from argparse import ArgumentParser
from util import JekyllPost, WurstForumDiscussion

announcement_template = """
@"Everyone"#g7 Wurst {wurst_version} is now available. Download it here: <{update_url}>

[![{title}]({image_url})]({update_url})

{changelog}
""".strip()


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
		update_url=wurst_update.get_update_url(),
		image_url=wurst_update.front_matter["image"],
		changelog=util.parse_changelog(wurst_update.content),
	)

	return WurstForumDiscussion(title, list(tags.values()), content)


def link_update_to_discussion(wurst_update: JekyllPost, discussion_id: int) -> None:
	"""Add a link to a WurstForum discussion to a Wurst update post."""
	wurst_update.front_matter["wurstforum_thread"] = discussion_id
	util.write_front_matter(wurst_update.path, wurst_update.front_matter)


def main(wurst_version: str, dry_run: bool):
	jekyll_post = util.find_wurst_update_post(wurst_version)
	announcement = create_announcement(jekyll_post)
	discussion_id = util.upload_discussion(announcement, dry_run=dry_run)
	link_update_to_discussion(jekyll_post, discussion_id)


if __name__ == "__main__":
	parser = ArgumentParser(description="Announces a new Wurst update on WurstForum")
	parser.add_argument("wurst_version", help="Wurst version (without v or -MC)")
	parser.add_argument(
		"--dry-run", action="store_true", help="Don't actually upload the announcement"
	)
	args = parser.parse_args()
	main(args.wurst_version, args.dry_run)
