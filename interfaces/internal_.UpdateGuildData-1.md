[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UpdateGuildData

# Interface: UpdateGuildData

[<internal>](../modules/internal_.md).UpdateGuildData

## Table of contents

### Properties

- [afk\_channel\_id](internal_.UpdateGuildData-1.md#afk_channel_id)
- [afk\_timeout](internal_.UpdateGuildData-1.md#afk_timeout)
- [banner](internal_.UpdateGuildData-1.md#banner)
- [default\_message\_notifications](internal_.UpdateGuildData-1.md#default_message_notifications)
- [description](internal_.UpdateGuildData-1.md#description)
- [discovery\_splash](internal_.UpdateGuildData-1.md#discovery_splash)
- [explicit\_content\_filter](internal_.UpdateGuildData-1.md#explicit_content_filter)
- [features](internal_.UpdateGuildData-1.md#features)
- [icon](internal_.UpdateGuildData-1.md#icon)
- [name](internal_.UpdateGuildData-1.md#name)
- [owner\_id](internal_.UpdateGuildData-1.md#owner_id)
- [preferred\_locale](internal_.UpdateGuildData-1.md#preferred_locale)
- [premium\_progress\_bar\_enabled](internal_.UpdateGuildData-1.md#premium_progress_bar_enabled)
- [public\_updates\_channel\_id](internal_.UpdateGuildData-1.md#public_updates_channel_id)
- [reason](internal_.UpdateGuildData-1.md#reason)
- [rules\_channel\_id](internal_.UpdateGuildData-1.md#rules_channel_id)
- [splash](internal_.UpdateGuildData-1.md#splash)
- [system\_channel\_flags](internal_.UpdateGuildData-1.md#system_channel_flags)
- [system\_channel\_id](internal_.UpdateGuildData-1.md#system_channel_id)
- [verification\_level](internal_.UpdateGuildData-1.md#verification_level)

## Properties

### afk\_channel\_id

• `Optional` **afk\_channel\_id**: ``null`` \| `string`

Id of the afk channel

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:803

___

### afk\_timeout

• `Optional` **afk\_timeout**: `number`

afk timeout in seconds

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:807

___

### banner

• `Optional` **banner**: ``null`` \| `string`

base64 image for the guild banner

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:831

___

### default\_message\_notifications

• `Optional` **default\_message\_notifications**: ``null`` \| [`MessageNotificationLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#messagenotificationlevel)

message [notification setting](https://discord.com/developers/docs/resources/guild#default-message-notification-level)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:795

___

### description

• `Optional` **description**: ``null`` \| `string`

the description for the guild

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:859

___

### discovery\_splash

• `Optional` **discovery\_splash**: ``null`` \| `string`

base64 image for the guild discovery splash

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:827

___

### explicit\_content\_filter

• `Optional` **explicit\_content\_filter**: ``null`` \| [`ExplicitContentFilterLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#explicitcontentfilterlevel)

explicit content filter level

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:799

___

### features

• `Optional` **features**: [`GuildFeature`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildfeature)[]

enabled guild features

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:855

___

### icon

• `Optional` **icon**: ``null`` \| `string`

base64 image for the guild icon

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:811

___

### name

• `Optional` **name**: `string`

name of the guild

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:787

___

### owner\_id

• `Optional` **owner\_id**: `string`

Id of the owner user

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:815

___

### preferred\_locale

• `Optional` **preferred\_locale**: ``null`` \| [`Locale`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Reference_.md#locale)

the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US"

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:851

___

### premium\_progress\_bar\_enabled

• `Optional` **premium\_progress\_bar\_enabled**: `boolean`

whether the guild's boost progress bar should be enabled

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:863

___

### public\_updates\_channel\_id

• `Optional` **public\_updates\_channel\_id**: ``null`` \| `string`

the id of the channel where admins and moderators of Community guilds receive notices from Discord

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:847

___

### reason

• `Optional` **reason**: `string`

reason for updating the guild

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:823

___

### rules\_channel\_id

• `Optional` **rules\_channel\_id**: ``null`` \| `string`

the id of the channel where Community guilds display rules and/or guidelines

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:843

___

### splash

• `Optional` **splash**: ``null`` \| `string`

base64 image for the guild splash

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:819

___

### system\_channel\_flags

• `Optional` **system\_channel\_flags**: `number`

system channel flags

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:839

___

### system\_channel\_id

• `Optional` **system\_channel\_id**: ``null`` \| `string`

the id of the channel where guild notices such as welcome messages and boost events are posted

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:835

___

### verification\_level

• `Optional` **verification\_level**: ``null`` \| [`VerificationLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#verificationlevel)

guild [verification level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:791
