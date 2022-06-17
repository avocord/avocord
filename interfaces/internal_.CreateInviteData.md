[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateInviteData

# Interface: CreateInviteData

[<internal>](../modules/internal_.md).CreateInviteData

## Table of contents

### Properties

- [max\_age](internal_.CreateInviteData.md#max_age)
- [max\_uses](internal_.CreateInviteData.md#max_uses)
- [reason](internal_.CreateInviteData.md#reason)
- [temporary](internal_.CreateInviteData.md#temporary)
- [unique](internal_.CreateInviteData.md#unique)

## Properties

### max\_age

• `Optional` **max\_age**: `number`

max age of the invite in seconds

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:718

___

### max\_uses

• `Optional` **max\_uses**: `number`

max uses of the invite

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:722

___

### reason

• `Optional` **reason**: `string`

Reason for creating the invite

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:734

___

### temporary

• `Optional` **temporary**: `boolean`

if this invite only allows temporary membership

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:726

___

### unique

• `Optional` **unique**: `boolean`

does not try to re-use similar invites when true (useful for creating many one-time invites)

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:730
