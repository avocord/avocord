[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APISelectMenuOption

# Interface: APISelectMenuOption

[<internal>](../modules/internal_.md).APISelectMenuOption

https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure

## Table of contents

### Properties

- [default](internal_.APISelectMenuOption.md#default)
- [description](internal_.APISelectMenuOption.md#description)
- [emoji](internal_.APISelectMenuOption.md#emoji)
- [label](internal_.APISelectMenuOption.md#label)
- [value](internal_.APISelectMenuOption.md#value)

## Properties

### default

• `Optional` **default**: `boolean`

Whether this option should be already-selected by default

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1242

___

### description

• `Optional` **description**: `string`

An additional description of the option (max 50 chars)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1234

___

### emoji

• `Optional` **emoji**: [`APIMessageComponentEmoji`](internal_.APIMessageComponentEmoji.md)

The emoji to display to the left of the option

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1238

___

### label

• **label**: `string`

The user-facing name of the option (max 25 chars)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1226

___

### value

• **value**: `string`

The dev-defined value of the option (max 100 chars)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1230
