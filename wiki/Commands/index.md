---
title: Commands
layout: wiki
---

## Definition
A command in Wurst is similar to a command in vanilla Minecraft, except that it starts with a `.` instead of a `/`.

Commands can not only be toggled by typing them into the chat, but also by keybinding them.

*Use CTRL+F to quickly search for an explanation of a command.*

![#Overview](http://puu.sh/hJkcV/8154eb5054.png)
===

- `.addalt`
- `.annoy`
- `.binds`
- `.blink`
- `.clear`
- `.damage`
- `.drop`
- `.enchant`
- `.fastbreak`
- `.features`
- `.follow`
- `.friends`
- `.getpos`
- `.gm`
- `.goto`
- `.help`
- `.invsee`
- `.ip`
- `.jump`
- `.leave`
- `.nothing`
- `.nuker`
- `.path`
- `.protect`
- `.rename`
- `.rv`
- `.say`
- `.search`
- `.spammer`
- `.t`
- `.taco`
- `.throw`
- `.tp`
- `.vclip`
- `.wms`
- `.x-ray`

##AddAlt
**Description:**
>Adds a Player or all players on a server to your alt list.

**Syntax:**
>.addalt [player]

*Adds the entered player to your alt list*

>.addalt all

*Adds all online players to your alt list*

*Alts are "Alternative" Playernames, that you can use on other servers. Use the Alt-Manager to manage them.*

**Example:**

>.addalt Notch

*Adds the Player "Notch" to your alt list*
##Annoy
**Description:**
>Annoys a player by repeating everything he says.

**Syntax:**
>.annoy [player]

*Annoys the entered player*

**Example:**
>.annoy Me

*Annoys the player "Me" by repeating everything he says. Annoying yourself ends in an ever-repeating message*
![](http://puu.sh/hJoUa/723e933412.png)
##Binds
**Description:**
>Lists all keybinds.

**Syntax:**
>.binds [page]

*Shows your Keybinds - 8 per page*

**Example:**
>.binds 1

*Shows your first 8 Keybinds (Page 1)*
![](http://puu.sh/hJoH1/df715b5139.png)
##Blink
**Description:**
>Enables, disables or cancels Blink. Further information under Mods -> Blink.

**Syntax:**
>.blink [on/off/cancel]

*Turns blink on, off, or cancels it*

**Example:**
>.blink on

*Turns blink on*
![](http://puu.sh/hJoDb/ad504618f5.png)
##Clear
**Description:**
>Clears the chat completely.

**Syntax:**
>.clear

![](http://puu.sh/hJomZ/26774ae58b.png)
![](http://puu.sh/hJonW/8eb642effd.png)
##Damage
**Description:**
>Applies the given amount of damage.

**Syntax:**
>.damage [amount]

*Damages the player with the entered amount, ignores armor*

**Example:**
>.damage 20

*Deals 20 damage to the player (kills the player)*

**Requirements:**

Survival mode
![](http://puu.sh/hJoe8/7a95c1bb8f.png)
##Drop
**Description:**
>Drops all your items on the ground.

**Syntax:**
>.drop [infinite]

*Drops all items and can continue dropping items forever, only creative mode*

**Example:**
>.drop infinite

*Drops the players inventory and continues dropping random items*

**Requirement:**

.drop -> none | .drop infinite -> creative mode.
![](http://puu.sh/hJnUc/0528e202a8.png)
![](http://puu.sh/hJnWD/f1b5e7ff94.png)
##Enchant
**Description:**
>Enchants items with everything.

**Syntax:**
>.enchant [all]

*Enchants the item in the players hand or all items in your inventory*

**Example:**
>.enchant

*Enchants the item in the players hand with everything*

**Requirement:**

Creative Mode
![](http://puu.sh/hJnvn/9ca87c68e6.png)
##Fastbreak
**Description:**
>Changes the settings of FastBreak.

**Syntax:**
>.fastbreak mode [normal/instant]

*Changes the setting to normal or instant.*

**Example:**
>.fastbreak mode instant*

*Instant: The player can touch a block and can switch to another, while the first gets destroyed. Normal: Increases the players mining speed.*
![](http://puu.sh/hJpkC/3f98c49fdd.png)
##Features
**Description:**
>Counts the features in this release of Wurst.

**Syntax:**
>.features
##Follow
**Description:**
>Toggles Follow or makes it target a specific entity.

**Syntax:**
>.follow [entity]

*Follows the nearest or the given entity*

**Example:**
>.follow Bertha

*Follows the closest entity with the name "Bertha".*
![](http://puu.sh/hJniW/0962f648bd.png)
##Friends
**Description:**
>Manages your friend list.

**Syntax:**
>.friends add/remove [player]

>.friends list [page]

*Adds/removes the entered player to your list, or shows the list and its page*

**Example:**
>.friend add Notch

*Adds Notch to your friend list*
##GetPos
**Description:**
>Shows your current position or copies ot to the clipboard.

**Syntax:**
>.getpos [copy]

**Example:**
>.getpos

*Prints your position into the chat in the regular XYZ order.*
![](http://puu.sh/hJpGE/fbee4bae69.png)
##Gm
**Description:**
>Useful for servers that don't support /gm.

**Syntax:**
>.gm [gamemode]

*Possible are words or numbers like survival or 0*

**Example:**
>.gm 3

*Changes your gamemode into spectator mode*
![](http://puu.sh/hJpTc/b75cc98cea.png)
##GoTo
**Description:**
>Walks or flies you to a specific location.

**Syntax:**
>.goto [x] [y] [z]

>.goto [entity]

*Walks to the given location or the entered entity-name. Works with relative coordinates*

**Example:**
>.goto ~1 ~ ~1

*Walks one block to east and one to south*
![](http://puu.sh/hJq7I/bc496cce09.png)
##Help
**Description:**
>Shows the command list or the help for a command.

**Syntax:**
>.help [page/command]

*Can list all commands and show detailed information about a specific command*

**Example:**
>.help help

*Shows you every information about the help command*
![](http://puu.sh/hJqfO/ba4efea450.png)
##Invsee
**Description:**
>Allows you to see parts of another player's inventory.

**Syntax:**
>.invsee [player]

*Shows Armor and current selected item from the entered player*

**Example:**
>.invsee Notch

*Shows the inventory of Notch*

**Requirements:**

Survival Mode
![](http://puu.sh/hKpv5/bd5f36e044.png)
##Ip
**Description:**
>Shows the IP of the server you are currently playing on or copies it to the clipboard.

**Syntax:**
>.ip [copy]

>Prints the IP in the chat or copies it.

**Example:**
>.ip

![](http://puu.sh/hKpD0/c7f3f47b34.png)
##Jump
**Description:**
>Makes you jump once.

**Syntax:**
>.jump

*Useful for WSPAM scripts or usage of the Wurst-Bot.*
##Leave
**Description:**
>Leaves the current server or changes the mode of AutoLeave.

**Syntax:**
>.leave [chars/quit]

>.leave mode [chars/quit]

*Leaves the server by typing illegal characters or just quits it.*

**Example:**
>.leave chars

*The server kicks you for typing illegal characters in chat. (§)*
![](http://puu.sh/hKpLQ/7dcb873074.png)
##Nothing
**Description:**
>Does nothing. Useful for scripting.

**Syntax:**
>.nothing

*Honestly, what did you expect?*
##Nuker
**Description:**
>Changes the settings of Nuker.

**Syntax:**
>.nuker mode [normal/id/flat/smash]

>.nuker id [block_id]

>.nuker name [block_name]

*Normal: Smashes every block around you. Id: Only destroy the block with the given Id.*

*Flat: Pretend to be a bulldozer. Smash: HULK GOES SMASH!*

**Example:**
>.nuker id 1

*Nukes only stone in your nuker range.*

*More Information under Mods -> Nuker*
##Path
**Description:**
>Shows the shortest path to a specific point. Useful for labyrinths and caves.

**Syntax:**
>.path [[x] [y] [z]/entity]

**Example:**
>.path Bertha

*Shows the shortest path to the closest entity with the name Bertha.*

![](http://puu.sh/hKqwq/d74c8b17fa.png)
##Protect
**Description:**
>Toggles Protect or makes it protect a specific entity.

**Syntax:**
>.protect [entity]

**Example:**
>.protect Bertha

*Protects Bertha by following her and attacking anyone who comes too near*
![](http://puu.sh/hKqGx/f44607c772.png)
##Rename
**Description:**
>Renames the item in your hand. Use $ for colors, use $$ for $.

**Syntax:**
>.rename <new_name>

*Renames the item in your hand by the given name.

**Example:**
>.rename $6W$eu$fr$es$6t $4$k!$r$4$lR$r$4$mO$r$4$nC$r$4$oK$r$4$$$k!

*The Name even shows in death messages if you kill someone with it.*

**Requirements:**

Creative Mode
![](http://puu.sh/hKqXu/84dfcd1b14.png)
##Rv
**Description:**
>Toggles RemoteView or makes it target a specific entity.

**Syntax:**
>.rv [player]

*Shows you another players view. Can target mobs etc. too*

**Example:**
>.rv

*Targets the nearest entity (you can specify that in the Target-Dropdown-Box) and shows you its view*
![](http://puu.sh/hKrbs/2072c8a72d.png)
##Say
**Description:**
>Sends a chat message, even if the message starts with a dot.

**Syntax:**
>.say [message]

*Sends exactly the given message. Useful for servers that require you to say .legit etc.*

**Example:**
>.say .I'mTotallyNotUsingAHackClient!

![](http://puu.sh/hKroK/6626386e85.png)
##Search
**Description:**
>Changes the settings of Serach or toggles it.

**Syntax:**
>.search id [block_id]

>.search name [block_name]

*Sets the search for the given block ID or name*

*You still need to activate it by typing .search*

**Example:**
>.search id 1

![](http://puu.sh/hKry4/e03972d267.png)
##Spammer
**Description:**
>Changes the delay of Spammer or spams spam from a file.

**Syntax:**
>.spammer delay [delay_in_ms]

>.spammer spam [file]

*The delay changes the time you have to wait until the next message gets sent*

*You can enter a filename to spam that file, you don't have to write the file extension*

**Example:**
>.spammer spam HelloWorld

*Spam Files can be created and saved with the spammer mod*

![](http://puu.sh/hKrOp/3de9802100.png)

##T
**Description:**
>Toggles a mod.

**Syntax:**
>.t [mod] [(on/off)]

**Example:**
>.t Sneak

*Toggles the mod Sneak*
##Taco
**Description:**
>"I love that little guy. So cute!" -WiZARD

**Syntax:**
>.taco

*Well... let it surprise you. ♥*
##Throw
**Description:**
>Changes the amount of Throw or toggles it.

**Syntax:**
>.throw [amount (amount)]

*Throw lets you throw multiple items like eggs or snowballs at once. Define the amount or toggle it.*

**Example:**
>.throw amount 4

>.throw

*Changes the amount of throw to 4 items at once and toggles it on. You still need to rightclick*
![](http://puu.sh/hKsi9/6753d7e707.png)
##Tp
**Description:**
>Teleports you up to 100 blocks away. Only works on vanilla servers!

**Syntax:**
>.tp [[x] [y] [z]/entity]

*Teleports you to a position or entity. This works with relative coordinates too*

**Example:**
>.tp ~ ~ ~-5

*Teleports you 5 blocks to north*
##VClip
**Description:**
>Teleports you up/down.  Can glitch you through floors & ceilings.

>The maximum distance is 100 blocks on vanilla servers and 10 blocks on Bukkit servers.

**Syntax:**
>.vclip [height]

*Negative amounts to teleport down, positive amounts to teleport up*

**Example:**
>.vclip -3

*Teleports you 3 blocks down*
![](http://puu.sh/hKsyT/f69d68d1b2.png)
![](http://puu.sh/hKszc/febc336698.png)
##Wms
**Description:**
>Enables/disables Wurst messages or sends a message.

**Syntax:**
>.wms [on/off]

>.wms echo [message]

*Turning it off will result in no messages from wurst in your chat*

**Example:**
>.wms echo This is a custom chat message from GummiBoat.

![](http://puu.sh/hKsIv/abcbc26989.png)
##XRay
**Description:**
>Manages or toggles X-Ray.

**Syntax:**
>.xray add [id (block_id)/name (block_name)]

>.xray remove [id (block_id)/name (block_name)]

>.xray list [page]

*Add -> Adds the id or block name to the X-Ray list. Remove -> Removes the id or block name from the X-Ray list.*

*List -> Lists all your blocks. Additionally X-Ray activates an integrated fullbright too.*

**Example:**
>.xray add id 3

*Adds dirt to your X-Ray list. So pretty.*
![](http://puu.sh/hKtra/10c88f1fb9.png)
