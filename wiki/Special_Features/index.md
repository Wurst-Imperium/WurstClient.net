---
title: Special Features
layout: wiki
---
## Definition
A special feature in Wurst is a feature that is neither a mod nor command. There is no standard way to activate or deactivate a special feature.

## List of Special Features
{% assign spfs = site.pages | where: "layout", "wiki" | where: "category", "Special Feature" | sort: "title" %}
{% for spf in spfs %}
- [{{ spf.title }}]({{ spf.url | remove: "index.html" }})
{% endfor %}
