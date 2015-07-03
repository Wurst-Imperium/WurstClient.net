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

# Third Section:

## Definitions:
### Look at the definitons for the second section

## Steps:

1. The next step is fairly descriptive. Here is the tutorial for creating a new project courtesy of Alexander01998 (The Creator of the Wurst-Client):

    >* Create a clone of Wurst. This is the tricky part, so read carefully!

    >* In Eclipse, go to File>Import...>Git/Projects from Git>Clone URI.

    >* Type git@github.com:Wurst-Imperium/Wurst-Client.git into the first text field. The rest will be filled out        automatically.

    >* Click Next > until it asks you for a wizard. Select Use the New Project wizard and click Finish.

     >* A new window will open. Select Java/Java Project and click Next >.

     >* Give your project a name and change the project location to the Wurst Client folder inside of your clone.

    >* Example: If your clone is at C:\Users\Octocat\GitHub\Wurst-Client-clone, your project location is at C:\Users\Octocat\GitHub\Wurst-Client-clone\Wurst Client.

     >* Click Finish.

2. Right-Click on your Project in Eclipse and add a new folder. Call it "lib". Take all of the JARS from your-mcp-folder/jars/libraries and add OFFICAL VANILLA 1.8 jar, the slick.jar from the Slick2D extracted directory/lib from Step 4, The lwjgl.jar, jinput.jar, and lwjgl_utils.jar from the LWJGL directory/jars downloaded from Step 5, and put them in this folder. This will make things way easier in the next step.

3. Right-Click the project and click "Properties." Navigate to "Java Build Path." Click "Add Jars" then navigate to your "lib" folder. Hold "Control" (On your Keyboard) and select all the jars in this folder. Then click "Open". Then click "Done" on this window.


I hope you are still with me, that was a lot. The good news is that things are much easier from here on out.


4. Right click your project and create a new folder. Call this folder "mcp910". Click "Advanced" then select the option "This is a linked folder". Link this to your-mcp-folder/src.

5. Right click your project and select properties. Select Java Build Path. On the top there should be 4 "tabs." Click source folders. Click "Add Source." Then check the folder called "mcp910" then click "Done". In the properties toggle Ignore optional compiler problems to Yes. Then click "Done" in properties.


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
