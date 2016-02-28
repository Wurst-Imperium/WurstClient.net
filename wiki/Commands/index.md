---
title: Command Tutorials
layout: wiki
---
A command in Wurst is similar to a command in vanilla Minecraft, except that it starts with a `.` instead of a `/`. Commands can not only be executed by typing them into the chat, but also by adding a keybind for them.

We don't have a tutorial for every command in Wurst, but we are working on it. Here is a list of the tutorials that we got so far:

{% assign first = true %}
{% capture rawcmds %}{% comment %}
  {% endcomment %}{% for page in site.pages %}{% comment %}
    {% endcomment %}{% if page.layout == "wiki" and page.category == "Command" %}{% comment %}
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
{% endcomment %}{% assign cmds = rawcmds | split: "§separator1§" | sort %}{% comment %}
{% endcomment %}{% for rawcmd in cmds %}{% comment %}
  {% endcomment %}{% assign cmd = rawcmd | split: "§separator2§" %}{% comment %}
    {% endcomment %}- [{{ cmd[0] }}]({{ cmd[1] }})

{% endfor %}
