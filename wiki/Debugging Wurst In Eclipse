This tutorial is how to debug wurst in Eclipse. This tutorial assumes you know how to use a web browser and that you have basic computer skills

Definitions:
Get-Download
Eclipse- A program for developing
MCP- Mod Coder's Pack
Extract- Right-Click and Press the Extract Button
Run- Type the command and then press enter

First Section:

1. Get and Install Eclipse: https://eclipse.org/

2. Get and Extract MCP 9.10: http://www.modcoderpack.com/website/

3. Download the Wurst-Client source code from Github. Click the button that says "download to computer"

4. Download the Slick2D Library: http://slick.ninjacave.com/

5. Download LWJGL 2.9.1: http://sourceforge.net/projects/java-game-lib/files/Official%20Releases/LWJGL%202.9.1/lwjgl-2.9.1.zip/download

6. Extract these as well. We will come back to these soon

7 WINDOWS: In the directory you extracted MCP double click the file named "decompile.bat"

7 MAC/LINUX: Once you have extracted MCP, Open Terminal
   In Terminal Run the following commands:
   1. cd <Drag Folder with MCP files from File Browser here> 
   2. ./decompile.sh

8. Wait until this step has finished DO NOT CLOSE THE WINDOW UNTIL IT SAYS IT HAS FINISHED

Second Section:

Definitions:

your-mcp-folder-the folder that contains all the files extracted from MCP
your-wurst-folder-The folder in which you extracted your Wurst source code from GitHub.

1. Open Eclipse

2. Eclipse will create a dialog called "choose your workspace". Click "Browse" then navigate to your-mcp-folder then click the folder (NOT A DOUBLE CLICK) then click open then click Finish. 

3. Eclipse will bring you to a tutorial page, click the arrow in the top right that says "Go to Workspace."

4. On the Panel on your right you will see 2 items. Right Click the one that says "Client." Hover your cursor over "Team" and then click "Apply Patch." 

5. Here is a patch tutorial courtesy of Nitrogeon-Dioxide:
   https://cloud.githubusercontent.com/assets/11248300/8185475/0e31fda2-141b-11e5-97b4-4425c5b8c90d.png
   https://cloud.githubusercontent.com/assets/11248300/8185477/0ec3f6e4-141b-11e5-91bf-f5e728546b34.png
   For this step choose "File" for Patch and click "Browse." Then navigate to your-wurst-folder/patch. Then click the    file called "minecraft.patch" then click "Open"
   https://cloud.githubusercontent.com/assets/11248300/8185478/0fc80bf2-141b-11e5-8303-979211d229d6.png
   https://cloud.githubusercontent.com/assets/11248300/8185480/113333d6-141b-11e5-91a5-92a1ffacf41c.png

Third Section:

Definitions:
Look at the definitons for the second section

1. The next step is fairly descriptive. Here is the tutorial for creating a new project courtesy of Alexander01998 (The Creator of the Wurst-Client):
  
  Create a clone of Wurst. This is the tricky part, so read carefully!
  
  In Eclipse, go to File>Import...>Git/Projects from Git>Clone URI.
  
  Type git@github.com:Wurst-Imperium/Wurst-Client.git into the first text field. The rest will be filled out        automatically.
  
  Click Next > until it asks you for a wizard. Select Use the New Project wizard and click Finish.
  
  A new window will open. Select Java/Java Project and click Next >.
  
  Give your project a name and change the project location to the Wurst Client folder inside of your clone.
  
  Example: If your clone is at C:\Users\Octocat\GitHub\Wurst-Client-clone, your project location is at C:\Users\Octocat\GitHub\Wurst-Client-clone\Wurst Client.
  
  Click Finish.

2. Right-Click on your Project in Eclipse and add a new folder. Call it "lib". Take all of the JARS from your-mcp-folder/jars/libraries and add OFFICAL VANILLA 1.8 jar, the slick.jar from the Slick2D extracted directory from Step 4, The lwjgl.jar, jinput.jar, and lwjgl_utils.jar from the LWJGL directory/jars downloaded from Step 5, and put them in this folder. This will make things way easier in the next step.

3. Right-Click the project and click "Properties." Navigate to "Java Build Path." Click "Add Jars" then navigate to your "lib" folder. Hold "Control" (On your Keyboard) and select all the jars in this folder. Then click "Open". Then click "Done" on this window.


I hope you are still with me, that was a lot. The good news is that things are much easier from here on out.


4. Right click your project and create a new folder. Call this folder "mcp910". Click "Advanced" then select the option "This is a linked folder". Link this to your-mcp-folder/src.

5. Right click your project and select properties. Select Java Build Path. On the top there should be 4 "tabs." Click source folders. Click "Add Source." Then check the folder called "mcp910" then click "Done". In the properties toggle Ignore optional compiler problems to Yes. Then click "Done" in properties.


Fourth Section:

Definitions:
See above section's definitions

Time to create a launch config! This part is pretty easy.

1. On the top of Eclipse's "toolbar" you will see a green button with a "Play" sign on it. Click the little arrow right below it and select "Run Configurations".

2. Click the white button that is to create a new launch configuration. Call it "Wurst". Then in the "Main types" field type "net.minecraft.client.main.Main".

3. Add the launch configuration and you are now done with launch configurations! To launch Wurst click the little arrow and click "Wurst"

4. If Wurst launches you have done everything correctly! Feel free to add mods and help develop the client. The next section will cover recompiling to use the client in the Minecraft launcher
   
Fifth Section

Definitions:
See above

This section is about Wurst recompilation and reobsufacating for use of a custom Wurst version in the Minecraft launcher. The reason we do not use MCP to recompile is because MCP's recompile function is broken and this way works just as well.

1. Right-Click your project in Eclipse and Click "Export". Then choose "Runnable Jar" under the Java category. In the location where you want save your jar, navigate to .minecraft/versions then make a new folder and for this example we will call it Wurst v2. Call your jar Wurst v2.jar and save it to this folder.

2. Copy your Wurst.json to the Wurst v2 folder. Rename the Wurst.json to Wurst v2.json and open it in Notepad (Windows), xCode (Mac), gedit (Ubuntu/Linux). 
WARNING FOR MAC: DO NOT OPEN THIS FILE IN TEXTEDIT it messes up the formatting and you won't be able to launch Wurst In the id field change "Wurst" to "Wurst v2" then save the file.

3. Restart your launcher. Edit profile and choose the version "Wurst v2"

Click Play and your good to go! You have successfully added on to the Wurst-Client and have read through this tutorial! Give yourself a pat on the back!
 

