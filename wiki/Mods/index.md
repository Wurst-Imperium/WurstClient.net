---
title: Mod Tutorials
layout: wiki
---
A mod in Wurst is a feature that can be toggled using the `.t` command. It is also possible (and usually preferred) to toggle a mod through the Navigator or a keybind instead.

We don't have a tutorial for every mod in Wurst, but we are working on it. Here is a list of the tutorials that we got so far:

{% assign first = true %}
{% capture rawmods %}{% comment %}
  {% endcomment %}{% for page in site.pages %}{% comment %}
    {% endcomment %}{% if page.layout == "wiki" and page.category == "Mod" %}{% comment %}
      {% endcomment %}{% unless first %}{% comment %}
        {% endcomment %}§separator1§{% comment %}
      {% endcomment %}{% else %}{% comment %}
        {% endcomment %}{% assign first = false %}{% comment %}
      {% endcomment %}{% endunless %}{% comment %}
      {% endcomment %}{{ page.title }}{% comment %}
      {% endcomment %}§separator2§{% comment %}
      {% endcomment %}{{ page.url | remove: "index.html" }}{% comment %}
    {% endcomment %}{% endif %}{% comment %}
  {% endcomment %}{% endfor %}{% comment %}
{% endcomment %}{% endcapture %}{% comment %}
{% endcomment %}{% assign mods = rawmods | split: "§separator1§" | sort %}{% comment %}
{% endcomment %}{% for rawmod in mods %}{% comment %}
  {% endcomment %}{% assign mod = rawmod | split: "§separator2§" %}{% comment %}
    {% endcomment %}- [{{ mod[0] }}]({{ mod[1] }})

{% endfor %}
