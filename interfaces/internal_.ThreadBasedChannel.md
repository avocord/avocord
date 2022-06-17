[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ThreadBasedChannel

# Interface: ThreadBasedChannel

[<internal>](../modules/internal_.md).ThreadBasedChannel

https://discord.com/developers/docs/resources/channel#channel-object-channel-structure

## Hierarchy

- [`TextBasedChannel`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.TextBasedChannel.md)

- [`GuildBasedChannel`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md)

  ↳ **`ThreadBasedChannel`**

  ↳↳ [`NewsThread`](internal_.NewsThread.md)

  ↳↳ [`PublicThread`](internal_.PublicThread.md)

  ↳↳ [`PrivateThread`](internal_.PrivateThread.md)

  ↳↳ [`NewsThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.NewsThread.md)

  ↳↳ [`PublicThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.PublicThread.md)

  ↳↳ [`PrivateThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.PrivateThread.md)

  ↳↳ [`NewsThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.NewsThread.md)

  ↳↳ [`PublicThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.PublicThread.md)

  ↳↳ [`PrivateThread`](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.PrivateThread.md)

## Table of contents

### Properties

- [default\_auto\_archive\_duration](internal_.ThreadBasedChannel.md#default_auto_archive_duration)
- [flags](internal_.ThreadBasedChannel.md#flags)
- [guild\_id](internal_.ThreadBasedChannel.md#guild_id)
- [id](internal_.ThreadBasedChannel.md#id)
- [last\_message\_id](internal_.ThreadBasedChannel.md#last_message_id)
- [last\_pin\_timestamp](internal_.ThreadBasedChannel.md#last_pin_timestamp)
- [member](internal_.ThreadBasedChannel.md#member)
- [member\_count](internal_.ThreadBasedChannel.md#member_count)
- [message\_count](internal_.ThreadBasedChannel.md#message_count)
- [name](internal_.ThreadBasedChannel.md#name)
- [nsfw](internal_.ThreadBasedChannel.md#nsfw)
- [parent\_id](internal_.ThreadBasedChannel.md#parent_id)
- [permission\_overwrites](internal_.ThreadBasedChannel.md#permission_overwrites)
- [permissions](internal_.ThreadBasedChannel.md#permissions)
- [position](internal_.ThreadBasedChannel.md#position)
- [thread\_metadata](internal_.ThreadBasedChannel.md#thread_metadata)

## Properties

### default\_auto\_archive\_duration

• **default\_auto\_archive\_duration**: `number`

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:87

___

### flags

• `Optional` **flags**: `number`

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:88

___

### guild\_id

• **guild\_id**: `string`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[guild_id](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#guild_id)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:19

___

### id

• **id**: `string`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[id](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#id)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:4

___

### last\_message\_id

• **last\_message\_id**: ``null`` \| `string`

#### Inherited from

[TextBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.TextBasedChannel.md).[last_message_id](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.TextBasedChannel.md#last_message_id)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:11

___

### last\_pin\_timestamp

• **last\_pin\_timestamp**: ``null`` \| `string`

#### Inherited from

[TextBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.TextBasedChannel.md).[last_pin_timestamp](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.TextBasedChannel.md#last_pin_timestamp)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:12

___

### member

• `Optional` **member**: [`ThreadMember`](../modules/internal_.md#threadmember)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:86

___

### member\_count

• **member\_count**: `number`

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:84

___

### message\_count

• **message\_count**: `number`

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:83

___

### name

• **name**: `string`

1-100 chars

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[name](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#name)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:23

___

### nsfw

• **nsfw**: `boolean`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[nsfw](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#nsfw)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:26

___

### parent\_id

• **parent\_id**: ``null`` \| `string`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[parent_id](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#parent_id)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:24

___

### permission\_overwrites

• **permission\_overwrites**: [`Overwrite`](../modules/internal_.md#overwrite)[]

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[permission_overwrites](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#permission_overwrites)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:21

___

### permissions

• `Optional` **permissions**: `string`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[permissions](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#permissions)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:25

___

### position

• **position**: `number`

#### Inherited from

[GuildBasedChannel](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md).[position](internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.GuildBasedChannel.md#position)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:20

___

### thread\_metadata

• **thread\_metadata**: [`ThreadMetadata`](../modules/internal_.md#threadmetadata)

#### Defined in

node_modules/discord-typings/Resources/Channel.d.ts:85
