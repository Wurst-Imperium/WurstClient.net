---
title: .potion Command
layout: wiki
tags:
  - cmd
---
Adds, sets or removes effects of the held potion. Accepts arguments in groups of 3 for add and set modes. Can set multiple effects to one potion. Make sure it fits the chat bar.

## Syntax

`remove <effect>`
`add (<effect> <amplifier> <duration>)...`
`set (<effect> <amplifier> <duration>)...`
or longer:
`.potion <add/set> <id/name> <amplifier> <duration> <id/name> <amplifier> <duration>`

- `add` adds effects
- `set` removes current effect and changes them with given effects
- `remove` removes effects

## Example
`.potion set 14 0 60 5 24 75` would set the held potion's effects to invisibility for 60 seconds and strength 25 for 75 seconds.

![.potion](https://cloud.githubusercontent.com/assets/11584045/8901300/74b61982-3450-11e5-9f3a-0a69402c380c.jpg)
