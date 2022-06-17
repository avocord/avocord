[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateInviteData

# Interface: CreateInviteData

[<internal>](../modules/internal_.md).CreateInviteData

## Table of contents

### Properties

- [max\_age](internal_.CreateInviteData-1.md#max_age)
- [max\_uses](internal_.CreateInviteData-1.md#max_uses)
- [target\_application\_id](internal_.CreateInviteData-1.md#target_application_id)
- [target\_type](internal_.CreateInviteData-1.md#target_type)
- [target\_user\_id](internal_.CreateInviteData-1.md#target_user_id)
- [temporary](internal_.CreateInviteData-1.md#temporary)
- [unique](internal_.CreateInviteData-1.md#unique)

## Properties

### max\_age

• `Optional` **max\_age**: `number`

max age of the invite in seconds

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:930

___

### max\_uses

• `Optional` **max\_uses**: `number`

max uses of the invite

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:934

___

### target\_application\_id

• `Optional` **target\_application\_id**: `string`

ID of the application to open for this invite. Required if target_type is 2. The application must have the EMBEDDED flag.

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:954

___

### target\_type

• `Optional` **target\_type**: [`InviteTarget`](../modules/internal_.md#invitetarget)

The type of target for this voice channel invite

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:946

___

### target\_user\_id

• `Optional` **target\_user\_id**: `string`

User ID of who's stream to display in the voice channel. Required if target_type is 1. User must be streaming in the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:950

___

### temporary

• `Optional` **temporary**: `boolean`

if this invite only allows temporary membership

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:938

___

### unique

• `Optional` **unique**: `boolean`

does not try to re-use similar invites when true (useful for creating many one-time invites)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:942
