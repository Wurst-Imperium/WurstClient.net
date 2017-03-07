---
title: Wurst 2.4 - Better Target, Proxy Support, Bugfixes
description: This update makes PVPing with Wurst more convenient and less suspicious, and also makes it impossible for cracked servers to ban you.
category: Wurst Update
Wurst-version: v2.4
minecraft-version: 1.8.X
image: https://lh3.googleusercontent.com/NN8TD-SCvA4U-e26qsOabwzpZn_E3sIeKMHwUWE7rpmHQTZAyD40PP0VvThw80SZ25DlggfLGxuOfWzv6xDazy_Ku2U7G0uxk8_jiWJ9T0NLyT_zKFPYdYcAlOCUQJXaSPjY61pd7-TSQBbBf3DbCzcZwMs2CX40fqPeQgPksP0_MpQQVWxlr_2sEUTo93t-tiDljya2csfRPp4DC1TEyX6FvECtcrUEOYr5-ROUwPhFvoCUcAUqFSJaQ9dUCfLmwfuBhOWgF0MqKprCNlQj6Q2ubhNHtUoZXKBKV68gHOILi3oa3GiqTAyIef2i6zf4D-E0XqeBScSPRedOQlBRf51cfI1JFLOfGCI-haPPeeheW-aBrIrnjgr4hmYpmDRalVJiUj-BI7sMvJnzWIf56xzBh3TPh_nRcjUKT_TkPednujsh_2SDDsEa1KTPHW-xMJ0EeCBxd6QSJWO4nsu3GSt4NC3E-UoLmLeEn9qwZhPWmtzZKOWXZZ39B6ZbOHtRj-Y0mgLBCs6-8lv09WOOaLDeBB_X8gr9s1GmeMtVg6kXcYc1EpnI4NHctIRVPOhSv5_-k8MHSyRHnaARJQjRxRxAnHysuSYjTDwgD0HgODrer9rv=w1280-h720-no
---
This update makes PVPing with Wurst more convenient and less suspicious, and also makes it impossible for cracked servers to ban you.

## Better Target
Target got its own frame and some more options for advanced target selections. You can now select players, animals, monsters, golems, sleeping players, invisible players, invisible mobs or any combination of those. This will also allow people to bypass server protections that spawn invisible mobs/players around you to confuse people's Killauras.

The "Sleeping players" option is primarily meant to bypass Mineplex's new Survival Games that places sleeping players on the ground so that they look like corpses. Most Killauras make no difference between sleeping players and awake players, so they would get stuck in those corpses and stop attacking the real players.

While we're at it, I also fixed the "Monsters" Target option not selecting Ghasts and Slimes. And while adding the Target frame, I also fixed some GUI related bugs, such as the title of the Movement frame overlapping the minimize button and custom AutoBuild templates with long names making the mod frames bigger.
<!--read more-->

## Proxy Support
Proxies allow you to change your IP address, so that you can join servers that have banned your IP. This is especially useful for cracked servers, as the combination of cracked alts and proxies makes it completely impossible for them to ban you permanently.

Proxy Support was one of the top suggestions in the [Wurst Feedback App](https://feedback.wurstclient.net/). The Wurst-Bot has already had this feature for quite a while, and now the normal Wurst has it too. Please note that you need to use SOCKS proxies, not HTTP proxies.

## Better BowAimbot & Blink
BowAimbot will now aim at moving targets with much better accuracy. It will predict the next position of its target and use that instead of the current position. I found this to be very helpful in PVP situations, as it allows you to accurately aim at running players, which would normally be really hard to do.

Blink will now display the number of milliseconds it has been active. This is useful on NoCheat+ servers, as they only allow you to Blink for 3000 milliseconds. This was implemented by a contributor in [Pull Request #2185](https://github.com/Wurst-Imperium/Wurst-Client/pull/2185). The same contributor also fixed <code>.blink&nbsp;on</code> and <code>.blink&nbsp;cancel</code> causing problems when being activated too quickly.

## What's Next
The Feedback App has been working really well so far. I'm now going to improve it further so that I can scale it up and eventually integrate it into Wurst. Meanwhile, let me know how you like this update: <a target="_blank" href="https://www.surveymonkey.com/r/BNDWZW7">https://www.surveymonkey.com/r/BNDWZW7</a>
