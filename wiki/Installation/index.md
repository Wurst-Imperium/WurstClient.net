---
title: How to Install the Wurst Client for Minecraft
layout: wiki
category: Installation
---
## Video Tutorial
{% include video.html id = "GH6xD_BGsLw" %}

## Text Tutorial
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
