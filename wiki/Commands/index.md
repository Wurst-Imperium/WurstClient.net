---
title: Commands
layout: wiki
---
## Definition
A command in Wurst is similar to a command in vanilla Minecraft, except that it starts with a `.` instead of a `/`.

Commands can not only be toggled by typing them into the chat, but also by keybinding them.

## List of All Commands
{% assign first = true %}
{% capture rawcmds %}{% comment %}
  {% endcomment %}{% for page in site.pages %}{% comment %}
    {% endcomment %}{% if page.layout == "wiki" and page.tags contains "cmd" %}{% comment %}
      {% endcomment %}{% unless first %}{% comment %}
        {% endcomment %}§separator1§{% comment %}
      {% endcomment %}{% else %}{% comment %}
        {% endcomment %}{% assign first = false %}{% comment %}
      {% endcomment %}{% endunless %}{% comment %}
      {% endcomment %}{{ page.title | remove: " Command" }}{% comment %}
      {% endcomment %}§separator2§{% comment %}
      {% endcomment %}{{ page.url | remove: "index.html" }}{% comment %}
    {% endcomment %}{% endif %}{% comment %}
  {% endcomment %}{% endfor %}{% comment %}
{% endcomment %}{% endcapture %}{% comment %}
{% endcomment %}{% assign cmds = rawcmds | split: "§separator1§" | sort %}{% comment %}
{% endcomment %}{% for rawcmd in cmds %}{% comment %}
  {% endcomment %}{% assign cmd = rawcmd | split: "§separator2§" %}{% comment %}
    {% endcomment %}- [{{ cmd[0] }}]({{ cmd[1] }})
{% endfor %}
