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
                        <img src="https://images.wurstclient.net/_media/install_fabric_download.webp" alt="Fabric installer download instructions">
                    </a>
                </p>
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
                        This can happen when you don't have Java installed. Here is a <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">video on how to install Java</a>.
                    </p>
                    <p>
                        (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)
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
                        <img src="https://images.wurstclient.net/_media/install_fabric_run_with_java.webp" alt="how to run the Fabric installer with Java">
                        <ul>
                            <li>If you don't see Java in the list, select "Choose another app" at the bottom.</li>
                            <li>Depending on your system, you will see either "Java(TM)&nbsp;Platform&nbsp;SE&nbsp;binary", "OpenJDK&nbsp;Platform&nbsp;binary", or both. It doesn't matter which one you use.</li>
                            <li>If you can't find Java at all, you need to <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">install Java</a> first.<br>
                            (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)</li>
                        </ul>
                    </p>
                </details>
                <details class="padding5">
                    <summary>When I try to run the Fabric installer, I get a message saying I don't have Java.</summary>
                    <p>
                        Unsurprisingly, this means you don't have Java installed. Here is a <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">video on how to install Java</a>.
                    </p>
                    <p>
                        (The author of the video cannot help you with Wurst-related questions. If you need help, <a href="/contact">contact me</a> instead.)
                    </p>
                </details>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    In the Fabric installer, select your Minecraft version and press "Install".
                </p>
                <p>
                    <img src="https://images.wurstclient.net/_media/install_use_fabric_installer.webp" alt="Fabric installer usage instructions">
                </p>
                <p>
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
                    Go to the <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">Fabric API page</a> and select your Minecraft version at the top right.
                </p>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">
                        <img src="https://images.wurstclient.net/_media/install_fabric_api_version.webp" alt="Fabric API download instructions">
                    </a>
                </p>
                <p>
                    Then download the latest (top-most) version of Fabric API for that Minecraft version.
                </p>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">
                        <img src="https://images.wurstclient.net/_media/install_fabric_api_version_2.webp" alt="more Fabric API download instructions">
                    </a>
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary>I can't find the Fabric API download button.</summary>
                    <p>
                        Ahem...
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_fabric_api_download_button.webp" alt="lots of arrows pointing at the Fabric API download button :)">
                    </p>
                </details>
                <details class="padding5">
                    <summary>When I try to download Fabric API, Chrome warns me that the file "isn't commonly downloaded".</summary>
                    <p>
                        This can happen when a new version has just been released.
                        It just means that you're one of the first people to download that specific version of Fabric API.
                        You can safely ignore this warning and download the file anyways.
                    </p>
                </details>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    Place the Fabric API in your <code>.minecraft/mods</code> folder.
                </p>
                <p>
                    <img src="https://images.wurstclient.net/_media/install_fabric_api_mods_folder.webp" alt=".minecraft/mods folder with Fabric API">
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary>Where do I find my <code>.minecraft</code> folder?</summary>
                    <p>
                        <b>Windows:</b> Open your Windows Explorer and type <code>%appdata%/.minecraft</code> into the address bar.<br>
                        (Alternatively you can press Win+R and type in the same thing.)
                    </p>
                    <p>
                        <b>Linux:</b> Open your File Explorer and type <code>~/.minecraft</code> into the address bar.
                    </p>
                    <p>
                        <b>Mac:</b> Open your Finder and type <code>~/Library/Application Support/minecraft</code> into the address bar.
                    </p>
                </details>
                <details class="padding5">
                    <summary>There is no <code>mods</code> folder in my <code>.minecraft</code> folder.</summary>
                    <p>
                        No problem, just create the folder manually. Make sure you name it exactly <code>mods</code> (all lowercase).
                    </p>
                </details>
                <details class="padding5">
                    <summary>My Fabric API file doesn't have the Java icon on it. It has a WinRAR logo instead.</summary>
                    <p>
                        Check the file extension. As long as it ends with <code>.jar</code>, everything is fine.
                        It simply means that your computer is configured to open .jar files with WinRAR instead of Java.
                    </p>
                    <p>
                        It doesn't matter for the Fabric API, since it's still a .jar file and will still work,
                        but if you want to fix it there is a setting in Windows called "Choose default apps by file type" that lets you change this.
                    </p>
                </details>
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
                    <a href="/download/" target="_blank">Download the Wurst Client</a>, if you haven't already.
                    Make sure to get the latest version that is compatible with your Minecraft version.
                </p>
                <p>
                    <a href="/download/" target="_blank">
                        <img src="https://images.wurstclient.net/_media/install_wurst_download.webp" alt="Wurst Client download instructions">
                    </a>
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary>When I try to download Wurst, Chrome warns me that the file "isn't commonly downloaded".</summary>
                    <p>
                        This can happen when a new version has just been released.
                        It just means that you're one of the first people to download that specific version of Wurst.
                        You can safely ignore this warning and download the file anyways.
                    </p>
                </details>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    Place the Wurst Client in your <code>.minecraft/mods</code> folder.
                </p>
                <p>
                    <img src="https://images.wurstclient.net/_media/install_wurst_mods_folder.webp" alt=".minecraft/mods folder with Fabric and Wurst">
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary>Where do I find my <code>.minecraft</code> folder?</summary>
                    <p>
                        <b>Windows:</b> Open your Windows Explorer and type <code>%appdata%/.minecraft</code> into the address bar.<br>
                        (Alternatively you can press Win+R and type in the same thing.)
                    </p>
                    <p>
                        <b>Linux:</b> Open your File Explorer and type <code>~/.minecraft</code> into the address bar.
                    </p>
                    <p>
                        <b>Mac:</b> Open your Finder and type <code>~/Library/Application Support/minecraft</code> into the address bar.
                    </p>
                </details>
                <details class="padding5">
                    <summary>There is no <code>mods</code> folder in my <code>.minecraft</code> folder.</summary>
                    <p>
                        You have skipped the previous step. You should <a href="#fabric-api">go back to step 2</a> and install the Fabric API first.
                    </p>
                </details>
                <details class="padding5">
                    <summary>My Wurst Client file doesn't have the Java icon on it. It has a WinRAR logo instead.</summary>
                    <p>
                        Check the file extension. As long as it ends with <code>.jar</code>, everything is fine.
                        It simply means that your computer is configured to open .jar files with WinRAR instead of Java.
                    </p>
                    <p>
                        It doesn't matter for this file, since it's still a .jar file and will still work,
                        but if you want to fix it there is a setting in Windows called "Choose default apps by file type" that lets you change this.
                    </p>
                </details>
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
                    In the Minecraft Launcher, open the <code>Installations</code> tab and then launch your new <code>fabric-loader-...</code> installation.
                </p>
                <p>
                    <img src="https://images.wurstclient.net/_media/install_press_play.webp" alt="how to launch a modded fabric profile">
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary>The Minecraft launcher is warning me about "player safety features".</summary>
                    <p>
                        This is normal, unfortunately. Microsoft has decided to try and scare people away from modding by adding these "player safety" warnings to all modded installations.
                    </p>
                    <p>
                        <a href="https://twitter.com/Wurst_Imperium/status/1353927165012811776" target="_blank">These warnings are complete nonsense and have nothing to do with actual safety!</a>
                    </p>
                    <p>
                        You can safely disable these warnings and launch the game.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_safety_nonsense.webp" alt="how to disable the Minecraft launcher's incredibly stupid 'player safety' warning">
                    </p>
                    <p>
                        Or alternatively, switch to a <a href="https://multimc.org/" target="_blank">better launcher</a> that respects your freedom and doesn't lie about safety.
                    </p>
                </details>
                <details class="padding5">
                    <summary>I can't see the <code>fabric-loader-...</code> installation.</summary>
                    <p>
                        First make sure that the "Modded" checkbox is enabled. Modded installations like Fabric are invisible without it.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_modded_checkbox.webp" alt='where to find the "modded" checkbox in the Minecraft launcher'>
                    </p>
                    <p>
                        If you already had the Minecraft launcher open while you were installing Fabric (Loader), it is possible that you need to restart the Minecraft Launcher to make it "realize" that there is a new installation.
                    </p>
                    <p>
                        If none of that helps, you probably don't have the installation. You can either <a href="#create-profile-automatically">run the Fabric installer again</a>, or <a href="#create-profile-manually">create the installation manually</a>.
                    </p>
                </details>
                <details class="padding5">
                    <summary id="create-profile-automatically">I turned off "Create profile" earlier and now I don't have the <code>fabric-loader-...</code> installation.</summary>
                    <p>
                        Simply run the Fabric installer again, just like you did in <a href="#fabric-loader">step 1</a>.
                        Select the same version as before, but this time make sure that "Create profile" is enabled, and then press "Install".
                        The installer won't complain that you already did this.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_use_fabric_installer.webp" alt="Fabric installer usage instructions">
                    </p>
                </details>
                <details class="padding5">
                    <summary>I don't like that my Wurst installation is named <code>fabric-loader-...</code>. Can I rename it?</summary>
                    <p>
                        Yes. You can even change the icon if you want.
                    </p>
                </details>
                <details class="padding5">
                    <summary id="create-profile-manually">I want to create the <code>fabric-loader-...</code> installation myself. Show me how to do it!</summary>
                    <p>
                        First press the "New installation" button.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_new_profile.webp" alt='where to find the "new installation" button in the Minecraft launcher'>
                    </p>
                    <p>
                        Then change <code>VERSION</code> to <code>release fabric-loader-...</code>. You can also customize the installation's name and icon if you like. When done, press "Create" to save your installation.
                    </p>
                    <p>
                        <b>WARNING:</b> Don't touch the <code>GAME DIRECTORY</code> option unless you know what you're doing!
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_manual_profile_settings.webp" alt="how to manually create a Fabric Loader installation in the Minecraft launcher">
                    </p>
                    <div style="padding-left: 0.625rem;border-left: 1px #ccc solid;">
                        <h4>Meta-Troubleshooting (because manual installations can get complicated)</h4>
                        <details class="padding5">
                            <summary>I see multiple <code>release fabric-loader-...</code> options and I don't know which one to choose.</summary>
                            <p>
                                Okay, let me explain to you how these versions work. If you look closely, you will see that there are two versions after the <code>fabric-loader-</code> part, separated by a dash. The first one is the Fabric Loader version itself, the second one is the Minecraft version that it's for.
                            </p>
                            <p>
                                The Minecraft version is the part that matters. If this is wrong, your installation won't launch.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_loader_version.webp" alt="how to read a Fabric Loader version">
                            </p>
                            <p>
                                Now with that knowledge, choose any <code>release fabric-loader-...</code> option for the Minecraft version you plan to use. (I'm using Minecraft 1.18.2 in the above example.)
                            </p>
                        </details>
                        <details class="padding5">
                            <summary>I don't see a <code>release fabric-loader-...</code> option for my Minecraft version.</summary>
                            <p>
                                Try restarting your Minecraft launcher.
                                If that doesn't fix it, you forgot to install Fabric (Loader) and should go back to <a href="#fabric-loader">step 1</a>.
                            </p>
                        </details>
                    </div>
                </details>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    That's it! You are now using Wurst.
                </p>
                <p>
                    <img src="https://images.wurstclient.net/_media/install_successful_launch.webp" alt="Minecraft 1.18.2 title screen with Wurst 7 installed">
                </p>
                <h3>Troubleshooting</h3>
                <details class="padding5">
                    <summary id="open-gui">OK great, but now how do I open Wurst's GUI?</summary>
                    <p>
                        Wurst actually has three different GUIs that you can choose from:
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/gui_keybinds.webp" alt="visualization of Wurst's GUI keybinds" title="Thanks to keyboard-layout-editor.com for this image!">
                    </p>
                    <ul>
                        <li>
                            <p>The GUI with the litte windows is called <a href="https://wiki.wurstclient.net/clickgui">ClickGUI</a> and opens with Right CTRL by default.</p>
                        </li>
                        <li>
                            <p>The GUI with the search bar at the top is called <a href="https://wiki.wurstclient.net/navigator">Navigator</a> and opens with Right Shift by default.</p>
                        </li>
                        <li>
                            <p>There is also a TabGUI, which I wouldn't recommend for beginners and does not open with a keybind by default. You can read more about it <a href="https://wiki.wurstclient.net/tabgui">here</a>.</p>
                        </li>
                    </ul>
                    <p>
                        Keep in mind you cannot open Wurst's GUI directly from the title screen. It only works while playing on a server or in a singleplayer world.
                        If it still doesn't work there, double-check if Wurst is actually running or if it's <a href="#still-launches-vanilla">just vanilla Minecraft</a>.
                    </p>
                    <p>
                        You might also want to look at this list of <a href="https://wiki.wurstclient.net/keybinds#default_keybinds" target="_blank">all default keybinds</a> and <a href="https://wiki.wurstclient.net/cmd/binds" target="blank">how to customize your keybinds</a>.
                    </p>
                </details>
                <details class="padding5">
                    <summary id="launch-fabric-error">I see an error message saying <code>Incompatible mod set!</code> or <code>Failed to launch!</code>.</summary>
                    <p>
                        Generally speaking, this means you didn't follow the tutorial properly.
                        Fabric's error messages are usually really good at explaining what's wrong and the "potential" solution that it gives you is almost always the correct solution.
                        You should absolutely just follow the instructions listed in the error message.
                    </p>
                    <p>
                        But, *sigh* since I know some of you won't be satisfied with that answer, here is a list of common error messages / solutions and what they mean:
                    </p>
                    <div style="padding-left: 0.625rem;border-left: 1px #ccc solid;">
                        <h4>Meta-Troubleshooting (because some people seemingly can't read)</h4>
                        <details class="padding5">
                            <summary><code>Install fabric, version X or later.</code></summary>
                            <p>
                                This is talking about Fabric API, not Fabric Loader!
                            </p>
                            <p>
                                If you see a message like this, you skipped step 2.
                                You should <a href="#fabric-api">go back to step 2</a> and install the Fabric API.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_missing_fabric_api.webp" alt="the error you get when you forget to install Fabric API">
                            </p>
                        </details>
                        <details class="padding5">
                            <summary><code>Replace mod fabric X with version Y or later.</code></summary>
                            <p>
                                This is talking about Fabric API, not Fabric Loader!
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wrong_fabric_api.webp" alt="the error you get when you install the wrong version of Fabric API">
                            </p>
                            <p>
                                If you see a message like this, you installed the wrong version of Fabric API.
                                You should remove your current Fabric API file from the mods folder, <a href="#fabric-api">go back to step 2</a> and this time pay close attention to the instructions.
                            </p>
                            <p>
                                Step 2 shows you exactly how to find the correct Fabric API version.
                            </p>
                        </details>
                        <details class="padding5">
                            <summary><code>Replace minecraft X with version Y.</code></summary>
                            <p>
                                If you see a message like this, you either launched the wrong <code>fabric-loader-...</code> installation (if you have multiple), or selected the wrong Minecraft version in the Fabric installer.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wrong_minecraft_version.webp" alt="the error you get when you use the wrong Minecraft version with your Wurst installation">
                            </p>
                            <p>
                                You should first go back to the Minecraft launcher and double-check which installation you just launched.
                            </p>
                            <p>
                                If you don't have a <code>fabric-loader-...</code> installation for the correct Minecraft version, <a href="#fabric-loader">run the Fabric installer again</a> and this time pay close attention to select the Minecraft version you actually want to use.
                            </p>
                            <p>
                                After doing this, you will have multiple <code>fabric-loader-...</code> installations in your Minecraft Launcher.
                                Make sure to select the correct one so you don't get the same error again.
                            </p>
                        </details>
                        <details class="padding5">
                            <summary><code>Replace mod fabricloader X with version Y.</code></summary>
                            <p>
                                If you see a message like this, you either launched the wrong <code>fabric-loader-...</code> installation (if you have multiple), or you selected an older Fabric Loader version in the Fabric installer.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wrong_fabric_loader.webp" alt="the error you get when you use the wrong Fabric Loader version with your Wurst installation">
                            </p>
                            <p>
                                You should first go back to the Minecraft launcher and double-check which installation you just launched.
                            </p>
                            <p>
                                If you don't have a <code>fabric-loader-...</code> installation with an up-to-date Fabric Loader version, <a href="#fabric-loader">run the Fabric installer again</a> and make sure to leave the "Loader Version" at its default value.
                            </p>
                            <p>
                                There is generally no good reason to use anything else than the latest version of Fabric Loader (which is selected by default).
                            </p>
                        </details>
                    </div>
                </details>
                <details class="padding5">
                    <summary id="launch-error-uncaught">I see an error message saying <code>Uncaught exception in thread "main"</code>.</summary>
                    <p>
                        Look closely at the error message and select which of the following errors it contains:
                    </p>
                    <div style="padding-left: 0.625rem;border-left: 1px #ccc solid;">
                        <details class="padding5">
                            <summary id="launch-error-sources"><code>MixinApplyError: Mixin ... from mod [wurst] FAILED during PREPARE</code></summary>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wurst_sources.webp" alt="the error you get when you put raw source code into your mods folder">
                            </p>
                            <p>
                                This error happens when you have placed the "-sources.jar" file in your mods folder instead of using the normal, compiled version of Wurst.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wurst_sources_folder.webp" alt=".minecraft/mods folder with the source code of Wurst, which will not work">
                            </p>
                            <p>
                                You should <a href="#wurst">go back to step 3</a> and install the normal, compiled version of Wurst without any "sources" or "dev" at the end.
                            </p>
                        </details>
                        <details class="padding5">
                            <summary id="launch-error-major63"><code>Unsupported class file major version 63</code></summary>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_major_version_63.webp" alt="the major version 63 error">
                            </p>
                            <p>
                                This error happens when you use a Fabric Loader version older than 0.14 with a Minecraft 1.19 snapshot.
                            </p>
                            <p>
                                Minecraft 1.19 snapshots require Fabric Loader 0.14.0 or newer, but for some reason the Fabric installer selects 0.13.3 by default.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_fabric_loader_014.webp" alt="manually selecting loader 0.14.x in the Fabric installer">
                            </p>
                            <p>
                                You should <a href="#fabric-loader">run the Fabric installer again</a> and this time manually select the latest Fabric Loader version.
                            </p>
                            <p>
                                After doing this, you will have multiple <code>fabric-loader-...</code> installations in your Minecraft Launcher.
                                Make sure to select the correct one so you don't get the same error again.
                            </p>
                        </details>
                    </div>
                </details>
                <details class="padding5">
                    <summary id="launch-just-crashes">I see an error message saying <code>An unexpected issue occurred and the game has crashed</code>.</summary>
                    <p>
                        Like "Incompatible mod set!", this error message usually means that you didn't follow the tutorial properly.
                        Unfortunately the official Minecraft launcher sucks at providing useful error messages, so the usual "Exit Code: 1" can mean almost anything.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_error_generic_crash.webp" alt="the Minecraft launcher's useless error message">
                    </p>
                    <p>
                        A common cause of this error is that you installed a version of Wurst that is not compatible with your Minecraft version.
                    </p>
                    <p>
                        Double-check which Wurst version is in your mods folder (the "MC" part indicates which Minecraft version it's intended for) and <a href="#wurst">go back to step 3</a> if it's the wrong version.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_error_wrong_wurst_version.webp" alt="an example of using the wrong Wurst version (MC1.16.5) in a Minecraft 1.18.2 installation">
                    </p>
                    <p>
                        Another possible cause is that you selected a very old version of Fabric Loader in the Fabric installer.
                    </p>
                    <p>
                        There is generally no good reason to use anything else than the latest version of Fabric Loader (which is selected by default).
                        You should <a href="#fabric-loader">go back to step 1</a> and this time leave the "Loader Version" at its default value.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_error_very_old_fabric_loader.webp" alt="an example of a very old Fabric Loader version that will crash a Minecraft 1.18.2 installation">
                    </p>
                    <p>
                        If all of your mod versions and Fabric Loader are correct but the game is still crashing, it is possible that you have found a bug.
                        Unfortunately it seems like the official Minecraft launcher no longer gives you access to crash report files.
                    </p>
                    <p>
                        Try to get a copy of the stack trace (maybe in the log files?) or see if the same crash also happens with a launcher that doesn't disable crash report files.
                    </p>
                </details>
                <details class="padding5">
                    <summary id="still-launches-vanilla">The game launches, but it's just vanilla Minecraft.</summary>
                    <p>
                        Look closely. Is it really vanilla or is it Fabric without Wurst? You will see "Fabric (Modded)" at the bottom if it's Fabric.
                    </p>
                    <p>
                        <img src="https://images.wurstclient.net/_media/install_error_fabric_without_wurst.webp" alt="a Minecraft 1.18.2 installation with Fabric, but without Wurst">
                    </p>
                    <div style="padding-left: 0.625rem;border-left: 1px #ccc solid;">
                        <details class="padding5">
                            <summary>It's just vanilla Minecraft.</summary>
                            <p>
                                Most likely, you simply launched the wrong installation.
                                You should go back to the Minecraft launcher and double-check which installation you just launched.
                            </p>
                        </details>
                        <details class="padding5">
                            <summary>It's Fabric, but without Wurst.</summary>
                            <p>
                                Most likely, you placed your <code>mods</code> folder in the wrong location.
                                Make sure that the folder is called exactly <code>mods</code> and that its location is exactly as follows:
                            </p>
                            <p>
                                <b>Windows:</b> <code>C:\Users\YourName\AppData\Roaming\.minecraft\mods</code>
                            </p>
                            <p>
                                <b>Linux:</b> <code>/home/YourName/.minecraft/mods</code>
                            </p>
                            <p>
                                <b>Mac:</b> <code>/home/YourName/Library/Application Support/minecraft/mods</code>
                            </p>
                            <p>
                                If the folder name and location are correct but you still have this issue, you probably changed the the <code>GAME DIRECTORY</code> option in your <code>fabric-loader-...</code> installation.
                            </p>
                            <p>
                                <img src="https://images.wurstclient.net/_media/install_error_wrong_game_directory.webp" alt="example of a changed game directory that can prevent Fabric from finding your mods">
                            </p>
                            <p>
                                You should go back to the Minecraft launcher, edit your installation and change <code>GAME DIRECTORY</code> back to its default value.
                            </p>
                        </details>
                    </div>
                </details>
            </li>
        </ol>
	</div>
</div>
