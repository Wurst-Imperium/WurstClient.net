---
title: How To Use The .binds Command
google_auto_ads: true
cleanmedia_ads: true
---
`.binds` is a powerful command that lets you view, edit, add, remove and reset your keybinds directly from the chat. Unlike the Keybind Manager, `.binds` is available in all versions of Wurst, including Wurst 6, Wurst 7 and ForgeWurst.

## View Your Keybinds - <code>.binds&nbsp;list</code>

Let's start with something simple. To see which keybinds you already have, type <code>.binds&nbsp;list</code> in the chat.

![Keybind list](https://user-images.githubusercontent.com/10100202/66137716-c8365000-e5fd-11e9-8c81-12b514327792.jpg)

You will see a list like this one.

If you have a lot of keybinds, <code>.binds&nbsp;list</code> will only show you the first page of your keybinds list. To view the other pages, simply type <code>.binds&nbsp;list&nbsp;2</code>, <code>.binds&nbsp;list&nbsp;3</code>, and so on.

## Create Your Own Keybinds - <code>.binds&nbsp;add</code>

Any hack or command in Wurst can be turned into a keybind.

All you need to do is to type <code>.binds&nbsp;add&nbsp;&lt;key&gt;&nbsp;&lt;action&gt;</code>, where `<key>` is the key that you want to press to trigger the keybind, and `<action>` is either the hack that it should toggle or the command that it should run.

For example, let's say that we want to toggle AutoMine whenever we press the M key. The `<key>` is M and the `<action>` is to toggle AutoMine. So the command to create this keybind is <code>.binds&nbsp;add&nbsp;M&nbsp;AutoMine</code>.

![Keybind set M AutoMine](https://user-images.githubusercontent.com/10100202/66137718-c8cee680-e5fd-11e9-9e2a-285d0f6c4944.jpg)

After typing that command, you will get a message like this to confirm that your new keybind has been created. From now on, pressing M will toggle AutoMine.

## Remove Keybinds That You Don't Like - <code>.binds&nbsp;remove</code>

The syntax to remove a keybind is <code>.binds&nbsp;remove&nbsp;&lt;key&gt;</code>. Note that this command requires the `<key>`, but not the `<action>`.

For example, let's say we want to remove the default keybind for N, which toggles [Nuker](https://wiki.wurstclient.net/nuker). The `<key>` for this keybind is N, so the command is <code>.binds&nbsp;remove&nbsp;N</code> (but **not** <code>.binds&nbsp;remove&nbsp;Nuker</code>).

![Keybind removed N Nuker](https://user-images.githubusercontent.com/10100202/66140754-f36f6e00-e602-11e9-8445-ad1a50fdee39.jpg)

Again, we get a chat message to confirm that this keybind has been deleted.

## Help! I deleted something important! - <code>.binds&nbsp;reset</code>

A common beginner's mistake is to accidentally delete the ClickGUI / [Navigator](https://wiki.wurstclient.net/navigator) keybinds and then panic because they can't open the GUI anymore.

Don't worry! There is a good reason why `.binds` uses the chat instead of the GUI and it's very easy to restore those keybinds.

Simply type <code>.binds&nbsp;reset</code> and you will get all of the default keybinds back, including the ones that open the GUIs. Note, however, that this will remove any custom keybinds that you have created. You will have to add them again afterwards.

![All keybinds reset to defaults](https://user-images.githubusercontent.com/10100202/66141631-485fb400-e604-11e9-92f4-c49ff9cd4e9b.jpg)

After typing <code>.binds&nbsp;reset</code>, you will see this message.

You will also notice that your GUI is working again. See? No problem at all!
