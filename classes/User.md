[Avocord](../README.md) / [Exports](../modules.md) / User

# Class: User

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [client](User.md#client)
- [data](User.md#data)

### Accessors

- [avatar](User.md#avatar)
- [avatarURL](User.md#avatarurl)
- [bot](User.md#bot)
- [createdAt](User.md#createdat)
- [createdAtTimestamp](User.md#createdattimestamp)
- [defaultAvatarURL](User.md#defaultavatarurl)
- [discriminator](User.md#discriminator)
- [displayAvatarURL](User.md#displayavatarurl)
- [flags](User.md#flags)
- [id](User.md#id)
- [tag](User.md#tag)
- [url](User.md#url)
- [username](User.md#username)

### Methods

- [createDM](User.md#createdm)
- [deleteDM](User.md#deletedm)
- [edit](User.md#edit)
- [fetch](User.md#fetch)
- [setAvatar](User.md#setavatar)
- [setUsername](User.md#setusername)

## Constructors

### constructor

• **new User**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIUser`](../interfaces/internal_.APIUser.md) |

#### Defined in

[src/structures/User.ts:10](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L10)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/User.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L8)

___

### data

• **data**: [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/User.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L7)

## Accessors

### avatar

• `get` **avatar**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/User.ts:27](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L27)

___

### avatarURL

• `get` **avatarURL**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/User.ts:48](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L48)

___

### bot

• `get` **bot**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/User.ts:31](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L31)

___

### createdAt

• `get` **createdAt**(): [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

[`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/User.ts:44](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L44)

___

### createdAtTimestamp

• `get` **createdAtTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/User.ts:40](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L40)

___

### defaultAvatarURL

• `get` **defaultAvatarURL**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:52](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L52)

___

### discriminator

• `get` **discriminator**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:23](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L23)

___

### displayAvatarURL

• `get` **displayAvatarURL**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:56](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L56)

___

### flags

• `get` **flags**(): `undefined` \| [`UserFlags`](../enums/internal_.UserFlags.md)

#### Returns

`undefined` \| [`UserFlags`](../enums/internal_.UserFlags.md)

#### Defined in

[src/structures/User.ts:35](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L35)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L15)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:60](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L60)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:64](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L64)

___

### username

• `get` **username**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/User.ts:19](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L19)

## Methods

### createDM

▸ **createDM**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](DMChannel.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](DMChannel.md)\>

#### Defined in

[src/structures/User.ts:92](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L92)

___

### deleteDM

▸ **deleteDM**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

#### Defined in

[src/structures/User.ts:87](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L87)

___

### edit

▸ **edit**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.avatar?` | `string` |
| `options.username?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Defined in

[src/structures/User.ts:83](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L83)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

#### Defined in

[src/structures/User.ts:68](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L68)

___

### setAvatar

▸ **setAvatar**(`avatar`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatar` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Defined in

[src/structures/User.ts:75](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L75)

___

### setUsername

▸ **setUsername**(`username`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

#### Defined in

[src/structures/User.ts:79](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/User.ts#L79)
