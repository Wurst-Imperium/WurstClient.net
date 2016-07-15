---
title: Commands
permalink: /wiki/Commands/
---
## Definition
A command in Wurst is similar to a command in vanilla Minecraft, except that it starts with a `.` instead of a `/`. Commands can not only be executed by typing them into the chat, but also by adding a keybind for them.

## List of Commands
{% assign cmds = site.wiki | where: "category", "Command" %}
{% for cmd in cmds %}
- [{{ cmd.title }}]({{ cmd.url }})
{% endfor %}
