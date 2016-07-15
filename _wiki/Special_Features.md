---
title: Special Features
permalink: /wiki/Special_Features/
---
## Definition
A special feature in Wurst is a feature that is neither a mod nor command. There is no standard way to activate or deactivate a special feature.

## List of Special Features
{% assign spfs = site.wiki | where: "category", "Special Feature"%}
{% for spf in spfs %}
- [{{ spf.title }}]({{ spf.url }})
{% endfor %}
