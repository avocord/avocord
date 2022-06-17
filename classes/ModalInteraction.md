[Avocord](../README.md) / [Exports](../modules.md) / ModalInteraction

# Class: ModalInteraction

## Hierarchy

- [`BaseInteraction`](BaseInteraction.md)

  ↳ **`ModalInteraction`**

## Table of contents

### Constructors

- [constructor](ModalInteraction.md#constructor)

### Properties

- [client](ModalInteraction.md#client)
- [data](ModalInteraction.md#data)

### Accessors

- [channelId](ModalInteraction.md#channelid)
- [guildLocale](ModalInteraction.md#guildlocale)
- [id](ModalInteraction.md#id)
- [locale](ModalInteraction.md#locale)
- [member](ModalInteraction.md#member)
- [message](ModalInteraction.md#message)
- [token](ModalInteraction.md#token)
- [type](ModalInteraction.md#type)
- [user](ModalInteraction.md#user)
- [version](ModalInteraction.md#version)

### Methods

- [deleteOriginal](ModalInteraction.md#deleteoriginal)
- [rawRespond](ModalInteraction.md#rawrespond)
- [reply](ModalInteraction.md#reply)
- [updateMessage](ModalInteraction.md#updatemessage)

## Constructors

### constructor

• **new ModalInteraction**(`data`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`APIInteraction`](../modules/internal_.md#apiinteraction) |
| `client` | [`Client`](Client.md) |

#### Inherited from

[BaseInteraction](BaseInteraction.md).[constructor](BaseInteraction.md#constructor)

#### Defined in

[src/structures/BaseInteraction.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L9)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[client](BaseInteraction.md#client)

#### Defined in

[src/structures/BaseInteraction.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L7)

___

### data

• **data**: [`APIModalSubmitInteraction`](../modules/internal_.md#apimodalsubmitinteraction) \| [`APIModalSubmitDMInteraction`](../modules/internal_.md#apimodalsubmitdminteraction)

#### Overrides

[BaseInteraction](BaseInteraction.md).[data](BaseInteraction.md#data)

#### Defined in

[src/structures/interactions/ModalInteraction.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/ModalInteraction.ts#L7)

## Accessors

### channelId

• `get` **channelId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseInteraction.channelId

#### Defined in

[src/structures/BaseInteraction.ts:34](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L34)

___

### guildLocale

• `get` **guildLocale**(): `undefined` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Returns

`undefined` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

BaseInteraction.guildLocale

#### Defined in

[src/structures/BaseInteraction.ts:50](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L50)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

BaseInteraction.id

#### Defined in

[src/structures/BaseInteraction.ts:14](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L14)

___

### locale

• `get` **locale**(): ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Returns

``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Defined in

[src/structures/interactions/ModalInteraction.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/ModalInteraction.ts#L8)

___

### member

• `get` **member**(): `undefined` \| [`APIInteractionGuildMember`](../interfaces/internal_.APIInteractionGuildMember.md)

#### Returns

`undefined` \| [`APIInteractionGuildMember`](../interfaces/internal_.APIInteractionGuildMember.md)

#### Inherited from

BaseInteraction.member

#### Defined in

[src/structures/BaseInteraction.ts:42](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L42)

___

### message

• `get` **message**(): `undefined` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Returns

`undefined` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Inherited from

BaseInteraction.message

#### Defined in

[src/structures/BaseInteraction.ts:38](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L38)

___

### token

• `get` **token**(): `string`

#### Returns

`string`

#### Inherited from

BaseInteraction.token

#### Defined in

[src/structures/BaseInteraction.ts:18](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L18)

___

### type

• `get` **type**(): `InteractionType`

#### Returns

`InteractionType`

#### Inherited from

BaseInteraction.type

#### Defined in

[src/structures/BaseInteraction.ts:26](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L26)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Inherited from

BaseInteraction.user

#### Defined in

[src/structures/BaseInteraction.ts:30](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L30)

___

### version

• `get` **version**(): ``1``

#### Returns

``1``

#### Inherited from

BaseInteraction.version

#### Defined in

[src/structures/BaseInteraction.ts:22](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L22)

## Methods

### deleteOriginal

▸ **deleteOriginal**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/interactions/ModalInteraction.ts:26](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/ModalInteraction.ts#L26)

___

### rawRespond

▸ **rawRespond**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`InteractionResponse`](../modules/internal_.md#interactionresponse) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Inherited from

[BaseInteraction](BaseInteraction.md).[rawRespond](BaseInteraction.md#rawrespond)

#### Defined in

[src/structures/BaseInteraction.ts:46](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/BaseInteraction.ts#L46)

___

### reply

▸ **reply**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`InteractionCallbackData`](../modules/internal_.md#interactioncallbackdata) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/interactions/ModalInteraction.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/ModalInteraction.ts#L12)

___

### updateMessage

▸ **updateMessage**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`InteractionCallbackData`](../modules/internal_.md#interactioncallbackdata) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/interactions/ModalInteraction.ts:19](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/ModalInteraction.ts#L19)
