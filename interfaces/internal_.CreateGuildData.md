[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateGuildData

# Interface: CreateGuildData

[<internal>](../modules/internal_.md).CreateGuildData

## Table of contents

### Properties

- [afk\_channel\_id](internal_.CreateGuildData.md#afk_channel_id)
- [afk\_timeout](internal_.CreateGuildData.md#afk_timeout)
- [channels](internal_.CreateGuildData.md#channels)
- [default\_message\_notifications](internal_.CreateGuildData.md#default_message_notifications)
- [icon](internal_.CreateGuildData.md#icon)
- [name](internal_.CreateGuildData.md#name)
- [roles](internal_.CreateGuildData.md#roles)
- [system\_channel\_flags](internal_.CreateGuildData.md#system_channel_flags)
- [system\_channel\_id](internal_.CreateGuildData.md#system_channel_id)
- [verification\_level](internal_.CreateGuildData.md#verification_level)

## Properties

### afk\_channel\_id

• `Optional` **afk\_channel\_id**: `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:645

___

### afk\_timeout

• `Optional` **afk\_timeout**: `number`

afk timeout in seconds

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:649

___

### channels

• `Optional` **channels**: [`Partial`](../modules/internal_.md#partial)<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>[]

array of [channels](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:640

___

### default\_message\_notifications

• `Optional` **default\_message\_notifications**: ``0`` \| ``1``

default message [notification setting](https://discord.com/developers/docs/resources/guild#default-message-notification-level)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:636

___

### icon

• `Optional` **icon**: `string`

base64 encoded jpeg icon to use for the guild

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:628

___

### name

• **name**: `string`

name of the guild

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:624

___

### roles

• `Optional` **roles**: [`Partial`](../modules/internal_.md#partial)<[`Role`](../modules/internal_.md#role-1)\>[]

array of [roles](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:644

___

### system\_channel\_flags

• `Optional` **system\_channel\_flags**: `number`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:651

___

### system\_channel\_id

• `Optional` **system\_channel\_id**: `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:650

___

### verification\_level

• `Optional` **verification\_level**: ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4``

guild [verification level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:632
