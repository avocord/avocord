[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InviteMethods

# Class: InviteMethods

[<internal>](../modules/internal_.md).InviteMethods

Methods for interacting with invites

## Table of contents

### Constructors

- [constructor](internal_.InviteMethods.md#constructor)

### Properties

- [requestHandler](internal_.InviteMethods.md#requesthandler)

### Methods

- [deleteInvite](internal_.InviteMethods.md#deleteinvite)
- [getInvite](internal_.InviteMethods.md#getinvite)

## Constructors

### constructor

• **new InviteMethods**(`requestHandler`)

Create a new Invite Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.invite.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/Invites.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Invites.d.ts:5

## Methods

### deleteInvite

▸ **deleteInvite**(`inviteId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Delete an invite

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

node_modules/snowtransfer/dist/methods/Invites.d.ts:35

___

### getInvite

▸ **getInvite**(`inviteId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

Get the invite data on an invite id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inviteId` | `string` | Id of the invite |
| `options?` | `Object` | Options for when properties are set to true you get an invite object with additional `approximate_presence_count` and `approximate_member_count` fields and when the invite expires |
| `options.with_counts?` | `boolean` | - |
| `options.with_expiration?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite)\>

(https://discord.com/developers/docs/resources/invite#invite-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Invites.d.ts:21
