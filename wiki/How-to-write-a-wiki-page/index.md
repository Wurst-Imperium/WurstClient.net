---
title: How to write a wiki page
layout: wiki
category: Tutorial
---
This page is intended to show you how to properly write a page on this wiki so that it can be added without any problems.

## File & Path
All wiki pages are inside of a subdirectory of the `wiki` directory. The name of this subdirectory is always the name of the wiki page, with all spaces (` `) replaced by dashes (`-`). The file inside of this directory containing the wiki page must always be named `index.md`!

For instance, this page is located at `\wiki\How-to-write-a-wiki-page\index.md`.

## Markup
All wiki pages must have proper Markdown format as described in [Mastering Markdown](https://guides.github.com/features/mastering-markdown/). GitHub flavored Markdown is not supported. All wiki pages must have Jekyll front matter as described in [the Jekyll docs](http://jekyllrb.com/docs/frontmatter/). The front matter must contain the title of the page, followed by the layout "wiki", followed by the category, and may contain additional data.

For instance, have a look at the front matter of this page:

{% highlight yaml %}
---
title: How to write a wiki page
layout: wiki
category: Tutorial
---
{% endhighlight %}

You should always preview your page in [Jekyll for Windows](https://github.com/juthilo/run-jekyll-on-windows) or at least in [Atom](https://github.com/atom/atom) before submitting it to make sure that it is properly formatted.

## Images
To ensure speed and reliability while keeping the repository size minimal, all images must be uploaded on the GitHub cloud. Do not store images on a third party image platform and do not store images in this repository! All images should have an alt text to make sure that search engines and disabled people can understand them.

To upload an image to the GitHub cloud, click the <kbd>New Issue</kbd> button on any repository, drag your image(s) into the Issue and wait until they are done uploading. Then copy & paste the URL(s) of the image(s). Do not publish this Issue! Otherwise it will be very annoying for the owner(s) of the repository.

## Headlines
Some common headlines for wiki pages are:

1. **Overview** - A general description or definition of the thing.

2. **Usage** - Describes how the thing may be used.

3. **Media** - Related images, videos, etc.

4. **Tips** - Well, tips.

5. **Known Issues** - Known problems, common errors, etc.

6. **History** - When the thing was added or changed in a Wurst update (eg: "Wurst v1.15: Flight is now able to bypass NoCheat+ if YesCheat+ is enabled.").

7. **See Also** - A list of related things. This was originally planned to be an auto-generated list using front matter, but unforunately, that didn't work.

Not all wiki pages use these headlines, but if you do use them, make sure that you use them in the order shown above. A table of content must only be added if the page is really long.
