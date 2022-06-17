[Avocord](../README.md) / [Exports](../modules.md) / AutocompleteInteraction

# Class: AutocompleteInteraction

## Hierarchy

- [`BaseInteraction`](BaseInteraction.md)

  ↳ **`AutocompleteInteraction`**

## Table of contents

### Constructors

- [constructor](AutocompleteInteraction.md#constructor)

### Properties

- [client](AutocompleteInteraction.md#client)
- [data](AutocompleteInteraction.md#data)

### Accessors

- [channelId](AutocompleteInteraction.md#channelid)
- [guildLocale](AutocompleteInteraction.md#guildlocale)
- [id](AutocompleteInteraction.md#id)
- [locale](AutocompleteInteraction.md#locale)
- [member](AutocompleteInteraction.md#member)
- [message](AutocompleteInteraction.md#message)
- [token](AutocompleteInteraction.md#token)
- [type](AutocompleteInteraction.md#type)
- [user](AutocompleteInteraction.md#user)
- [version](AutocompleteInteraction.md#version)

### Methods

- [rawRespond](AutocompleteInteraction.md#rawrespond)
- [reply](AutocompleteInteraction.md#reply)

## Constructors

### constructor

• **new AutocompleteInteraction**(`data`, `client`)

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

• **data**: [`APIApplicationCommandAutocompleteInteraction`](../modules/internal_.md#apiapplicationcommandautocompleteinteraction)

#### Overrides

[BaseInteraction](BaseInteraction.md).[data](BaseInteraction.md#data)

#### Defined in

[src/structures/interactions/AutocompleteInteraction.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/AutocompleteInteraction.ts#L7)

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

[src/structures/interactions/AutocompleteInteraction.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/AutocompleteInteraction.ts#L8)

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
| `data` | [`AutocompleteInteractionCallbackData`](../modules/internal_.md#autocompleteinteractioncallbackdata) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/interactions/AutocompleteInteraction.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/AutocompleteInteraction.ts#L12)
