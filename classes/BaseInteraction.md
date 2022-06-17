[Avocord](../README.md) / [Exports](../modules.md) / BaseInteraction

# Class: BaseInteraction

## Hierarchy

- **`BaseInteraction`**

  ↳ [`ApplicationCommandInteraction`](ApplicationCommandInteraction.md)

  ↳ [`AutocompleteInteraction`](AutocompleteInteraction.md)

  ↳ [`ComponentInteraction`](ComponentInteraction.md)

  ↳ [`ModalInteraction`](ModalInteraction.md)

  ↳ [`PingInteraction`](PingInteraction.md)

## Table of contents

### Constructors

- [constructor](BaseInteraction.md#constructor)

### Properties

- [client](BaseInteraction.md#client)
- [data](BaseInteraction.md#data)

### Accessors

- [channelId](BaseInteraction.md#channelid)
- [guildLocale](BaseInteraction.md#guildlocale)
- [id](BaseInteraction.md#id)
- [member](BaseInteraction.md#member)
- [message](BaseInteraction.md#message)
- [token](BaseInteraction.md#token)
- [type](BaseInteraction.md#type)
- [user](BaseInteraction.md#user)
- [version](BaseInteraction.md#version)

### Methods

- [rawRespond](BaseInteraction.md#rawrespond)

## Constructors

### constructor

• **new BaseInteraction**(`data`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`APIInteraction`](../modules/internal_.md#apiinteraction) |
| `client` | [`Client`](Client.md) |

#### Defined in

[src/structures/BaseInteraction.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L9)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/BaseInteraction.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L7)

___

### data

• **data**: [`APIInteraction`](../modules/internal_.md#apiinteraction)

#### Defined in

[src/structures/BaseInteraction.ts:6](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L6)

## Accessors

### channelId

• `get` **channelId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/BaseInteraction.ts:34](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L34)

___

### guildLocale

• `get` **guildLocale**(): `undefined` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Returns

`undefined` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Defined in

[src/structures/BaseInteraction.ts:50](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L50)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseInteraction.ts:14](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L14)

___

### member

• `get` **member**(): `undefined` \| [`APIInteractionGuildMember`](../interfaces/internal_.APIInteractionGuildMember.md)

#### Returns

`undefined` \| [`APIInteractionGuildMember`](../interfaces/internal_.APIInteractionGuildMember.md)

#### Defined in

[src/structures/BaseInteraction.ts:42](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L42)

___

### message

• `get` **message**(): `undefined` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Returns

`undefined` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Defined in

[src/structures/BaseInteraction.ts:38](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L38)

___

### token

• `get` **token**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/BaseInteraction.ts:18](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L18)

___

### type

• `get` **type**(): `InteractionType`

#### Returns

`InteractionType`

#### Defined in

[src/structures/BaseInteraction.ts:26](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L26)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/BaseInteraction.ts:30](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L30)

___

### version

• `get` **version**(): ``1``

#### Returns

``1``

#### Defined in

[src/structures/BaseInteraction.ts:22](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L22)

## Methods

### rawRespond

▸ **rawRespond**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`InteractionResponse`](../modules/internal_.md#interactionresponse) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/BaseInteraction.ts:46](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L46)
