[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIDMChannelBase

# Interface: APIDMChannelBase<T\>

[<internal>](../modules/internal_.md).APIDMChannelBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChannelType`](../enums/internal_.ChannelType.md) |

## Hierarchy

- [`APITextBasedChannel`](internal_.APITextBasedChannel.md)<`T`\>

  ↳ **`APIDMChannelBase`**

## Table of contents

### Properties

- [flags](internal_.APIDMChannelBase.md#flags)
- [id](internal_.APIDMChannelBase.md#id)
- [last\_message\_id](internal_.APIDMChannelBase.md#last_message_id)
- [name](internal_.APIDMChannelBase.md#name)
- [recipients](internal_.APIDMChannelBase.md#recipients)
- [type](internal_.APIDMChannelBase.md#type)

## Properties

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

[APITextBasedChannel](internal_.APITextBasedChannel.md).[flags](internal_.APITextBasedChannel.md#flags)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APITextBasedChannel](internal_.APITextBasedChannel.md).[id](internal_.APITextBasedChannel.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### last\_message\_id

• `Optional` **last\_message\_id**: ``null`` \| `string`

The id of the last message sent in this channel (may not point to an existing or valid message)

#### Inherited from

[APITextBasedChannel](internal_.APITextBasedChannel.md).[last_message_id](internal_.APITextBasedChannel.md#last_message_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:45

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APITextBasedChannel](internal_.APITextBasedChannel.md).[name](internal_.APITextBasedChannel.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### recipients

• `Optional` **recipients**: [`APIUser`](internal_.APIUser.md)[]

The recipients of the DM

See https://discord.com/developers/docs/resources/user#user-object

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:133

___

### type

• **type**: `T`

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APITextBasedChannel](internal_.APITextBasedChannel.md).[type](internal_.APITextBasedChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
