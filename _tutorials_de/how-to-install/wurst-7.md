---
title: Wie man Wurst 7 installiert
description: Eine Schritt-für-Schritt-Anleitung, die auf Windows, Linux und Mac funktioniert!
lang: de
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
		<h2 class="text-normal">Schritt 1: Fabric(-Loader) installieren</h2>
        <ol class="step-list">
            <li>
                <p>
                    Downloade und starte den <a href="https://fabricmc.net/use/installer/" target="_blank" rel="nofollow">Fabric-Installer</a>.
                </p>
                <p>
                    <a href="https://fabricmc.net/use/installer/" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_download.webp" alt="Fabric installer download instructions">
                    </a>
                </p>
                <p>
                    <h3>Problembehandlung</h3>
                    <details class="padding5">
                        <summary>Mein Antivirus meint, dass der Fabric-Installer bösartig sei.</summary>
                        <p>
                            Das kann mit dem Fabric-Installer "for Windows" passieren (weil es eine .exe-Datei ist), ist aber mit ziemlicher Sicherheit ein Fehlalarm. Du kannst die Warnung entweder ignorieren oder statt der .exe die Universal/.jar-Version benutzen. Die .jar-Version wird nicht als Virus erkannt.
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>Wenn ich versuche den Fabric-Installer zu starten, passiert nichts.</summary>
                        <p>
                            Das kann passieren wenn du kein Java installiert hast. Hier ist ein <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">Video das erklärt wie man Java installiert</a> (auf Englisch). (Der Author von diesem Video kann dir bei Wurst-Problemen nicht helfen. Wenn du Hilfe brauchst, <a href="/contact">frag mich</a>.)
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>Wenn ich versuche den Fabric-Installer zu starten, öffnet sich stattdessen WinRAR / 7-zip / etc.</summary>
                        <p>
                            Das passiert wenn dein Computer darauf eingestellt ist, .jar-Dateien mit einem anderen Programm als Java zu öffnen.
                            In Windows gibt es eine Einstellung namens "Standard-Apps nach Dateityp auswählen", mit der du das ändern kannst.
                        </p>
                        <p>
                            Alternativ kannst du Rechtsklick > "Öffnen mit" benutzen um die Datei mit Java zu öffnen, etwa so:
                        </p>
                        <p>
                            <img src="https://wiki.wurstclient.net/_media/install_fabric_run_with_java.webp" alt="how to run the Fabric installer with Java">
                            <ul>
                                <li>Wenn du Java in der Liste nicht finden kannst, klicke unten auf "Anderes Programm auswählen".</li>
                                <li>Je nachdem was du installiert hast, siehst du hier entweder "Java(TM)&nbsp;Platform&nbsp;SE&nbsp;binary" oder "OpenJDK&nbsp;Platform&nbsp;binary" (oder beides). Es ist egal, welche Java-Version du hier auswählst.</li>
                                <li>Wenn du Java gar nicht finden kannst, ist es wahrscheinlich nicht installiert. In diesem Fall musst du erstmal <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">Java installieren</a> (englischsprachiges Video-Tutorial). (Der Author von diesem Video kann dir bei Wurst-Problemen nicht helfen. Wenn du Hilfe brauchst, <a href="/contact">frag mich</a>.)</li>
                            </ul>
                        </p>
                    </details>
                    <details class="padding5">
                        <summary>Wenn ich versuche den Fabric-Installer zu starten, bekomme ich eine Fehlermeldung die sagt dass ich kein Java habe.</summary>
                        <p>
                            Das bedeutet (selbstverständlich) dass du kein Java installiert hast. Hier ist ein <a href="https://www.youtube.com/watch?v=Wv0vPUwitJs" target="_blank" rel="nofollow">Video das erklärt wie man Java installiert</a> (auf Englisch). (Der Author von diesem Video kann dir bei Wurst-Problemen nicht helfen. Wenn du Hilfe brauchst, <a href="/contact">frag mich</a>.)
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
                    Im Fabric-Installer, wähle deine Minecraft-Version aus und klicke dann auf "Install".
                    <ul>
                        <li>Wenn du eine Snapshot-Version benutzen willst, musst du vorher bei "Show snapshots" einen Haken setzen.</li>
                        <li>Lass die Option "Select Install Location" am Besten auf dem Standardwert. Änderungen an dieser Einstellung können manchmal Probleme verursachen.</li>
                        <li>Lass den Haken bei "Create profile" am Besten auch da. Dadurch musst du später kein eigenes Profil erstellen und sparst etwas Zeit.</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="fabric-api" class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Schritt 2: Fabric-API installieren</h2>
        <ol class="step-list">
            <li>
                <p>
                    <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">
                        <img src="https://wiki.wurstclient.net/_media/install_fabric_api_version.webp" alt="Fabric API download instructions">
                    </a>
                </p>
                <p>
                    Öffne die <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all" target="_blank" rel="nofollow">Fabric-API-Seite</a> und wähle oben rechts deine Minecraft-Version aus.
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
                    Dann lade die neuste (oberste) Version der Fabric-API herunter, die mit deiner Minecraft-Version kompatibel ist.
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_fabric_api_mods_folder.webp" alt=".minecraft/mods folder with Fabric API">
                </p>
                <p>
                    Platziere die Fabric-API-Datei in deinem <code>.minecraft/mods</code>-Ordner.
                    <ul>
                        <li>Um in deinen .minecraft-Ordner zu gelangen, öffne den Windows Explorer und gib dann Folgendes oben in die Adressleiste ein: <code>%appdata%/.minecraft</code></li>
                        <li>(Enter drücken nicht vergessen!)</li>
                        <li>Erstelle hier einen "mods"-Ordner, wenn der nicht schon existiert, und lege dann die Fabric-API-Datei hinein.</li>
                        <li>(Wenn du Linux oder Mac benutzt, wirst du deinen .minecraft-Ordner woanders finden. Schau mal auf dieser <a href="https://minecraft.fandom.com/de/wiki/.minecraft" target="_blank">Minecraft Wiki-Seite</a> nach, da findest du den genauen Pfad.)</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="wurst" class="padding20 no-padding-left no-padding-right bg-grayLighter">
	<div class="container">
		<h2 class="text-normal">Schritt 3: Wurst installieren</h2>
        <ol class="step-list">
            <li>
                <p>
                    <a href="/download/" target="_blank">
                        <img src="https://cloud.githubusercontent.com/assets/10100202/24450367/ef3c0796-147a-11e7-99a9-404bc0deeb3d.jpg" alt="Wurst Client download instructions">
                    </a>
                </p>
                <p>
                    Lade den <a href="/download/" target="_blank">Wurst Client</a> herunter, wenn du das nicht schon getan hast.
                    <ul>
                        <li>Pass auf dass du die neuste Version hast, die mit deiner Minecraft-Version kompatibel ist.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/62378000-1ec2d780-b544-11e9-97e2-cf9827900993.png" alt=".minecraft/mods folder with Fabric and Wurst">
                </p>
                <p>
                    Lege auch die Wurst-Client-Datei in deinem <code>.minecraft/mods</code>-Ordner.
                    <ul>
                        <li>Siehe oben, wie man diesen Ordner findet. Es ist der selbe Ordner wo du vorhin auch die Fabric-API hingetan hast.</li>
                    </ul>
                </p>
            </li>
        </ol>
	</div>
