[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIGuildTextChannel

# Interface: APIGuildTextChannel<T\>

[<internal>](../modules/internal_.md).APIGuildTextChannel

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GuildTextChannelType`](../modules/internal_.md#guildtextchanneltype) |

## Hierarchy

- [`APITextBasedChannel`](internal_.APITextBasedChannel.md)<`T`\>

- [`APIGuildChannel`](internal_.APIGuildChannel.md)<`T`\>

  ↳ **`APIGuildTextChannel`**

  ↳↳ [`APITextChannel`](internal_.APITextChannel.md)

## Table of contents

### Properties

- [default\_auto\_archive\_duration](internal_.APIGuildTextChannel.md#default_auto_archive_duration)
- [flags](internal_.APIGuildTextChannel.md#flags)
- [guild\_id](internal_.APIGuildTextChannel.md#guild_id)
- [id](internal_.APIGuildTextChannel.md#id)
- [last\_message\_id](internal_.APIGuildTextChannel.md#last_message_id)
- [last\_pin\_timestamp](internal_.APIGuildTextChannel.md#last_pin_timestamp)
- [name](internal_.APIGuildTextChannel.md#name)
- [nsfw](internal_.APIGuildTextChannel.md#nsfw)
- [parent\_id](internal_.APIGuildTextChannel.md#parent_id)
- [permission\_overwrites](internal_.APIGuildTextChannel.md#permission_overwrites)
- [position](internal_.APIGuildTextChannel.md#position)
- [topic](internal_.APIGuildTextChannel.md#topic)
- [type](internal_.APIGuildTextChannel.md#type)

## Properties

### default\_auto\_archive\_duration

• `Optional` **default\_auto\_archive\_duration**: [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:80

___

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[flags](internal_.APIGuildChannel.md#flags)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### guild\_id

• `Optional` **guild\_id**: `string`

The id of the guild (may be missing for some channel objects received over gateway guild dispatches)

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[guild_id](internal_.APIGuildChannel.md#guild_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:51

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[id](internal_.APIGuildChannel.md#id)

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

### last\_pin\_timestamp

• `Optional` **last\_pin\_timestamp**: ``null`` \| `string`

When the last pinned message was pinned.
This may be `null` in events such as `GUILD_CREATE` when a message is not pinned

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:89

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[name](internal_.APIGuildChannel.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether the channel is nsfw

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[nsfw](internal_.APIGuildChannel.md#nsfw)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:73

___

### parent\_id

• `Optional` **parent\_id**: ``null`` \| `string`

ID of the parent category for a channel (each parent category can contain up to 50 channels)

OR

ID of the parent channel for a thread

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[parent_id](internal_.APIGuildChannel.md#parent_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:69

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`APIOverwrite`](internal_.APIOverwrite.md)[]

Explicit permission overwrites for members and roles

See https://discord.com/developers/docs/resources/channel#overwrite-object

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[permission_overwrites](internal_.APIGuildChannel.md#permission_overwrites)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:57

___

### position

• `Optional` **position**: `number`

Sorting position of the channel

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[position](internal_.APIGuildChannel.md#position)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:61

___

### topic

• `Optional` **topic**: ``null`` \| `string`

The channel topic (0-1024 characters)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:84

___

### type

• **type**: `T`

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[type](internal_.APIGuildChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
