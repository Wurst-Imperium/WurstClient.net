---
title: How to Install the Wurst Client for Minecraft
layout: wiki
category: Installation
---
## Video Tutorial (Windows)
{% include video.html id = "GH6xD_BGsLw" %}

(Scroll down for Mac tutorial)
## Text Tutorial (Windows)
First off, if you haven't already, [download Wurst](/download/) and save it somewhere on your computer.

Then open the Windows Explorer and type `%appdata%` into the address bar, as shown below:

![%appdata%](https://cloud.githubusercontent.com/assets/10100202/13546898/69717bf0-e2bc-11e5-82a2-735a988fe721.png)

This will redirect you to a folder named "Roaming". Inside of that folder, go to ".minecraft" and then "versions".

![Minecraft versions folder](https://cloud.githubusercontent.com/assets/10100202/13546897/69717b1e-e2bc-11e5-983b-af44c46c6191.png)

Now put your downloaded ZIP file into this folder and open it using the Windows Explorer.

![open ZIP file with Windows Explorer](https://cloud.githubusercontent.com/assets/10100202/13546899/697544f6-e2bc-11e5-80b5-60ca27023e18.png)

Press the "Extract All" button at the top and press "Extract" again in the dialog that appears.

![exctract ZIP file with Windows Explorer](https://cloud.githubusercontent.com/assets/10100202/13546900/697a9a50-e2bc-11e5-82ba-99cb2255b697.png)

The versions folder should now contain another folder with the same name as the ZIP file. You don't need the ZIP file anymore, just delete it.

![delete ZIP file](https://cloud.githubusercontent.com/assets/10100202/13546901/69803758-e2bc-11e5-90f5-1499a5e65eab.png)

Inside of that folder, there will be another folder that is simply named "Wurst". Drag that out of the other folder directly into "versions".

![move Wurst folder into versions](https://cloud.githubusercontent.com/assets/10100202/13546902/69844ab4-e2bc-11e5-9058-e20b85831718.png)

Now that you have the "Wurst" folder, you won't need the other folder anymore. You can delete that as well.

![delete extracted folder](https://cloud.githubusercontent.com/assets/10100202/13546903/698a86b8-e2bc-11e5-9c00-dc8f8d0d0b8b.png)

That is it in terms of the files and folders. The only thing that's left is adding a Wurst profile in the Minecraft launcher.

Start the Minecraft launcher (or restart it if it's already open) and click the "New Profile" button.

![Minecraft launcher > New Profile](https://cloud.githubusercontent.com/assets/10100202/13546904/698f4496-e2bc-11e5-909c-9c65e916caec.png)

That will bring you to the Profile Editor, where you can change a whole bunch of settings. Let's start with the most important one: Set "Use version" to "release Wurst", which is right between "release 1.8" and "release 1.8.1".

All of the other settings are optional, but some of them are quite useful:

- Set "Profile Name" to `Wurst Client` so that you know that this profie is Wurst.

- Append `\instances\Wurst` to the "Game Directory" field so that this profile can't change the settings of your other profiles.

- Set "Launcher Visibility" to "Hide launcher and re-open when game closes". That will bring you back to the launcher when you close Minecraft.

- In "JVM Arguments", replace `-Xmx1G` with `-Xmx4G` so that Minecraft gets more RAM and runs faster.

Lastly, don't forget to save the new profile.

![Minecraft launcher > Profile Editor](https://cloud.githubusercontent.com/assets/10100202/13546905/69933e7a-e2bc-11e5-8002-e063c9866063.png)

The installation is now complete and you can start Wurst using the "Play" button.

![Minecraft launcher > Play](https://cloud.githubusercontent.com/assets/10100202/13546906/6998cf7a-e2bc-11e5-95f0-9e777c97c53b.png)

## Text Tutorial (Mac)
If you haven't already, [download](/download) and save it somewhere on your computer.

Then right click Finder and choose New Finder Window.

![Finder > New Finder Window](https://cloud.githubusercontent.com/assets/11584045/13547848/20433dc8-e2ea-11e5-879b-91582aa24f81.png)

After that, click Go > Go to folder...

![Go > Go to folder...](https://cloud.githubusercontent.com/assets/11584045/13547918/c7962daa-e2eb-11e5-9f29-e30e320b6da5.png)

Paste the following:

```
~/Library/Application Support/minecraft/versions
```

Leave the window open, and tell the software that you downloaded Wurst to show you the file.

![Show downloaded file in Safari](https://cloud.githubusercontent.com/assets/11584045/13547994/8cc1f536-e2ed-11e5-8e6a-adbd67635088.png)

You'll have to drag and drop the Wurst Client files to version folder.

![Drag & Drop the Wurst files](https://cloud.githubusercontent.com/assets/11584045/13548050/ffa50f10-e2ee-11e5-88af-95ee099c0092.png)

Close the Downloads folder. If the file, which you draged, is a ZIP file, then double click it to unzip and delete the ZIP file. If it isn't go to the next step.

Open the Wurst Client folder, there should be another folder called Wurst.
Right click and copy it.

![Copy the Wurst folder](https://cloud.githubusercontent.com/assets/11584045/13548157/341b236c-e2f2-11e5-802b-fb5e74eaaf77.png)

And go back to enclosing folder.

![Go > Enclosing Folder](https://cloud.githubusercontent.com/assets/11584045/13548208/8dba4c1c-e2f3-11e5-8be9-51662d3bec1f.png)

Right click somewhere in that window. Let's paste it.

![Paste it](https://cloud.githubusercontent.com/assets/11584045/13548224/0d232348-e2f4-11e5-869a-6a66a340c4f5.png)

We don't need the old Wurst-Client folder anymore.

![Delete the folder](https://cloud.githubusercontent.com/assets/11584045/13548257/85ab876a-e2f4-11e5-9b29-b53da9047e75.png)

Installation is done! There's only one more step. Now open the Minecraft Launcher and click New Profile.
The most important setting is the Use Version setting. Set it to Wurst next to Minecraft 1.8.

There are also optional settings that may help you:

- Set “Profile Name” to `Wurst Client` so that you know that this profie is Wurst.

- Append `\instances\Wurst` to the “Game Directory” field so that this profile can’t change the settings of your other profiles.

- Set “Launcher Visibility” to “Hide launcher and re-open when game closes”. That will bring you back to the launcher when you close Minecraft.

- In “JVM Arguments”, replace `-Xmx1G` with `-Xmx4G` so that Minecraft gets more RAM and runs faster.
 
Lastly: Do not forget to click save game!

Installation complete. Select Wurst Client in Profile box and click play. *Time to rule the game!*

![New Profile](https://cloud.githubusercontent.com/assets/11584045/13548369/5c3f6eac-e2f7-11e5-887a-115700a0343b.png)