</div>

<div id="launch" class="padding20 no-padding-left no-padding-right">
	<div class="container">
		<h2 class="text-normal">Schritt 4: Starte das Spiel</h2>
        <ol class="step-list">
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_modded_checkbox.webp" alt='where to find the "modded" checkbox in the Minecraft launcher'>
                </p>
                <p>Wenn du meinen Empfehlungen oben gefolgt bist, hast du jetzt schon ein "fabric-loader-..."-Profil in deinem Minecraft-Launcher.</p>
                <p>Pass auf dass das "Modded"-Kästchen oben rechts einen Haken hat, sonst kannst du dein Fabric-Profil nicht sehen!</p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://user-images.githubusercontent.com/10100202/68169736-ed5c0c80-ff75-11e9-93d4-7890380b8d57.png" alt="Minecraft launcher Wurst profile">
                </p>
                <p>
                    Wenn du kein Fabric-Profil hast, zeige ich dir hier wie du selbst eins erstellen kannst. Klicke zuerst auf "Installations" und dann "New...".
                    <ul>
                        <li>Du kannst den Namen und das Icon beliebig festlegen.</li>
                        <li>Deine Version wird etwas anders aussehen als in dem Screenshot, pass einfach auf dass sie mit "release&nbsp;fabric-" anfängt und mit deiner Minecraft-Version endet.</li>
                        <li>Wie gesagt, das Spielverzeichnis (Game Directory) zu ändern kann manchmal Probleme verursachen. Lass es am Besten auf dem Standardwert, es sei denn du weißt was du tust.</li>
                        <li>Am Ende einfach auf "Create" klicken.</li>
                    </ul>
                </p>
            </li>
            <div class="padding5 no-padding-left no-padding-right"></div>
            <li>
                <p>
                    <img src="https://wiki.wurstclient.net/_media/install_press_play.webp" alt="how to launch a modded fabric profile">
                </p>
                <p>Wähle dein Wurst- bzw. Fabric-Profil aus und drücke auf "Play".</p>
                <p>
                    Wenn du jetzt irgendeinen <a href="https://twitter.com/Wurst_Imperium/status/1353927165012811776" target="_blank">"player safety"-Blödsinn</a> siehst, kannst du das bedenkenlos wegklicken.
                </p>
            </li>
        </ol>
	</div>
</div>
