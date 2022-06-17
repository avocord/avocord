[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditThreadData

# Interface: EditThreadData

[<internal>](../modules/internal_.md).EditThreadData

## Table of contents

### Properties

- [archived](internal_.EditThreadData.md#archived)
- [auto\_archive\_duration](internal_.EditThreadData.md#auto_archive_duration)
- [invitable](internal_.EditThreadData.md#invitable)
- [locked](internal_.EditThreadData.md#locked)
- [name](internal_.EditThreadData.md#name)
- [rate\_limit\_per\_user](internal_.EditThreadData.md#rate_limit_per_user)

## Properties

### archived

• `Optional` **archived**: `boolean`

If the thread should be archived

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:799

___

### auto\_archive\_duration

• `Optional` **auto\_archive\_duration**: `number`

how long until the thread is automatically archived from the last message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:803

___

### invitable

• `Optional` **invitable**: `boolean`

If only the thread creator can invite people or not

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:811

___

### locked

• `Optional` **locked**: `boolean`

If the thread should be locked

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:807

___

### name

• `Optional` **name**: `string`

The new name of the thread

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:795

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

amount of seconds a user has to wait before sending another message (0-21600).
bots, as well as users with the permission MANAGE_MESSAGES or MANAGE_CHANNEL, are unaffected

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:816
