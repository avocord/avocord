[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIChatInputApplicationCommandInteractionData

# Interface: APIChatInputApplicationCommandInteractionData

[<internal>](../modules/internal_.md).APIChatInputApplicationCommandInteractionData

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure

## Hierarchy

- [`APIBaseApplicationCommandInteractionData`](internal_.APIBaseApplicationCommandInteractionData.md)<[`ChatInput`](../modules/internal_.md#chatinput)\>

  ↳ **`APIChatInputApplicationCommandInteractionData`**

## Table of contents

### Properties

- [guild\_id](internal_.APIChatInputApplicationCommandInteractionData.md#guild_id)
- [id](internal_.APIChatInputApplicationCommandInteractionData.md#id)
- [name](internal_.APIChatInputApplicationCommandInteractionData.md#name)
- [options](internal_.APIChatInputApplicationCommandInteractionData.md#options)
- [resolved](internal_.APIChatInputApplicationCommandInteractionData.md#resolved)
- [type](internal_.APIChatInputApplicationCommandInteractionData.md#type)

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

### options

• `Optional` **options**: [`APIApplicationCommandInteractionDataOption`](../modules/internal_.md#apiapplicationcommandinteractiondataoption)[]

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:46

___

### resolved

• `Optional` **resolved**: [`APIChatInputApplicationCommandInteractionDataResolved`](internal_.APIChatInputApplicationCommandInteractionDataResolved.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:47

___

### type

• **type**: [`ChatInput`](../modules/internal_.md#chatinput)

#### Inherited from

[APIBaseApplicationCommandInteractionData](internal_.APIBaseApplicationCommandInteractionData.md).[type](internal_.APIBaseApplicationCommandInteractionData.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:5
