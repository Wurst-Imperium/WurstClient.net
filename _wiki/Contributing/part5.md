---
title: How to Contribute to the Wurst-Client project - Part 5
layout: wiki
category: Contributing
---
<a href="/wiki/Contributing/part4/" class="btn btn-default">
  <span class="octicon octicon-arrow-left"></span>
  Back to Part 4
</a>

## 8. Making a Pull Request
First off, make sure that your contributions are properly structured. Always make a **separate branch** for every new feature you add and every bug you fix.

An exception to this rule can be made if you have two features that are so strongly related to each other that they have to be added together (e.g. a .turnleft command and a .turnright command).

Also make sure that your Fork is **up to date** with the original Wurst-Client repository to avoid merge conflicts. See GitHub's ["Syncing a fork" tutorial](https://help.github.com/articles/syncing-a-fork/) for how to update your Fork.

Once you have that, go the [Wurst-Client repository](https://github.com/Wurst-Imperium/Wurst-Client) and click the **New Pull Request** button. Then select Wurst-Imperium/Wurst-Client master as the base branch and the branch with your contribution as the head branch as shown in the screenshot below:

![GitHub Pull Request: Comparing changes](https://cloud.githubusercontent.com/assets/10100202/13134636/f0a065b6-d608-11e5-859e-b8db69e0f4f7.jpg)

Then give your Pull Request a title, a description and maybe add a screenshot. Make sure it's clear what your feature or bugfix does and avoid generic titles like "New feature" or "Bugfix".

If your contribution includes changes to the Minecraft code (anything inside the **net.minecraft** package), add those changes to the description of the Pull Request. Most contributors so far have had massive prolems trying to update the "minecraft.patch" file themselves, so it's better if you let us do that.

If you have multiple contributions in multiple branches, you will need to make multiple Pull Requests as well. The reason why it's so important to **keep your contributions separated** is because one Pull Request can only be merged, labelled and closed once.

For instance, let's say you add 2 new features and one of them has a bug. With two Pull Requests, we can merge the working feature right away, label the other one as bugged and then merge it later once the bug is fixed.

With both features in one Pull Request, we could neither merge the working feature nor label the bugged one. We could only merge both of them at the same time (despite one of them being bugged), label both of them as bugged (despite one of them working fine) or simply close and ignore the Pull Request.
