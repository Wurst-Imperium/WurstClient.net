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

![Eclipse Code Style: Properties](https://cloud.githubusercontent.com/assets/11584045/13555007/d4d7cfea-e3be-11e5-9a6b-f4e8206ddd7e.jpg)

In the dialog that appears, select **Java Code Style > Clean Up**. Now there should be a bunch of options on the right side, most of which are grayed out.

To un-gray those options, **check "Enable project specific settings"**. Then click the **Import** button.

In the file selector that appears, go to your **Wurst-Client** folder (where the clone is), open the **codestyle** folder and select the file **cleanup.xml**. Once you have that, it should say "Active profile: Alexander01998" as it does in the screenshot below.

Finally, **click "Apply"** to save the changes.

![Eclipse Code Style: Clean Up](https://cloud.githubusercontent.com/assets/11584045/13555009/f9f9ac12-e3be-11e5-9ec7-77e2c0a8ed81.jpg)

Now do the same thing with **Java Code Style > Formatter**. Just do what you did with Clean Up, except that you import **"formatter.xml"** instead of "cleanup.xml".

![Eclipse Code Style: Formatter](https://cloud.githubusercontent.com/assets/11584045/13555014/1a1a7fbc-e3bf-11e5-9923-91680780c5e6.jpg)

Select **Java Code Style > Code Templates** and **check "Enable project specific settings"** again. As you can tell, this screen looks a bit different than the previous two.

Select **Code > New Java Files** and click **Edit**.

![Eclipse Code Style: Code Templates](https://cloud.githubusercontent.com/assets/11584045/13555029/46eea59a-e3bf-11e5-9349-9d3bc678b555.jpg)

A second dialog will pop up. **Paste in the following text** above all of the existing lines:

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

![Eclipse Code Style: Edit Template](https://cloud.githubusercontent.com/assets/11584045/13555037/660f8dcc-e3bf-11e5-8464-bdb61c1661e0.jpg)

And that is it for this step. You can now use <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>F</kbd> to format your code according to our style rules.

## 6. Adding the Libraries
As you might have noticed, Eclipse is still showing you a lot of errors for the Wurst Client project. That is partially because the libraries are missing and partially because the modified Minecraft code is missing.

Right on the Wurst Client project and select **Build Path > Configure Build Path**.

![Eclipse Libraries: Build Path > Configure Build Path](https://cloud.githubusercontent.com/assets/11584045/13555043/8190188c-e3bf-11e5-892c-db92d229eded.jpg)

On the dialog that appears, click **Add External JARs** and add all of the JAR files in "YourMcpFolder/jars/libraries" and in the sub-folders of that folder. I highly recommend moving them all into one folder before you do this, as that makes this process much easier.

Also add **1.8.jar** from "YourMcpFolder/jars/versions/1.8" and **slick.jar**, which you can download at the [Slick Ninjacave website](http://slick.ninjacave.com/).

![Eclipse Libraries: Java Build Path](https://cloud.githubusercontent.com/assets/11584045/13555054/bbb8d6a2-e3bf-11e5-8379-972e2fb92fb0.jpg)

<a href="/wiki/Contributing/part4/" class="btn btn-default">
  <span class="octicon octicon-arrow-right"></span>
  Continue with Part 4
</a>
