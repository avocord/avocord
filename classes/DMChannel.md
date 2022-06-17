[Avocord](../README.md) / [Exports](../modules.md) / DMChannel

# Class: DMChannel

## Hierarchy

- [`BaseChannel`](BaseChannel.md)<[`APIDMChannel`](../modules/internal_.md#apidmchannel)\>

  ↳ **`DMChannel`**

## Table of contents

### Constructors

- [constructor](DMChannel.md#constructor)

### Properties

- [client](DMChannel.md#client)
- [data](DMChannel.md#data)

### Accessors

- [id](DMChannel.md#id)
- [lastMessageId](DMChannel.md#lastmessageid)
- [name](DMChannel.md#name)
- [recipients](DMChannel.md#recipients)
- [type](DMChannel.md#type)
- [user](DMChannel.md#user)

### Methods

- [close](DMChannel.md#close)

## Constructors

### constructor

• **new DMChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIDMChannel`](../modules/internal_.md#apidmchannel) |

#### Inherited from

[BaseChannel](BaseChannel.md).[constructor](BaseChannel.md#constructor)

#### Defined in

[src/structures/BaseChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L8)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Inherited from

[BaseChannel](BaseChannel.md).[client](BaseChannel.md#client)

#### Defined in

[src/structures/BaseChannel.ts:6](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L6)

___

### data

• **data**: [`APIDMChannel`](../modules/internal_.md#apidmchannel)

#### Inherited from

[BaseChannel](BaseChannel.md).[data](BaseChannel.md#data)

#### Defined in

[src/structures/BaseChannel.ts:5](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L5)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

BaseChannel.id

#### Defined in

[src/structures/BaseChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L17)

___

### lastMessageId

• `get` **lastMessageId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/DMChannel.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/DMChannel.ts#L7)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

BaseChannel.name

#### Defined in

[src/structures/BaseChannel.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L13)

___

### recipients

• `get` **recipients**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)[]

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)[]

#### Defined in

[src/structures/channel/DMChannel.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/DMChannel.ts#L11)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Inherited from

BaseChannel.type

#### Defined in

[src/structures/BaseChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L21)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/channel/DMChannel.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/DMChannel.ts#L15)

## Methods

### close

▸ **close**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/channel/DMChannel.ts:19](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/DMChannel.ts#L19)
