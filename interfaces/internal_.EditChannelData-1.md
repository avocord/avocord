[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditChannelData

# Interface: EditChannelData

[<internal>](../modules/internal_.md).EditChannelData

## Table of contents

### Properties

- [archived](internal_.EditChannelData-1.md#archived)
- [auto\_archive\_duration](internal_.EditChannelData-1.md#auto_archive_duration)
- [bitrate](internal_.EditChannelData-1.md#bitrate)
- [locked](internal_.EditChannelData-1.md#locked)
- [name](internal_.EditChannelData-1.md#name)
- [nsfw](internal_.EditChannelData-1.md#nsfw)
- [parent\_id](internal_.EditChannelData-1.md#parent_id)
- [permission\_overwrites](internal_.EditChannelData-1.md#permission_overwrites)
- [position](internal_.EditChannelData-1.md#position)
- [rate\_limit\_per\_user](internal_.EditChannelData-1.md#rate_limit_per_user)
- [reason](internal_.EditChannelData-1.md#reason)
- [topic](internal_.EditChannelData-1.md#topic)
- [user\_limit](internal_.EditChannelData-1.md#user_limit)

## Properties

### archived

• `Optional` **archived**: `boolean`

Update whether or not a thread is archived

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:594

___

### auto\_archive\_duration

• `Optional` **auto\_archive\_duration**: `number`

Update how long it takes for a thread to become stale and archived automatically

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:598

___

### bitrate

• `Optional` **bitrate**: `number`

Update bitrate of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:578

___

### locked

• `Optional` **locked**: `boolean`

Update whether or not a thread is locked

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:602

___

### name

• `Optional` **name**: `string`

New name of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:562

___

### nsfw

• `Optional` **nsfw**: `boolean`

Update nsfw type of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:574

___

### parent\_id

• `Optional` **parent\_id**: `string`

Id of the parent category of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:590

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`Overwrite`](../modules/internal_.md#overwrite)[]

Update the permission overwrites

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:586

___

### position

• `Optional` **position**: `number`

New position of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:566

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

Update if slowmode is enabled and how long slow mode should last

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:606

___

### reason

• `Optional` **reason**: `string`

Reason for updating the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:610

___

### topic

• `Optional` **topic**: `string`

New topic of the channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:570

___

### user\_limit

• `Optional` **user\_limit**: `number`

Update the limit of users that are allowed to be in a channel

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:582
