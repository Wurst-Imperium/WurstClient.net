---
title: How to Use .give (Give Yourself Items, Custom NBT & More)
layout: wiki
description: Allows you to give yourself any item in Creative Mode, even if the /give command is blocked. NBT data is also supported.
category: Command
---
Allows you to give yourself any item in Creative Mode, even if the `/give` command is blocked. NBT data is also supported.

## Syntax
`.give (<item_name>|<item_id>) [<amount>] [<metadata>] [<nbt>]`

`<item_name>` or `<item_id>` determines the item.

`<amount>` determines the quantity of the item. Defaults to 1.

`<metadata>` determines the metadata of the item. (e.g. the color of a wool block). Defaults to 0.

`<nbt>` determines the NBT data ([Named Binary Tag](http://minecraft.gamepedia.com/NBT_format)) of the item. Defaults to an empty NBT compound.

### Template Syntax

Besides the custom items, there are also some templates.

- `.give templates`  
Shows the list of templates.

- `.give template <template_id> [<amount>]`  
Gives you the item in the template, with an optional amount.

## Templates

1. Knockback Stick
2. One Hit Sword
3. Super Bow
4. Super Thorns Chestplate
5. Super Potion
6. Griefer Potion
