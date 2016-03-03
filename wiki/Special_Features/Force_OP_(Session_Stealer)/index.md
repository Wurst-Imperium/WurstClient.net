---
title: How to Use Session Stealer (Force OP - Steal Sessions of Admins)
layout: wiki
description: The Session Stealer allows you to temporarily steal the Minecraft account of any other player, making it an easy Force OP.
category: Special Feature
---
<div class="panel panel-default">
  <div class="panel-heading">
    <h2 class="panel-title visible-xs-inline visible-sm-inline visible-md-inline visible-lg-inline">
      Content
    </h2>
  </div>
  <div class="panel-body">
    <ol>
      <li>
        <a href="#Overview">Overview</a>
      </li>
      <li>
        <a href="#usage">Usage</a>
        <ol>
          <li>
            <a href="#stealing-the-session-of-a-server-admin">Stealing the Session of a Server Admin</a>
          </li>
          <li>
            <a href="#using-the-session-stealer-as-an-alternative-to-alt-accounts">Using the Session Stealer as an Alternative to Alt Accounts</a>
          </li>
        </ol>
      </li>
      <li>
        <a href="#media">Media</a>
      </li>
      <li>
        <a href="#history">History</a>
      </li>
    </ol>
  </div>
</div>

## Overview
The Session Stealer allows you to temporarily steal the Minecraft account of another player. This can either be used to hack into the account of a server admin or as an alternative to alt accounts. Unlike alt accounts, however, session stealing does not allow you to change the skin or the password of the account.

A session in Minecraft remains valid until the owner of the account invalidates it or replaces it with a new session. In practice, that means either launching Minecraft or pressing the <kbd>Log Out</kbd> button in the Minecraft launcher. Because of this, the Session Stealer works best against players that don't play Minecraft very often.

## Usage
All you need to steal a session with the Session Stealer is a valid session token. The most common place to find these tokens are Minecraft launcher logs (not crash logs, but launcher logs). Once you got one of these logs, look for a line that says:

<pre style="word-wrap: normal;">(Session ID is token:<mark>AWholeLotOfLettersAndNumbers:MoreRandomLettersAndNumbers</mark>)</pre>

You might have noticed that the text field in the Session Stealer says the same thing. And that's because you are supposed to paste the random letters and numbers (highlighted in the above example) into that text field. Then you press the <kbd>Steal Session</kbd> button and, if the token is still valid, you're good to go.

**If you get an error**, then the token has either been invalidated (<q>This token doesn't work anymore. Try a different one.</q>) or you didn't correctly paste the token into the text field (<q>That is not a session token!</q>). There are some other error messages that could come up, but they are pretty rare and totally self-explanatory.

*Please do not open a bug report if you get one of these errors. They are meant to indicate that you did something wrong, not that the hack is broken.*

And that's all you need to steal anyone's session! Simple, right? That's because this Session Stealer is designed to be as simple and user-friendly as possible.

{% include adsense.html %}

### Stealing the Session of a Server Admin
In order to steal the session of an admin, you need a fresh launcher log from them. Old logs will not work, they have already been invalidated. One good trick to get a fresh log from them might be to pretend that you are a developer and that you need their log to fix a bug they have. Once you have their log, use their token as explained in [Usage](#usage).

Once you got the session token from their log, remember that it will only last until they start Minecraft again. So you will probably want to prevent them from doing that too soon. Just be a little creative here, you could pretend that you found a virus in the log and that starting Minecraft now would harm their computer, or whatever.

And because they probably will start Minecraft again at some point, you shouldn't let them wait until you griefed the entire server with their account. Rather use their account to `/op` your own account, which should only take a few seconds and is much less suspicious.

### Using the Session Stealer as an Alternative to Alt Accounts
If you can't figure out how to get premium alts, the Session Stealer might be a nice alternative for you. All you need to do is to find some Minecraft logs on the internet and to use their token as explained in [Usage](#usage).

Some good places to find logs are [Pastebin.com](http://pastebin.com/), [Minecraftforum.net](http://www.minecraftforum.net/) and the [Mojang Bug Tracker](https://bugs.mojang.com/), but by far the best one is Google. Just search for `"session id is token:"` (with the quotes) and you'll find plenty of logs with plenty of tokens from all over the web.

You might find that most of the tokens have already been invalidated. This can be fixed quite easily by limiting the search. As you probably don't know how to do that, here are some pre-configured links:

- <a href="https://www.google.com/?#q=%22session+id+is+token:%22&tbs=qdr:m" target="_blank">All logs posted in the last 30 days</a>
- <a href="https://www.google.com/?#q=%22session+id+is+token:%22&tbs=qdr:w" target="_blank">All logs posted in the last 7 days</a>
- <a href="https://www.google.com/?#q=%22session+id+is+token:%22&tbs=qdr:d" target="_blank">All logs posted in the last 24 hours</a>

## Media
<div class="row">
  <div class="col-sm-10 col-md-8 col-lg-6">
    <div class="thumbnail">
      <img src="https://cloud.githubusercontent.com/assets/10100202/9369230/203acbb6-46c8-11e5-8fdf-5192dfce3a23.png" alt="Session Stealer Button">
      <div class="caption">
        <p>
          The button on the Alt Manager screen that opens the Session Stealer.
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-10 col-md-8 col-lg-6">
    <div class="thumbnail">
      <img src="https://cloud.githubusercontent.com/assets/10100202/9366024/20730df4-46b5-11e5-9b6a-c9cdbe38f63c.png" alt="Session Stealer GUI">
      <div class="caption">
        <p>
          The GUI of the Session Stealer itself.
        </p>
      </div>
    </div>
  </div>
</div>

## History
<table class="table">
  <thead>
    <tr>
      <th>
        Version
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        v2.3
      </td>
      <td>
        Added Session Stealer
      </td>
    </tr>
  </tbody>
</table>
