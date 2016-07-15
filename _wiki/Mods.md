---
title: Mods
---
## Definition
A mod in Wurst is a feature that can be toggled using the `.t` command. It is also possible (and usually preferred) to toggle a mod through the Navigator or a keybind instead.

## List of Mods
{% assign mods = site.wiki | where: "category", "Mod" %}
{% for mod in mods %}
- [{{ mod.title }}]({{ mod.url }})
{% endfor %}
