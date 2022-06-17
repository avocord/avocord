[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateGuildChannelData

# Interface: CreateGuildChannelData

[<internal>](../modules/internal_.md).CreateGuildChannelData

## Table of contents

### Properties

- [bitrate](internal_.CreateGuildChannelData-1.md#bitrate)
- [name](internal_.CreateGuildChannelData-1.md#name)
- [nsfw](internal_.CreateGuildChannelData-1.md#nsfw)
- [parent\_id](internal_.CreateGuildChannelData-1.md#parent_id)
- [permission\_overwrites](internal_.CreateGuildChannelData-1.md#permission_overwrites)
- [position](internal_.CreateGuildChannelData-1.md#position)
- [rate\_limit\_per\_user](internal_.CreateGuildChannelData-1.md#rate_limit_per_user)
- [reason](internal_.CreateGuildChannelData-1.md#reason)
- [topic](internal_.CreateGuildChannelData-1.md#topic)
- [type](internal_.CreateGuildChannelData-1.md#type)
- [user\_limit](internal_.CreateGuildChannelData-1.md#user_limit)

## Properties

### bitrate

• `Optional` **bitrate**: `number`

bitrate of the channel (voice only)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:881

___

### name

• **name**: `string`

name of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:869

___

### nsfw

• `Optional` **nsfw**: `boolean`

whether the channel is nsfw

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:906

___

### parent\_id

• `Optional` **parent\_id**: `string`

id of the parent category for a channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:902

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`Overwrite`](../modules/internal_.md#overwrite)[]

permissions overwrites for the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:898

___

### position

• `Optional` **position**: `number`

sorting position of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:894

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

amount of seconds a user has to wait before sending another message (0-21600).
bots, as well as users with the permission MANAGE_MESSAGES or MANAGE_CHANNEL, are unaffected

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:890

___

### reason

• `Optional` **reason**: `string`

reason for creating the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:910

___

### topic

• `Optional` **topic**: `string`

The topic of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:877

___

### type

• `Optional` **type**: ``0`` \| ``2`` \| ``5`` \| ``4`` \| ``13`` \| ``14`` \| ``15``

[type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) of the channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:873

___

### user\_limit

• `Optional` **user\_limit**: `number`

user limit of a channel (voice only)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:885
