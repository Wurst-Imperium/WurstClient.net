---
title: How to Contribute to the Wurst-Client project - Part 4
layout: wiki
category: Contributing
---
<a href="/wiki/Contributing/part3/" class="btn btn-default">
  <span class="octicon octicon-arrow-left"></span>
  Back to Part 3
</a>

## 7. Adding Minecraft to Eclipse
First, right-click somewhere on the Package Explorer and select **New > Java Project**.

![Adding Minecraft to Eclipse: New > Java Project](https://cloud.githubusercontent.com/assets/10100202/12988785/b9a76e7a-d102-11e5-9545-4629687683ab.jpg)

A dialog will appear. Enter **Minecraft** into the field that says "Project name" and **click "Next"**.

I already have a Minecraft project, so I called this one "Minecraft Tutorial".

![Adding Minecraft to Eclipse: Create a Java Project](https://cloud.githubusercontent.com/assets/10100202/12988976/76490e3a-d103-11e5-9127-9e7ee2befa1d.jpg)

Now select the **Libraries** tab and add all of the libraries from "YourMcpFolder/jars/libraries" again. You won't need 1.8.jar this time, but you will need slick.jar.

If you have followed my recommendation of moving all the libraries into one folder, this step will be quick and easy.

Once you're done and it looks like my screenshot, **click "Finish"**.

![Adding Minecraft to Eclipse: Libraries](https://cloud.githubusercontent.com/assets/10100202/12989186/79a84fe0-d104-11e5-833a-5871713785e7.jpg)

Now you got a Minecraft project, but there's no Minecraft in it yet. Copy all of the files in "YourMcpFolder/src/minecraft" into the "src" folder of the Minecraft project to fix that.

The "src" folder should now look like this:

![Adding Minecraft to Eclipse: "src" folder](https://cloud.githubusercontent.com/assets/10100202/12989398/b1e0e3da-d105-11e5-9786-f8c079a384c0.jpg)

So far so good, but that's the _vanilla_ Minecraft code. What you need is the modified Minecraft code.

In order to apply Wurst's modifications to this code, you first need to turn your **Minecraft project** into a **Minecraft repository**.

To do that, right-click on the Minecraft project and select **Team > Share Project**.

![Patching Minecraft: Team > Share Project](https://cloud.githubusercontent.com/assets/10100202/12989765/0c5f4968-d107-11e5-9a32-ddbdb9f6e271.jpg)

Yet another dialog! Just select **Git** and click **Next**.

![Patching Minecraft: Share Project](https://cloud.githubusercontent.com/assets/10100202/12989865/7dfa7b38-d107-11e5-9427-1aee5073beaa.jpg)

On the next screen, check the checkbox that says **"Use or create repository in parent folder of project"**. This is not recommended, but it works.

Then, click **Create Repository** and make sure that the checkbox next to your Minecraft project/repository (that one thing in the table) is checked. **Click "Finish"** once you have that.

![Patching Minecraft: Configure Git Repository](https://cloud.githubusercontent.com/assets/10100202/12989993/2803b8e2-d108-11e5-9f7a-075669086786.jpg)

Looking good, except for that "NO-HEAD" error that appeared out of nowhere.

![Patching Minecraft: NO-HEAD](https://cloud.githubusercontent.com/assets/10100202/12990176/2c00e7f2-d109-11e5-8688-b7e1756e2962.jpg)

You can fix that by making an initial commit for this repository. To do that, make sure that the Minecraft project is selected in the Package Explorer and then press <kbd>Ctrl</kbd> <kbd>#</kbd>. Additionally, you can also right click the project and go to **Team > Commit** if you don't have the <kbd>#</kbd> button.

On the dialog that pops up, type in **"vanilla Minecraft"** or something like that. Then click on the small checked checkbox on the right to **select everything**.

Now press the **Commit** button at the bottom and the "NO-HEAD" should change to "master".

![Patching Minecraft: Initial Commit](https://cloud.githubusercontent.com/assets/10100202/12990444/b983e060-d10a-11e5-8fe6-2c74622f6913.jpg)

Alright, now you should be ready to apply Wurst's modifications, right?

Well, not quite. This is actually one of the few things that eGit can't do, so you need to use [GitHub Desktop](https://desktop.github.com/) instead.

Download, install and start that. Then click the **"+"** button at the top left corner.

Select **Add**, click **Browse** and select your Minecraft repository (it's in your Eclipse workspace folder). Then click **Add Repository**.

![Patching Minecraft: Adding it to GitHub Desktop](https://cloud.githubusercontent.com/assets/10100202/12990884/e078297c-d10c-11e5-9960-6dd8a234eee6.jpg)

Click the **Gear Icon** at the top right corner and select **Options**.

![options-step-1](https://cloud.githubusercontent.com/assets/10100202/13000362/d0216c76-d159-11e5-8573-a8125db48b3f.jpg)

Then set the **Default shell** option to **Cmd** and click the **Save** button at the bottom left. This is important for applying the patch, as it will only work with Cmd.

![options-step-2](https://cloud.githubusercontent.com/assets/10100202/13000360/d01ffd5a-d159-11e5-9a24-e2daaa119927.jpg)

Now click the **Gear Icon** again and select **Repository Settings**.

![options-step-3](https://cloud.githubusercontent.com/assets/10100202/13003746/b301a2aa-d177-11e5-834e-82fb28dc0ab0.jpg)

There will be a large text area saying **Ignored Files**. Paste in the following text, replacing any existing lines.

```
/bin
/.settings
.classpath
.project
```

Once you have that, click **Ok** and go back.

![options-step-4](https://cloud.githubusercontent.com/assets/10100202/13003745/b2ffda6a-d177-11e5-92c1-9e58db7b2154.jpg)

Now commit the changes that you made. Check the checkbox at the top left to **select all changes**, type in a commit message, and click **Commit to master**.

![options-step-5](https://cloud.githubusercontent.com/assets/10100202/13004053/5710f016-d179-11e5-982e-72f8123e01d3.jpg)

Click the **Gear Icon** one more time and select **Open in Git Shell**.

![Patching Minecraft: Open in Git Shell](https://cloud.githubusercontent.com/assets/10100202/12991036/a998df72-d10d-11e5-8494-7d02274eeb0b.jpg)

Type in this command:

```
git checkout -b Wurst
```

It should then look like this screenshot (except that you probably have a white font):

![Patching Minecraft: Creating the Wurst Branch](https://cloud.githubusercontent.com/assets/10100202/12991205/90ffa7ec-d10e-11e5-8484-3bf358a8737e.jpg)

This simply created a "Wurst" branch for the modified Wurst code to go in. You could have done that earlier using eGit, but I forgot to tell you.

Anyways, here comes the true reason why Cmd is needed for this step:

```
git checkout master
git apply --ignore-space-change --ignore-whitespace C:\Users\alexa\Documents\GitHub\Wurst-Client-Clone\patch\minecraft.patch
xcopy src tmp /E /Y /I
git reset --hard
git checkout Wurst
xcopy tmp src /E /Y /I
```

Replace the "Wurst-Client-Clone" path with the path to your clone, followed by "\patch\minecraft.patch". I recommend saving this command in a file, as you will need it every time the original "minecraft.patch" file changes.

Now run that monster of a command.

![Patching Minecraft: Applying the Patch](https://cloud.githubusercontent.com/assets/10100202/12991575/fd59a8c4-d10f-11e5-917d-dea6d6378e7f.jpg)

Looks a bit like hacking in a movie, especially if you set your text color to green like I did. In reality, you just applied Wurst's modifications to Minecraft and are almost done getting rid of those errors.

If you now take a look at Eclipse, you'll notice that there is a **"tmp" folder** inside of the Minecraft project. Delete that folder.

![Patching Minecraft: Deleting the "tmp" folder](https://cloud.githubusercontent.com/assets/10100202/12999898/77dedeae-d154-11e5-9a8f-8dc7143b49fb.jpg)

Then commit the applied modifications. You've seen this before: Press <kbd>Ctrl</kbd> <kbd>#</kbd> while the Minecraft project is selected (or **Team > Commit**) type in a commit message, select all changes and press **Commit**.

![Patching Minecraft: Commit Changes](https://cloud.githubusercontent.com/assets/10100202/13010012/dfdf1316-d19f-11e5-8ef9-483c7141661a.jpg)

Almost there. You have the Wurst source, the libraries and the modified Minecraft source code, but you're still getting errors.

The final step to fix those errors is to link the Wurst code to the Minecraft code. Don't worry, this step is easy.

Right click on the Wurst Client project and select **New > Folder**.

![Linking Wurst and Minecraft: New > Folder](https://cloud.githubusercontent.com/assets/10100202/13010369/cc0fefa2-d1a1-11e5-8283-9311054d56d4.jpg)

As always, a dialog appears. This time, however, it is only one dialog with one screen.

Click the **Advanced** button and select **Link to alternate location (Linked Folder)**. Then click **Browse** and select the "src" folder in your Minecraft repository (see screenshot).

This will automatically set the folder name to "src". Change that to **"minecraft"** and click **Finish**.

![Linking Wurst and Minecraft: Create a new folder resource](https://cloud.githubusercontent.com/assets/10100202/13010653/29bfcd74-d1a3-11e5-8cee-014ea7b9b095.jpg)

Right click on the "minecraft" folder and select **Build Path > Use as Source Folder**.

![linking-step-3](https://cloud.githubusercontent.com/assets/10100202/13011144/aa17170a-d1a5-11e5-9adf-4d607adb1b96.jpg)

Now the Minecraft source code is linked to the Wurst Client project and most of the errors should have disappeared. To fix the remaining ones, just do the same thing the other way around and link the Wurst source code to the Minecraft project.

Right click on the Minecraft project and select **New > Folder** again (I don't think you need another screenshot of that).

Just like last time, click the **Advanced** button and select **Link to alternate location (Linked Folder)**. Then click **Browse** and select the "src" folder, this time in your Wurst Client repository (see screenshot).

The folder name will be set to "src" again. This time, rename it to **"wurst"** and click **Finish**.

![linking-step-4](https://cloud.githubusercontent.com/assets/10100202/13011628/f0e71674-d1a7-11e5-88d5-df79e01c25ea.jpg)

Finally, right click on the "wurst" folder and select **Build Path > Use as Source Folder**.

Congratulations! Now you are completely finished with the setup and all errors should have disappeared (Minecraft may still show some warnings).

Part 5 of this tutorial will be all about creating a Pull Request and submitting your contributions.

<a href="/wiki/Contributing/part5/" class="btn btn-default">
  <span class="octicon octicon-arrow-right"></span>
  Continue with Part 5
</a>
