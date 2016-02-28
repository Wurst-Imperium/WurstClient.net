---
title: How to Use Regen (Heal Instantly - God Mode)
description: Regen is a mod that allows you to regenerate your health 1000 times faster than normal.
layout: wiki
category: Mod
---
## Overview
Regen is a mod that allows you to regenerate your health 1000 times faster than normal.

## Video Tutorial
{% include video.html id = "vjJZ5gQSFms" %}

## Text Tutorial
In order for Regen to work, your hunger bar must be at least 90% full, meaning that at most 1 of the 10 food icons in the hunger bar may be grayed out. Once your hunger bar goes down to 85%, meaning that one and a half food icons are grayed out, your health cannot be regenerated any further.

This limit is a vanilla mechanic of Minecraft and cannot be removed by modifying the client. Regen only changes the speed of your health regeneration, but not the way health regeneration works.

It is possible (though not very likely) to get kicked from the server with the message "Flying is not enabled on this server!" when using Regen. That is because the timer that is used to regenerate your health is the same timer that is used to check if a player is flying.

You would normally get kicked for flying after staying in the air for at least 4 seconds. Regen makes that timer run 1000 times faster, so you would get kicked after 4 milliseconds.

Wurst will try to prevent that from happening by only increasing the regeneration speed while you are on the ground, but it can rarely happen that the server thinks you are in the air while the client thinks you are on the ground, causing you to get kicked for flying.
