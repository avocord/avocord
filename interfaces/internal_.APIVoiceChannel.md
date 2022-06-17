[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIVoiceChannel

# Interface: APIVoiceChannel

[<internal>](../modules/internal_.md).APIVoiceChannel

## Hierarchy

- [`APIGuildChannel`](internal_.APIGuildChannel.md)<[`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildVoice`](../modules/internal_.md#guildvoice)\>

  ↳ **`APIVoiceChannel`**

## Table of contents

### Properties

- [bitrate](internal_.APIVoiceChannel.md#bitrate)
- [flags](internal_.APIVoiceChannel.md#flags)
- [guild\_id](internal_.APIVoiceChannel.md#guild_id)
- [id](internal_.APIVoiceChannel.md#id)
- [name](internal_.APIVoiceChannel.md#name)
- [nsfw](internal_.APIVoiceChannel.md#nsfw)
- [parent\_id](internal_.APIVoiceChannel.md#parent_id)
- [permission\_overwrites](internal_.APIVoiceChannel.md#permission_overwrites)
- [position](internal_.APIVoiceChannel.md#position)
- [rtc\_region](internal_.APIVoiceChannel.md#rtc_region)
- [type](internal_.APIVoiceChannel.md#type)
- [user\_limit](internal_.APIVoiceChannel.md#user_limit)
- [video\_quality\_mode](internal_.APIVoiceChannel.md#video_quality_mode)

## Properties

### bitrate

• `Optional` **bitrate**: `number`

The bitrate (in bits) of the voice channel

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:109

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

### rtc\_region

• `Optional` **rtc\_region**: ``null`` \| `string`

Voice region id for the voice or stage channel, automatic when set to `null`

See https://discord.com/developers/docs/resources/voice#voice-region-object

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:119

___

### type

• **type**: [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

[APIGuildChannel](internal_.APIGuildChannel.md).[type](internal_.APIGuildChannel.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36

___

### user\_limit

• `Optional` **user\_limit**: `number`

The user limit of the voice channel

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:113

___

### video\_quality\_mode

• `Optional` **video\_quality\_mode**: [`VideoQualityMode`](../enums/internal_.VideoQualityMode.md)

The camera video quality mode of the voice channel, `1` when not present

See https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:125
