[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIApplication

# Interface: APIApplication

[<internal>](../modules/internal_.md).APIApplication

https://discord.com/developers/docs/resources/application#application-object

## Table of contents

### Properties

- [bot\_public](internal_.APIApplication.md#bot_public)
- [bot\_require\_code\_grant](internal_.APIApplication.md#bot_require_code_grant)
- [cover\_image](internal_.APIApplication.md#cover_image)
- [custom\_install\_url](internal_.APIApplication.md#custom_install_url)
- [description](internal_.APIApplication.md#description)
- [flags](internal_.APIApplication.md#flags)
- [guild\_id](internal_.APIApplication.md#guild_id)
- [icon](internal_.APIApplication.md#icon)
- [id](internal_.APIApplication.md#id)
- [install\_params](internal_.APIApplication.md#install_params)
- [name](internal_.APIApplication.md#name)
- [owner](internal_.APIApplication.md#owner)
- [primary\_sku\_id](internal_.APIApplication.md#primary_sku_id)
- [privacy\_policy\_url](internal_.APIApplication.md#privacy_policy_url)
- [rpc\_origins](internal_.APIApplication.md#rpc_origins)
- [slug](internal_.APIApplication.md#slug)
- [tags](internal_.APIApplication.md#tags)
- [team](internal_.APIApplication.md#team)
- [terms\_of\_service\_url](internal_.APIApplication.md#terms_of_service_url)
- [verify\_key](internal_.APIApplication.md#verify_key)

## Properties

### bot\_public

• **bot\_public**: `boolean`

When `false` only app owner can join the app's bot to guilds

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:35

___

### bot\_require\_code\_grant

• **bot\_require\_code\_grant**: `boolean`

When `true` the app's bot will only join upon completion of the full oauth2 code grant flow

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:39

___

### cover\_image

• `Optional` **cover\_image**: `string`

If this application is a game sold on Discord, this field will be the hash of the image on store embeds

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:81

___

### custom\_install\_url

• `Optional` **custom\_install\_url**: `string`

The application's default custom authorization link, if enabled

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:99

___

### description

• **description**: `string`

The description of the app

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:27

___

### flags

• **flags**: [`ApplicationFlags`](../enums/internal_.ApplicationFlags.md)

The application's public flags

See https://discord.com/developers/docs/resources/application#application-object-application-flags

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:87

___

### guild\_id

• `Optional` **guild\_id**: `string`

If this application is a game sold on Discord, this field will be the guild to which it has been linked

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:69

___

### icon

• **icon**: ``null`` \| `string`

The icon hash of the app

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:23

___

### id

• **id**: `string`

The id of the app

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:15

___

### install\_params

• `Optional` **install\_params**: [`APIApplicationInstallParams`](internal_.APIApplicationInstallParams.md)

Settings for the application's default in-app authorization link, if enabled

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:95

___

### name

• **name**: `string`

The name of the app

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:19

___

### owner

• `Optional` **owner**: [`APIUser`](internal_.APIUser.md)

Partial user object containing info on the owner of the application

See https://discord.com/developers/docs/resources/user#user-object

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:53

___

### primary\_sku\_id

• `Optional` **primary\_sku\_id**: `string`

If this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:73

___

### privacy\_policy\_url

• `Optional` **privacy\_policy\_url**: `string`

The url of the application's privacy policy

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:47

___

### rpc\_origins

• `Optional` **rpc\_origins**: `string`[]

An array of rpc origin urls, if rpc is enabled

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:31

___

### slug

• `Optional` **slug**: `string`

If this application is a game sold on Discord, this field will be the URL slug that links to the store page

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:77

___

### tags

• `Optional` **tags**: [`string`, string?, string?, string?, string?]

Up to 5 tags describing the content and functionality of the application

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:91

___

### team

• **team**: ``null`` \| [`APITeam`](internal_.APITeam.md)

The team this application belongs to

See https://discord.com/developers/docs/topics/teams#data-models-team-object

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:65

___

### terms\_of\_service\_url

• `Optional` **terms\_of\_service\_url**: `string`

The url of the application's terms of service

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:43

___

### verify\_key

• **verify\_key**: `string`

The hexadecimal encoded key for verification in interactions and the GameSDK's GetTicket function

See https://discord.com/developers/docs/game-sdk/applications#get-ticket

#### Defined in

node_modules/discord-api-types/payloads/v10/application.d.ts:59
