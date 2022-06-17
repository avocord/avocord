[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildAssetsMethods

# Class: GuildAssetsMethods

[<internal>](../modules/internal_.md).GuildAssetsMethods

Methods for interacting with emojis

## Table of contents

### Constructors

- [constructor](internal_.GuildAssetsMethods.md#constructor)

### Properties

- [requestHandler](internal_.GuildAssetsMethods.md#requesthandler)

### Methods

- [createEmoji](internal_.GuildAssetsMethods.md#createemoji)
- [createGuildSticker](internal_.GuildAssetsMethods.md#createguildsticker)
- [deleteEmoji](internal_.GuildAssetsMethods.md#deleteemoji)
- [deleteGuildSticker](internal_.GuildAssetsMethods.md#deleteguildsticker)
- [getEmoji](internal_.GuildAssetsMethods.md#getemoji)
- [getEmojis](internal_.GuildAssetsMethods.md#getemojis)
- [getGuildSticker](internal_.GuildAssetsMethods.md#getguildsticker)
- [getGuildStickers](internal_.GuildAssetsMethods.md#getguildstickers)
- [getSticker](internal_.GuildAssetsMethods.md#getsticker)
- [updateEmoji](internal_.GuildAssetsMethods.md#updateemoji)
- [updateGuildSticker](internal_.GuildAssetsMethods.md#updateguildsticker)

## Constructors

### constructor

• **new GuildAssetsMethods**(`requestHandler`)

Create a new GuildAssets Method handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guildAssets.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:6

## Methods

### createEmoji

▸ **createEmoji**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

Create a new Emoji

**`example`**
// upload a simple png emoji with a name of "niceEmoji"
const client = new SnowTransfer('TOKEN');
const fileData = fs.readFileSync('nice_emoji.png') // You should probably use fs.readFile, since it's asynchronous, synchronous methods pause the thread.
const emojiData = {
	name: 'niceEmoji',
	image: `data:image/png;base64,${fileData.toString('base64')}` // base64 data url: data:mimetype;base64,base64String
}
client.guildAssets.createEmoji('guild id', emojiData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`CreateEmojiData`](../interfaces/internal_.CreateEmojiData.md) | Emoji data, check the example |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

(https://discord.com/developers/docs/resources/emoji#emoji-object)

| Permissions needed         | Condition |
|----------------------------|-----------|
| MANAGE_EMOJIS_AND_STICKERS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:49

___

### createGuildSticker

▸ **createGuildSticker**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

Create a guild sticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`CreateStickerData`](../interfaces/internal_.CreateStickerData.md) | Sticker data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

A [sticker object](https://discord.com/developers/docs/resources/sticker#sticker-object)

| Permissions needed          | Condition                                       |
|-----------------------------|-------------------------------------------------|
| MANAGE_EMOJIS_AND_STICKERS  | always                                          |
| Guild VERIFIED or PARTNERED | If CurrentUser tries to create a LOTTIE sticker |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:124

___

### deleteEmoji

▸ **deleteEmoji**(`guildId`, `emojiId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete an emoji

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `emojiId` | `string` | Id of the emoji |
| `reason?` | `string` | Reason for deleting the emoji |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed         | Condition |
|----------------------------|-----------|
| MANAGE_EMOJIS_AND_STICKERS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:85

___

### deleteGuildSticker

▸ **deleteGuildSticker**(`guildId`, `stickerId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild sticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `stickerId` | `string` | Id of the sticker |
| `reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed         | Condition |
|----------------------------|-----------|
| MANAGE_EMOJIS_AND_STICKERS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:152

___

### getEmoji

▸ **getEmoji**(`guildId`, `emojiId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

Get an emoji via guildId + emojiId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `emojiId` | `string` | Id of the emoji |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

(https://discord.com/developers/docs/resources/emoji#emoji-object)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:28

___

### getEmojis

▸ **getEmojis**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)[]\>

Get a list of emojis of a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)[]\>

Array of [emoji objects](https://discord.com/developers/docs/resources/emoji#emoji-object)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:21

___

### getGuildSticker

▸ **getGuildSticker**(`guildId`, `stickerId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

Get a guild sticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `stickerId` | `string` | Id of the sticker |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

A [sticker object](https://discord.com/developers/docs/resources/sticker#sticker-object)

| Permissions needed         | Condition                                   |
|----------------------------|---------------------------------------------|
| MANAGE_EMOJIS_AND_STICKERS | if the CurrentUser desires the `user` field |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:112

___

### getGuildStickers

▸ **getGuildStickers**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)[]\>

Get all guild stickers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)[]\>

An Array of [sticker objects](https://discord.com/developers/docs/resources/sticker#sticker-object)

| Permissions needed         | Condition                                   |
|----------------------------|---------------------------------------------|
| MANAGE_EMOJIS_AND_STICKERS | if the CurrentUser desires the `user` field |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:101

___

### getSticker

▸ **getSticker**(`stickerId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

Get a global sticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stickerId` | `string` | Id of the sticker |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

(https://discord.com/developers/docs/resources/sticker#sticker-object)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:91

___

### updateEmoji

▸ **updateEmoji**(`guildId`, `emojiId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

Update an existing emoji

**`example`**
// Change the name of an existing emoji to "niceEmote"
const client = new SnowTransfer('TOKEN');
const emojiData = {
	name: 'niceEmote'
}
client.guildAssets.updateEmoji('guild id', 'emoji id', emojiData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `emojiId` | `string` | Id of the emoji |
| `data` | `Object` | Emoji data |
| `data.name?` | `string` | - |
| `data.reason?` | `string` | - |
| `data.roles?` | ``null`` \| `string`[] | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Emoji`](../modules/internal_.md#emoji)\>

(https://discord.com/developers/docs/resources/emoji#emoji-object)

| Permissions needed         | Condition |
|----------------------------|-----------|
| MANAGE_EMOJIS_AND_STICKERS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:69

___

### updateGuildSticker

▸ **updateGuildSticker**(`guildId`, `stickerId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

Update a guild sticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `stickerId` | `string` | Id of the sticker |
| `data` | `Object` | Sticker data |
| `data.description?` | ``null`` \| `string` | - |
| `data.name?` | `string` | - |
| `data.reason?` | `string` | - |
| `data.tags?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Sticker`](../modules/internal_.md#sticker)\>

A [sticker object](https://discord.com/developers/docs/resources/sticker#sticker-object)

| Permissions needed         | Condition |
|----------------------------|-----------|
| MANAGE_EMOJIS_AND_STICKERS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildAssets.d.ts:136
