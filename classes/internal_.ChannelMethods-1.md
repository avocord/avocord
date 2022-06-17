[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ChannelMethods

# Class: ChannelMethods

[<internal>](../modules/internal_.md).ChannelMethods

Methods for interacting with Channels and Messages

## Table of contents

### Constructors

- [constructor](internal_.ChannelMethods-1.md#constructor)

### Properties

- [disableEveryone](internal_.ChannelMethods-1.md#disableeveryone)
- [requestHandler](internal_.ChannelMethods-1.md#requesthandler)
- [default](internal_.ChannelMethods-1.md#default)

### Methods

- [addChannelPinnedMessage](internal_.ChannelMethods-1.md#addchannelpinnedmessage)
- [addThreadMember](internal_.ChannelMethods-1.md#addthreadmember)
- [bulkDeleteMessages](internal_.ChannelMethods-1.md#bulkdeletemessages)
- [createChannelInvite](internal_.ChannelMethods-1.md#createchannelinvite)
- [createMessage](internal_.ChannelMethods-1.md#createmessage)
- [createReaction](internal_.ChannelMethods-1.md#createreaction)
- [createThreadWithMessage](internal_.ChannelMethods-1.md#createthreadwithmessage)
- [createThreadWithoutMessage](internal_.ChannelMethods-1.md#createthreadwithoutmessage)
- [crosspostMessage](internal_.ChannelMethods-1.md#crosspostmessage)
- [deleteAllReactions](internal_.ChannelMethods-1.md#deleteallreactions)
- [deleteChannel](internal_.ChannelMethods-1.md#deletechannel)
- [deleteChannelPermission](internal_.ChannelMethods-1.md#deletechannelpermission)
- [deleteMessage](internal_.ChannelMethods-1.md#deletemessage)
- [deleteReaction](internal_.ChannelMethods-1.md#deletereaction)
- [deleteReactionSelf](internal_.ChannelMethods-1.md#deletereactionself)
- [editChannelPermission](internal_.ChannelMethods-1.md#editchannelpermission)
- [editMessage](internal_.ChannelMethods-1.md#editmessage)
- [followNewsChannel](internal_.ChannelMethods-1.md#follownewschannel)
- [getChannel](internal_.ChannelMethods-1.md#getchannel)
- [getChannelArchivedPrivateThreads](internal_.ChannelMethods-1.md#getchannelarchivedprivatethreads)
- [getChannelArchivedPrivateThreadsUser](internal_.ChannelMethods-1.md#getchannelarchivedprivatethreadsuser)
- [getChannelArchivedPublicThreads](internal_.ChannelMethods-1.md#getchannelarchivedpublicthreads)
- [getChannelInvites](internal_.ChannelMethods-1.md#getchannelinvites)
- [getChannelMessage](internal_.ChannelMethods-1.md#getchannelmessage)
- [getChannelMessages](internal_.ChannelMethods-1.md#getchannelmessages)
- [getChannelPinnedMessages](internal_.ChannelMethods-1.md#getchannelpinnedmessages)
- [getReactions](internal_.ChannelMethods-1.md#getreactions)
- [getThreadMember](internal_.ChannelMethods-1.md#getthreadmember)
- [getThreadMembers](internal_.ChannelMethods-1.md#getthreadmembers)
- [joinThread](internal_.ChannelMethods-1.md#jointhread)
- [leaveThread](internal_.ChannelMethods-1.md#leavethread)
- [removeChannelPinnedMessage](internal_.ChannelMethods-1.md#removechannelpinnedmessage)
- [removeThreadMember](internal_.ChannelMethods-1.md#removethreadmember)
- [startChannelTyping](internal_.ChannelMethods-1.md#startchanneltyping)
- [updateChannel](internal_.ChannelMethods-1.md#updatechannel)

## Constructors

### constructor

• **new ChannelMethods**(`requestHandler`, `disableEveryone`)

Create a new Channel Method handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.channel.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |
| `disableEveryone` | `boolean` | Disable [at]everyone/[at]here on outgoing messages |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:18

## Properties

### disableEveryone

• **disableEveryone**: `boolean`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:7

___

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:6

___

### default

▪ `Static` **default**: typeof [`ChannelMethods`](internal_.ChannelMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:8

## Methods

### addChannelPinnedMessage

▸ **addChannelPinnedMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Pin a message within a channel

**`example`**
// Pin a message because it was a good meme
const client = new SnowTransfer("TOKEN")
client.channel.addChannelPinnedMessage("channel id", "message id", "Good meme")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:498

___

### addThreadMember

▸ **addThreadMember**(`threadId`, `userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Add a user to a thread

CurrentUser must be a member of the thread

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.addThreadMember("thread id", "user id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threadId` | `string` | Id of the thread |
| `userId` | `string` | Id of the user to add |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed          | Condition |
|-----------------------------|-----------|
| CurrentUser added to Thread | always    |
| SEND_MESSAGES_IN_THREADS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:605

___

### bulkDeleteMessages

▸ **bulkDeleteMessages**(`channelId`, `messages`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Bulk delete messages from a guild channel, messages may not be older than 2 weeks

**`example`**
// Bulk deletes 2 messages with a reason of "spam"
const client = new SnowTransfer("TOKEN")
client.channel.bulkDeleteMessages("channel id", ["message id 1", "message id 2"], "spam")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:352

___

### createChannelInvite

▸ **createChannelInvite**(`channelId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Create an invite for a guild channel

If no data argument is passed, the invite will be created with the defaults

**`example`**
// Creates a unique permanent invite with infinite uses
const client = new SnowTransfer("TOKEN")
const invite = await client.channel.createChannelInvite("channel id", { max_age: 0, max_uses: 0, unique: true })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `data?` | [`CreateInviteData`](../interfaces/internal_.CreateInviteData-1.md) & { `reason?`: `string`  } | invite data (optional) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

(https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed    | Condition |
|-----------------------|-----------|
| VIEW_CHANNEL          | always    |
| CREATE_INSTANT_INVITE | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:408

___

### createMessage

▸ **createMessage**(`channelId`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Creates a new Message within a channel or thread

**Make sure to use a filename with a proper extension (e.g. png, jpeg, etc.) when you want to upload files**

**`example`**
// Make a bot say "hi" within a channel
// createMessage sends the passed data as content, when you give it a string
const client = new SnowTransfer("TOKEN")
client.channel.createMessage("channel id", "hi")

**`example`**
// Send a rich embed object
const client = new SnowTransfer("TOKEN")
const embedData = {
	title: "This is a nice embed",
	description: "But winter is so cold",
	fields: [
		{ name: "Brr", value: "Insert snowflake emoji here" }
	]
}
client.channel.createMessage("channel id", { embeds: [embedData] })

**`example`**
// Send a file with a comment
const client = new SnowTransfer("TOKEN")
// fileData will be a buffer with the data of the png image.
const fileData = fs.readFileSync("nice_picture.png") // You should probably use fs.readFile, since it is asynchronous, synchronous methods block the thread.
client.channel.createMessage("channel id", { content: "This is a nice picture", files: [{ name: "Optional_Filename.png", file: fileData }] })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel or thread to sent a message to |
| `data` | `string` \| [`CreateMessageData`](../interfaces/internal_.CreateMessageData-2.md) | Data to send, if data is a string it will be used as the content of the message, if data is not a string you should take a look at the properties below to know what you may send |
| `options?` | `Object` | - |
| `options.disableEveryone?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed       | Condition                                                     |
|--------------------------|---------------------------------------------------------------|
| VIEW_CHANNEL             | if channel is not a DM channel                                |
| READ_MESSAGE_HISTORY     | if channel is not a DM channel and message is a reply         |
| SEND_MESSAGES            | if channel is not a DM channel and if channel is not a thread |
| SEND_TTS_MESSAGES        | if channel is not a DM channel and tts is set to true         |
| SEND_MESSAGES_IN_THREADS | if channel is a thread                                        |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:160

___

### createReaction

▸ **createReaction**(`channelId`, `messageId`, `emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Adds a reaction to a message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer("TOKEN")
client.channel.createReaction("channel Id", "message Id", encodeURIComponent("awooo:322522663304036352"))

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer("TOKEN")
client.channel.createReaction("channel Id", "message Id", encodeURIComponent("😀"))

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | uri encoded reaction emoji to add you may either use a discord emoji in the format `:emoji_name:emoji_id` or a unicode emoji, which can be found [here](http://www.unicode.org/emoji/charts/full-emoji-list.html) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed   | Condition                                                                          |
|----------------------|------------------------------------------------------------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel                                                     |
| READ_MESSAGE_HISTORY | if channel is not a DM channel                                                     |
| ADD_REACTIONS        | When no other user has reacted with the emoji used and channel is not a DM channel |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:206

___

### createThreadWithMessage

▸ **createThreadWithMessage**(`channelId`, `messageId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md)\>

Creates a public thread off a message in a guild channel

**`example`**
// Create a thread off a cool art piece to discuss
const client = new SnowTransfer("TOKEN")
const thread = await client.channel.createThreadWithMessage("channel id", "message id", { name: "cool-art", reason: "I wanna talk about it!" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
| `messageId` | `string` | Id of the message |
| `options` | `Object` | Thread meta data |
| `options.auto_archive_duration?` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` | - |
| `options.name` | `string` | - |
| `options.rate_limit_per_user?` | ``null`` \| `number` | - |
| `options.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed    | Condition |
|-----------------------|-----------|
| VIEW_CHANNEL          | always    |
| CREATE_PUBLIC_THREADS | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:535

___

### createThreadWithoutMessage

▸ **createThreadWithoutMessage**(`channelId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PublicThread`](../interfaces/internal_.PublicThread.md)\>

Creates a thread under a guild channel without a message

**`example`**
// Creates a private thread that's invitable to talk about someone's birthday
const client = new SnowTransfer("TOKEN")
const thread = await client.channel.createThreadWithoutMessage("channel id", { name: "persons-birthday", type: 12, invitable: true, reason: "Shh! It's a surprise" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
| `options` | `Object` | Thread meta data |
| `options.auto_archive_duration?` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` | - |
| `options.invitable?` | `boolean` | - |
| `options.name` | `string` | - |
| `options.rate_limit_per_user?` | ``null`` \| `number` | - |
| `options.reason?` | `string` | - |
| `options.type` | ``11`` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PublicThread`](../interfaces/internal_.PublicThread.md)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed     | Condition                    |
|------------------------|------------------------------|
| VIEW_CHANNEL           | always                       |
| CREATE_PUBLIC_THREADS  | if creating a public thread  |
| CREATE_PRIVATE_THREADS | if creating a private thread |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:558

▸ **createThreadWithoutMessage**(`channelId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelId` | `string` |
| `options` | `Object` |
| `options.auto_archive_duration?` | ``60`` \| ``1440`` \| ``4320`` \| ``10080`` |
| `options.invitable?` | `boolean` |
| `options.name` | `string` |
| `options.rate_limit_per_user?` | ``null`` \| `number` |
| `options.reason?` | `string` |
| `options.type` | ``12`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PrivateThread`](../interfaces/internal_.PrivateThread.md)\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:566

___

### crosspostMessage

▸ **crosspostMessage**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Crosspost a message in a news channel to all following channels

**`example`**
// Crosspost a message
const client = new SnowTransfer("TOKEN")
client.channel.crosspostMessage("channel id", "message id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the news channel |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed | Condition                                      |
|--------------------|------------------------------------------------|
| VIEW_CHANNEL       | always                                         |
| SEND_MESSAGES      | if the message was sent by the current user    |
| MANAGE_MESSAGES    | if the message wasn't sent by the current user |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:180

___

### deleteAllReactions

▸ **deleteAllReactions**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete all reactions from a message in a guild channel

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.deleteAllReactions("channel Id", "message Id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:294

___

### deleteChannel

▸ **deleteChannel**(`channelId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

Delete a channel or thread via Id

This either **deletes** a Guild Channel/thread or **closes** a Direct Message Channel

**Be careful with deleting Guild Channels as this cannot be undone!**

When deleting a category, this does **not** delete the child channels of a category. They will just have their `parent_id` removed.

For community guilds, the rules channel and the community updates channel cannot be deleted.

**`example`**
// Deletes a channel via id because it wasn't needed anymore
const client = new SnowTransfer("TOKEN")
client.channel.deleteChannel("channel id", "No longer needed")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `reason?` | `string` | Reason for deleting the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed | Condition                      |
|--------------------|--------------------------------|
| MANAGE_CHANNELS    | if channel is not a DM channel |
| MANAGE_THREADS     | if channel is a thread         |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:81

___

### deleteChannelPermission

▸ **deleteChannelPermission**(`channelId`, `permissionId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a permission overwrite from a guild channel

**`example`**
// Deletes the permission overwrite of a user
const client = new SnowTransfer("TOKEN")
client.channel.deleteChannelPermission("channel id", "user id", "Abusing channel")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:430

___

### deleteMessage

▸ **deleteMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a message

**`example`**
// Delete a message
const client = new SnowTransfer("TOKEN")
client.channel.deleteMessage("channel id", "message id")

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
| VIEW_CHANNEL       | if channel is not a DM channel               |
| MANAGE_MESSAGES    | When the bot isn't the author of the message |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:334

___

### deleteReaction

▸ **deleteReaction**(`channelId`, `messageId`, `emoji`, `userId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a reaction from a message in a guild channel

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer("TOKEN")
client.channel.deleteReaction("channel Id", "message Id", encodeURIComponent("awooo:322522663304036352"), "user Id")

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer("TOKEN")
// If a user Id is not supplied, the emoji from that message will be removed for all users
client.channel.deleteReaction("channel Id", "message Id", encodeURIComponent("😀"))

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:255

___

### deleteReactionSelf

▸ **deleteReactionSelf**(`channelId`, `messageId`, `emoji`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a reaction added by the current user from a message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer("TOKEN")
client.channel.deleteReactionSelf("channel Id", "message Id", encodeURIComponent("awooo:322522663304036352"))

**`example`**
// using a utf-8 emoji
const client = new SnowTransfer("TOKEN")
client.channel.deleteReactionSelf("channel Id", "message Id", encodeURIComponent("😀"))

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | reaction emoji |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permission           | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:229

___

### editChannelPermission

▸ **editChannelPermission**(`channelId`, `permissionId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modify the permission overwrites of a guild channel

**`example`**
// Edits the permissions of a user to allow viewing the channel only
const client = new SnowTransfer("TOKEN")
client.channel.editChannelPermission("channel id", "user id", { allow: String(1 << 10), type: 1 })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
| `permissionId` | `string` | Id of the permission overwrite |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`Omit`](../modules/internal_.md#omit)<[`Overwrite`](../modules/internal_.md#overwrite), ``"id"``\>\> & { `reason?`: `string`  } | modified [permission overwrite](https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params) object |

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:372

___

### editMessage

▸ **editMessage**(`channelId`, `messageId`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edit a message sent by the current user or edit the message flags of another user's message

**`example`**
// Simple ping response
const client = new SnowTransfer("TOKEN")
const time = Date.now()
const message = await client.channel.createMessage("channel id", "pong")
client.channel.editMessage("channel id", message.id, `pong ${Date.now() - time}ms`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `data` | `string` \| [`EditMessageData`](../interfaces/internal_.EditMessageData-1.md) | Data to send |
| `options?` | `Object` | - |
| `options.disableEveryone?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed | Condition                                        |
|--------------------|--------------------------------------------------|
| VIEW_CHANNEL       | if channel is not a DM channel                   |
| MANAGE_MESSAGES    | When editing someone else's message to set flags |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:314

___

### followNewsChannel

▸ **followNewsChannel**(`channelId`, `webhookChannelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FollowedChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#followedchannel)\>

Follow a news channel to another channel

**`example`**
// Follows a news channel to a text channel
const client = new SnowTransfer("TOKEN")
client.channel.followNewsChannel("news channel id", "text channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | The Id of the news channel |
| `webhookChannelId` | `string` | The Id of the channel messages will be sent to |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FollowedChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#followedchannel)\>

A [followed channel](https://discord.com/developers/docs/resources/channel#followed-channel-object) object

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_WEBHOOKS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:446

___

### getChannel

▸ **getChannel**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

Get a channel via Id

**`example`**
const client = new SnowTransfer("TOKEN")
const channel = await client.channel.getChannel("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Channel`](../modules/internal_.md#channel-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:28

___

### getChannelArchivedPrivateThreads

▸ **getChannelArchivedPrivateThreads**(`channelId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]  }\>

Gets all threads that are private and archived within a guild channel

CurrentUser must be a member of the thread if they do not have MANAGE_THREADS permissions

**`example`**
const client = new SnowTransfer("TOKEN")
const result = await client.channel.getChannelArchivedPrivateThreads("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel |
| `query?` | `Object` | - |
| `query.before?` | `string` | - |
| `query.limit?` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]  }\>

Object containing [private threads](https://discord.com/developers/docs/resources/channel#channel-object), [thread members](https://discord.com/developers/docs/resources/channel#thread-member-object) of the CurrentUser, and if there are more results in the pagination

| Permissions needed          | Condition                            |
|-----------------------------|--------------------------------------|
| VIEW_CHANNEL                | always                               |
| READ_MESSAGE_HISTORY        | always                               |
| MANAGE_THREADS              | if CurrentUser isn't added to Thread |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:703

___

### getChannelArchivedPrivateThreadsUser

▸ **getChannelArchivedPrivateThreadsUser**(`channelId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]  }\>

Gets all threads that are private and archived within a guild channel that the CurrentUser is apart of

CurrentUser must be a member of the thread if they do not have MANAGE_THREADS permissions

**`example`**
const client = new SnowTransfer("TOKEN")
const result = await client.channel.getChannelArchivedPrivateThreadsUser("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Channel |
| `query?` | `Object` | - |
| `query.before?` | `string` | - |
| `query.limit?` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`PrivateThread`](../interfaces/internal_.PrivateThread.md)[]  }\>

Object containing [private threads](https://discord.com/developers/docs/resources/channel#channel-object), [thread members](https://discord.com/developers/docs/resources/channel#thread-member-object) of the CurrentUser, and if there are more results in the pagination

| Permissions needed                | Condition                                  |
|-----------------------------------|--------------------------------------------|
| VIEW_CHANNEL                      | always                                     |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:726

___

### getChannelArchivedPublicThreads

▸ **getChannelArchivedPublicThreads**(`channelId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: ([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]  }\>

Gets all threads that are public and archived within a guild channel

**`example`**
const client = new SnowTransfer("TOKEN")
const result = await client.channel.getChannelArchivedPublicThreads("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
| `query?` | `Object` | - |
| `query.before?` | `string` | - |
| `query.limit?` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `has_more`: `boolean` ; `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: ([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md))[]  }\>

Object containing [public threads](https://discord.com/developers/docs/resources/channel#channel-object), [thread members](https://discord.com/developers/docs/resources/channel#thread-member-object) of the CurrentUser, and if there are more results in the pagination

| Permissions needed          | Condition |
|-----------------------------|-----------|
| VIEW_CHANNEL                | always    |
| READ_MESSAGE_HISTORY        | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:678

___

### getChannelInvites

▸ **getChannelInvites**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite) & [`InviteMetadata`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.md#invitemetadata)[]\>

Get a list of invites for a guild channel

**`example`**
const client = new SnowTransfer("TOKEN")
const invites = await client.channel.getChannelInvites("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite) & [`InviteMetadata`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.md#invitemetadata)[]\>

Array of [invite objects](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |
| MANAGE_CHANNELS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:389

___

### getChannelMessage

▸ **getChannelMessage**(`channelId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a single message via Id

**`example`**
// Get a single message from a channel via id
const client = new SnowTransfer("TOKEN")
const message = await client.channel.getChannelMessage("channel id", "message id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

| Permissions needed   | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:117

___

### getChannelMessages

▸ **getChannelMessages**(`channelId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Get a list of messages from a channel

**`example`**
// Fetch the last 20 messages from a channel
const client = new SnowTransfer("TOKEN")
const options = {
	limit: 20
}
const messages = await client.channel.getChannelMessages("channel id", options)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `options?` | [`GetMessageOptions`](../interfaces/internal_.GetMessageOptions-2.md) | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Array of [discord message](https://discord.com/developers/docs/resources/channel#message-object) objects

| Permissions needed   | Condition                                                                        |
|----------------------|----------------------------------------------------------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel                                                   |
| READ_MESSAGE_HISTORY | if channel is not a DM channel, unless you want the API to return an empty Array |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:100

___

### getChannelPinnedMessages

▸ **getChannelPinnedMessages**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)[]\>

Get a list of pinned messages for a channel

**`example`**
const client = new SnowTransfer("TOKEN")
const messages = await client.channel.getPinnedMessages("channel id")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:479

___

### getReactions

▸ **getReactions**(`channelId`, `messageId`, `emoji`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)[]\>

Get a list of users that reacted with a certain emoji on a certain message

**`example`**
// This example uses a discord emoji
const client = new SnowTransfer("TOKEN")
const reactions = await client.channel.getReactions("channel Id", "message Id", encodeURIComponent("awooo:322522663304036352"))

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `messageId` | `string` | Id of the message |
| `emoji` | `string` | reaction emoji |
| `query?` | `Object` | Options for getting users |
| `query.after?` | `string` | - |
| `query.limit?` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)[]\>

Array of [user objects](https://discord.com/developers/docs/resources/user#user-object)

| Permissions needed   | Condition                      |
|----------------------|--------------------------------|
| VIEW_CHANNEL         | if channel is not a DM channel |
| READ_MESSAGE_HISTORY | if channel is not a DM channel |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:274

___

### getThreadMember

▸ **getThreadMember**(`threadId`, `userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)\>

Gets a member of a thread

**`example`**
const client = new SnowTransfer("TOKEN")
const member = await client.channel.getThreadMember("thread id", "user id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threadId` | `string` | Id of the thread |
| `userId` | `string` | Id of the user |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)\>

A [thread member](https://discord.com/developers/docs/resources/channel#thread-member-object)

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:645

___

### getThreadMembers

▸ **getThreadMembers**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)[]\>

Gets all members within a thread

**`example`**
const client = new SnowTransfer("TOKEN")
const members = await client.channel.getThreadMembers("thread id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the Thread |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadMember`](../modules/internal_.md#threadmember)[]\>

Array of [thread members](https://discord.com/developers/docs/resources/channel#thread-member-object)

| Permissions needed           | Condition |
|------------------------------|-----------|
| VIEW_CHANNEL                 | always    |

| Intents       |
|---------------|
| GUILD_MEMBERS |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:663

___

### joinThread

▸ **joinThread**(`threadId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Join a thread

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.joinThread("thread id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threadId` | `string` | Id of the thread |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_CHANNEL       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:587

___

### leaveThread

▸ **leaveThread**(`threadId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Leave a thread

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.leaveThread("thread id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threadId` | `string` | Id of the thread |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:615

___

### removeChannelPinnedMessage

▸ **removeChannelPinnedMessage**(`channelId`, `messageId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a pinned message from a channel

**`example`**
// Remove a pinned message because mod abuse :(
const client = new SnowTransfer("TOKEN")
client.channel.removeChannelPinnedMessage("channel id", "message id", "Mod abuse")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:517

___

### removeThreadMember

▸ **removeThreadMember**(`threadId`, `userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a user from a thread

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.removeThreadMember("thread id", "user id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threadId` | `string` | Id of the thread |
| `userId` | `string` | Id of the user to remove |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                                            |
|--------------------|------------------------------------------------------|
| MANAGE_THREADS     | if the current user is not the creator of the thread |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:630

___

### startChannelTyping

▸ **startChannelTyping**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an indicator that the current user is typing within a channel.

**You should generally avoid this method unless used for longer computations (>1s)**

**`example`**
const client = new SnowTransfer("TOKEN")
client.channel.sendChannelTyping("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed       | Condition                      |
|--------------------------|--------------------------------|
| VIEW_CHANNEL             | if channel is not a DM channel |
| SEND_MESSAGES            | if channel is not a thread     |
| SEND_MESSAGES_IN_THREADS | if channel is a thread         |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:464

___

### updateChannel

▸ **updateChannel**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

Update a guild channel or thread

**`example`**
// This example updates a channel with the passed id to use "New Name" as its name and "Look at this cool topic" as the topic
const client = new SnowTransfer("TOKEN")
const updateData = {
	name: "New Name",
	topic: "Look at this cool topic"
}
client.channel.updateChannel("channel id", updateData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the guild channel |
| `data` | [`EditChannelData`](../interfaces/internal_.EditChannelData-2.md) & { `reason?`: `string`  } | Data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

(https://discord.com/developers/docs/resources/channel#channel-object) object

| Permissions needed | Condition                                                                                                               |
|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| MANAGE_CHANNELS    | always                                                                                                                  |
| MANAGE_ROLES       | If modifying permission overwrites                                                                                      |
| SEND_MESSAGES      | When editing a Thread to change the name, archived, auto_archive_duration, rate_limit_per_user or locked fields         |
| MANAGE_THREADS     | When editing a Thread and not modifying the name, archived, auto_archive_duration, rate_limit_per_user or locked fields |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:51

▸ **updateChannel**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#threadchannel)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelId` | `string` |
| `data` | [`EditThreadData`](../interfaces/internal_.EditThreadData.md) & { `reason?`: `string`  } |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ThreadChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#threadchannel)\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:54
