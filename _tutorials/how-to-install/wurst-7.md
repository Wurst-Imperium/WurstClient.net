---
title: How To Install Wurst 7
description: A step-by-step guide that works on Windows, Linux and Mac!
translations:
  en: /tutorials/how-to-install/wurst-7/
  de: /de/tutorials/how-to-install/wurst-7/
layout: default
google_auto_ads: true
---
{% include title.html l1 = page.title l2 = page.description %}

<div id="fabric-loader" class="padding20 no-padding-left no-padding-right bg-grayLighter">
	<div class="container">
        {% include lang-select.html %}
		<h2 class="text-normal">Step 1: Install Fabric (Loader)</h2>
        <ol class="step-list">
            <li>
                <p>
                    Download and run the <a href="https://fabricmc.net/use/installer/" target="_blank" rel="nofollow">Fabric installer</a>.
                </p>
                <p>
                    <a href="https://fabricmc.net/use/installer/" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_download.webp" alt="Fabric installer download instructions">
                    </a>
                </p>
                <p>
                    <h3>Troubleshooting</h3>
                    <details class="padding5">
                        <summary>My antivirus is detecting the Fabric installer as malicious.</summary>
                        <p>
                            This can happen with the Fabric installer "for Windows" (the .exe version), but it's almost certainly a false positive. You can either ignore the warning or use the Universal/.jar version of the Fabric installer, which does not have this problem.
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>When I try to run the Fabric installer, nothing happens.</summary>
                        <p>
                            This can happen when you don't have Java installed. Here is a <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">video on how to install Java</a>. (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>When I try to run the Fabric installer, WinRAR / 7-zip / etc. opens instead.</summary>
                        <p>
                            This means your computer is configured to open .jar files with that other program instead of using Java.
                            There is a setting in Windows called "Choose default apps by file type" that lets you change this.
                        </p>
                        <p>
                            Alternatively, you can also use "right click" > "open with" to open the file with Java, like so:<br>
                        </p>
                        <p>
                            <img src="https://wiki.wurstclient.net/_media/install_fabric_run_with_java.webp" alt="how to run the Fabric installer with Java">
                            <ul>
                                <li>If you don't see Java in the list, select "Choose another app" at the bottom.</li>
                                <li>Depending on your system, you will see either "Java(TM)&nbsp;Platform&nbsp;SE&nbsp;binary", "OpenJDK&nbsp;Platform&nbsp;binary", or both. It doesn't matter which one you use.</li>
                                <li>If you can't find Java at all, you need to <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">install Java</a> first. (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)</li>
                            </ul>
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>When I try to run the Fabric installer, I get a message saying I don't have Java.</summary>
                        <p>
                            Unsurprisingly, this means you don't have Java installed. Here is a <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">video on how to install Java</a>. (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)
                        </p>
                    </details>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_use_fabric_installer.webp" alt="Fabric installer usage instructions">
                </p>
                <p>
                    In the Fabric installer, select your Minecraft version and press "Install".
                    <ul>
                        <li>If you want to use snapshots, make sure that "Show snapshots" is checked first.</li>
                        <li>Leave "Select Install Location" at the default value. Changing this can sometimes cause problems.</li>
                        <li>Leave "Create profile" checked. That way you don't have to make your own profile.</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="fabric-api" class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Step 2: Install Fabric API</h2>
        <ol class="step-list">
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
                        <li>To get to your .minecraft folder, open Windows Explorer and type/copy <code>%appdata%/.minecraft</code> into the address bar.</li>
                        <li>Create a "mods" folder if it doesn't already exist, then place the Fabric API file inside.</li>
                        <li>(If you are using Linux or Mac then the path to your .minecraft folder will be different. Check <a href="https://minecraft.gamepedia.com/.minecraft" target="_blank">this useful Minecraft Wiki page</a> to get the correct path for your OS.)</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="wurst" class="padding20 no-padding-left no-padding-right bg-grayLighter">
	<div class="container">
		<h2 class="text-normal">Step 3: Install Wurst</h2>
        <ol class="step-list">
            <li>
                <p>
                    <a href="/download/" target="_blank">
                        <img src="https://cloud.githubusercontent.com/assets/10100202/24450367/ef3c0796-147a-11e7-99a9-404bc0deeb3d.jpg" alt="Wurst Client download instructions">
                    </a>
                </p>
                <p>
                    Download the <a href="/download/" target="_blank">Wurst Client</a>, if you haven't already.
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
                        <li>See above for how to find this folder. It is the same folder where you placed the Fabric API earlier.</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="launch" class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Step 4: Launch The Game</h2>
        <ol class="step-list">
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_modded_checkbox.webp" alt='where to find the "modded" checkbox in the Minecraft launcher'>
                </p>
                <p>If you have followed my recommendations above, you will already have a "fabric-loader-..." profile in your Minecraft launcher.</p>
                <p>Make sure that the "Modded" checkbox is enabled, otherwise you can't see your Fabric profile!</p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/68169736-ed5c0c80-ff75-11e9-93d4-7890380b8d57.png" alt="Minecraft launcher Wurst profile">
                </p>
                <p>
                    If you don't have the Fabric profile, go to "Installations" > "New..." and copy these settings.
                    <ul>
                        <li>You can set the name and icon to anything you want.</li>
                        <li>Your version will look slightly different than mine, but make sure that it starts with "release fabric-" and ends with your Minecraft version.</li>
                        <li>Changing the Game Directory can sometimes cause problems. I recommend leaving it at the default unless you know what you're doing.</li>
                        <li>Don't forget to press "Create".</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_press_play.webp" alt="how to launch a modded fabric profile">
                </p>
                <p>Then select your Wurst/Fabric profile and press "Play".</p>
                <p>
                    Be sure to click away any "player safety" nonsense.
                    <a href="https://twitter.com/Wurst_Imperium/status/1353927165012811776" target="_blank">These warnings have nothing to do with safety!</a>
                </p>
            </li>
        </ol>
	</div>
</div>
