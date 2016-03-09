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

## 4. Importing Wurst to Eclipse
Now that you have all the source code that you need, it's time to import it into Eclipse so that you can edit it. First right-click on the Package Explorer and **select "Import"**.

![Eclipse Import: Package Explorer > Import](https://cloud.githubusercontent.com/assets/11584045/13554870/afc99e7a-e3bb-11e5-813f-e0da2551eac5.jpg)

A dialog will appear. Select **Git > Projects from Git** and click "Next".

![Eclipse Import: Git > Projects from Git](https://cloud.githubusercontent.com/assets/11584045/13554876/e0dea64a-e3bb-11e5-87df-22ea38df9852.jpg)

On the next screen, select **Existing local repository** and click "Next".

![Eclipse Import: Existing local repository](https://cloud.githubusercontent.com/assets/11584045/13554883/ff5c789a-e3bb-11e5-8873-82c6552a6dc9.jpg)

Now select your **Wurst-Client** repository (which will probably be your only option) and click "Next".

![Eclipse Import: Select a Git Repository](https://cloud.githubusercontent.com/assets/11584045/13554889/1d4444dc-e3bc-11e5-8b5d-6ee1c990c35a.jpg)

On the next screen, select **Use the New Project wizard** if it isn't selected already and then click "Finish".

![Eclipse Import: Select a wizard](https://cloud.githubusercontent.com/assets/10100202/12970657/df621a3c-d091-11e5-9e0c-5789ebbd35b5.jpg)

A second dialog will appear. Select **Java > Java Project** and click "Next".

![Select Java Project](https://cloud.githubusercontent.com/assets/11584045/13554916/924365e2-e3bc-11e5-8828-9d0270b67fbf.jpg)

And lastly, you will see one more screen that is a little more complicated than the previous ones. First, **uncheck "Use default location"**.

This will enable the "Location" field and the "Browse" button next to it. Using that "Browse" button, **select the location of your clone**.

Then **add "\Wurst Client"** at the end of the "Location" field so that the path ends with "Wurst-Client\Wurst Client" (first with a minus, then with a space). You can also see that in the screenshot below, except that my clone is called "Wurst-Client-Clone".

Once you got that, **click "Finish"** (not "Next") and you're done with this step.

![Eclipse Import: Create a Java Project](https://cloud.githubusercontent.com/assets/11584045/13554957/92d365e2-e3bd-11e5-87b2-6bcf014a3b40.jpg)

<a href="/wiki/Contributing/part3/" class="btn btn-default">
  <span class="octicon octicon-arrow-right"></span>
  Continue with Part 3
</a>
