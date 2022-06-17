[Avocord](../README.md) / [Exports](../modules.md) / Message

# Class: Message

## Table of contents

### Constructors

- [constructor](Message.md#constructor)

### Properties

- [channel](Message.md#channel)
- [client](Message.md#client)
- [data](Message.md#data)

### Accessors

- [activity](Message.md#activity)
- [application](Message.md#application)
- [applicationId](Message.md#applicationid)
- [attachments](Message.md#attachments)
- [author](Message.md#author)
- [channelId](Message.md#channelid)
- [components](Message.md#components)
- [content](Message.md#content)
- [editedTimestamp](Message.md#editedtimestamp)
- [embeds](Message.md#embeds)
- [flags](Message.md#flags)
- [guildId](Message.md#guildid)
- [id](Message.md#id)
- [interaction](Message.md#interaction)
- [member](Message.md#member)
- [mentionChannels](Message.md#mentionchannels)
- [mentionEveryone](Message.md#mentioneveryone)
- [mentionRoles](Message.md#mentionroles)
- [mentions](Message.md#mentions)
- [messageReference](Message.md#messagereference)
- [nonce](Message.md#nonce)
- [pinned](Message.md#pinned)
- [reactions](Message.md#reactions)
- [referencedMessage](Message.md#referencedmessage)
- [stickers](Message.md#stickers)
- [thread](Message.md#thread)
- [timestamp](Message.md#timestamp)
- [tts](Message.md#tts)
- [type](Message.md#type)
- [webhookId](Message.md#webhookid)

### Methods

- [crosspost](Message.md#crosspost)
- [delete](Message.md#delete)
- [pin](Message.md#pin)
- [react](Message.md#react)
- [removeEmbeds](Message.md#removeembeds)
- [reply](Message.md#reply)
- [unpin](Message.md#unpin)

## Constructors

### constructor

• **new Message**(`client`, `data`, `channel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIMessage`](../interfaces/internal_.APIMessage.md) |
| `channel` | [`DMChannel`](DMChannel.md) \| [`TextableChannel`](TextableChannel.md) \| [`ThreadChannel`](ThreadChannel.md) \| [`VoiceChannel`](VoiceChannel.md) \| [`NewsChannel`](NewsChannel.md) |

#### Defined in

[src/structures/Message.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L15)

## Properties

### channel

• **channel**: [`DMChannel`](DMChannel.md) \| [`TextableChannel`](TextableChannel.md) \| [`ThreadChannel`](ThreadChannel.md) \| [`VoiceChannel`](VoiceChannel.md) \| [`NewsChannel`](NewsChannel.md)

#### Defined in

[src/structures/Message.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L13)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/Message.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L11)

___

### data

• **data**: [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Defined in

[src/structures/Message.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L12)

## Accessors

### activity

• `get` **activity**(): `undefined` \| [`APIMessageActivity`](../interfaces/internal_.APIMessageActivity.md)

#### Returns

`undefined` \| [`APIMessageActivity`](../interfaces/internal_.APIMessageActivity.md)

#### Defined in

[src/structures/Message.ts:101](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L101)

___

### application

• `get` **application**(): `undefined` \| [`Partial`](../modules/internal_.md#partial)<[`APIApplication`](../interfaces/internal_.APIApplication.md)\>

#### Returns

`undefined` \| [`Partial`](../modules/internal_.md#partial)<[`APIApplication`](../interfaces/internal_.APIApplication.md)\>

#### Defined in

[src/structures/Message.ts:105](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L105)

___

### applicationId

• `get` **applicationId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/Message.ts:109](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L109)

___

### attachments

• `get` **attachments**(): [`APIAttachment`](../interfaces/internal_.APIAttachment.md)[]

#### Returns

[`APIAttachment`](../interfaces/internal_.APIAttachment.md)[]

#### Defined in

[src/structures/Message.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L73)

___

### author

• `get` **author**(): [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

[`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/Message.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L33)

___

### channelId

• `get` **channelId**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Message.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L25)

___

### components

• `get` **components**(): `undefined` \| [`APIActionRowComponent`](../interfaces/internal_.APIActionRowComponent.md)<[`APIMessageActionRowComponent`](../modules/internal_.md#apimessageactionrowcomponent)\>[]

#### Returns

`undefined` \| [`APIActionRowComponent`](../interfaces/internal_.APIActionRowComponent.md)<[`APIMessageActionRowComponent`](../modules/internal_.md#apimessageactionrowcomponent)\>[]

#### Defined in

[src/structures/Message.ts:133](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L133)

___

### content

• `get` **content**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Message.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L41)

___

### editedTimestamp

• `get` **editedTimestamp**(): ``null`` \| [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

``null`` \| [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/Message.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L49)

___

### embeds

• `get` **embeds**(): [`APIEmbed`](../interfaces/internal_.APIEmbed.md)[]

#### Returns

[`APIEmbed`](../interfaces/internal_.APIEmbed.md)[]

#### Defined in

[src/structures/Message.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L77)

___

### flags

• `get` **flags**(): `undefined` \| [`MessageFlags`](../enums/internal_.MessageFlags.md)

#### Returns

`undefined` \| [`MessageFlags`](../enums/internal_.MessageFlags.md)

#### Defined in

[src/structures/Message.ts:117](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L117)

___

### guildId

• `get` **guildId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/Message.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L29)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Message.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L21)

___

### interaction

• `get` **interaction**(): `undefined` \| [`APIMessageInteraction`](../interfaces/internal_.APIMessageInteraction.md)

#### Returns

`undefined` \| [`APIMessageInteraction`](../interfaces/internal_.APIMessageInteraction.md)

#### Defined in

[src/structures/Message.ts:125](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L125)

___

### member

• `get` **member**(): `undefined` \| [`APIGuildMember`](../interfaces/internal_.APIGuildMember.md)

#### Returns

`undefined` \| [`APIGuildMember`](../interfaces/internal_.APIGuildMember.md)

#### Defined in

[src/structures/Message.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L37)

___

### mentionChannels

• `get` **mentionChannels**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/structures/Message.ts:69](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L69)

___

### mentionEveryone

• `get` **mentionEveryone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Message.ts:57](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L57)

___

### mentionRoles

• `get` **mentionRoles**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/structures/Message.ts:65](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L65)

___

### mentions

• `get` **mentions**(): [`APIUser`](../interfaces/internal_.APIUser.md) & { `member?`: [`Omit`](../modules/internal_.md#omit)<[`APIGuildMember`](../interfaces/internal_.APIGuildMember.md), ``"user"``\>  }[]

#### Returns

[`APIUser`](../interfaces/internal_.APIUser.md) & { `member?`: [`Omit`](../modules/internal_.md#omit)<[`APIGuildMember`](../interfaces/internal_.APIGuildMember.md), ``"user"``\>  }[]

#### Defined in

[src/structures/Message.ts:61](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L61)

___

### messageReference

• `get` **messageReference**(): `undefined` \| [`APIMessageReference`](../interfaces/internal_.APIMessageReference.md)

#### Returns

`undefined` \| [`APIMessageReference`](../interfaces/internal_.APIMessageReference.md)

#### Defined in

[src/structures/Message.ts:113](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L113)

___

### nonce

• `get` **nonce**(): `undefined` \| `string` \| `number`

#### Returns

`undefined` \| `string` \| `number`

#### Defined in

[src/structures/Message.ts:85](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L85)

___

### pinned

• `get` **pinned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Message.ts:89](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L89)

___

### reactions

• `get` **reactions**(): `undefined` \| [`APIReaction`](../interfaces/internal_.APIReaction.md)[]

#### Returns

`undefined` \| [`APIReaction`](../interfaces/internal_.APIReaction.md)[]

#### Defined in

[src/structures/Message.ts:81](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L81)

___

### referencedMessage

• `get` **referencedMessage**(): `undefined` \| ``null`` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Returns

`undefined` \| ``null`` \| [`APIMessage`](../interfaces/internal_.APIMessage.md)

#### Defined in

[src/structures/Message.ts:121](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L121)

___

### stickers

• `get` **stickers**(): `undefined` \| [`APIStickerItem`](../modules/internal_.md#apistickeritem)[]

#### Returns

`undefined` \| [`APIStickerItem`](../modules/internal_.md#apistickeritem)[]

#### Defined in

[src/structures/Message.ts:137](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L137)

___

### thread

• `get` **thread**(): `undefined` \| [`APIChannel`](../modules/internal_.md#apichannel)

#### Returns

`undefined` \| [`APIChannel`](../modules/internal_.md#apichannel)

#### Defined in

[src/structures/Message.ts:129](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L129)

___

### timestamp

• `get` **timestamp**(): [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

[`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/Message.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L45)

___

### tts

• `get` **tts**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Message.ts:53](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L53)

___

### type

• `get` **type**(): [`MessageType`](../enums/internal_.MessageType.md)

#### Returns

[`MessageType`](../enums/internal_.MessageType.md)

#### Defined in

[src/structures/Message.ts:97](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L97)

___

### webhookId

• `get` **webhookId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/Message.ts:93](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L93)

## Methods

### crosspost

▸ **crosspost**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/Message.ts:182](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L182)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Message.ts:146](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L146)

___

### pin

▸ **pin**(`reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Message.ts:150](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L150)

___

### react

▸ **react**(`emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Message.ts:158](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L158)

___

### removeEmbeds

▸ **removeEmbeds**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/Message.ts:177](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L177)

___

### reply

▸ **reply**(`data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreateMessageData`](../interfaces/internal_.CreateMessageData.md) |
| `options?` | `Object` |
| `options.disableEveryone?` | `boolean` |
| `options.failIfNotExists?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

[src/structures/Message.ts:162](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L162)

___

### unpin

▸ **unpin**(`reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Message.ts:154](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Message.ts#L154)
