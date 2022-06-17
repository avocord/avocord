[Avocord](../README.md) / [Exports](../modules.md) / Emoji

# Class: Emoji

## Table of contents

### Constructors

- [constructor](Emoji.md#constructor)

### Properties

- [client](Emoji.md#client)
- [data](Emoji.md#data)
- [guild](Emoji.md#guild)

### Accessors

- [animated](Emoji.md#animated)
- [available](Emoji.md#available)
- [createdAt](Emoji.md#createdat)
- [createdAtTimestamp](Emoji.md#createdattimestamp)
- [creator](Emoji.md#creator)
- [id](Emoji.md#id)
- [managed](Emoji.md#managed)
- [name](Emoji.md#name)
- [requireColons](Emoji.md#requirecolons)
- [roles](Emoji.md#roles)
- [url](Emoji.md#url)
- [user](Emoji.md#user)

### Methods

- [delete](Emoji.md#delete)
- [edit](Emoji.md#edit)
- [fetch](Emoji.md#fetch)

## Constructors

### constructor

• **new Emoji**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIEmoji`](../interfaces/internal_.APIEmoji.md) |
| `guild` | [`Guild`](Guild.md) |

#### Defined in

[src/structures/Emoji.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L11)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/Emoji.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L8)

___

### data

• **data**: [`APIEmoji`](../interfaces/internal_.APIEmoji.md)

#### Defined in

[src/structures/Emoji.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L7)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/Emoji.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L9)

## Accessors

### animated

• `get` **animated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Emoji.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L29)

___

### available

• `get` **available**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Emoji.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L33)

___

### createdAt

• `get` **createdAt**(): [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

[`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/Emoji.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L45)

___

### createdAtTimestamp

• `get` **createdAtTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/Emoji.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L41)

___

### creator

• `get` **creator**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/Emoji.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L49)

___

### id

• `get` **id**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Emoji.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L17)

___

### managed

• `get` **managed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Emoji.ts:57](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L57)

___

### name

• `get` **name**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Emoji.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L21)

___

### requireColons

• `get` **requireColons**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Emoji.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L25)

___

### roles

• `get` **roles**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Defined in

[src/structures/Emoji.ts:53](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L53)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Emoji.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L37)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/Emoji.ts:61](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L61)

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

[src/structures/Emoji.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L73)

___

### edit

▸ **edit**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.name?` | `string` |
| `data.reason?` | `string` |
| `data.roles?` | ``null`` \| `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

#### Defined in

[src/structures/Emoji.ts:65](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L65)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

#### Defined in

[src/structures/Emoji.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Emoji.ts#L77)
