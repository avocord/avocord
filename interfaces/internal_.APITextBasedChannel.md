[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APITextBasedChannel

# Interface: APITextBasedChannel<T\>

[<internal>](../modules/internal_.md).APITextBasedChannel

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChannelType`](../enums/internal_.ChannelType.md) |

## Hierarchy

- [`APIChannelBase`](internal_.APIChannelBase.md)<`T`\>

  ↳ **`APITextBasedChannel`**

  ↳↳ [`APIGuildTextChannel`](internal_.APIGuildTextChannel.md)

  ↳↳ [`APIDMChannelBase`](internal_.APIDMChannelBase.md)

## Table of contents

### Properties

- [flags](internal_.APITextBasedChannel.md#flags)
- [id](internal_.APITextBasedChannel.md#id)
- [last\_message\_id](internal_.APITextBasedChannel.md#last_message_id)
- [name](internal_.APITextBasedChannel.md#name)
- [type](internal_.APITextBasedChannel.md#type)

## Properties

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[flags](internal_.APIChannelBase.md#flags)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[id](internal_.APIChannelBase.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### last\_message\_id

• `Optional` **last\_message\_id**: ``null`` \| `string`

The id of the last message sent in this channel (may not point to an existing or valid message)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:45

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[name](internal_.APIChannelBase.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### type

• **type**: `T`

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[type](internal_.APIChannelBase.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
