[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIChannelBase

# Interface: APIChannelBase<T\>

[<internal>](../modules/internal_.md).APIChannelBase

This interface is used to allow easy extension for other channel types. While
also allowing `APIPartialChannel` to be used without breaking.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChannelType`](../enums/internal_.ChannelType.md) |

## Hierarchy

- [`APIPartialChannel`](internal_.APIPartialChannel.md)

  ↳ **`APIChannelBase`**

  ↳↳ [`APIGuildChannel`](internal_.APIGuildChannel.md)

  ↳↳ [`APITextBasedChannel`](internal_.APITextBasedChannel.md)

## Table of contents

### Properties

- [flags](internal_.APIChannelBase.md#flags)
- [id](internal_.APIChannelBase.md#id)
- [name](internal_.APIChannelBase.md#name)
- [type](internal_.APIChannelBase.md#type)

## Properties

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APIPartialChannel](internal_.APIPartialChannel.md).[id](internal_.APIPartialChannel.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APIPartialChannel](internal_.APIPartialChannel.md).[name](internal_.APIPartialChannel.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### type

• **type**: `T`

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Overrides

[APIPartialChannel](internal_.APIPartialChannel.md).[type](internal_.APIPartialChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
