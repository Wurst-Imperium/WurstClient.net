---
title: How To Install Wurst 7
description: and how to add OptiFine to it
layout: default
google_auto_ads: true
cleanmedia_ads: true
---
{% include title.html l1 = page.title l2 = page.description %}

<div class="padding20 no-padding-left no-padding-right bg-grayLighter">
	<div class="container">
		<h2 class="text-normal">Step 1: Install Fabric</h2>
        <ol class="step-list">
            <li>
                <p>
                    <a href="https://fabricmc.net/use/" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_download.webp" alt="Fabric installer download instructions">
                    </a>
                </p>
                <p>
                Download the <a href="https://fabricmc.net/use/" target="_blank" rel="nofollow">Fabric installer</a>.
                <ul>
                    <li>It is recommended to use the Universal/.JAR version.</li>
                </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_fabric_run_with_java.webp" alt="how to run the Fabric installer with Java">
                </p>
                <p>
                Right-click the Fabric installer, select "Open with" and then choose Java.
                <ul>
                    <li>Depending on your system, you will see either "Java(TM)&nbsp;Platform&nbsp;SE&nbsp;binary", "OpenJDK&nbsp;Platform&nbsp;binary", or both.</li>
                    <li>It doesn't matter which Java binary you use, just don't use WinRAR. WinRAR is not Java.</li>
                    <li>If you don't see Java in the list, select "Choose another app".</li>
                    <li>If you can't find Java at all, <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">install Java</a> first.</li>
                </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_use_fabric_installer.webp" alt="Fabric installer usage instructions">
                </p>
                <p>
                    In the Fabric installer, select the Minecraft version you want to use and press "Install".
                    <ul>
                        <li>If you want to use snapshots, make sure that "Show snapshots" is checked first.</li>
                        <li>Leave "Select Install Location" at the default value. Changing this can sometimes cause problems.</li>
                        <li>Leave "Create profile" checked. That way you don't have to make your own profile.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_api_version.webp" alt="Fabric API download instructions">
                    </a>
                </p>
                <p>
                    Go to the <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">Fabric API page</a> and select your Minecraft version at the top right.
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_api_version_2.webp" alt="more Fabric API download instructions">
                    </a>
                </p>
                <p>
                    Then download the latest (top-most) version of the Fabric API for that Minecraft version.
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/68168623-12e71700-ff72-11e9-9206-b82a254dbffc.png" alt=".minecraft/mods folder with Fabric API">
                </p>
                <p>
                    Place the Fabric API in your <code>.minecraft/mods</code> folder.
                    <ul>
                        <li>To get to your <code>.minecraft</code> folder, open Windows Explorer and type/copy the following into the address bar: <code>%appdata%/.minecraft</code></li>
                        <li>(If you are using Linux or Mac then the path to your <code>.minecraft</code> folder will be different. Please <a href="https://minecraft.gamepedia.com/.minecraft" target="_blank">check the Minecraft Wiki</a> for that part.)</li>
                        <li>Create a <code>mods</code> folder if it doesn't exist already, then place the Fabric API file inside.</code></li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Step 2: Install Wurst</h2>
        <ol class="step-list">
            <li>
                <p>
                    <a href="/download/" target="_blank">
                        <img src="https://cloud.githubusercontent.com/assets/10100202/24450367/ef3c0796-147a-11e7-99a9-404bc0deeb3d.jpg" alt="Wurst Client download instructions">
                    </a>
                </p>
                <p>
                    Download the <a href="/download/" target="_blank">Wurst Client</a>.
                    <ul>
                        <li>Again, use the latest version and make sure that it matches your Minecraft version.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/62378000-1ec2d780-b544-11e9-97e2-cf9827900993.png" alt=".minecraft/mods folder with Fabric and Wurst">
                </p>
                <p>
                    Add Wurst to your <code>.minecraft/mods</code> folder.
                    <ul>
                        <li>To get to your <code>.minecraft</code> folder, open Windows Explorer and type/copy the following into the address bar: <code>%appdata%/.minecraft</code></li>
                        <li>(If you are using Linux or Mac then the path to your <code>.minecraft</code> folder will be different. Please Google that part.)</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div class="padding20 no-padding-left no-padding-right bg-grayLighter">
	<div class="container">
		<h2 id="optifine" class="text-normal">Step 3 (Optional): Install OptiFine</h2>
        <span class="block ribbed-amber padding5">
            <span class="block bg-white padding10">
                <p class="no-margin-top">
                    <b>Notice:</b> I no longer recommend using OptiFine in Minecraft 1.15.x.
                </p>
                <ol>
                    <li>
                        <p>
                            OptiFine versions since "HD U F4" prevent X-Ray mods from working, including the X-Ray hack in Wurst.
                            <a href="https://github.com/sp614x/optifine/issues/3482#issuecomment-593921599" target="_blank" rel="nofollow">The creator of OptiFine has simply dismissed the issue</a> as "we don't support hacked clients".
                            OptiFine "HD U F3", the last version that didn't have this problem, is not available for Minecraft 1.15.x.
                        </p>
                    </li>
                    <li>
                        <p>
                            OptiFine version "HD U G1 pre9", currently the only version available for Minecraft 1.15.x, freezes the game whenever there is a text field on the screen, thereby breaking many of Wurst's and Minecraft's settings. It is currently unclear when OptiFine is going to fix this and whether or not they are even aware of the issue.
                        </p>
                    </li>
                    <li>
                        <p>
                            Minecraft 1.15 has drastically improved chunk loading performance. OptiFine doesn't really do anything anymore, as its chunk loading improvements are now part of vanilla Minecraft. <a href="https://www.curseforge.com/minecraft/mc-mods/wi-zoom" target="_blank">Wurst has its own zoom</a> that works much better than OptiFine's. The only thing that OptiFine is still needed for is using shaders.
                        </p>
                    </li>
                </ol>
            </span>
        </span>
        <ol class="step-list">
            <li>
                <p>
                    Download <a href="https://optifine.net/downloads" target="_blank" rel="nofollow">OptiFine</a>.
                    <ul>
                        <li>Again, make sure that it matches your Minecraft version.</li>
                        <li>Please use OptiFine version "HD U F3", as newer versions have a bug that prevents X-Ray from working.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    Download <a href="https://www.curseforge.com/minecraft/mc-mods/optifabric" target="_blank" rel="nofollow">OptiFabric</a>.
                    <ul>
                        <li>It claims to be for Minecraft 1.14.3, but it works for later versions too.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    Add OptiFine and OptiFabric to your <code>.minecraft/mods</code> folder.
                    <ul>
                        <li>To get to your <code>.minecraft</code> folder, open Windows Explorer and type/copy the following into the address bar: <code>%appdata%/.minecraft</code></li>
                        <li>(If you are using Linux or Mac then the path to your <code>.minecraft</code> folder will be different. Please Google that part.)</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Step 4: Launch The Game!</h2>
        <ol class="step-list">
            <li>
                <p>If you have followed my recommendations above, you will already have a "fabric" profile in your Minecraft launcher.</p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/68169736-ed5c0c80-ff75-11e9-93d4-7890380b8d57.png" alt="Minecraft launcher Wurst profile">
                </p>
                <p>
                    If not, open the Minecraft launcher, go to "Installations" > "New..." and copy these settings.
                    <ul>
                        <li>You can set the name and icon to anything you want.</li>
                        <li>Your version will look slightly different than mine, but make sure that it starts with "release fabric-" and ends with your Minecraft version.</li>
                        <li>Changing the Game Directory can sometimes cause problems. I recommend leaving it at the default unless you know what you're doing.</li>
                        <li>Don't forget to press "Create".</li>
                        <li>Then just select your Wurst/Fabric profile and press "Play".</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>Then just select your Wurst/Fabric profile and press "Play".</p>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/73156968-d0038e00-40df-11ea-965a-2e46fd38f3fb.gif" alt="dancing taco">
                </p>
            </li>
        </ol>
	</div>
</div>
