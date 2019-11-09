---
title: How To Install Wurst 7 with OptiFine
google_auto_ads: true
cleanmedia_ads: true
---
## Setp 1: Install Fabric

### 1.1. Download the <a href="https://fabricmc.net/use/" target="_blank" rel="nofollow">Fabric installer</a>.

<a href="https://fabricmc.net/use/" target="_blank" rel="nofollow">![Fabric installer download instructions](https://user-images.githubusercontent.com/10100202/62377125-7b24f780-b542-11e9-815b-df6340ede28c.png)</a>

Change the **"installation for"** box to **"Vanilla"**.

Make sure that **"Installer version"** is set to the **latest** version.

Click one of the **download** buttons. It doesn't matter whether you choose ".EXE" or ".JAR".

### 1.2. Run the Fabric installer.

![Fabric installer usage instructions](https://user-images.githubusercontent.com/10100202/62378409-0dc69600-b545-11e9-8431-af64d13bc308.png)

Set the **Minecraft Version** to whatever version you want to use. Just make sure that OptiFine is available for your version.

You can leave "Show snapshots" unchecked, as OptiFine isn't available for snapshots anyway.

Make sure **"Loader Version"** is set to the **latest** one.  
**NOTE: This is an old picture. Do NOT use loader version 0.4.8. It is outdated and won't work!**

Leave **"Select Install Location"** at the **default** value. Changing this can sometimes cause problems.

I recommend leaving "Create profile" checked. That way you don't have to make your own profile.

Don't forget to **press "Install"**. :)

### 1.3. Download the <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api" target="_blank" rel="nofollow">Fabric API</a>.

<a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api" target="_blank" rel="nofollow">![Fabric API download instructions](https://user-images.githubusercontent.com/10100202/68168208-b9321d00-ff70-11e9-867e-2b2f20dc9969.png)</a>

Check the **"Recent Files"** tab at the bottom right, then download the **latest version** that **matches your Minecraft version**.

### 1.4. Place the Fabric API in your `%appdata%/.minecraft/mods` folder.

![.minecraft/mods folder with Fabric API](https://user-images.githubusercontent.com/10100202/68168623-12e71700-ff72-11e9-9206-b82a254dbffc.png)

To get to your `.minecraft` folder, open Windows Explorer and type/copy the following into the address bar: `%appdata%/.minecraft`

(If you are using Linux or Mac then the path to your `.minecraft` folder will be different. Please Google that part.)

Create a `mods` folder if it doesn't exist already, then place the Fabric API file inside.

## Step 2: Install Wurst

### 2.1. Download the <a href="/download" target="_blank">Wurst Client</a>.

Again, use the **latest version** and make sure that it **matches your Minecraft version**.

### 2.2. Add Wurst to your `mods` folder.

![.minecraft/mods folder with Fabric and Wurst](https://user-images.githubusercontent.com/10100202/62378000-1ec2d780-b544-11e9-97e2-cf9827900993.png)

See above (1.4.) for how to get to this folder.

## Step 3: Install OptiFine

### 3.1. Download <a href="https://optifine.net/downloads" target="_blank" rel="nofollow">OptiFine</a>.

Again, ~~use the latest version and~~ make sure that it **matches your Minecraft version**.

There is currently a problem with OptiFine version "HD U F4" that prevents X-Ray from working. Please use **version "HD U F3"** instead.

### 3.2. Download <a href="https://www.curseforge.com/minecraft/mc-mods/optifabric" target="_blank" rel="nofollow">OptiFabric</a>.

Yes, I know, it claims to be for Minecraft 1.14.3. Trust me, it's fine. It will work for 1.14.4 too.

### 3.3. Add OptiFine and OptiFabric to your `mods` folder.

See above (1.4.) for how to get to this folder.

## Step 4: Launch The Game!

If you followed the instructions in 1.2., you will already have a "fabric" profile in your Minecraft launcher.

If not, go to **Installations** > **New...** and copy these settings:

![Minecraft launcher Wurst profile](https://user-images.githubusercontent.com/10100202/68169736-ed5c0c80-ff75-11e9-93d4-7890380b8d57.png)

You can name it anything you want, but the TNT icon is required!!! Just kidding, you can set that to anything you want too.

Your **version** will look slightly different than mine, but make sure that it starts with **"release fabric-"** and ends with **your Minecraft version**.

Changing the Game Directory can sometimes cause problems. I recommend leaving it at the default unless you know what you're doing.

Don't forget to **press "Create"**.

Then just select your Wurst/Fabric profile and press "Play".
