[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIBaseApplicationCommandInteractionData

# Interface: APIBaseApplicationCommandInteractionData<Type\>

[<internal>](../modules/internal_.md).APIBaseApplicationCommandInteractionData

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`ApplicationCommandType`](../enums/internal_.ApplicationCommandType.md) |

## Hierarchy

- **`APIBaseApplicationCommandInteractionData`**

  ↳ [`APIChatInputApplicationCommandInteractionData`](internal_.APIChatInputApplicationCommandInteractionData.md)

  ↳ [`APIUserApplicationCommandInteractionData`](internal_.APIUserApplicationCommandInteractionData.md)

  ↳ [`APIMessageApplicationCommandInteractionData`](internal_.APIMessageApplicationCommandInteractionData.md)

## Table of contents

### Properties

- [guild\_id](internal_.APIBaseApplicationCommandInteractionData.md#guild_id)
- [id](internal_.APIBaseApplicationCommandInteractionData.md#id)
- [name](internal_.APIBaseApplicationCommandInteractionData.md#name)
- [type](internal_.APIBaseApplicationCommandInteractionData.md#type)

## Properties

### guild\_id

• `Optional` **guild\_id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:7

___

### id

• **id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:4

___

### name

• **name**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:6

___

### type

• **type**: `Type`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.d.ts:5
