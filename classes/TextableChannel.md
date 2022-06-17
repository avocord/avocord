[Avocord](../README.md) / [Exports](../modules.md) / TextableChannel

# Class: TextableChannel

## Hierarchy

- [`BaseGuildChannel`](BaseGuildChannel.md)<[`APITextChannel`](../interfaces/internal_.APITextChannel.md)\>

  ↳ **`TextableChannel`**

## Table of contents

### Constructors

- [constructor](TextableChannel.md#constructor)

### Properties

- [client](TextableChannel.md#client)
- [data](TextableChannel.md#data)
- [guild](TextableChannel.md#guild)

### Accessors

- [defaultAutoArchiveDuration](TextableChannel.md#defaultautoarchiveduration)
- [guildId](TextableChannel.md#guildid)
- [id](TextableChannel.md#id)
- [lastMessageId](TextableChannel.md#lastmessageid)
- [lastPinTimestamp](TextableChannel.md#lastpintimestamp)
- [name](TextableChannel.md#name)
- [nsfw](TextableChannel.md#nsfw)
- [parentId](TextableChannel.md#parentid)
- [permissionOverwrites](TextableChannel.md#permissionoverwrites)
- [rateLimitPerUser](TextableChannel.md#ratelimitperuser)
- [topic](TextableChannel.md#topic)
- [type](TextableChannel.md#type)

### Methods

- [createInvite](TextableChannel.md#createinvite)
- [createMessage](TextableChannel.md#createmessage)
- [createThread](TextableChannel.md#createthread)
- [delete](TextableChannel.md#delete)
- [deleteMessage](TextableChannel.md#deletemessage)
- [deleteMessages](TextableChannel.md#deletemessages)
- [edit](TextableChannel.md#edit)
- [fetchInvites](TextableChannel.md#fetchinvites)
- [fetchMessage](TextableChannel.md#fetchmessage)
- [fetchMessages](TextableChannel.md#fetchmessages)
- [fetchPins](TextableChannel.md#fetchpins)
- [fetchThread](TextableChannel.md#fetchthread)
- [getArchivedPrivateThreads](TextableChannel.md#getarchivedprivatethreads)
- [getArchivedPublicThreads](TextableChannel.md#getarchivedpublicthreads)
- [setRateLimitPerUser](TextableChannel.md#setratelimitperuser)
- [syncPermissions](TextableChannel.md#syncpermissions)

## Constructors

### constructor

• **new TextableChannel**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APITextChannel`](../interfaces/internal_.APITextChannel.md) |
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

• **data**: [`APITextChannel`](../interfaces/internal_.APITextChannel.md)

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

[src/structures/channel/TextableChannel.ts:36](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L36)

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

[src/structures/channel/TextableChannel.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L12)

___

### lastPinTimestamp

• `get` **lastPinTimestamp**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/TextableChannel.ts:32](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L32)

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

[src/structures/channel/TextableChannel.ts:28](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L28)

___

### parentId

• `get` **parentId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/TextableChannel.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L20)

___

### permissionOverwrites

• `get` **permissionOverwrites**(): `undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Returns

`undefined` \| [`APIOverwrite`](../interfaces/internal_.APIOverwrite.md)[]

#### Defined in

[src/structures/channel/TextableChannel.ts:24](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L24)

___

### rateLimitPerUser

• `get` **rateLimitPerUser**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/structures/channel/TextableChannel.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L16)

___

### topic

• `get` **topic**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/TextableChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L8)

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

[src/structures/channel/TextableChannel.ts:53](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L53)

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

[src/structures/channel/TextableChannel.ts:97](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L97)

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

[src/structures/channel/TextableChannel.ts:67](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L67)

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

[src/structures/channel/TextableChannel.ts:103](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L103)

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

[src/structures/channel/TextableChannel.ts:107](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L107)

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

[src/structures/channel/TextableChannel.ts:63](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L63)

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

[src/structures/channel/TextableChannel.ts:89](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L89)

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

[src/structures/channel/TextableChannel.ts:93](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L93)

___

### fetchPins

▸ **fetchPins**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Defined in

[src/structures/channel/TextableChannel.ts:44](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L44)

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

[src/structures/channel/TextableChannel.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L77)

___

### getArchivedPrivateThreads

▸ **getArchivedPrivateThreads**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

#### Defined in

[src/structures/channel/TextableChannel.ts:85](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L85)

___

### getArchivedPublicThreads

▸ **getArchivedPublicThreads**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

#### Defined in

[src/structures/channel/TextableChannel.ts:81](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L81)

___

### setRateLimitPerUser

▸ **setRateLimitPerUser**(`rate_limit_per_user`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate_limit_per_user` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/channel/TextableChannel.ts:40](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L40)

___

### syncPermissions

▸ **syncPermissions**(): `void`

#### Returns

`void`

#### Defined in

[src/structures/channel/TextableChannel.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/TextableChannel.ts#L49)
