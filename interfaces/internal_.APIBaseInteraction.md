[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIBaseInteraction

# Interface: APIBaseInteraction<Type, Data\>

[<internal>](../modules/internal_.md).APIBaseInteraction

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InteractionType`](../enums/internal_.InteractionType.md) |
| `Data` | `Data` |

## Table of contents

### Properties

- [application\_id](internal_.APIBaseInteraction.md#application_id)
- [channel\_id](internal_.APIBaseInteraction.md#channel_id)
- [data](internal_.APIBaseInteraction.md#data)
- [guild\_id](internal_.APIBaseInteraction.md#guild_id)
- [guild\_locale](internal_.APIBaseInteraction.md#guild_locale)
- [id](internal_.APIBaseInteraction.md#id)
- [locale](internal_.APIBaseInteraction.md#locale)
- [member](internal_.APIBaseInteraction.md#member)
- [message](internal_.APIBaseInteraction.md#message)
- [token](internal_.APIBaseInteraction.md#token)
- [type](internal_.APIBaseInteraction.md#type)
- [user](internal_.APIBaseInteraction.md#user)
- [version](internal_.APIBaseInteraction.md#version)

## Properties

### application\_id

• **application\_id**: `string`

ID of the application this interaction is for

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:51

___

### channel\_id

• `Optional` **channel\_id**: `string`

The channel it was sent from

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:67

___

### data

• `Optional` **data**: `Data`

The command data payload

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:59

___

### guild\_id

• `Optional` **guild\_id**: `string`

The guild it was sent from

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:63

___

### guild\_locale

• `Optional` **guild\_locale**: ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The guild's preferred locale, if invoked in a guild

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:97

___

### id

• **id**: `string`

ID of the interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:47

___

### locale

• **locale**: ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The selected language of the invoking user

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:93

___

### member

• `Optional` **member**: [`APIInteractionGuildMember`](internal_.APIInteractionGuildMember.md)

Guild member data for the invoking user, including permissions

**This is only sent when an interaction is invoked in a guild**

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:73

___

### message

• `Optional` **message**: [`APIMessage`](internal_.APIMessage.md)

For components, the message they were attached to

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:89

___

### token

• **token**: `string`

A continuation token for responding to the interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:81

___

### type

• **type**: `Type`

The type of interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:55

___

### user

• `Optional` **user**: [`APIUser`](internal_.APIUser.md)

User object for the invoking user, if invoked in a DM

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:77

___

### version

• **version**: ``1``

Read-only property, always `1`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:85
