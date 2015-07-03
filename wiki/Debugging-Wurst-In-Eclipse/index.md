---
title: Debugging Wurst in Eclipse
layout: wiki
---
> **Notice:** This tutorial assumes that you are familiar with [Eclipse](http://www.eclipse.org/), [Git](https://windows.github.com/) and the [MCP](http://mcp.ocean-labs.de/). If you are not familiar with these applications, you will not be able to understand this tutorial.

1. Clone the `Wurst-Imperium/Wurst-Client` repository.

2. Download the [Slick2D library](http://slick.ninjacave.com/).

3. Set up the MCP and decompile Minecraft 1.8.

4. Create a *local* repository for your decompiled Minecraft source code.  
:warning: **Do not publish this repository!** Making the Minecraft source code publicly available is illegal.

5. Go to your Wurst-Client clone and open the `patch` folder, there is a file called `minecraft.patch`. Apply that patch to your Minecraft repository.  
:information_source: The correct Git command for applying a patch is: `git apply --ignore-space-change --ignore-whitespace yourpatchfile.patch`

6. Import both repositories into Eclipse (`File>Import...>Git/Projects from Git`).

7. Add all of Minecraft's libraries to both projects, just like you would when setting up an MCP project.

8. Add the Slick2D library as well.

9. In the Wurst Client project, add a linked source folder that points to the source code of the Minecraft project.  
In the Minecraft project, add a linked source folder that points to the source code of the Wurst Client project.

10. Make sure that both projects use Java 8. Some Eclipse versions do this automatically, others don't.

# Fourth Section:

## Definitions:
### See above section's definitions

## Steps:

Time to create a launch config! This part is pretty easy.

1. On the top of Eclipse's "toolbar" you will see a green button with a "Play" sign on it. Click the little arrow right below it and select "Run Configurations".

2. Click the white button that is to create a new launch configuration. Call it "Wurst". Then in the "Main types" field type "net.minecraft.client.main.Main".

3. Add the launch configuration and you are now done with launch configurations! To launch Wurst click the little arrow and click "Wurst"

4. If Wurst launches you have done everything correctly! Feel free to add mods and help develop the client. The next section will cover recompiling to use the client in the Minecraft launcher

>**Notice:** Contributing changes in the vanilla MC source code requires some extra steps. Read [#412](https://github.com/Wurst-Imperium/Wurst-Client/issues/412) for more information.  

# Fifth Section

## Definitions:
### See above

## Steps:

This section is about Wurst recompilation and reobsufacating for use of a custom Wurst version in the Minecraft launcher. The reason we do not use MCP to recompile is because MCP's recompile function is broken and this way works just as well.

1. Right-Click your project in Eclipse and Click "Export". Then choose "Runnable Jar" under the Java category. In the location where you want save your jar, navigate to .minecraft/versions then make a new folder and for this example we will call it Wurst v2. Call your jar Wurst v2.jar and save it to this folder.

2. Copy your Wurst.json to the Wurst v2 folder. Rename the Wurst.json to Wurst v2.json and open it in Notepad (Windows), xCode (Mac), gedit (Ubuntu/Linux).
WARNING FOR MAC: DO NOT OPEN THIS FILE IN TEXTEDIT it messes up the formatting and you won't be able to launch Wurst. In the id field change "Wurst" to "Wurst v2" then save the file.

3. Restart your launcher. Edit profile and choose the version "Wurst v2"

Click Play and your good to go! You have successfully added on to the Wurst-Client and have read through this tutorial! Give yourself a pat on the back!
