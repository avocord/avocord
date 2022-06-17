[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditChannelData

# Interface: EditChannelData

[<internal>](../modules/internal_.md).EditChannelData

## Table of contents

### Properties

- [bitrate](internal_.EditChannelData-2.md#bitrate)
- [default\_auto\_archive\_duration](internal_.EditChannelData-2.md#default_auto_archive_duration)
- [name](internal_.EditChannelData-2.md#name)
- [nsfw](internal_.EditChannelData-2.md#nsfw)
- [parent\_id](internal_.EditChannelData-2.md#parent_id)
- [permission\_overwrites](internal_.EditChannelData-2.md#permission_overwrites)
- [position](internal_.EditChannelData-2.md#position)
- [rate\_limit\_per\_user](internal_.EditChannelData-2.md#rate_limit_per_user)
- [rtc\_region](internal_.EditChannelData-2.md#rtc_region)
- [topic](internal_.EditChannelData-2.md#topic)
- [type](internal_.EditChannelData-2.md#type)
- [user\_limit](internal_.EditChannelData-2.md#user_limit)
- [video\_quality\_mode](internal_.EditChannelData-2.md#video_quality_mode)

## Properties

### bitrate

• `Optional` **bitrate**: ``null`` \| `number`

Update bitrate of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:765

___

### default\_auto\_archive\_duration

• `Optional` **default\_auto\_archive\_duration**: ``null`` \| `number`

The default value for timeouts clients use, in minutes, when creating threads before they become stale and are archived

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:789

___

### name

• `Optional` **name**: `string`

New name of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:739

___

### nsfw

• `Optional` **nsfw**: ``null`` \| `boolean`

Update nsfw type of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:756

___

### parent\_id

• `Optional` **parent\_id**: ``null`` \| `string`

Id of the parent category of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:777

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: ``null`` \| [`Overwrite`](../modules/internal_.md#overwrite)[]

Update the permission overwrites

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:773

___

### position

• `Optional` **position**: ``null`` \| `number`

New position of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:748

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: ``null`` \| `number`

amount of seconds a user has to wait before sending another message (0-21600).
bots, as well as users with the permission MANAGE_MESSAGES or MANAGE_CHANNEL, are unaffected

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:761

___

### rtc\_region

• `Optional` **rtc\_region**: ``null`` \| `string`

The region id for the voice channel. Automatic when set to null

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:781

___

### topic

• `Optional` **topic**: ``null`` \| `string`

New topic of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:752

___

### type

• `Optional` **type**: ``0`` \| ``5``

The type of the channel. Only can convert between text and news channels.
Only available in Guilds with the NEWS feature

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:744

___

### user\_limit

• `Optional` **user\_limit**: ``null`` \| `number`

Update the limit of users that are allowed to be in a channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:769

___

### video\_quality\_mode

• `Optional` **video\_quality\_mode**: ``null`` \| ``1`` \| ``2``

The camera video quality mode.

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:785
