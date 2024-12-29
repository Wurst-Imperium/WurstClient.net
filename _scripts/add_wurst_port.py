import argparse
import datetime
import requests
import textwrap
import util
from pathlib import Path

manifest_url = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json"
manifest = requests.get(manifest_url).json()

version_info = {
	version["id"]: {"type": version["type"], "releaseTime": version["releaseTime"]}
	for version in manifest["versions"]
}


def update_wurst_post(wurst_version, mc_version, fapi_version):
	"""Add a new Minecraft version port to an existing Wurst update post."""
	post = util.find_wurst_update_post(wurst_version)
	front_matter = post.front_matter

	# Update last modified date
	front_matter["modified_date"] = datetime.date.today().strftime("%Y-%m-%d")

	# Update Minecraft versions
	if version_info[mc_version]["type"] == "snapshot":
		if "snapshots" not in front_matter:
			front_matter["snapshots"] = []
		if mc_version not in front_matter["snapshots"]:
			front_matter["snapshots"].append(mc_version)
			front_matter["snapshots"].sort(
				key=lambda v: version_info[v]["releaseTime"],
				reverse=True,
			)
	else:
		if "minecraft-versions" not in front_matter:
			front_matter["minecraft-versions"] = []
		if mc_version not in front_matter["minecraft-versions"]:
			front_matter["minecraft-versions"].append(mc_version)
			front_matter["minecraft-versions"].sort(
				key=lambda v: version_info[v]["releaseTime"],
				reverse=True,
			)

	# Update Fabric API versions
	if "fabric-api" not in front_matter:
		front_matter["fabric-api"] = {}
	if mc_version not in front_matter["fabric-api"]:
		front_matter["fabric-api"][mc_version] = fapi_version
		front_matter["fabric-api"] = dict(
			sorted(
				front_matter["fabric-api"].items(),
				key=lambda item: (
					version_info[item[0]]["type"] == "release",
					version_info[item[0]]["releaseTime"],
				),
				reverse=True,
			)
		)

	util.write_front_matter(post.path, front_matter)


def update_install_guide(new_version):
	"""Update the latest Minecraft version mentioned in the Wurst 7 installation guide."""
	install_guide = util.read_post(Path("_tutorials") / "how-to-install" / "wurst-7.html")
	front_matter = install_guide.front_matter
	front_matter["title"] = f"How To Install Wurst 7 for Minecraft {new_version} - 1.14.2"
	front_matter["description"] = (
		f"This step-by-step guide shows how to install the Wurst Client for Minecraft {new_version}"
		" - 1.14.2 with the Fabric Modloader. It works on Windows, Mac and Linux."
	)
	util.write_front_matter(install_guide.path, front_matter)


def add_download_category(new_version, old_latest):
	"""Add a new download category when a new Minecraft version is released."""
	# Update download/index.html mcversions list
	download_index = util.read_post(Path("download") / "index.html")
	if new_version not in download_index.front_matter["mcversions"]:
		# Insert after "all" and "snapshots"
		download_index.front_matter["mcversions"].insert(2, new_version)
	util.write_front_matter(download_index.path, download_index.front_matter)

	# Create download/minecraft-<version>.html page
	# Get the update name from the previous version's page
	old_page = util.read_post(Path("download") / f"minecraft-{old_latest.replace('.', '-')}.html")
	update_name = old_page.front_matter["description"].split(" - ", 1)[1]

	new_page_path = Path("download") / f"minecraft-{new_version.replace('.', '-')}.html"
	new_page_content = f"""\
	---
	title: Minecraft {new_version} Wurst Hacked Client Downloads
	description: Wurst Client downloads for Minecraft {new_version} - {update_name}
	layout: download-list
	mcversion: "{new_version}"
	permalink: /download/minecraft-{new_version.replace('.', '-')}/
	---
	"""
	new_page_path.write_text(textwrap.dedent(new_page_content), encoding="utf-8")


def update_latest_release(new_version):
	"""Update all necessary files when the latest Minecraft release changes."""
	config_path = Path("_config.yml")
	config = util.read_data_file(config_path)

	old_latest = config["latest_mcversion"]
	if new_version == old_latest:
		return  # Already up to date

	config["latest_mcversion"] = new_version
	util.write_data_file(config_path, config)

	update_install_guide(new_version)
	add_download_category(new_version, old_latest)


def main(wurst_version, mc_version, fapi_version):
	update_wurst_post(wurst_version, mc_version, fapi_version)

	mc_version_type = version_info[mc_version]["type"]
	if mc_version_type == "release" and mc_version == manifest["latest"]["release"]:
		update_latest_release(mc_version)


if __name__ == "__main__":
	parser = argparse.ArgumentParser(
		description="Adds the necessary Jekyll metadata when an existing Wurst Client update is ported to a new Minecraft version"
	)
	parser.add_argument("wurst_version", help="Wurst version")
	parser.add_argument("mc_version", help="Minecraft version")
	parser.add_argument("fapi_version", help="Fabric API version")
	args = parser.parse_args()
	main(args.wurst_version, args.mc_version, args.fapi_version)
