[Avocord](../README.md) / [Exports](../modules.md) / GroupDMChannel

# Class: GroupDMChannel

## Hierarchy

- [`BaseChannel`](BaseChannel.md)<[`APIGroupDMChannel`](../interfaces/internal_.APIGroupDMChannel.md)\>

  ↳ **`GroupDMChannel`**

## Table of contents

### Constructors

- [constructor](GroupDMChannel.md#constructor)

### Properties

- [client](GroupDMChannel.md#client)
- [data](GroupDMChannel.md#data)

### Accessors

- [icon](GroupDMChannel.md#icon)
- [id](GroupDMChannel.md#id)
- [name](GroupDMChannel.md#name)
- [ownerId](GroupDMChannel.md#ownerid)
- [recipients](GroupDMChannel.md#recipients)
- [type](GroupDMChannel.md#type)

### Methods

- [iconURL](GroupDMChannel.md#iconurl)

## Constructors

### constructor

• **new GroupDMChannel**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIGroupDMChannel`](../interfaces/internal_.APIGroupDMChannel.md) |

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

• **data**: [`APIGroupDMChannel`](../interfaces/internal_.APIGroupDMChannel.md)

#### Inherited from

[BaseChannel](BaseChannel.md).[data](BaseChannel.md#data)

#### Defined in

[src/structures/BaseChannel.ts:5](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L5)

## Accessors

### icon

• `get` **icon**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/channel/GroupDMChannel.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/GroupDMChannel.ts#L7)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

BaseChannel.id

#### Defined in

[src/structures/BaseChannel.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L17)

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

### ownerId

• `get` **ownerId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/channel/GroupDMChannel.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/GroupDMChannel.ts#L15)

___

### recipients

• `get` **recipients**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)[]

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)[]

#### Defined in

[src/structures/channel/GroupDMChannel.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/GroupDMChannel.ts#L11)

___

### type

• `get` **type**(): [`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Returns

[`GuildText`](../modules/internal_.md#guildtext) \| [`DM`](../modules/internal_.md#dm) \| [`GuildVoice`](../modules/internal_.md#guildvoice) \| [`GroupDM`](../modules/internal_.md#groupdm) \| [`GuildCategory`](../modules/internal_.md#guildcategory) \| [`GuildNews`](../modules/internal_.md#guildnews) \| [`GuildNewsThread`](../modules/internal_.md#guildnewsthread) \| [`GuildPublicThread`](../modules/internal_.md#guildpublicthread) \| [`GuildPrivateThread`](../modules/internal_.md#guildprivatethread) \| [`GuildStageVoice`](../modules/internal_.md#guildstagevoice) \| [`GuildForum`](../modules/internal_.md#guildforum)

#### Inherited from

BaseChannel.type

#### Defined in

[src/structures/BaseChannel.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseChannel.ts#L21)

## Methods

### iconURL

▸ **iconURL**(`format?`): ``null`` \| `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `format` | `string` | `'png'` |

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/channel/GroupDMChannel.ts:19](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/GroupDMChannel.ts#L19)
