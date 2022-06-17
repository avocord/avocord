[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIUserApplicationCommandInteractionData

# Interface: APIUserApplicationCommandInteractionData

[<internal>](../modules/internal_.md).APIUserApplicationCommandInteractionData

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure

## Hierarchy

- [`APIBaseApplicationCommandInteractionData`](internal_.APIBaseApplicationCommandInteractionData.md)<[`User`](../enums/internal_.ApplicationCommandType.md#user)\>

  ↳ **`APIUserApplicationCommandInteractionData`**

## Table of contents

### Properties

- [guild\_id](internal_.APIUserApplicationCommandInteractionData.md#guild_id)
- [id](internal_.APIUserApplicationCommandInteractionData.md#id)
- [name](internal_.APIUserApplicationCommandInteractionData.md#name)
- [resolved](internal_.APIUserApplicationCommandInteractionData.md#resolved)
- [target\_id](internal_.APIUserApplicationCommandInteractionData.md#target_id)
- [type](internal_.APIUserApplicationCommandInteractionData.md#type)

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

• **resolved**: [`APIUserApplicationCommandInteractionDataResolved`](internal_.APIUserApplicationCommandInteractionDataResolved.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.d.ts:12

___

### target\_id

• **target\_id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.d.ts:11

___

### type

• **type**: [`User`](../enums/internal_.ApplicationCommandType.md#user)

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[type](internal_.APIBaseApplicationCommandInteractionData.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:5
