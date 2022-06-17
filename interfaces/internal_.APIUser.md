[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIUser

# Interface: APIUser

[<internal>](../modules/internal_.md).APIUser

https://discord.com/developers/docs/resources/user#user-object

## Table of contents

### Properties

- [accent\_color](internal_.APIUser.md#accent_color)
- [avatar](internal_.APIUser.md#avatar)
- [banner](internal_.APIUser.md#banner)
- [bot](internal_.APIUser.md#bot)
- [discriminator](internal_.APIUser.md#discriminator)
- [email](internal_.APIUser.md#email)
- [flags](internal_.APIUser.md#flags)
- [id](internal_.APIUser.md#id)
- [locale](internal_.APIUser.md#locale)
- [mfa\_enabled](internal_.APIUser.md#mfa_enabled)
- [premium\_type](internal_.APIUser.md#premium_type)
- [public\_flags](internal_.APIUser.md#public_flags)
- [system](internal_.APIUser.md#system)
- [username](internal_.APIUser.md#username)
- [verified](internal_.APIUser.md#verified)

## Properties

### accent\_color

• `Optional` **accent\_color**: ``null`` \| `number`

The user's banner color encoded as an integer representation of hexadecimal color code

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:49

___

### avatar

• **avatar**: ``null`` \| `string`

The user's avatar hash

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:27

___

### banner

• `Optional` **banner**: ``null`` \| `string`

The user's banner hash

See https://discord.com/developers/docs/reference#image-formatting

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:45

___

### bot

• `Optional` **bot**: `boolean`

Whether the user belongs to an OAuth2 application

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:31

___

### discriminator

• **discriminator**: `string`

The user's 4-digit discord-tag

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:21

___

### email

• `Optional` **email**: ``null`` \| `string`

The user's email

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:61

___

### flags

• `Optional` **flags**: [`UserFlags`](../enums/internal_.UserFlags.md)

The flags on a user's account

See https://discord.com/developers/docs/resources/user#user-object-user-flags

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:67

___

### id

• **id**: `string`

The user's id

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:13

___

### locale

• `Optional` **locale**: `string`

The user's chosen language option

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:53

___

### mfa\_enabled

• `Optional` **mfa\_enabled**: `boolean`

Whether the user has two factor enabled on their account

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:39

___

### premium\_type

• `Optional` **premium\_type**: [`UserPremiumType`](../enums/internal_.UserPremiumType.md)

The type of Nitro subscription on a user's account

See https://discord.com/developers/docs/resources/user#user-object-premium-types

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:73

___

### public\_flags

• `Optional` **public\_flags**: [`UserFlags`](../enums/internal_.UserFlags.md)

The public flags on a user's account

See https://discord.com/developers/docs/resources/user#user-object-user-flags

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:79

___

### system

• `Optional` **system**: `boolean`

Whether the user is an Official Discord System user (part of the urgent message system)

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:35

___

### username

• **username**: `string`

The user's username, not unique across the platform

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:17

___

### verified

• `Optional` **verified**: `boolean`

Whether the email on this account has been verified

#### Defined in

node_modules/discord-api-types/payloads/v10/user.d.ts:57
