[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UserMethods

# Class: UserMethods

[<internal>](../modules/internal_.md).UserMethods

Methods for interacting with users

## Table of contents

### Constructors

- [constructor](internal_.UserMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.UserMethods-1.md#requesthandler)
- [default](internal_.UserMethods-1.md#default)

### Methods

- [createDirectMessageChannel](internal_.UserMethods-1.md#createdirectmessagechannel)
- [getGuilds](internal_.UserMethods-1.md#getguilds)
- [getSelf](internal_.UserMethods-1.md#getself)
- [getUser](internal_.UserMethods-1.md#getuser)
- [leaveGuild](internal_.UserMethods-1.md#leaveguild)
- [updateSelf](internal_.UserMethods-1.md#updateself)

## Constructors

### constructor

• **new UserMethods**(`requestHandler`)

Create a new User Method handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.user.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:5

___

### default

▪ `Static` **default**: typeof [`UserMethods`](internal_.UserMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:6

## Methods

### createDirectMessageChannel

▸ **createDirectMessageChannel**(`userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)\>

Create a direct message channel with another user

**You can not create a dm with another bot**

**`example`**
// Create a dm channel and send "hi" to it
const client = new SnowTransfer("TOKEN")
const channel = await client.user.createDirectMessageChannel("other user id")
client.channel.createMessage(channel.id, "hi")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | Id of the user to create the direct message channel with |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DMChannel`](../interfaces/internal_.DMChannel.md)\>

A [DM channel](https://discord.com/developers/docs/resources/channel#channel-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:94

___

### getGuilds

▸ **getGuilds**(`query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)[]\>

Get guilds of the current user

**`example`**
const client = new SnowTransfer("TOKEN")
const guilds = await client.user.getGuilds()

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `Object` |
| `query.after?` | `string` |
| `query.before?` | `string` |
| `query.limit?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)[]\>

Array of [partial guild objects](https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:66

___

### getSelf

▸ **getSelf**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

Get information about the CurrentUser

**`example`**
const client = new SnowTransfer("TOKEN")
const self = await client.user.getSelf()

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

A [user object](https://discord.com/developers/docs/resources/user#user-object)

| OAUTH2 Scopes | Condition     |
|---------------|---------------|
| identify      | Without email |
| email         | With email    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:29

___

### getUser

▸ **getUser**(`userId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

Get information about a user via Id

**`example`**
const client = new SnowTransfer("TOKEN")
const user = await client.user.getUser("userId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | Id of the user |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

(https://discord.com/developers/docs/resources/user#user-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:39

___

### leaveGuild

▸ **leaveGuild**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Leaves a guild

**`example`**
const client = new SnowTransfer("TOKEN")
client.user.leaveGuild("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:80

___

### updateSelf

▸ **updateSelf**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

Update the current user

**`example`**
// update the avatar of the user
const client = new SnowTransfer("TOKEN")
const fileData = fs.readFileSync("new_avatar.png") // You should probably use fs.readFile, since it is asynchronous, synchronous methods may lag your bot.
const updateData = {
	avatar: `data:image/png;base64,${fileData.toString("base64")}` // base64 data url: data:mimetype;base64,base64String
}
client.user.updateSelf(updateData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The new data of the CurrentUser |
| `data.avatar?` | ``null`` \| `string` | - |
| `data.username?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](../modules/internal_.md#user-1)\>

(https://discord.com/developers/docs/resources/user#user-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Users.d.ts:54
