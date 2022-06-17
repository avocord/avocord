[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateGuildData

# Interface: CreateGuildData

[<internal>](../modules/internal_.md).CreateGuildData

## Table of contents

### Properties

- [afk\_channel\_id](internal_.CreateGuildData-1.md#afk_channel_id)
- [afk\_timeout](internal_.CreateGuildData-1.md#afk_timeout)
- [channels](internal_.CreateGuildData-1.md#channels)
- [default\_message\_notifications](internal_.CreateGuildData-1.md#default_message_notifications)
- [icon](internal_.CreateGuildData-1.md#icon)
- [name](internal_.CreateGuildData-1.md#name)
- [roles](internal_.CreateGuildData-1.md#roles)
- [system\_channel\_flags](internal_.CreateGuildData-1.md#system_channel_flags)
- [system\_channel\_id](internal_.CreateGuildData-1.md#system_channel_id)
- [verification\_level](internal_.CreateGuildData-1.md#verification_level)

## Properties

### afk\_channel\_id

• `Optional` **afk\_channel\_id**: `string`

id for afk channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:769

___

### afk\_timeout

• `Optional` **afk\_timeout**: `number`

afk timeout in seconds

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:773

___

### channels

• `Optional` **channels**: ({ `id?`: `string` ; `name`: `string` ; `parent_id?`: `string` ; `type`: ``0`` \| ``2`` \| ``5`` \| ``13`` \| ``14`` \| ``15``  } \| { `id`: `string` ; `name`: `string` ; `type`: ``4``  })[]

array of partial [channels](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:752

___

### default\_message\_notifications

• `Optional` **default\_message\_notifications**: [`MessageNotificationLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#messagenotificationlevel)

default message [notification setting](https://discord.com/developers/docs/resources/guild#default-message-notification-level)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:748

___

### icon

• `Optional` **icon**: `string`

base64 encoded icon to use for the guild

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:740

___

### name

• **name**: `string`

name of the guild

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:736

___

### roles

• `Optional` **roles**: [`Partial`](../modules/internal_.md#partial)<[`Role`](../modules/internal_.md#role-1)\>[]

array of [roles](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:765

___

### system\_channel\_flags

• `Optional` **system\_channel\_flags**: `number`

system channel flags

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:781

___

### system\_channel\_id

• `Optional` **system\_channel\_id**: `string`

the id of the channel where guild notices such as welcome messages and boost events are posted

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:777

___

### verification\_level

• `Optional` **verification\_level**: [`VerificationLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#verificationlevel)

guild [verification level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:744
