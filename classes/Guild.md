[Avocord](../README.md) / [Exports](../modules.md) / Guild

# Class: Guild

## Table of contents

### Constructors

- [constructor](Guild.md#constructor)

### Properties

- [channels](Guild.md#channels)
- [client](Guild.md#client)
- [data](Guild.md#data)
- [emojis](Guild.md#emojis)
- [members](Guild.md#members)
- [presences](Guild.md#presences)
- [roles](Guild.md#roles)
- [stickers](Guild.md#stickers)

### Accessors

- [afkChannelId](Guild.md#afkchannelid)
- [afkTimeout](Guild.md#afktimeout)
- [applicationId](Guild.md#applicationid)
- [defaultMessageNotifications](Guild.md#defaultmessagenotifications)
- [explicitContentFilter](Guild.md#explicitcontentfilter)
- [features](Guild.md#features)
- [icon](Guild.md#icon)
- [id](Guild.md#id)
- [mfaLevel](Guild.md#mfalevel)
- [name](Guild.md#name)
- [owner](Guild.md#owner)
- [ownerId](Guild.md#ownerid)
- [permissions](Guild.md#permissions)
- [splash](Guild.md#splash)
- [systemChannelId](Guild.md#systemchannelid)
- [verificationLevel](Guild.md#verificationlevel)
- [widgetChannelId](Guild.md#widgetchannelid)
- [widgetEnabled](Guild.md#widgetenabled)

### Methods

- [iconURL](Guild.md#iconurl)

## Constructors

### constructor

• **new Guild**(`client`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIGuild`](../interfaces/internal_.APIGuild.md) |

#### Defined in

[src/structures/Guild.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L25)

## Properties

### channels

• **channels**: [`Collection`](internal_.Collection.md)<`string`, [`TextableChannel`](TextableChannel.md) \| [`ThreadChannel`](ThreadChannel.md) \| [`VoiceChannel`](VoiceChannel.md) \| [`NewsChannel`](NewsChannel.md) \| [`CategoryChannel`](CategoryChannel.md)\>

#### Defined in

[src/structures/Guild.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L17)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/Guild.ts:22](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L22)

___

### data

• **data**: [`APIGuild`](../interfaces/internal_.APIGuild.md)

#### Defined in

[src/structures/Guild.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L16)

___

### emojis

• **emojis**: [`Collection`](internal_.Collection.md)<`string`, [`Emoji`](Emoji.md)\>

#### Defined in

[src/structures/Guild.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L20)

___

### members

• **members**: [`Collection`](internal_.Collection.md)<`string`, [`GuildMember`](GuildMember.md)\>

#### Defined in

[src/structures/Guild.ts:19](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L19)

___

### presences

• **presences**: [`Collection`](internal_.Collection.md)<`string`, `unknown`\>

#### Defined in

[src/structures/Guild.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L21)

___

### roles

• **roles**: [`Collection`](internal_.Collection.md)<`string`, [`Role`](Role.md)\>

#### Defined in

[src/structures/Guild.ts:18](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L18)

___

### stickers

• **stickers**: [`Collection`](internal_.Collection.md)<`string`, [`Sticker`](Sticker.md)\>

#### Defined in

[src/structures/Guild.ts:23](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L23)

## Accessors

### afkChannelId

• `get` **afkChannelId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:116](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L116)

___

### afkTimeout

• `get` **afkTimeout**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/Guild.ts:120](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L120)

___

### applicationId

• `get` **applicationId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:144](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L144)

___

### defaultMessageNotifications

• `get` **defaultMessageNotifications**(): [`GuildDefaultMessageNotifications`](../enums/internal_.GuildDefaultMessageNotifications.md)

#### Returns

[`GuildDefaultMessageNotifications`](../enums/internal_.GuildDefaultMessageNotifications.md)

#### Defined in

[src/structures/Guild.ts:128](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L128)

___

### explicitContentFilter

• `get` **explicitContentFilter**(): [`GuildExplicitContentFilter`](../enums/internal_.GuildExplicitContentFilter.md)

#### Returns

[`GuildExplicitContentFilter`](../enums/internal_.GuildExplicitContentFilter.md)

#### Defined in

[src/structures/Guild.ts:132](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L132)

___

### features

• `get` **features**(): [`GuildFeature`](../enums/internal_.GuildFeature.md)[]

#### Returns

[`GuildFeature`](../enums/internal_.GuildFeature.md)[]

#### Defined in

[src/structures/Guild.ts:136](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L136)

___

### icon

• `get` **icon**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:92](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L92)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Guild.ts:84](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L84)

___

### mfaLevel

• `get` **mfaLevel**(): [`GuildMFALevel`](../enums/internal_.GuildMFALevel.md)

#### Returns

[`GuildMFALevel`](../enums/internal_.GuildMFALevel.md)

#### Defined in

[src/structures/Guild.ts:140](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L140)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Guild.ts:88](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L88)

___

### owner

• `get` **owner**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Guild.ts:104](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L104)

___

### ownerId

• `get` **ownerId**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Guild.ts:108](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L108)

___

### permissions

• `get` **permissions**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/Guild.ts:112](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L112)

___

### splash

• `get` **splash**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:100](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L100)

___

### systemChannelId

• `get` **systemChannelId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:156](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L156)

___

### verificationLevel

• `get` **verificationLevel**(): [`GuildVerificationLevel`](../enums/internal_.GuildVerificationLevel.md)

#### Returns

[`GuildVerificationLevel`](../enums/internal_.GuildVerificationLevel.md)

#### Defined in

[src/structures/Guild.ts:124](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L124)

___

### widgetChannelId

• `get` **widgetChannelId**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/Guild.ts:152](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L152)

___

### widgetEnabled

• `get` **widgetEnabled**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/structures/Guild.ts:148](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L148)

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

[src/structures/Guild.ts:96](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Guild.ts#L96)
