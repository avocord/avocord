[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIPartialGuild

# Interface: APIPartialGuild

[<internal>](../modules/internal_.md).APIPartialGuild

https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`APIUnavailableGuild`](internal_.APIUnavailableGuild.md), ``"unavailable"``\>

- [`Pick`](../modules/internal_.md#pick)<[`APIGuild`](internal_.APIGuild.md), ``"welcome_screen"``\>

  ↳ **`APIPartialGuild`**

  ↳↳ [`APIGuild`](internal_.APIGuild.md)

## Table of contents

### Properties

- [banner](internal_.APIPartialGuild.md#banner)
- [description](internal_.APIPartialGuild.md#description)
- [features](internal_.APIPartialGuild.md#features)
- [icon](internal_.APIPartialGuild.md#icon)
- [id](internal_.APIPartialGuild.md#id)
- [name](internal_.APIPartialGuild.md#name)
- [splash](internal_.APIPartialGuild.md#splash)
- [unavailable](internal_.APIPartialGuild.md#unavailable)
- [vanity\_url\_code](internal_.APIPartialGuild.md#vanity_url_code)
- [verification\_level](internal_.APIPartialGuild.md#verification_level)
- [welcome\_screen](internal_.APIPartialGuild.md#welcome_screen)

## Properties

### banner

• `Optional` **banner**: ``null`` \| `string`

Banner hash

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:52

___

### description

• `Optional` **description**: ``null`` \| `string`

The description for the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:56

___

### features

• `Optional` **features**: [`GuildFeature`](../enums/internal_.GuildFeature.md)[]

Enabled guild features

See https://discord.com/developers/docs/resources/guild#guild-object-guild-features

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:62

___

### icon

• **icon**: ``null`` \| `string`

Icon hash

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:40

___

### id

• **id**: `string`

Guild id

#### Inherited from

Omit.id

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:21

___

### name

• **name**: `string`

Guild name (2-100 characters, excluding trailing and leading whitespace)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:34

___

### splash

• **splash**: ``null`` \| `string`

Splash hash

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:46

___

### unavailable

• `Optional` **unavailable**: `boolean`

`true` if this guild is unavailable due to an outage

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:76

___

### vanity\_url\_code

• `Optional` **vanity\_url\_code**: ``null`` \| `string`

The vanity url code for the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:72

___

### verification\_level

• `Optional` **verification\_level**: [`GuildVerificationLevel`](../enums/internal_.GuildVerificationLevel.md)

Verification level required for the guild

See https://discord.com/developers/docs/resources/guild#guild-object-verification-level

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:68

___

### welcome\_screen

• `Optional` **welcome\_screen**: [`APIGuildWelcomeScreen`](internal_.APIGuildWelcomeScreen.md)

The welcome screen of a Community guild, shown to new members

Returned in the invite object

#### Inherited from

Pick.welcome\_screen

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:312
