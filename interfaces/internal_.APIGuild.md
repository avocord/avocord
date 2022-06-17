[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIGuild

# Interface: APIGuild

[<internal>](../modules/internal_.md).APIGuild

https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

## Hierarchy

- [`APIPartialGuild`](internal_.APIPartialGuild.md)

  ↳ **`APIGuild`**

## Table of contents

### Properties

- [afk\_channel\_id](internal_.APIGuild.md#afk_channel_id)
- [afk\_timeout](internal_.APIGuild.md#afk_timeout)
- [application\_id](internal_.APIGuild.md#application_id)
- [approximate\_member\_count](internal_.APIGuild.md#approximate_member_count)
- [approximate\_presence\_count](internal_.APIGuild.md#approximate_presence_count)
- [banner](internal_.APIGuild.md#banner)
- [channels](internal_.APIGuild.md#channels)
- [default\_message\_notifications](internal_.APIGuild.md#default_message_notifications)
- [description](internal_.APIGuild.md#description)
- [discovery\_splash](internal_.APIGuild.md#discovery_splash)
- [emojis](internal_.APIGuild.md#emojis)
- [explicit\_content\_filter](internal_.APIGuild.md#explicit_content_filter)
- [features](internal_.APIGuild.md#features)
- [guild\_scheduled\_events](internal_.APIGuild.md#guild_scheduled_events)
- [hub\_type](internal_.APIGuild.md#hub_type)
- [icon](internal_.APIGuild.md#icon)
- [icon\_hash](internal_.APIGuild.md#icon_hash)
- [id](internal_.APIGuild.md#id)
- [joined\_at](internal_.APIGuild.md#joined_at)
- [large](internal_.APIGuild.md#large)
- [max\_members](internal_.APIGuild.md#max_members)
- [max\_presences](internal_.APIGuild.md#max_presences)
- [max\_video\_channel\_users](internal_.APIGuild.md#max_video_channel_users)
- [member\_count](internal_.APIGuild.md#member_count)
- [members](internal_.APIGuild.md#members)
- [mfa\_level](internal_.APIGuild.md#mfa_level)
- [name](internal_.APIGuild.md#name)
- [nsfw\_level](internal_.APIGuild.md#nsfw_level)
- [owner](internal_.APIGuild.md#owner)
- [owner\_id](internal_.APIGuild.md#owner_id)
- [permissions](internal_.APIGuild.md#permissions)
- [preferred\_locale](internal_.APIGuild.md#preferred_locale)
- [premium\_progress\_bar\_enabled](internal_.APIGuild.md#premium_progress_bar_enabled)
- [premium\_subscription\_count](internal_.APIGuild.md#premium_subscription_count)
- [premium\_tier](internal_.APIGuild.md#premium_tier)
- [presences](internal_.APIGuild.md#presences)
- [public\_updates\_channel\_id](internal_.APIGuild.md#public_updates_channel_id)
- [region](internal_.APIGuild.md#region)
- [roles](internal_.APIGuild.md#roles)
- [rules\_channel\_id](internal_.APIGuild.md#rules_channel_id)
- [splash](internal_.APIGuild.md#splash)
- [stage\_instances](internal_.APIGuild.md#stage_instances)
- [stickers](internal_.APIGuild.md#stickers)
- [system\_channel\_flags](internal_.APIGuild.md#system_channel_flags)
- [system\_channel\_id](internal_.APIGuild.md#system_channel_id)
- [threads](internal_.APIGuild.md#threads)
- [unavailable](internal_.APIGuild.md#unavailable)
- [vanity\_url\_code](internal_.APIGuild.md#vanity_url_code)
- [verification\_level](internal_.APIGuild.md#verification_level)
- [voice\_states](internal_.APIGuild.md#voice_states)
- [welcome\_screen](internal_.APIGuild.md#welcome_screen)
- [widget\_channel\_id](internal_.APIGuild.md#widget_channel_id)
- [widget\_enabled](internal_.APIGuild.md#widget_enabled)

## Properties

### afk\_channel\_id

• **afk\_channel\_id**: ``null`` \| `string`

ID of afk channel

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:122

___

### afk\_timeout

• **afk\_timeout**: `number`

afk timeout in seconds

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:126

___

### application\_id

• **application\_id**: ``null`` \| `string`

Application id of the guild creator if it is bot-created

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:180

___

### approximate\_member\_count

• `Optional` **approximate\_member\_count**: `number`

**This field is only received from https://discord.com/developers/docs/resources/guild#get-guild with the `with_counts` query parameter set to `true`**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:302

___

### approximate\_presence\_count

• `Optional` **approximate\_presence\_count**: `number`

**This field is only received from https://discord.com/developers/docs/resources/guild#get-guild with the `with_counts` query parameter set to `true`**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:306

___

### banner

• **banner**: ``null`` \| `string`

Banner hash

See https://discord.com/developers/docs/reference#image-formatting

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[banner](internal_.APIPartialGuild.md#banner)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:274

___

### channels

• `Optional` **channels**: [`APIChannel`](../modules/internal_.md#apichannel)[]

Channels in the guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/resources/channel#channel-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:236

___

### default\_message\_notifications

• **default\_message\_notifications**: [`GuildDefaultMessageNotifications`](../enums/internal_.GuildDefaultMessageNotifications.md)

Default message notifications level

See https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:146

___

### description

• **description**: ``null`` \| `string`

The description for the guild

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[description](internal_.APIPartialGuild.md#description)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:268

___

### discovery\_splash

• **discovery\_splash**: ``null`` \| `string`

Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:93

___

### emojis

• **emojis**: [`APIEmoji`](internal_.APIEmoji.md)[]

Custom guild emojis

See https://discord.com/developers/docs/resources/emoji#emoji-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:164

___

### explicit\_content\_filter

• **explicit\_content\_filter**: [`GuildExplicitContentFilter`](../enums/internal_.GuildExplicitContentFilter.md)

Explicit content filter level

See https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:152

___

### features

• **features**: [`GuildFeature`](../enums/internal_.GuildFeature.md)[]

Enabled guild features

See https://discord.com/developers/docs/resources/guild#guild-object-guild-features

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[features](internal_.APIPartialGuild.md#features)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:170

___

### guild\_scheduled\_events

• `Optional` **guild\_scheduled\_events**: [`APIGuildScheduledEvent`](../modules/internal_.md#apiguildscheduledevent)[]

The scheduled events in the guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:344

___

### hub\_type

• **hub\_type**: ``null`` \| [`GuildHubType`](../enums/internal_.GuildHubType.md)

The type of Student Hub the guild is

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:348

___

### icon

• **icon**: ``null`` \| `string`

Icon hash

See https://discord.com/developers/docs/reference#image-formatting

#### Inherited from

[APIPartialGuild](internal_.APIPartialGuild.md).[icon](internal_.APIPartialGuild.md#icon)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:40

___

### icon\_hash

• `Optional` **icon\_hash**: ``null`` \| `string`

Icon hash, returned when in the template object

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:87

___

### id

• **id**: `string`

Guild id

#### Inherited from

[APIPartialGuild](internal_.APIPartialGuild.md).[id](internal_.APIPartialGuild.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:21

___

### joined\_at

• `Optional` **joined\_at**: `string`

When this guild was joined at

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:200

___

### large

• `Optional` **large**: `boolean`

`true` if this is considered a large guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:206

___

### max\_members

• `Optional` **max\_members**: `number`

The maximum number of members for the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:260

___

### max\_presences

• `Optional` **max\_presences**: ``null`` \| `number`

The maximum number of presences for the guild (`null` is always returned, apart from the largest of guilds)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:256

___

### max\_video\_channel\_users

• `Optional` **max\_video\_channel\_users**: `number`

The maximum amount of users in a video channel

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:298

___

### member\_count

• `Optional` **member\_count**: `number`

Total number of members in this guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:212

___

### members

• `Optional` **members**: [`APIGuildMember`](internal_.APIGuildMember.md)[]

Users in the guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/resources/guild#guild-member-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:228

___

### mfa\_level

• **mfa\_level**: [`GuildMFALevel`](../enums/internal_.GuildMFALevel.md)

Required MFA level for the guild

See https://discord.com/developers/docs/resources/guild#guild-object-mfa-level

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:176

___

### name

• **name**: `string`

Guild name (2-100 characters, excluding trailing and leading whitespace)

#### Inherited from

[APIPartialGuild](internal_.APIPartialGuild.md).[name](internal_.APIPartialGuild.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:34

___

### nsfw\_level

• **nsfw\_level**: [`GuildNSFWLevel`](../enums/internal_.GuildNSFWLevel.md)

The nsfw level of the guild

See https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:318

___

### owner

• `Optional` **owner**: `boolean`

`true` if the user is the owner of the guild

**This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:99

___

### owner\_id

• **owner\_id**: `string`

ID of owner

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:103

___

### permissions

• `Optional` **permissions**: `string`

Total permissions for the user in the guild (excludes overrides)

**This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:111

___

### preferred\_locale

• **preferred\_locale**: `string`

The preferred locale of a Community guild; used in guild discovery and notices from Discord; defaults to "en-US"

**`default`** "en-US"

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:290

___

### premium\_progress\_bar\_enabled

• **premium\_progress\_bar\_enabled**: `boolean`

Whether the guild has the boost progress bar enabled.

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:336

___

### premium\_subscription\_count

• `Optional` **premium\_subscription\_count**: `number`

The number of boosts this guild currently has

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:284

___

### premium\_tier

• **premium\_tier**: [`GuildPremiumTier`](../enums/internal_.GuildPremiumTier.md)

Premium tier (Server Boost level)

See https://discord.com/developers/docs/resources/guild#guild-object-premium-tier

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:280

___

### presences

• `Optional` **presences**: [`GatewayPresenceUpdate`](internal_.GatewayPresenceUpdate.md)[]

Presences of the members in the guild, will only include non-offline members if the size is greater than `large_threshold`

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/topics/gateway#presence-update

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:252

___

### public\_updates\_channel\_id

• **public\_updates\_channel\_id**: ``null`` \| `string`

The id of the channel where admins and moderators of Community guilds receive notices from Discord

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:294

___

### region

• **region**: `string`

Voice region id for the guild

See https://discord.com/developers/docs/resources/voice#voice-region-object

**`deprecated`** This field has been deprecated in favor of `rtc_region` on the channel.

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:118

___

### roles

• **roles**: [`APIRole`](internal_.APIRole.md)[]

Roles in the guild

See https://discord.com/developers/docs/topics/permissions#role-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:158

___

### rules\_channel\_id

• **rules\_channel\_id**: ``null`` \| `string`

The id of the channel where Community guilds can display rules and/or guidelines

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:194

___

### splash

• **splash**: ``null`` \| `string`

Splash hash

See https://discord.com/developers/docs/reference#image-formatting

#### Inherited from

[APIPartialGuild](internal_.APIPartialGuild.md).[splash](internal_.APIPartialGuild.md#splash)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:46

___

### stage\_instances

• `Optional` **stage\_instances**: [`APIStageInstance`](internal_.APIStageInstance.md)[]

The stage instances in the guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:326

___

### stickers

• **stickers**: [`APISticker`](internal_.APISticker.md)[]

Custom guild stickers

See https://discord.com/developers/docs/resources/sticker#sticker-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:332

___

### system\_channel\_flags

• **system\_channel\_flags**: [`GuildSystemChannelFlags`](../enums/internal_.GuildSystemChannelFlags.md)

System channel flags

See https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:190

___

### system\_channel\_id

• **system\_channel\_id**: ``null`` \| `string`

The id of the channel where guild notices such as welcome messages and boost events are posted

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:184

___

### threads

• `Optional` **threads**: [`APIChannel`](../modules/internal_.md#apichannel)[]

Threads in the guild

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/resources/channel#channel-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:244

___

### unavailable

• `Optional` **unavailable**: `boolean`

`true` if this guild is unavailable due to an outage

#### Inherited from

[APIPartialGuild](internal_.APIPartialGuild.md).[unavailable](internal_.APIPartialGuild.md#unavailable)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:76

___

### vanity\_url\_code

• **vanity\_url\_code**: ``null`` \| `string`

The vanity url code for the guild

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[vanity_url_code](internal_.APIPartialGuild.md#vanity_url_code)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:264

___

### verification\_level

• **verification\_level**: [`GuildVerificationLevel`](../enums/internal_.GuildVerificationLevel.md)

Verification level required for the guild

See https://discord.com/developers/docs/resources/guild#guild-object-verification-level

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[verification_level](internal_.APIPartialGuild.md#verification_level)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:140

___

### voice\_states

• `Optional` **voice\_states**: [`Omit`](../modules/internal_.md#omit)<[`GatewayVoiceState`](internal_.GatewayVoiceState.md), ``"guild_id"``\>[]

States of members currently in voice channels; lacks the `guild_id` key

**This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**

See https://discord.com/developers/docs/resources/voice#voice-state-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:220

___

### welcome\_screen

• `Optional` **welcome\_screen**: [`APIGuildWelcomeScreen`](internal_.APIGuildWelcomeScreen.md)

The welcome screen of a Community guild, shown to new members

Returned in the invite object

#### Overrides

[APIPartialGuild](internal_.APIPartialGuild.md).[welcome_screen](internal_.APIPartialGuild.md#welcome_screen)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:312

___

### widget\_channel\_id

• `Optional` **widget\_channel\_id**: ``null`` \| `string`

The channel id that the widget will generate an invite to, or `null` if set to no invite

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:134

___

### widget\_enabled

• `Optional` **widget\_enabled**: `boolean`

`true` if the guild widget is enabled

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:130
