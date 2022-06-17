[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIGuildChannel

# Interface: APIGuildChannel<T\>

[<internal>](../modules/internal_.md).APIGuildChannel

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChannelType`](../enums/internal_.ChannelType.md) |

## Hierarchy

- [`APIChannelBase`](internal_.APIChannelBase.md)<`T`\>

  ↳ **`APIGuildChannel`**

  ↳↳ [`APIThreadChannel`](internal_.APIThreadChannel.md)

  ↳↳ [`APIVoiceChannel`](internal_.APIVoiceChannel.md)

  ↳↳ [`APIGuildTextChannel`](internal_.APIGuildTextChannel.md)

## Table of contents

### Properties

- [flags](internal_.APIGuildChannel.md#flags)
- [guild\_id](internal_.APIGuildChannel.md#guild_id)
- [id](internal_.APIGuildChannel.md#id)
- [name](internal_.APIGuildChannel.md#name)
- [nsfw](internal_.APIGuildChannel.md#nsfw)
- [parent\_id](internal_.APIGuildChannel.md#parent_id)
- [permission\_overwrites](internal_.APIGuildChannel.md#permission_overwrites)
- [position](internal_.APIGuildChannel.md#position)
- [type](internal_.APIGuildChannel.md#type)

## Properties

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[flags](internal_.APIChannelBase.md#flags)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### guild\_id

• `Optional` **guild\_id**: `string`

The id of the guild (may be missing for some channel objects received over gateway guild dispatches)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:51

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[id](internal_.APIChannelBase.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[name](internal_.APIChannelBase.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether the channel is nsfw

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:73

___

### parent\_id

• `Optional` **parent\_id**: ``null`` \| `string`

ID of the parent category for a channel (each parent category can contain up to 50 channels)

OR

ID of the parent channel for a thread

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:69

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`APIOverwrite`](internal_.APIOverwrite.md)[]

Explicit permission overwrites for members and roles

See https://discord.com/developers/docs/resources/channel#overwrite-object

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:57

___

### position

• `Optional` **position**: `number`

Sorting position of the channel

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:61

___

### type

• **type**: `T`

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIChannelBase](internal_.APIChannelBase.md).[type](internal_.APIChannelBase.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
