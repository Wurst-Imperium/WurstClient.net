---
title: YesCheat+
category: Special Feature
bypass-levels:
  -
    - Level
    - Description
  -
    - "Off"
    - Will not block anything.
  -
    - Mineplex AntiCheat
    - Will block all mods that cannot bypass Mineplex AntiCheat (this is what [AntiMAC](/wiki/Mods/AntiMAC/) used to do).
  -
    - AntiCheat
    - Will block all mods that cannot bypass AntiCheat. AntiCheat is a weaker plugin than NoCheat+, so we have some more bypasses for that (including [NoFall](/wiki/Mods/NoFall/).
  -
    - Older NoCheat+
    - Will block all mods that cannot bypass NoCheat+ at all, but won't block mods that have been patched in the latest version of NoCheat+ and can bypass older versions (this is what YesCheat+ used to do).
  -
    - Latest NoCheat+
    - Will block all mods that cannot bypass the latest version of NoCheat+ (and should also work with all plugins that don't have their own bypass level).
  -
    - Ghost Mode
    - Will block all mods that could look suspicious or could be detected by plugins.
media:
  https://cloud.githubusercontent.com/assets/10100202/15673652/5c2c841a-2738-11e6-8944-7f54431b9c14.jpg: |
    The interface of YesCheat+ as of Wurst version 3.3.
history:
  v1.2 Beta: Added YesCheat+
  v2.1: YesCheat+ will now block features that cannot bypass instead of disabling them.
  v3.3: Added Bypass Levels to YesCheat+ and changed its type from mod to special feature.
---
## Contents
{:.no_toc}
1. Contents
{:toc}

## Overview
YesCheat+ is a special feature that makes other features bypass AntiCheat plugins or blocks them if they can't.

## Usage
YesCheat+ can be used to prevent admins and server plugins from detecting your cheats. It can also be used to reduce your chances of getting banned.

## Bypass Levels

{% include wiki/table.md table = page.bypass-levels %}

This is not, by any means, a complete list of all the AntiCheat plugins out there, but most of the other plugins are very similar to the ones listed here. Generally, "Latest NoCheat+" should bypass any non-self-learning AntiCheat plugins (e.g. AAC) and "Ghost Mode" should bypass any self-learning AntiCheat plugins (e.g. Watchdog).

{% include wiki/media.md %}

{% include wiki/history.md %}
