---
title: AutoLeave
layout: wiki
category: Mod
bypasses:
  -
    - Mode
    - NoCheat+ Bypass
    - CombatLog Bypass
  -
    - Quit
    - "yes"
    - "no"
  -
    - Chars
    - "yes"
    - some versions
  -
    - TP
    - "no"
    - "yes"
  -
    - SelfHurt
    - "yes"
    - "yes"
history:
  v1.12: Added AutoLeave.
  v2.19: Added TP mode and SelfHurt mode.
---
## Contents
{:.no_toc}
1. Contents
{:toc}

## Overview
AutoLeave is a mod that automatically makes you leave the server whenever your health is low. It does that by executing the .leave command and it has serveral modes that all leave differently.

## Usage
AutoLeave can be used to get an unfair advantage in combat situations. It makes you virtually immortal, as you would just leave the server instead of dying.

## Modes
**Quit mode** is basically the same as pressing the "Disconnect" button in the escape menu.

**Chars mode** sends a chat message containing the `§` character. This causes the server to kick you with the message "Illegal characters in chat".

The reason why this mode exists is because some servers have a plugin called CombatLog that is supposed to prevent people from disconnecting in the middle of a fight. Whenever this plugin detects that you leave the server in a combat situation, it either kills you or clears your inventory once you come back.

The trick is that this plugin only kills players if they manually leave the server, but not if they get kicked. Nowadays, some servers have better plugins that know about the `§` character, but they still won’t kill you if you get kicked for any other reason.

**TP mode** will teleport you to a position that doesn’t exist and thereby cause the server to kick you, but this doesn’t bypass NoCheat+.

**SelfHurt mode** will make you try to attack yourself, which is not possible as we all know. This method will cause ANY server to kick you, even with NoCheat+.

## Bypass
How well AutoLeave bypasses server plugins entirely depends on the mode that it is in. The table below shows a comparison of the bypasses when using different modes.

{% include wiki/table.md table = page.bypasses %}

## Tips
- If you want to look non-suspicious, your best option is Quit mode.

- If you want to bypass plugins, your best option is SelfHurt mode.

{% include wiki/history.md %}

<!--
## Related
- .leave
-->
