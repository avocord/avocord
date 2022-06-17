[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIThreadChannel

# Interface: APIThreadChannel

[<internal>](../modules/internal_.md).APIThreadChannel

## Hierarchy

- [`APIGuildChannel`](internal_.APIGuildChannel.md)<[`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread)\>

  ↳ **`APIThreadChannel`**

## Table of contents

### Properties

- [flags](internal_.APIThreadChannel.md#flags)
- [guild\_id](internal_.APIThreadChannel.md#guild_id)
- [id](internal_.APIThreadChannel.md#id)
- [last\_message\_id](internal_.APIThreadChannel.md#last_message_id)
- [member](internal_.APIThreadChannel.md#member)
- [member\_count](internal_.APIThreadChannel.md#member_count)
- [message\_count](internal_.APIThreadChannel.md#message_count)
- [name](internal_.APIThreadChannel.md#name)
- [nsfw](internal_.APIThreadChannel.md#nsfw)
- [owner\_id](internal_.APIThreadChannel.md#owner_id)
- [parent\_id](internal_.APIThreadChannel.md#parent_id)
- [permission\_overwrites](internal_.APIThreadChannel.md#permission_overwrites)
- [position](internal_.APIThreadChannel.md#position)
- [rate\_limit\_per\_user](internal_.APIThreadChannel.md#rate_limit_per_user)
- [thread\_metadata](internal_.APIThreadChannel.md#thread_metadata)
- [type](internal_.APIThreadChannel.md#type)

## Properties

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

The id of the last message sent in this thread (may not point to an existing or valid message)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:192

___

### member

• `Optional` **member**: [`APIThreadMember`](internal_.APIThreadMember.md)

The client users member for the thread, only included in select endpoints

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:162

___

### member\_count

• `Optional` **member\_count**: `number`

The approximate member count of the thread, does not count above 50 even if there are more members

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:174

___

### message\_count

• `Optional` **message\_count**: `number`

The approximate message count of the thread, does not count above 50 even if there are more messages

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:170

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

### owner\_id

• `Optional` **owner\_id**: `string`

ID of the thread creator

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:188

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

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

Amount of seconds a user has to wait before sending another message (0-21600);
bots, as well as users with the permission `MANAGE_MESSAGES` or `MANAGE_CHANNELS`, are unaffected

`rate_limit_per_user` also applies to thread creation. Users can send one message and create one thread during each `rate_limit_per_user` interval.

For thread channels, `rate_limit_per_user` is only returned if the field is set to a non-zero and non-null value.
The absence of this field in API calls and Gateway events should indicate that slowmode has been reset to the default value.

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:184

___

### thread\_metadata

• `Optional` **thread\_metadata**: [`APIThreadMetadata`](internal_.APIThreadMetadata.md)

The metadata for a thread channel not shared by other channels

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:166

___

### type

• **type**: [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread)

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[type](internal_.APIGuildChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
