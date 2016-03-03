---
title: How to Use AuthMe Cracker (Force OP)
layout: wiki
category: Mod
---
## Overview
Force OP (a.k.a. AuthMe Cracker) is a mod that cracks AuthMe passwords. It can be used on AuthMe servers to force OP yourself by cracking the AuthMe password of an admin or to get access to other people's plots and items by cracking their AuthMe password.

## Presentation Tutorial

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="/forceop-tutorial/impress.html"></iframe>
  </div>
  <div class="caption">
    This is an impress.js presentation. Use the space bar or arrow keys to navigate. if that doesn't work, click on the presentation so that it becomes focused.
  </div>
</div>

## Text Tutorial

### What you need
- **A cracked server** with AuthMe or a similar plugin. [What's that?](http://www.planetminecraft.com/blog/offline-modecracked-servers---what-are-they/)

- **The usernames** of as many admins as you can get.

### Step 1: Adding the admins to your alt list
To add an admin to your alt list, you can simply type `.addalt <name of the admin>` while you are on the server. If the admin is on the server and not in vanish mode, you can press tab to autocomplete the name after you typed `.addalt <first few letters of the admins name>`. You can also type `.addalt all` to add all users on the server to your alt list. If the admins are playing on the server, you have to wait for them to log out before continuing with step 2.

{% include adsense.html %}

### Step 2: Cracking the AuthMe passwords

#### Preparation
Now leave the server, go to the AltManager and log in as one of the admins. Then join the server again and turn ForceOP/AuthMeCracker on. A frame with options will open:

![screenshot of the AuthMeCracker GUI](https://cloud.githubusercontent.com/assets/10100202/6094241/6a6eb050-af22-11e4-994c-be442c0f9485.png)

If you just leave everything as it is, it will try the username and 49 other common AuthMe passwords at a speed of 1 password per second. This takes up to about a minute and has a chance of about 10% to work because about 10% of all users use one of these passwords. In most cases, this configuration will give you the best results.
Keep in mind that it's 10% per admin, not 10% per server. So the more admins a server has, the higher the chance that one of them has a bad AuthMe password.

#### Changing the options
In some cases though, it will be more efficient if you change the options, so we will get to that now.

The password list influences the chance that it works and the time that it takes. To change the password list, select `TXT file`, click `browse` and select your list. A password list is a TXT file with one password per line. <del>I recommend [Xato's "10k most common.txt"](https://xato.net/passwords/more-top-worst-passwords). It contains 10000 passwords that are used by 99.8% of all users, but because it's so long, trying to crack a single password with it can already take several hours.</del> <ins>Xato's website no longer exists, but you can still find plenty of good password lists on Google.</ins> On some special servers, this may be worth it, but if you are just trying to get OP on a random server, you will definitely be better off using the default list.

The delay between attempts only influences the time that it takes. The default value is 1000ms which is equivalent to 1 password per second. It's also the shortest delay that can bypass AntiSpam (the server plugin, not the hack). In other words, if the server has AntiSpam, like most servers, you shouldn't change this value. If it doesn't have AntiSpam, you can set it to a lower value which will drastically increase the speed. At the minimum delay (50ms), Xato's list only takes a couple minutes.

Whether or not it should wait for `Wrong password!` messages also has a small influence on the time it takes. The problem with this option is that it can cause ForceOP/AuthMeCracker to *forget* which password worked. For instance, let's say it tries 3 passwords: `password`, `123456` and `qwerty`. The first one is correct but the server has a lag spike, so after the client is already done sending all three login attempts, the server responds to the first attempt with `Successfully logged in!`. Now the client thinks that the server responded to the third attempt and you will get the message `[Wurst][SUCCESS]The password "password" worked.`, even though `qwerty` is the password that worked. If the server sends the `Wrong password!` messages in a language that is not supported, you have to turn this on in order for it to work.

#### Starting
When you're done with the options, click the `Start` button and wait until it's done. If you get kicked for `Login timeout!`, just reconnect or turn AutoReconnect on. If you get kicked and temporarily banned for `Too many failed attempts. You are temporarily denied to join this server.`, it is patched on that server. When it's done, you will get a Wurst message that either starts with `[Wurst] [SUCCESS]` or `[Wurst] [FAILURE]`.

<div class="thumbnail">
  <img src="https://cloud.githubusercontent.com/assets/10100202/6094242/6db4c3c6-af22-11e4-8a91-5bec214d4743.png" alt="screenshot of successfully using the AuthMeCracker">
  <div class="caption">
    The success message in older versions. It was changed in Wurst v1.1 and now says:
    <q>
      [Wurst] [SUCCESS] The password "password" worked.
    </q>
  </div>
</div>

If you got a success message that tells you the AuthMe password, you have successfully bypassed the AuthMe protection of that admin. You might not see this message right after the first try. That's why you collected several usernames. Just repeat this process with the other usernames that you collected until you find one that works.

Once you're done with that, you can either give OP to your own account (using the normal `/op <username>` command) or grief the server as the admin. Happy griefing!

## Tips
- **Turn AntiSpam on** and you won't see all the annoying `Wrong password!` messages from AuthMe.

- You can also **do this with normal users** to get access to their plots, items, etc.
