[Avocord](../README.md) / [Exports](../modules.md) / BaseGuildChannel

# Class: BaseGuildChannel<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`APINewsChannel`](../modules/internal_.md#apinewschannel) \| [`APITextChannel`](../interfaces/internal_.APITextChannel.md) \| [`APIVoiceChannel`](../interfaces/internal_.APIVoiceChannel.md) \| [`APIThreadChannel`](../interfaces/internal_.APIThreadChannel.md) \| [`APIGuildCategoryChannel`](../modules/internal_.md#apiguildcategorychannel) |

## Hierarchy

- **`BaseGuildChannel`**

  ↳ [`TextableChannel`](TextableChannel.md)

  ↳ [`CategoryChannel`](CategoryChannel.md)

  ↳ [`ThreadChannel`](ThreadChannel.md)

  ↳ [`VoiceChannel`](VoiceChannel.md)

  ↳ [`NewsChannel`](NewsChannel.md)

## Table of contents

### Constructors

- [constructor](BaseGuildChannel.md#constructor)

### Properties

- [client](BaseGuildChannel.md#client)
- [data](BaseGuildChannel.md#data)
- [guild](BaseGuildChannel.md#guild)

### Accessors

- [guildId](BaseGuildChannel.md#guildid)
- [id](BaseGuildChannel.md#id)
- [name](BaseGuildChannel.md#name)
- [type](BaseGuildChannel.md#type)

### Methods

- [delete](BaseGuildChannel.md#delete)
- [edit](BaseGuildChannel.md#edit)

## Constructors

### constructor

• **new BaseGuildChannel**<`T`\>(`client`, `data`, `guild`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`APITextChannel`](../interfaces/internal_.APITextChannel.md) \| [`APINewsChannel`](../modules/internal_.md#apinewschannel) \| [`APIVoiceChannel`](../interfaces/internal_.APIVoiceChannel.md) \| [`APIGuildCategoryChannel`](../modules/internal_.md#apiguildcategorychannel) \| [`APIThreadChannel`](../interfaces/internal_.APIThreadChannel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `T` |
| `guild` | [`Guild`](Guild.md) |

#### Defined in

[src/structures/BaseGuildChannel.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L11)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/BaseGuildChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L8)

___

### data

• **data**: `T`

#### Defined in

[src/structures/BaseGuildChannel.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L7)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/BaseGuildChannel.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L9)

## Accessors

### guildId

• `get` **guildId**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseGuildChannel.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L29)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseGuildChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L21)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseGuildChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L17)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice)

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

#### Defined in

[src/structures/BaseGuildChannel.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseGuildChannel.ts#L37)
