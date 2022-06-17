[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InviteMethods

# Class: InviteMethods

[<internal>](../modules/internal_.md).InviteMethods

Methods for interacting with invites

## Table of contents

### Constructors

- [constructor](internal_.InviteMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.InviteMethods-1.md#requesthandler)
- [default](internal_.InviteMethods-1.md#default)

### Methods

- [deleteInvite](internal_.InviteMethods-1.md#deleteinvite)
- [getInvite](internal_.InviteMethods-1.md#getinvite)

## Constructors

### constructor

• **new InviteMethods**(`requestHandler`)

Create a new Invite Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.invite.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Invites.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Invites.d.ts:5

___

### default

▪ `Static` **default**: typeof [`InviteMethods`](internal_.InviteMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Invites.d.ts:6

## Methods

### deleteInvite

▸ **deleteInvite**(`inviteId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Delete an invite

**`example`**
const client = new SnowTransfer("TOKEN")
const invite = await client.invite.deleteInvite("inviteId")

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

(https://discord.com/developers/docs/resources/invite#invite-object)

| Permissions needed | Condition                                     |
|--------------------|-----------------------------------------------|
| MANAGE_CHANNELS    | for invite that belongs to a specific channel |
| MANAGE_GUILD       | delete any invite guild wide                  |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Invites.d.ts:46

___

### getInvite

▸ **getInvite**(`inviteId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Get the invite data on an invite id

**`example`**
// Gets an invite with approximate_member_count and approximate_presence_count
const client = new SnowTransfer("TOKEN")
const invite = await client.invite.getInvite("inviteId", { with_counts: true })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inviteId` | `string` | Id of the invite |
| `query?` | `Object` | Query params for additional metadata fields |
| `query.guild_scheduled_event_id?` | `string` | - |
| `query.with_counts?` | `boolean` | - |
| `query.with_expiration?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

(https://discord.com/developers/docs/resources/invite#invite-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Invites.d.ts:27
