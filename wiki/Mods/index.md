---
title: Mods
layout: wiki
---
## Definition
A mod in Wurst is a feature that can be toggled using the `.t` command. It is also possible (and usually preferred) to toggle a mod through the Navigator or a keybind instead.

## List of Mods
{% assign mods = site.pages | where: "layout", "wiki" | where: "category", "Mod" | sort: "title" %}
{% for mod in mods %}
- [{{ mod.title }}]({{ mod.url | remove: "index.html" }})
{% endfor %}
