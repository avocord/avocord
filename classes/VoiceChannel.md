[Avocord](../README.md) / [Exports](../modules.md) / VoiceChannel

# Class: VoiceChannel

## Hierarchy

- [`BaseGuildChannel`](BaseGuildChannel.md)<[`APIVoiceChannel`](../interfaces/internal_.APIVoiceChannel.md)\>

  ↳ **`VoiceChannel`**

## Table of contents

### Constructors

- [constructor](VoiceChannel.md#constructor)

### Properties

- [client](VoiceChannel.md#client)
- [data](VoiceChannel.md#data)
- [guild](VoiceChannel.md#guild)
- [voiceStates](VoiceChannel.md#voicestates)

### Accessors

- [bitrate](VoiceChannel.md#bitrate)
- [guildId](VoiceChannel.md#guildid)
- [id](VoiceChannel.md#id)
- [name](VoiceChannel.md#name)
- [nsfw](VoiceChannel.md#nsfw)
- [parentId](VoiceChannel.md#parentid)
- [permissionOverwrites](VoiceChannel.md#permissionoverwrites)
- [rtcRegion](VoiceChannel.md#rtcregion)
- [type](VoiceChannel.md#type)
- [userLimit](VoiceChannel.md#userlimit)
- [videoQualityMode](VoiceChannel.md#videoqualitymode)

### Methods

- [delete](VoiceChannel.md#delete)
- [edit](VoiceChannel.md#edit)

## Constructors

### constructor

• **new VoiceChannel**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIVoiceChannel`](../interfaces/internal_.APIVoiceChannel.md) |
| `guild` | [`Guild`](Guild.md) |

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[constructor](BaseGuildChannel.md#constructor)

#### Defined in

[src/structures/BaseGuildChannel.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L11)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[client](BaseGuildChannel.md#client)

#### Defined in

[src/structures/BaseGuildChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L8)

___

### data

• **data**: [`APIVoiceChannel`](../interfaces/internal_.APIVoiceChannel.md)

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[data](BaseGuildChannel.md#data)

#### Defined in

[src/structures/BaseGuildChannel.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L7)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[guild](BaseGuildChannel.md#guild)

#### Defined in

[src/structures/BaseGuildChannel.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L9)

___

### voiceStates

• **voiceStates**: [`Collection`](internal_.Collection.md)<`string`, `unknown`\>

#### Defined in

[src/structures/channel/VoiceChannel.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L7)

## Accessors

### bitrate

• `get` **bitrate**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/structures/channel/VoiceChannel.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L9)

___

### guildId

• `get` **guildId**(): `string`

#### Returns

`string`

#### Inherited from

BaseGuildChannel.guildId

#### Defined in

[src/structures/BaseGuildChannel.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L29)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

BaseGuildChannel.id

#### Defined in

[src/structures/BaseGuildChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L21)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

BaseGuildChannel.name

#### Defined in

[src/structures/BaseGuildChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L17)

___

### nsfw

• `get` **nsfw**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/channel/VoiceChannel.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L29)

___

### parentId

• `get` **parentId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/VoiceChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L17)

___

### permissionOverwrites

• `get` **permissionOverwrites**(): `undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Returns

`undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Defined in

[src/structures/channel/VoiceChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L21)

___

### rtcRegion

• `get` **rtcRegion**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/VoiceChannel.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L25)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Inherited from

BaseGuildChannel.type

#### Defined in

[src/structures/BaseGuildChannel.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L25)

___

### userLimit

• `get` **userLimit**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/structures/channel/VoiceChannel.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L13)

___

### videoQualityMode

• `get` **videoQualityMode**(): `undefined` \| [`VideoQualityMode`](../enums/internal_.VideoQualityMode.md)

#### Returns

`undefined` \| [`VideoQualityMode`](../enums/internal_.VideoQualityMode.md)

#### Defined in

[src/structures/channel/VoiceChannel.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/VoiceChannel.ts#L33)

## Methods

### delete

▸ **delete**(`reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[delete](BaseGuildChannel.md#delete)

#### Defined in

[src/structures/BaseGuildChannel.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L33)

___

### edit

▸ **edit**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EditChannelData`](../interfaces/internal_.EditChannelData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[edit](BaseGuildChannel.md#edit)

#### Defined in

[src/structures/BaseGuildChannel.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L37)
