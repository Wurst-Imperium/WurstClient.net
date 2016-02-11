---
title: How to Contribute to the Wurst-Client project - Part 3
layout: wiki
category: Contributing
---
<a href="/wiki/Contributing/part2/" class="btn btn-default">
  <span class="octicon octicon-arrow-left"></span>
  Back to Part 2
</a>

## 5. Applying the Code Style
In addition to the source code, the Wurst-Client repository also contains the code style and formatting rules. Eclipse can use those rules to automatically format and clean up your contributions with the press of a few buttons.

First right-click on your Wurst Client project and **select "Properties"**.

![Eclipse Code Style: Properties](https://cloud.githubusercontent.com/assets/10100202/12983213/8c6f35ba-d0e8-11e5-82cc-d4c2e95cc46b.jpg)

In the dialog that appears, select **Java Code Style > Clean Up**. Now there should be a bunch of options on the right side, most of which are grayed out.

To un-gray those options, **check "Enable project specific settings"**. Then click the **Import** button.

In the file selector that appears, go to your **Wurst-Client** folder (where the clone is), open the **codestyle** folder and select the file **cleanup.xml**. Once you have that, it should say "Active profile: Alexander01998" as it does in the screenshot below.

Finally, **click "Apply"** to save the changes.

![Eclipse Code Style: Clean Up](https://cloud.githubusercontent.com/assets/10100202/12984553/9657b0e2-d0ee-11e5-916b-80f5cd50fafd.jpg)

Now do the same thing with **Java Code Style > Formatter**. Just do what you did with Clean Up, except that you import **"codestyle.xml"** instead of "cleanup.xml".

![Eclipse Code Style: Formatter](https://cloud.githubusercontent.com/assets/10100202/12985601/cf542088-d0f3-11e5-9ea3-c3f7ade93515.jpg)

Select **Java Code Style > Code Templates** and **check "Enable project specific settings"** again. As you can tell, this screen looks a bit different than the previous two.

Select **Code > New Java Files** and click **Edit**.

![Eclipse Code Style: Code Templates](https://cloud.githubusercontent.com/assets/10100202/12986437/8ba367be-d0f7-11e5-9e89-c527928e449e.jpg)

A second dialog will pop up. **Paste in the follwoing text** above all of the existing lines:

```
/*
 * Copyright © 2014 - ${year} | Wurst-Imperium | All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
```

Make sure it looks like the screenshot below, then **click OK** on both of the dialogs.

![Eclipse Code Style: Edit Template](https://cloud.githubusercontent.com/assets/10100202/12987103/dfb3c38c-d0fa-11e5-9bab-cd5c0570a7d7.jpg)

And that is it for this step. You can now use <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>F</kbd> to format your code according to our style rules.

## 6. Adding the Libraries
As you might have noticed, Eclipse is still showing you a lot of errors for the Wurst Client project. That is partially because the libraries are missing and partially because the modified Minecraft code is missing.

Right on the Wurst Client project and select **Build Path > Configure Build Path**.

![Eclipse Libraries: Build Path > Configure Build Path](https://cloud.githubusercontent.com/assets/10100202/12987883/68341358-d0fe-11e5-99e2-543821007a12.jpg)

On the dialog that appears, click **Add External JARs** and add all of the JAR files in "YourMcpFolder/jars/libraries" and in the sub-folders of that folder. I highly recommend moving them all into one folder before you do this, as that makes this process much easier.

Also add **1.8.jar** from "YourMcpFolder/jars/versions/1.8" and **slick.jar**, which you can download at the [Slick Ninjacave website](http://slick.ninjacave.com/).

![Eclipse Libraries: Java Build Path](https://cloud.githubusercontent.com/assets/10100202/12988289/4f019cdc-d100-11e5-9dcc-c8298fbb2596.jpg)

<a href="/wiki/Contributing/part4/" class="btn btn-default">
  <span class="octicon octicon-arrow-right"></span>
  Continue with Part 4
</a>
