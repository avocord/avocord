[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UserMethods

# Class: UserMethods

[<internal>](../modules/internal_.md).UserMethods

Methods for interacting with users

## Table of contents

### Constructors

- [constructor](internal_.UserMethods.md#constructor)

### Properties

- [requestHandler](internal_.UserMethods.md#requesthandler)

### Methods

- [createDirectMessageChannel](internal_.UserMethods.md#createdirectmessagechannel)
- [getDirectMessages](internal_.UserMethods.md#getdirectmessages)
- [getGuilds](internal_.UserMethods.md#getguilds)
- [getSelf](internal_.UserMethods.md#getself)
- [getUser](internal_.UserMethods.md#getuser)
- [leaveGuild](internal_.UserMethods.md#leaveguild)
- [updateSelf](internal_.UserMethods.md#updateself)

## Constructors

### constructor

• **new UserMethods**(`requestHandler`)

Create a new User Method handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.user.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) |

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:5

## Methods

### createDirectMessageChannel

▸ **createDirectMessageChannel**(`userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)\>

Create a direct message channel with another user

**You can not create a dm with another bot**

**`example`**
// Create a dm channel and send "hi" to it
const client = new SnowTransfer('TOKEN');
const channel = await client.user.createDirectMessageChannel('other user id')
client.channel.createMessage(channel.id, 'hi')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | Id of the user to create the direct message channel with |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)\>

(https://discord.com/developers/docs/resources/channel#channel-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:74

___

### getDirectMessages

▸ **getDirectMessages**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)[]\>

Get direct messages of a user

**Returns an empty array for bots**

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)[]\>

Array of [dm channels](https://discord.com/developers/docs/resources/channel#channel-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:60

___

### getGuilds

▸ **getGuilds**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)[]\>

Get guilds of the current user

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)[]\>

Array of [partial guild objects](https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:47

___

### getSelf

▸ **getSelf**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

Get information about current user

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

(https://discord.com/developers/docs/resources/user#user-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:19

___

### getUser

▸ **getUser**(`userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

Get information about a user via Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | Id of the user |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

(https://discord.com/developers/docs/resources/user#user-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:25

___

### leaveGuild

▸ **leaveGuild**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Leave a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:53

___

### updateSelf

▸ **updateSelf**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

Update the current user

**`example`**
// update the avatar of the user
const client = new SnowTransfer('TOKEN');
const fileData = fs.readFileSync('new_avatar.png') // You should probably use fs.readFile, since it's asynchronous, synchronous methods may lag your bot.
const updateData = {
	avatar: `data:image/png;base64,${fileData.toString('base64')}` // base64 data url: data:mimetype;base64,base64String
}
client.user.updateSelf(updateData)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.avatar?` | `string` |
| `data.username?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`User`](../modules/internal_.md#user-1)\>\>

(https://discord.com/developers/docs/resources/user#user-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Users.d.ts:39
