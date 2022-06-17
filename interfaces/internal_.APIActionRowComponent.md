[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIActionRowComponent

# Interface: APIActionRowComponent<T\>

[<internal>](../modules/internal_.md).APIActionRowComponent

https://discord.com/developers/docs/interactions/message-components#action-rows

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`APIActionRowComponentTypes`](../modules/internal_.md#apiactionrowcomponenttypes) |

## Hierarchy

- [`APIBaseComponent`](internal_.APIBaseComponent.md)<[`ActionRow`](../modules/internal_.md#actionrow)\>

  ↳ **`APIActionRowComponent`**

## Table of contents

### Properties

- [components](internal_.APIActionRowComponent.md#components)
- [type](internal_.APIActionRowComponent.md#type)

## Properties

### components

• **components**: `T`[]

The components in the ActionRow

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1117

___

### type

• **type**: [`ActionRow`](../modules/internal_.md#actionrow)

The type of the component

#### Inherited from

[APIBaseComponent](internal_.APIBaseComponent.md).[type](internal_.APIBaseComponent.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1087
