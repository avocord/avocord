[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIMessageApplicationCommandInteractionData

# Interface: APIMessageApplicationCommandInteractionData

[<internal>](../modules/internal_.md).APIMessageApplicationCommandInteractionData

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure

## Hierarchy

- [`APIBaseApplicationCommandInteractionData`](internal_.APIBaseApplicationCommandInteractionData.md)<[`Message`](../enums/internal_.ApplicationCommandType.md#message)\>

  ↳ **`APIMessageApplicationCommandInteractionData`**

## Table of contents

### Properties

- [guild\_id](internal_.APIMessageApplicationCommandInteractionData.md#guild_id)
- [id](internal_.APIMessageApplicationCommandInteractionData.md#id)
- [name](internal_.APIMessageApplicationCommandInteractionData.md#name)
- [resolved](internal_.APIMessageApplicationCommandInteractionData.md#resolved)
- [target\_id](internal_.APIMessageApplicationCommandInteractionData.md#target_id)
- [type](internal_.APIMessageApplicationCommandInteractionData.md#type)

## Properties

### guild\_id

• `Optional` **guild\_id**: `string`

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[guild_id](internal_.APIBaseApplicationCommandInteractionData.md#guild_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:7

___

### id

• **id**: `string`

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[id](internal_.APIBaseApplicationCommandInteractionData.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:4

___

### name

• **name**: `string`

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[name](internal_.APIBaseApplicationCommandInteractionData.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:6

___

### resolved

• **resolved**: [`APIMessageApplicationCommandInteractionDataResolved`](internal_.APIMessageApplicationCommandInteractionDataResolved.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.d.ts:26

___

### target\_id

• **target\_id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.d.ts:25

___

### type

• **type**: [`Message`](../enums/internal_.ApplicationCommandType.md#message)

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[type](internal_.APIBaseApplicationCommandInteractionData.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:5
