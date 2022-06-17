[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UpdateGuildData

# Interface: UpdateGuildData

[<internal>](../modules/internal_.md).UpdateGuildData

## Table of contents

### Properties

- [afk\_channel\_id](internal_.UpdateGuildData.md#afk_channel_id)
- [afk\_timeout](internal_.UpdateGuildData.md#afk_timeout)
- [banner](internal_.UpdateGuildData.md#banner)
- [default\_message\_notifications](internal_.UpdateGuildData.md#default_message_notifications)
- [description](internal_.UpdateGuildData.md#description)
- [discovery\_splash](internal_.UpdateGuildData.md#discovery_splash)
- [explicit\_content\_filter](internal_.UpdateGuildData.md#explicit_content_filter)
- [features](internal_.UpdateGuildData.md#features)
- [icon](internal_.UpdateGuildData.md#icon)
- [name](internal_.UpdateGuildData.md#name)
- [owner\_id](internal_.UpdateGuildData.md#owner_id)
- [preferred\_locale](internal_.UpdateGuildData.md#preferred_locale)
- [public\_updates\_channel\_id](internal_.UpdateGuildData.md#public_updates_channel_id)
- [reason](internal_.UpdateGuildData.md#reason)
- [rules\_channel\_id](internal_.UpdateGuildData.md#rules_channel_id)
- [splash](internal_.UpdateGuildData.md#splash)
- [system\_channel\_flags](internal_.UpdateGuildData.md#system_channel_flags)
- [system\_channel\_id](internal_.UpdateGuildData.md#system_channel_id)
- [verification\_level](internal_.UpdateGuildData.md#verification_level)

## Properties

### afk\_channel\_id

• `Optional` **afk\_channel\_id**: ``null`` \| `string`

Id of the afk channel

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:670

___

### afk\_timeout

• `Optional` **afk\_timeout**: `number`

afk timeout in seconds

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:674

___

### banner

• `Optional` **banner**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:692

___

### default\_message\_notifications

• `Optional` **default\_message\_notifications**: ``null`` \| `number`

message [notification setting](https://discord.com/developers/docs/resources/guild#default-message-notification-level)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:665

___

### description

• `Optional` **description**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:699

___

### discovery\_splash

• `Optional` **discovery\_splash**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:691

___

### explicit\_content\_filter

• `Optional` **explicit\_content\_filter**: ``null`` \| `number`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:666

___

### features

• `Optional` **features**: [`GuildFeature`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildfeature)[]

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:698

___

### icon

• `Optional` **icon**: ``null`` \| `string`

base64 jpeg image of the guild icon

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:678

___

### name

• `Optional` **name**: `string`

name of the guild

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:657

___

### owner\_id

• `Optional` **owner\_id**: `string`

Id of the owner user

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:682

___

### preferred\_locale

• `Optional` **preferred\_locale**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:697

___

### public\_updates\_channel\_id

• `Optional` **public\_updates\_channel\_id**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:696

___

### reason

• `Optional` **reason**: `string`

reason for updating the guild

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:690

___

### rules\_channel\_id

• `Optional` **rules\_channel\_id**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:695

___

### splash

• `Optional` **splash**: ``null`` \| `string`

base64 jpeg image for the guild splash

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:686

___

### system\_channel\_flags

• `Optional` **system\_channel\_flags**: `number`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:694

___

### system\_channel\_id

• `Optional` **system\_channel\_id**: ``null`` \| `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:693

___

### verification\_level

• `Optional` **verification\_level**: ``null`` \| `number`

guild [verification level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:661
