[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APITextChannel

# Interface: APITextChannel

[<internal>](../modules/internal_.md).APITextChannel

## Hierarchy

- [`APIGuildTextChannel`](internal_.APIGuildTextChannel.md)<[`GuildText`](../modules/internal_.md#guildtext)\>

  ↳ **`APITextChannel`**

## Table of contents

### Properties

- [default\_auto\_archive\_duration](internal_.APITextChannel.md#default_auto_archive_duration)
- [flags](internal_.APITextChannel.md#flags)
- [guild\_id](internal_.APITextChannel.md#guild_id)
- [id](internal_.APITextChannel.md#id)
- [last\_message\_id](internal_.APITextChannel.md#last_message_id)
- [last\_pin\_timestamp](internal_.APITextChannel.md#last_pin_timestamp)
- [name](internal_.APITextChannel.md#name)
- [nsfw](internal_.APITextChannel.md#nsfw)
- [parent\_id](internal_.APITextChannel.md#parent_id)
- [permission\_overwrites](internal_.APITextChannel.md#permission_overwrites)
- [position](internal_.APITextChannel.md#position)
- [rate\_limit\_per\_user](internal_.APITextChannel.md#rate_limit_per_user)
- [topic](internal_.APITextChannel.md#topic)
- [type](internal_.APITextChannel.md#type)

## Properties

### default\_auto\_archive\_duration

• `Optional` **default\_auto\_archive\_duration**: [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[default_auto_archive_duration](internal_.APIGuildTextChannel.md#default_auto_archive_duration)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:80

___

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[flags](internal_.APIGuildTextChannel.md#flags)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### guild\_id

• `Optional` **guild\_id**: `string`

The id of the guild (may be missing for some channel objects received over gateway guild dispatches)

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[guild_id](internal_.APIGuildTextChannel.md#guild_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:51

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[id](internal_.APIGuildTextChannel.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### last\_message\_id

• `Optional` **last\_message\_id**: ``null`` \| `string`

The id of the last message sent in this channel (may not point to an existing or valid message)

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[last_message_id](internal_.APIGuildTextChannel.md#last_message_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:45

___

### last\_pin\_timestamp

• `Optional` **last\_pin\_timestamp**: ``null`` \| `string`

When the last pinned message was pinned.
This may be `null` in events such as `GUILD_CREATE` when a message is not pinned

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[last_pin_timestamp](internal_.APIGuildTextChannel.md#last_pin_timestamp)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:89

___

### name

• `Optional` **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[name](internal_.APIGuildTextChannel.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether the channel is nsfw

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[nsfw](internal_.APIGuildTextChannel.md#nsfw)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:73

___

### parent\_id

• `Optional` **parent\_id**: ``null`` \| `string`

ID of the parent category for a channel (each parent category can contain up to 50 channels)

OR

ID of the parent channel for a thread

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[parent_id](internal_.APIGuildTextChannel.md#parent_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:69

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`APIOverwrite`](internal_.APIOverwrite.md)[]

Explicit permission overwrites for members and roles

See https://discord.com/developers/docs/resources/channel#overwrite-object

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[permission_overwrites](internal_.APIGuildTextChannel.md#permission_overwrites)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:57

___

### position

• `Optional` **position**: `number`

Sorting position of the channel

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[position](internal_.APIGuildTextChannel.md#position)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:61

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

Amount of seconds a user has to wait before sending another message (0-21600);
bots, as well as users with the permission `MANAGE_MESSAGES` or `MANAGE_CHANNELS`, are unaffected

`rate_limit_per_user` also applies to thread creation. Users can send one message and create one thread during each `rate_limit_per_user` interval.

For thread channels, `rate_limit_per_user` is only returned if the field is set to a non-zero and non-null value.
The absence of this field in API calls and Gateway events should indicate that slowmode has been reset to the default value.

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:101

___

### topic

• `Optional` **topic**: ``null`` \| `string`

The channel topic (0-1024 characters)

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[topic](internal_.APIGuildTextChannel.md#topic)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:84

___

### type

• **type**: [`GuildText`](../modules/internal_.md#guildtext)

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIGuildTextChannel](internal_.APIGuildTextChannel.md).[type](internal_.APIGuildTextChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
