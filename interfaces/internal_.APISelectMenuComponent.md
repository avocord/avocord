[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APISelectMenuComponent

# Interface: APISelectMenuComponent

[<internal>](../modules/internal_.md).APISelectMenuComponent

https://discord.com/developers/docs/interactions/message-components#select-menus

## Hierarchy

- [`APIBaseComponent`](internal_.APIBaseComponent.md)<[`SelectMenu`](../modules/internal_.md#selectmenu)\>

  ↳ **`APISelectMenuComponent`**

## Table of contents

### Properties

- [custom\_id](internal_.APISelectMenuComponent.md#custom_id)
- [disabled](internal_.APISelectMenuComponent.md#disabled)
- [max\_values](internal_.APISelectMenuComponent.md#max_values)
- [min\_values](internal_.APISelectMenuComponent.md#min_values)
- [options](internal_.APISelectMenuComponent.md#options)
- [placeholder](internal_.APISelectMenuComponent.md#placeholder)
- [type](internal_.APISelectMenuComponent.md#type)

## Properties

### custom\_id

• **custom\_id**: `string`

A developer-defined identifier for the select menu, max 100 characters

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1191

___

### disabled

• `Optional` **disabled**: `boolean`

Disable the select

**`default`** false

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1217

___

### max\_values

• `Optional` **max\_values**: `number`

The maximum number of items that can be chosen; max 25

**`default`** 1

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1211

___

### min\_values

• `Optional` **min\_values**: `number`

The minimum number of items that must be chosen; min 0, max 25

**`default`** 1

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1205

___

### options

• **options**: [`APISelectMenuOption`](internal_.APISelectMenuOption.md)[]

The choices in the select, max 25

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1195

___

### placeholder

• `Optional` **placeholder**: `string`

Custom placeholder text if nothing is selected, max 150 characters

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1199

___

### type

• **type**: [`SelectMenu`](../modules/internal_.md#selectmenu)

The type of the component

#### Inherited from

[APIBaseComponent](internal_.APIBaseComponent.md).[type](internal_.APIBaseComponent.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1087
