[Avocord](../README.md) / [Exports](../modules.md) / ThreadChannel

# Class: ThreadChannel

## Hierarchy

- [`BaseGuildChannel`](BaseGuildChannel.md)<[`APIThreadChannel`](../interfaces/internal_.APIThreadChannel.md)\>

  ↳ **`ThreadChannel`**

## Table of contents

### Constructors

- [constructor](ThreadChannel.md#constructor)

### Properties

- [client](ThreadChannel.md#client)
- [data](ThreadChannel.md#data)
- [guild](ThreadChannel.md#guild)
- [members](ThreadChannel.md#members)

### Accessors

- [archiveTimestamp](ThreadChannel.md#archivetimestamp)
- [archived](ThreadChannel.md#archived)
- [autoArchiveDuration](ThreadChannel.md#autoarchiveduration)
- [guildId](ThreadChannel.md#guildid)
- [id](ThreadChannel.md#id)
- [invitable](ThreadChannel.md#invitable)
- [locked](ThreadChannel.md#locked)
- [member](ThreadChannel.md#member)
- [memberCount](ThreadChannel.md#membercount)
- [messageCount](ThreadChannel.md#messagecount)
- [name](ThreadChannel.md#name)
- [ownerId](ThreadChannel.md#ownerid)
- [threadMetadata](ThreadChannel.md#threadmetadata)
- [type](ThreadChannel.md#type)

### Methods

- [addMember](ThreadChannel.md#addmember)
- [createMessage](ThreadChannel.md#createmessage)
- [delete](ThreadChannel.md#delete)
- [edit](ThreadChannel.md#edit)
- [fetchMessage](ThreadChannel.md#fetchmessage)
- [fetchMessages](ThreadChannel.md#fetchmessages)
- [fetchPins](ThreadChannel.md#fetchpins)
- [removeMember](ThreadChannel.md#removemember)
- [setRateLimitPerUser](ThreadChannel.md#setratelimitperuser)

## Constructors

### constructor

• **new ThreadChannel**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIThreadChannel`](../interfaces/internal_.APIThreadChannel.md) |
| `guild` | [`Guild`](Guild.md) |

#### Overrides

[BaseGuildChannel](BaseGuildChannel.md).[constructor](BaseGuildChannel.md#constructor)

#### Defined in

[src/structures/channel/ThreadChannel.ts:14](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L14)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Inherited from

[BaseGuildChannel](BaseGuildChannel.md).[client](BaseGuildChannel.md#client)

#### Defined in

[src/structures/BaseGuildChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L8)

___

### data

• **data**: [`APIThreadChannel`](../interfaces/internal_.APIThreadChannel.md)

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

### members

• **members**: [`Collection`](internal_.Collection.md)<`string`, [`GuildMember`](GuildMember.md)\>

#### Defined in

[src/structures/channel/ThreadChannel.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L12)

## Accessors

### archiveTimestamp

• `get` **archiveTimestamp**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/channel/ThreadChannel.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L41)

___

### archived

• `get` **archived**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/channel/ThreadChannel.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L25)

___

### autoArchiveDuration

• `get` **autoArchiveDuration**(): [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

#### Returns

[`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

#### Defined in

[src/structures/channel/ThreadChannel.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L33)

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

### invitable

• `get` **invitable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/channel/ThreadChannel.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L37)

___

### locked

• `get` **locked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/channel/ThreadChannel.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L29)

___

### member

• `get` **member**(): `undefined` \| [`APIThreadMember`](../interfaces/internal_.APIThreadMember.md)

#### Returns

`undefined` \| [`APIThreadMember`](../interfaces/internal_.APIThreadMember.md)

#### Defined in

[src/structures/channel/ThreadChannel.ts:53](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L53)

___

### memberCount

• `get` **memberCount**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/structures/channel/ThreadChannel.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L49)

___

### messageCount

• `get` **messageCount**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/structures/channel/ThreadChannel.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L45)

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

### ownerId

• `get` **ownerId**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/channel/ThreadChannel.ts:57](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L57)

___

### threadMetadata

• `get` **threadMetadata**(): [`APIThreadMetadata`](../interfaces/internal_.APIThreadMetadata.md)

#### Returns

[`APIThreadMetadata`](../interfaces/internal_.APIThreadMetadata.md)

#### Defined in

[src/structures/channel/ThreadChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L21)

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

### addMember

▸ **addMember**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/channel/ThreadChannel.ts:83](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L83)

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

[src/structures/channel/ThreadChannel.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L77)

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

### fetchMessage

▸ **fetchMessage**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/channel/ThreadChannel.ts:69](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L69)

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

[src/structures/channel/ThreadChannel.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L73)

___

### fetchPins

▸ **fetchPins**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

#### Defined in

[src/structures/channel/ThreadChannel.ts:65](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L65)

___

### removeMember

▸ **removeMember**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/channel/ThreadChannel.ts:87](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L87)

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

[src/structures/channel/ThreadChannel.ts:61](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/ThreadChannel.ts#L61)
