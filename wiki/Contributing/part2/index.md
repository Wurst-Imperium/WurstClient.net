---
title: How to Contribute to the Wurst-Client project - Part 2
layout: wiki
category: Contributing
---
<a href="/wiki/Contributing/part1/" class="btn btn-default">
  <span class="octicon octicon-arrow-left"></span>
  Back to Part 1
</a>

## 3. Decompiling Minecraft

The repository that you just cloned only contains the source code of Wurst itself. You will also need the source code of Minecraft in order to compile it without errors and run it in Eclipse's debug mode.

You get that source code by decompiling **Minecraft 1.8** using **MCP 9.10**. It's important that the versions are correct, as any other versions will be incompatible to Wurst.

If you don't have Minecraft 1.8 yet (and I mean 1.8, having 1.8.8 or something like that will not work), you can get it by making a new profile in the Minecraft launcher, selecting "release 1.8" and running it once.

And if you don't have MCP 9.10 either, you can download it from the [Mod Coder Pack website](http://www.modcoderpack.com/website/content/mcp-910).

Once you have that, unpack the MCP into an empty folder of your choice and **run "decompile.bat"** to decompile Minecraft. This process might take a few minutes...

Now you should have the Minecraft source code in "YourMcpFolder\src\minecraft".
