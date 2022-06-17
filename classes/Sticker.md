[Avocord](../README.md) / [Exports](../modules.md) / Sticker

# Class: Sticker

## Table of contents

### Constructors

- [constructor](Sticker.md#constructor)

### Properties

- [client](Sticker.md#client)
- [data](Sticker.md#data)
- [guild](Sticker.md#guild)

### Accessors

- [available](Sticker.md#available)
- [createdAt](Sticker.md#createdat)
- [createdAtTimestamp](Sticker.md#createdattimestamp)
- [creator](Sticker.md#creator)
- [description](Sticker.md#description)
- [formatType](Sticker.md#formattype)
- [id](Sticker.md#id)
- [name](Sticker.md#name)
- [packId](Sticker.md#packid)
- [tags](Sticker.md#tags)
- [type](Sticker.md#type)
- [user](Sticker.md#user)

### Methods

- [delete](Sticker.md#delete)
- [edit](Sticker.md#edit)
- [fetch](Sticker.md#fetch)

## Constructors

### constructor

• **new Sticker**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APISticker`](../interfaces/internal_.APISticker.md) |
| `guild` | [`Guild`](Guild.md) |

#### Defined in

[src/structures/Sticker.ts:10](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L10)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/Sticker.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L7)

___

### data

• **data**: [`APISticker`](../interfaces/internal_.APISticker.md)

#### Defined in

[src/structures/Sticker.ts:6](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L6)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/Sticker.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L8)

## Accessors

### available

• `get` **available**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Sticker.ts:28](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L28)

___

### createdAt

• `get` **createdAt**(): [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

[`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/Sticker.ts:52](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L52)

___

### createdAtTimestamp

• `get` **createdAtTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/Sticker.ts:48](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L48)

___

### creator

• `get` **creator**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/Sticker.ts:56](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L56)

___

### description

• `get` **description**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Sticker.ts:32](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L32)

___

### formatType

• `get` **formatType**(): [`StickerFormatType`](../enums/internal_.StickerFormatType.md)

#### Returns

[`StickerFormatType`](../enums/internal_.StickerFormatType.md)

#### Defined in

[src/structures/Sticker.ts:44](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L44)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Sticker.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L16)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Sticker.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L20)

___

### packId

• `get` **packId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Sticker.ts:24](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L24)

___

### tags

• `get` **tags**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Sticker.ts:36](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L36)

___

### type

• `get` **type**(): [`StickerType`](../enums/internal_.StickerType.md)

#### Returns

[`StickerType`](../enums/internal_.StickerType.md)

#### Defined in

[src/structures/Sticker.ts:40](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L40)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/Sticker.ts:60](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L60)

## Methods

### delete

▸ **delete**(`reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Sticker.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L73)

___

### edit

▸ **edit**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.description?` | ``null`` \| `string` |
| `data.name?` | `string` |
| `data.reason?` | `string` |
| `data.tags?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

#### Defined in

[src/structures/Sticker.ts:64](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L64)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

#### Defined in

[src/structures/Sticker.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Sticker.ts#L77)
