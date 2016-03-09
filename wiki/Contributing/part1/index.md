---
title: How to Contribute to the Wurst-Client project - Part 1
layout: wiki
category: Contributing
---
So you want to contribute to Wurst, eh?

Well you've come to the right place! The following step-by-step tutorial will teach you exactly how to do that.

*By the way, thank you for taking the time to contribute!* Your contributions massively speed up the development of Wurst and thereby help us to make it a better client for everyone.

## Requirements
In terms of experience, you will need a bit of **knowledge about Java**, as Wurst is entirely written in Java just like Minecraft is.

However, you don't have to be a complete expert at it. It's only important that you can make something that works, not that it looks particularly fancy.

So if you only have a little bit of experience and you're not sure if it's enough or not, just go ahead and try to contribute. I think in most cases it will be enough.

The requirements also include that you know the **basics of Git**, which is the version control system that we use for the Wurst-Client project. But don't be afraid if you don't know anything Git yet, because it's a pretty easy thing to learn.

GitHub made a beginner-friendly Git tutorial at [try.github.io](http://try.github.io/) that can teach you most of the things you'll need in only about 15 minutes.

And while you're at it, [make a **GitHub account**](https://github.com/) if you don't have one yet. You'll need that later so that you can fork the Wurst-Client repository, make Pull Requests, etc.

In terms of software, you should be using **Eclipse LUNA** as your IDE and **Windows 10** as your operating system. If you use a different software or a different operating system, you will likely need to do some things differently and you might run into issues that this tutorial can't help you with.

## 1. Signing the CLA
The **Contributor License Agreement** (CLA) is basically the terms and conditions for contributing to Wurst. You have to accept them in order to contribute something.

First, make sure that you're logged in to your GitHub account. Then go to [CLA-Assistant.io/Wurst-Imperium/Wurst-Client](https://cla-assistant.io/Wurst-Imperium/Wurst-Client), read the agreement and sign it by clicking the big blue button at the bottom.

Here's a picture for clarification:

![Contributor License Agreement of Wurst-Imperium/Wurst-Client](https://cloud.githubusercontent.com/assets/11584045/13554796/0c966964-e3ba-11e5-9b0e-66d384433f37.jpg)


## 2. Forking & Cloning
To fork the Wurst Client, simply **click the "Fork" button** on the [Wurst-Imperium/Wurst-Client repository](https://github.com/Wurst-Imperium/Wurst-Client). Forking basically creates a copy of the Wurst-Client repository that you can edit and that is saved on GitHub's servers.

Here's another picture to show you where that button is:

![Fork button on Wurst-Imperium/Wurst-Client](https://cloud.githubusercontent.com/assets/11584045/13554808/3c3d0916-e3ba-11e5-9e32-200bb623977b.jpg)

Cloning is a bit more complicated, but it's not too bad. There are several programs that can do this, we will be using **Eclipse eGit** because its built into Eclipse and doesn't require you to install any additional software.

You will need the _Git Repositories_ view in order to use eGit. To get that view, first go to **Window > Show View > Other...** as shown in the screenshot below:

![Eclipse eGit: Window > Show View > Other...](https://cloud.githubusercontent.com/assets/11584045/13554815/63896e4c-e3ba-11e5-8431-2d4f038998a9.jpg)

Then select **Git > Git Repositories** and click the OK button.

![Eclipse eGit: Git > Git Repositories](https://cloud.githubusercontent.com/assets/11584045/13554832/a1e7b608-e3ba-11e5-83dc-a314c6cf66da.jpg)

Now the _Git Repositories_ view should appear somewhere on the screen. You can put it wherever you want, I like to place it in the **bottom left corner**.

![Eclipse eGit: Placing the "Git Repositories" view in the bottom left corner](https://cloud.githubusercontent.com/assets/11584045/13554838/ce950494-e3ba-11e5-85fa-4d103c9ac942.jpg)

Now that you have eGit set up, you can make a Clone of your Fork. **Click the "Clone" button** at the top of the _Git Repositories_ view, as shown in the screenshot below:

![Eclipse eGit: Clone button](https://cloud.githubusercontent.com/assets/11584045/13554840/f2f19046-e3ba-11e5-9c9e-9da52dc79d04.jpg)

Now here comes the complicated part: A dialog will appear asking you to fill in a whole bunch of text fields that all have confusing labels. But don't worry too much about it, most of the fields will be filled out automatically once you correctly filled out the first one.

Just **select the "URI" field** and type in `https://github.com/YourGitHubUsername/Wurst-Client.git`, where "YourGitHubUsername" is replaced by your actual GitHub username.

If you did that correctly, most of the other fields will automatically be filled out with the correct values. "Port" may still be blank, but that's OK.

Now type your **GitHub username and password** into the "User" and "Password" fields. I recommend checking the "Store in Secure Store" option so that you won't have to re-enter your password every time you do something with eGit.

The _Secure Store_ option may open another dialog asking you to set a security question, but that dialog should be easy enough to not cover it in this tutorial.

Finally, compare your dialog with the following screenshot and **click "Next"** if everything is correct.

![Eclipse eGit: Source Git Repository](https://cloud.githubusercontent.com/assets/11584045/13554849/28d34e0c-e3bb-11e5-988d-ac87bf9b3606.jpg)

On the next screen, **select all checkboxes** if they aren't already selected and then **click "Next"**. That's all you need to do here.

![Eclipse eGit: Branch Selection](https://cloud.githubusercontent.com/assets/11584045/13554852/4440e56e-e3bb-11e5-8071-2b4606c73d84.jpg)

The last screen will ask you for a directory and a few other things, but only the directory is important. **Click "Browse"** and select a folder where you want to save your clone.

Most people save their GitHub repositories in **Documents/GitHub/RepositoryName** and you can see me doing the same thing in the screenshot. The only difference is that I renamed the repository to "Wurst-Client-Clone" because I already have a "Wurst-Client" repository, but that problem shouldn't occur for you.

Finally, **click "Finish"** and wait for it clone. Now you're done with the cloning part.

![Eclipse eGit: Local Destination](https://cloud.githubusercontent.com/assets/11584045/13554857/60d0e044-e3bb-11e5-942a-0452d986a4d0.jpg)

<a href="/wiki/Contributing/part2/" class="btn btn-default">
  <span class="octicon octicon-arrow-right"></span>
  Continue with Part 2
</a>
