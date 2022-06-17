[Avocord](../README.md) / [Exports](../modules.md) / NewsChannel

# Class: NewsChannel

## Hierarchy

- [`BaseGuildChannel`](BaseGuildChannel.md)<[`APINewsChannel`](../modules/internal_.md#apinewschannel)\>

  ↳ **`NewsChannel`**

## Table of contents

### Constructors

- [constructor](NewsChannel.md#constructor)

### Properties

- [client](NewsChannel.md#client)
- [data](NewsChannel.md#data)
- [guild](NewsChannel.md#guild)

### Accessors

- [defaultAutoArchiveDuration](NewsChannel.md#defaultautoarchiveduration)
- [guildId](NewsChannel.md#guildid)
- [id](NewsChannel.md#id)
- [lastMessageId](NewsChannel.md#lastmessageid)
- [lastPinTimestamp](NewsChannel.md#lastpintimestamp)
- [name](NewsChannel.md#name)
- [nsfw](NewsChannel.md#nsfw)
- [parentId](NewsChannel.md#parentid)
- [permissionOverwrites](NewsChannel.md#permissionoverwrites)
- [topic](NewsChannel.md#topic)
- [type](NewsChannel.md#type)

### Methods

- [createInvite](NewsChannel.md#createinvite)
- [createMessage](NewsChannel.md#createmessage)
- [createThread](NewsChannel.md#createthread)
- [delete](NewsChannel.md#delete)
- [deleteMessage](NewsChannel.md#deletemessage)
- [deleteMessages](NewsChannel.md#deletemessages)
- [edit](NewsChannel.md#edit)
- [fetchInvites](NewsChannel.md#fetchinvites)
- [fetchMessage](NewsChannel.md#fetchmessage)
- [fetchMessages](NewsChannel.md#fetchmessages)
- [fetchPins](NewsChannel.md#fetchpins)
- [fetchThread](NewsChannel.md#fetchthread)
- [getArchivedPrivateThreads](NewsChannel.md#getarchivedprivatethreads)
- [getArchivedPublicThreads](NewsChannel.md#getarchivedpublicthreads)
- [syncPermissions](NewsChannel.md#syncpermissions)

## Constructors

### constructor

• **new NewsChannel**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APINewsChannel`](../modules/internal_.md#apinewschannel) |
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

• **data**: [`APINewsChannel`](../modules/internal_.md#apinewschannel)

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

## Accessors

### defaultAutoArchiveDuration

• `get` **defaultAutoArchiveDuration**(): `undefined` \| [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

#### Returns

`undefined` \| [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

#### Defined in

[src/structures/channel/NewsChannel.ts:32](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L32)

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

### lastMessageId

• `get` **lastMessageId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/NewsChannel.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L12)

___

### lastPinTimestamp

• `get` **lastPinTimestamp**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/NewsChannel.ts:28](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L28)

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

• `get` **nsfw**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/structures/channel/NewsChannel.ts:24](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L24)

___

### parentId

• `get` **parentId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/NewsChannel.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L16)

___

### permissionOverwrites

• `get` **permissionOverwrites**(): `undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Returns

`undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Defined in

[src/structures/channel/NewsChannel.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L20)

___

### topic

• `get` **topic**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/NewsChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L8)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Inherited from

BaseGuildChannel.type

#### Defined in

[src/structures/BaseGuildChannel.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L25)

## Methods

### createInvite

▸ **createInvite**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.max_age?` | `number` |
| `data.max_uses?` | `number` |
| `data.reason?` | `string` |
| `data.temporary?` | `boolean` |
| `data.unique?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

#### Defined in

[src/structures/channel/NewsChannel.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L45)

___

### createMessage

▸ **createMessage**(`data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreateMessageData`](../interfaces/internal_.CreateMessageData.md) |
| `options?` | `Object` |
| `options.disableEveryone?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/channel/NewsChannel.ts:89](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L89)

___

### createThread

▸ **createThread**(`options`, `message?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.auto_archive_duration` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` |
| `options.invitable?` | `boolean` |
| `options.name` | `string` |
| `options.reason?` | `string` |
| `options.type` | ``10`` \| ``12`` \| ``11`` |
| `message?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

#### Defined in

[src/structures/channel/NewsChannel.ts:59](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L59)

___

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

### deleteMessage

▸ **deleteMessage**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/channel/NewsChannel.ts:95](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L95)

___

### deleteMessages

▸ **deleteMessages**(`ids`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/channel/NewsChannel.ts:99](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L99)

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

___

### fetchInvites

▸ **fetchInvites**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)[]\>

#### Defined in

[src/structures/channel/NewsChannel.ts:55](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L55)

___

### fetchMessage

▸ **fetchMessage**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/channel/NewsChannel.ts:81](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L81)

___

### fetchMessages

▸ **fetchMessages**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`GetMessageOptions`](../interfaces/internal_.GetMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Defined in

[src/structures/channel/NewsChannel.ts:85](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L85)

___

### fetchPins

▸ **fetchPins**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Defined in

[src/structures/channel/NewsChannel.ts:36](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L36)

___

### fetchThread

▸ **fetchThread**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/channel/NewsChannel.ts:69](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L69)

___

### getArchivedPrivateThreads

▸ **getArchivedPrivateThreads**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

#### Defined in

[src/structures/channel/NewsChannel.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L77)

___

### getArchivedPublicThreads

▸ **getArchivedPublicThreads**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

#### Defined in

[src/structures/channel/NewsChannel.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L73)

___

### syncPermissions

▸ **syncPermissions**(): `void`

#### Returns

`void`

#### Defined in

[src/structures/channel/NewsChannel.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/NewsChannel.ts#L41)
