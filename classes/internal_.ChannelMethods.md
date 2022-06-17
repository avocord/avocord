[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ChannelMethods

# Class: ChannelMethods

[<internal>](../modules/internal_.md).ChannelMethods

Methods for interacting with Channels and Messages

## Table of contents

### Constructors

- [constructor](internal_.ChannelMethods.md#constructor)

### Properties

- [disableEveryone](internal_.ChannelMethods.md#disableeveryone)
- [requestHandler](internal_.ChannelMethods.md#requesthandler)

### Methods

- [addChannelPinnedMessage](internal_.ChannelMethods.md#addchannelpinnedmessage)
- [addThreadMember](internal_.ChannelMethods.md#addthreadmember)
- [bulkDeleteMessages](internal_.ChannelMethods.md#bulkdeletemessages)
- [createChannelInvite](internal_.ChannelMethods.md#createchannelinvite)
- [createMessage](internal_.ChannelMethods.md#createmessage)
- [createReaction](internal_.ChannelMethods.md#createreaction)
- [createThreadWithMessage](internal_.ChannelMethods.md#createthreadwithmessage)
- [createThreadWithoutMessage](internal_.ChannelMethods.md#createthreadwithoutmessage)
- [crosspostMessage](internal_.ChannelMethods.md#crosspostmessage)
- [deleteAllReactions](internal_.ChannelMethods.md#deleteallreactions)
- [deleteChannel](internal_.ChannelMethods.md#deletechannel)
- [deleteChannelPermission](internal_.ChannelMethods.md#deletechannelpermission)
- [deleteMessage](internal_.ChannelMethods.md#deletemessage)
- [deleteReaction](internal_.ChannelMethods.md#deletereaction)
- [deleteReactionSelf](internal_.ChannelMethods.md#deletereactionself)
- [editChannelPermission](internal_.ChannelMethods.md#editchannelpermission)
- [editMessage](internal_.ChannelMethods.md#editmessage)
- [getChannel](internal_.ChannelMethods.md#getchannel)
- [getChannelArchivedPrivateThreads](internal_.ChannelMethods.md#getchannelarchivedprivatethreads)
- [getChannelArchivedPrivateThreadsUser](internal_.ChannelMethods.md#getchannelarchivedprivatethreadsuser)
- [getChannelArchivedPublicThreads](internal_.ChannelMethods.md#getchannelarchivedpublicthreads)
- [getChannelInvites](internal_.ChannelMethods.md#getchannelinvites)
- [getChannelMessage](internal_.ChannelMethods.md#getchannelmessage)
- [getChannelMessages](internal_.ChannelMethods.md#getchannelmessages)
- [getChannelPinnedMessages](internal_.ChannelMethods.md#getchannelpinnedmessages)
- [getChannelThreadMembers](internal_.ChannelMethods.md#getchannelthreadmembers)
- [getReactions](internal_.ChannelMethods.md#getreactions)
- [joinThread](internal_.ChannelMethods.md#jointhread)
- [leaveThread](internal_.ChannelMethods.md#leavethread)
- [removeChannelPinnedMessage](internal_.ChannelMethods.md#removechannelpinnedmessage)
- [removeThreadMember](internal_.ChannelMethods.md#removethreadmember)
- [startChannelTyping](internal_.ChannelMethods.md#startchanneltyping)
- [updateChannel](internal_.ChannelMethods.md#updatechannel)

## Constructors

### constructor

• **new ChannelMethods**(`requestHandler`, `disableEveryone`)

Create a new Channel Method handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.channel.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |
| `disableEveryone` | `boolean` | Disable [at]everyone/[at]here on outgoing messages |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:17

## Properties

### disableEveryone

• **disableEveryone**: `boolean`

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:7

___

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:6

## Methods

### addChannelPinnedMessage

▸ **addChannelPinnedMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Pin a message within a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `reason?` | `string` | Reason for pinning the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed   | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |
| MANAGE_MESSAGES      | if channel is not a DM channel |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:420

___

### addThreadMember

▸ **addThreadMember**(`channelId`, `userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Add a user to a thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `userId` | `string` | Id of the user to add |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed          | Condition |
|-----------------------------|-----------|
| CurrentUser added to Thread | always    |
| SEND_MESSAGES_IN_THREADS    | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:492

___

### bulkDeleteMessages

▸ **bulkDeleteMessages**(`channelId`, `messages`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Bulk delete messages, messages may not be older than 2 weeks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messages` | `string`[] | array of message ids to delete |
| `reason?` | `string` | Reason for deleting the messages |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |
| MANAGE_MESSAGES    | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:218

___

### createChannelInvite

▸ **createChannelInvite**(`channelId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Create an invite for a channel

If no data argument is passed, the invite will be created with the defaults listed below

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `data?` | [`CreateInviteData`](../interfaces/internal_.CreateInviteData.md) | invite data (optional) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

(https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed    | Condition |
|-----------------------|-----------|
| VIEW_CHANNEL          | always    |
| CREATE_INSTANT_INVITE | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:381

___

### createMessage

▸ **createMessage**(`channelId`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Creates a new Message within a channel

**Make sure to use a filename with a proper extension (e.g. png, jpeg, etc.) when you want to upload files**

**`example`**
// Make a bot say "hi" within a channel
// createMessage sends the passed data as content, when you give it a string
const client = new SnowTransfer('TOKEN')
client.channel.createMessage('channel id', 'hi')

**`example`**
// Send a rich embed object
const client = new SnowTransfer('TOKEN')
const embedData = {
	title: 'This is a nice embed',
	description: 'But winter is so cold',
	fields: [
		{ name: 'Brr', value: 'Insert snowflake emoji here' }
	]
}
client.channel.createMessage('channel id', { embeds: [embedData] })

**`example`**
// Send a file with a comment
const client = new SnowTransfer('TOKEN')
// fileData will be a buffer with the data of the png image.
const fileData = fs.readFileSync('nice_picture.png') // You should probably use fs.readFile, since it's asynchronous, synchronous methods block the thread.
client.channel.createMessage('channel id', { content: 'This is a nice picture', files: [{ name: 'Optional_Filename.png', file: fileData }] })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel to sent a message to |
| `data` | `string` \| [`CreateMessageData`](../interfaces/internal_.CreateMessageData-1.md) | Data to send, if data is a string it will be used as the content of the message, if data is not a string you should take a look at the properties below to know what you may send |
| `options?` | `Object` | - |
| `options.disableEveryone?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed       | Condition                                                               |
|--------------------------|-------------------------------------------------------------------------|
| VIEW_CHANNEL             | always                                                                  |
| SEND_MESSAGES            | if the message was sent by the current user and not in a thread channel |
| SEND_MESSAGES_IN_THREADS | if the message was sent by the current user and is in a thread channel  |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:149

___

### createReaction

▸ **createReaction**(`channelId`, `messageId`, `emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Adds a reaction to a message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer('TOKEN');
client.channel.createReaction('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer('TOKEN');
client.channel.createReaction('channel Id', 'message Id', encodeURIComponent('😀'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | uri encoded reaction emoji to add you may either use a discord emoji in the format `:emoji_name:emoji_id` or a unicode emoji, which can be found [here](http://www.unicode.org/emoji/charts/full-emoji-list.html) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed   | Condition                                          |
|----------------------|----------------------------------------------------|
| VIEW_CHANNEL         | always                                             |
| READ_MESSAGE_HISTORY | always                                             |
| ADD_REACTIONS        | When no other user has reacted with the emoji used |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:244

___

### createThreadWithMessage

▸ **createThreadWithMessage**(`channelId`, `messageId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md)\>

Creates a public thread off a message in a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `options` | `Object` | Thread meta data |
| `options.auto_archive_duration` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` | - |
| `options.name` | `string` | - |
| `options.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed    | Condition |
|-----------------------|-----------|
| VIEW_CHANNEL          | always    |
| CREATE_PUBLIC_THREADS | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:447

___

### createThreadWithoutMessage

▸ **createThreadWithoutMessage**(`channelId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

Creates a thread under a channel without a message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `options` | `Object` | Thread meta data |
| `options.auto_archive_duration` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` | - |
| `options.invitable?` | `boolean` | - |
| `options.name` | `string` | - |
| `options.reason?` | `string` | - |
| `options.type` | ``10`` \| ``12`` \| ``11`` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed     | Condition                    |
|------------------------|------------------------------|
| VIEW_CHANNEL           | always                       |
| CREATE_PUBLIC_THREADS  | if creating a public thread  |
| CREATE_PRIVATE_THREADS | if creating a private thread |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:464

___

### crosspostMessage

▸ **crosspostMessage**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Crosspost a message in a news channel to all following channels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the news channel |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed       | Condition                                                               |
|--------------------------|-------------------------------------------------------------------------|
| VIEW_CHANNEL             | always                                                                  |
| SEND_MESSAGES            | if the message was sent by the current user and not in a thread channel |
| SEND_MESSAGES_IN_THREADS | if the message was sent by the current user and is in a thread channel  |
| MANAGE_MESSAGES          | if the message wasn't sent by the current user                          |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:165

___

### deleteAllReactions

▸ **deleteAllReactions**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete all reactions from a message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed   | Condition |
|----------------------|-----------|
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |
| MANAGE_MESSAGES      | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:324

___

### deleteChannel

▸ **deleteChannel**(`channelId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

Delete a channel or thread via Id

This either **deletes** a Guild Channel or **closes** a Direct Message Channel

**Be careful with deleting Guild Channels as this can not be undone!**

When deleting a category, this does **not** delete the child channels of a category. They will just have their `parent_id` removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `reason?` | `string` | Reason for deleting the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed | Condition                       |
|--------------------|---------------------------------|
| VIEW_CHANNEL       | always                          |
| MANAGE_CHANNELS    | When deleting a Guild Channel   |
| MANAGE_THREADS     | When channelId is a Thread's Id |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:72

___

### deleteChannelPermission

▸ **deleteChannelPermission**(`channelId`, `permissionId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a permission overwrite from a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `permissionId` | `string` | Id of the permission overwrite |
| `reason?` | `string` | Reason for deleting the permission |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                  |
|--------------------|----------------------------|
| MANAGE_CHANNELS    | if channel is not a thread |
| MANAGE_THREADS     | if channel is a thread     |
| MANAGE_ROLES       | always                     |
| VIEW_CHANNEL       | always                     |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:356

___

### deleteMessage

▸ **deleteMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a message

**`example`**
// Delete a message
const client = new SnowTransfer('TOKEN')
client.channel.deleteMessage('channel id', 'message id')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `reason?` | `string` | Reason for deleting the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                                    |
|--------------------|----------------------------------------------|
| VIEW_CHANNEL       | always                                       |
| MANAGE_MESSAGES    | When the bot isn't the author of the message |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:205

___

### deleteReaction

▸ **deleteReaction**(`channelId`, `messageId`, `emoji`, `userId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a reaction from a message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer('TOKEN');
client.channel.deleteReaction('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'), 'user Id');

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer('TOKEN');
// If a user Id is not supplied, the emoji from that message will be removed for all users
client.channel.deleteReaction('channel Id', 'message Id', encodeURIComponent('😀'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | reaction emoji |
| `userId?` | `string` | Id of the user |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permission           | Condition |
|----------------------|-----------|
| MANAGE_MESSAGES      | always    |
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:293

___

### deleteReactionSelf

▸ **deleteReactionSelf**(`channelId`, `messageId`, `emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a reaction added by the current user from a message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer('TOKEN');
client.channel.deleteReactionSelf('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer('TOKEN');
client.channel.deleteReactionSelf('channel Id', 'message Id', encodeURIComponent('😀'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | reaction emoji |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permission           | Condition |
|----------------------|-----------|
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:267

___

### editChannelPermission

▸ **editChannelPermission**(`channelId`, `permissionId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modify the permission overwrites of a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `permissionId` | `string` | Id of the permission overwrite |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`Overwrite`](../modules/internal_.md#overwrite)\> & { `reason?`: `string`  } | modified [permission overwrite](https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params) object |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                  |
|--------------------|----------------------------|
| MANAGE_CHANNELS    | if channel is not a thread |
| MANAGE_THREADS     | if channel is a thread     |
| MANAGE_ROLES       | always                     |
| VIEW_CHANNEL       | always                     |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:339

___

### editMessage

▸ **editMessage**(`channelId`, `messageId`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edit a message sent by the current user or edit the message flags of another user's message

**`example`**
// Simple ping response
const client = new SnowTransfer('TOKEN')
const time = Date.now()
const message = await client.channel.createMessage('channel id', 'pong')
client.channel.editMessage('channel id', message.id, `pong ${Date.now() - time}ms`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `data` | `string` \| [`EditMessageData`](../interfaces/internal_.EditMessageData.md) | Data to send |
| `options?` | `Object` | - |
| `options.disableEveryone?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed | Condition                                        |
|--------------------|--------------------------------------------------|
| VIEW_CHANNEL       | always                                           |
| MANAGE_MESSAGES    | When editing someone else's message to set flags |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:185

___

### getChannel

▸ **getChannel**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

Get a channel via Id

**`example`**
const client = new SnowTransfer('TOKEN')
const channel = await client.channel.getChannel('channel id')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:31

___

### getChannelArchivedPrivateThreads

▸ **getChannelArchivedPrivateThreads**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

Gets all threads that are private and archived within a GuildChannel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)

| Permissions needed          | Condition                                  |
|-----------------------------|--------------------------------------------|
| VIEW_CHANNEL                | always                                     |
| CurrentUser added to Thread | if CurrentUser doesn't have MANAGE_THREADS |
| MANAGE_THREADS              | if CurrentUser isn't added to Thread       |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:532

___

### getChannelArchivedPrivateThreadsUser

▸ **getChannelArchivedPrivateThreadsUser**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

Gets all threads that are private and archived within a GuildChannel that the CurrentUser is apart of

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]\>

Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)

| Permissions needed                | Condition                                  |
|-----------------------------------|--------------------------------------------|
| VIEW_CHANNEL                      | always                                     |
| CurrentUser added to Thread       | if CurrentUser doesn't have MANAGE_THREADS |
| MANAGE_THREADS                    | if CurrentUser isn't added to Thread       |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:544

___

### getChannelArchivedPublicThreads

▸ **getChannelArchivedPublicThreads**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

Gets all threads that are public and archived within a GuildChannel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]\>

Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)

| Permissions needed          | Condition                                  |
|-----------------------------|--------------------------------------------|
| VIEW_CHANNEL                | always                                     |
| CurrentUser added to Thread | if CurrentUser doesn't have MANAGE_THREADS |
| MANAGE_THREADS              | if CurrentUser isn't added to Thread       |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:556

___

### getChannelInvites

▸ **getChannelInvites**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)[]\>

Get a list of invites for a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)[]\>

Array of [invite objects](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |
| MANAGE_CHANNELS    | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:367

___

### getChannelMessage

▸ **getChannelMessage**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a single message via Id

**`example`**
// Get a single message from a channel via id
const client = new SnowTransfer('TOKEN')
const message = await client.channel.getChannelMessage('channel id', 'message id')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed   | Condition |
|----------------------|-----------|
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:108

___

### getChannelMessages

▸ **getChannelMessages**(`channelId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Get a list of messages from a channel

**`example`**
// Fetch the last 20 messages from a channel
const client = new SnowTransfer('TOKEN')
const options = {
	limit: 20
}
const messages = await client.channel.getChannelMessages('channel id', options);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `options?` | [`GetMessageOptions`](../interfaces/internal_.GetMessageOptions-1.md) | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Array of [discord message](https://discord.com/developers/docs/resources/channel#message-object) objects

| Permissions needed   | Condition |
|----------------------|-----------|
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:91

___

### getChannelPinnedMessages

▸ **getChannelPinnedMessages**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Get a list of pinned messages for a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Array of [message objects](https://discord.com/developers/docs/resources/channel#message-object)

| Permissions needed   | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:406

___

### getChannelThreadMembers

▸ **getChannelThreadMembers**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)[]\>

Gets all members within a thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Thread |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)[]\>

Array of [thread member objects](https://discord.com/developers/docs/resources/channel#thread-member-object)

| Permissions needed           | Condition |
|------------------------------|-----------|
| VIEW_CHANNEL                 | always    |
| GUILD_MEMBERS gateway intent | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:520

___

### getReactions

▸ **getReactions**(`channelId`, `messageId`, `emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)[]\>

Get a list of users that reacted with a certain emoji on a certain message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer('TOKEN');
const reactions = await client.channel.getReactions('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | reaction emoji |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)[]\>

Array of [user objects](https://discord.com/developers/docs/resources/user#user-object)

| Permissions needed   | Condition |
|----------------------|-----------|
| VIEW_CHANNEL         | always    |
| READ_MESSAGE_HISTORY | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:311

___

### joinThread

▸ **joinThread**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Join a thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:480

___

### leaveThread

▸ **leaveThread**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Leave a thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:498

___

### removeChannelPinnedMessage

▸ **removeChannelPinnedMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a pinned message from a channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `reason?` | `string` | Reason for removing the pinned message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed   | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |
| MANAGE_MESSAGES      | if channel is not a DM channel |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:434

___

### removeThreadMember

▸ **removeThreadMember**(`channelId`, `userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a user from a thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `userId` | `string` | Id of the user to remove |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                                            |
|--------------------|------------------------------------------------------|
| MANAGE_THREADS     | if the current user is not the creator of the thread |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:509

___

### startChannelTyping

▸ **startChannelTyping**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an indicator that the current user is typing within a channel.

**You should generally avoid this method unless used for longer computations (>1s)**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed       | Condition                    |
|--------------------------|------------------------------|
| VIEW_CHANNEL             | always                       |
| SEND_MESSAGES            | if channel is not a thread   |
| SEND_MESSAGES_IN_THREADS | if channel is a thread       |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:395

___

### updateChannel

▸ **updateChannel**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

Update a channel or thread

**`example`**
// This example updates a channel with the passed id to use "New Name" as it's name and "Look at this cool topic" as the topic
const client = new SnowTransfer('TOKEN')
const updateData = {
	name: 'New Name',
	topic: 'Look at this cool topic'
}
client.channel.updateChannel('channel id', updateData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `data` | [`EditChannelData`](../interfaces/internal_.EditChannelData-1.md) | Data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed | Condition                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| VIEW_CHANNEL       | always                                                                                                          |
| MANAGE_CHANNELS    | always                                                                                                          |
| MANAGE_THREADS     | When editing a Thread to change the name, archived, auto_archive_duration, rate_limit_per_user or locked fields |

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:53
