[Avocord](../README.md) / [Exports](../modules.md) / CategoryChannel

# Class: CategoryChannel

## Hierarchy

- [`BaseGuildChannel`](BaseGuildChannel.md)<[`APIGuildCategoryChannel`](../modules/internal_.md#apiguildcategorychannel)\>

  ↳ **`CategoryChannel`**

## Table of contents

### Constructors

- [constructor](CategoryChannel.md#constructor)

### Properties

- [client](CategoryChannel.md#client)
- [data](CategoryChannel.md#data)
- [guild](CategoryChannel.md#guild)

### Accessors

- [children](CategoryChannel.md#children)
- [guildId](CategoryChannel.md#guildid)
- [id](CategoryChannel.md#id)
- [name](CategoryChannel.md#name)
- [type](CategoryChannel.md#type)

### Methods

- [delete](CategoryChannel.md#delete)
- [deleteChannel](CategoryChannel.md#deletechannel)
- [edit](CategoryChannel.md#edit)
- [moveChannel](CategoryChannel.md#movechannel)

## Constructors

### constructor

• **new CategoryChannel**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIGuildCategoryChannel`](../modules/internal_.md#apiguildcategorychannel) |
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

• **data**: [`APIGuildCategoryChannel`](../modules/internal_.md#apiguildcategorychannel)

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

### children

• `get` **children**(): [`string`, [`TextableChannel`](TextableChannel.md) \| [`ThreadChannel`](ThreadChannel.md) \| [`VoiceChannel`](VoiceChannel.md) \| [`NewsChannel`](NewsChannel.md) \| [`CategoryChannel`](CategoryChannel.md)][]

#### Returns

[`string`, [`TextableChannel`](TextableChannel.md) \| [`ThreadChannel`](ThreadChannel.md) \| [`VoiceChannel`](VoiceChannel.md) \| [`NewsChannel`](NewsChannel.md) \| [`CategoryChannel`](CategoryChannel.md)][]

#### Defined in

[src/structures/channel/CategoryChannel.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/CategoryChannel.ts#L11)

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

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Inherited from

BaseGuildChannel.type

#### Defined in

[src/structures/BaseGuildChannel.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L25)

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

### deleteChannel

▸ **deleteChannel**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/channel/CategoryChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/CategoryChannel.ts#L21)

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

### moveChannel

▸ **moveChannel**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/channel/CategoryChannel.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/CategoryChannel.ts#L15)
