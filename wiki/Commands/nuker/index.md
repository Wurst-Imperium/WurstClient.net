---
title: How to Use .nuker (Nuker Settings - Change Mode, ID & More)
layout: wiki
category: Command
---
Changes the settings of Nuker.

## Syntax
- `.nuker mode (normal|id|flat|smash)` changes the mode for Nuker to the given one.

- `.nuker id <block_id>` sets the ID for IDNuker.

- `.nuker name <block_name>` sets the ID for IDNuker using a block name. The `minecraft:` prefix can be omitted, therefore `furnace` is the same block as `minecraft:furnace`.

## Modes
<dl class="dl-horizontal">
  <dt>
    Normal
  </dt>
  <dd>
    Destroys every block around you.
  </dd>
  <dt>
    ID
  </dt>
  <dd>
    Only destroys blocks with the given ID.
  </dd>
  <dt>
    Flat
  </dt>
  <dd>
    Destroys every block around you and above your feet, but not underneath your feet.
  </dd>
  <dt>
    Smash
  </dt>
  <dd>
    Destroys every block that can be destroyed with one hit. (tall grass, flowers, etc.)
  </dd>
</dl>
