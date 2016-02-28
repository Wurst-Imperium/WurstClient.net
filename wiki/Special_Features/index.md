---
title: Special Feature Tutorials
layout: wiki
---
A special feature in Wurst is a feature that is neither a mod nor command. There is no standard way to activate or deactivate a special feature.

We don't have a tutorial for every special feature in Wurst, but we are working on it. Here is a list of the tutorials that we got so far:

{% assign first = true %}
{% capture rawspfs %}{% comment %}
  {% endcomment %}{% for page in site.pages %}{% comment %}
    {% endcomment %}{% if page.layout == "wiki" and page.category == "Special Feature" %}{% comment %}
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
{% endcomment %}{% assign spfs = rawspfs | split: "§separator1§" | sort %}{% comment %}
{% endcomment %}{% for rawspf in spfs %}{% comment %}
  {% endcomment %}{% assign spf = rawspf | split: "§separator2§" %}{% comment %}
    {% endcomment %}- [{{ spf[0] }}]({{ spf[1] }})

{% endfor %}
