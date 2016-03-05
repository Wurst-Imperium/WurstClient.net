---
title: How to Use .potion (Edit Potions & Add Custom Effects)
layout: wiki
description: Adds, sets or removes the effects of the held potion. Can modify multiple effects at once in the `add` and `set` modes.
category: Command
---
Adds, sets or removes the effects of the held potion. Accepts arguments in groups of 3 for the `add` and `set` modes. Can set multiple effects to one potion. Make sure it fits into the chat bar, or use Spammer to bypass this limit.

## Syntax
- `.potion add (<effect> <amplifier> <duration>)...`  
Adds effects to the potion.

- `.potion set (<effect> <amplifier> <duration>)...`  
Removes current effect and replaces them with the given effects.

- `.potion remove <effect>`  
Removes effects from the potion.

## Example
`.potion set invisibility 1 60 strength 25 75` would set the held potion's effects to Invisibility for 60 seconds and Strength 25 for 75 seconds. This potion would then look like that:

![A potion with Invisibility and Strength 25](https://cloud.githubusercontent.com/assets/11584045/8901300/74b61982-3450-11e5-9f3a-0a69402c380c.jpg)
