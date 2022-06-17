[Avocord](../README.md) / [Exports](../modules.md) / BaseChannel

# Class: BaseChannel<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`APIChannel`](../modules/internal_.md#apichannel) |

## Hierarchy

- **`BaseChannel`**

  ↳ [`GroupDMChannel`](GroupDMChannel.md)

  ↳ [`DMChannel`](DMChannel.md)

## Table of contents

### Constructors

- [constructor](BaseChannel.md#constructor)

### Properties

- [client](BaseChannel.md#client)
- [data](BaseChannel.md#data)

### Accessors

- [id](BaseChannel.md#id)
- [name](BaseChannel.md#name)
- [type](BaseChannel.md#type)

## Constructors

### constructor

• **new BaseChannel**<`T`\>(`client`, `data`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`APIChannel`](../modules/internal_.md#apichannel) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `T` |

#### Defined in

[src/structures/BaseChannel.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L8)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/BaseChannel.ts:6](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L6)

___

### data

• **data**: `T`

#### Defined in

[src/structures/BaseChannel.ts:5](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L5)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L17)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseChannel.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L13)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Defined in

[src/structures/BaseChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L21)
