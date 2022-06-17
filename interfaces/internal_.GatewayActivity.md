[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GatewayActivity

# Interface: GatewayActivity

[<internal>](../modules/internal_.md).GatewayActivity

https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure

## Table of contents

### Properties

- [application\_id](internal_.GatewayActivity.md#application_id)
- [assets](internal_.GatewayActivity.md#assets)
- [buttons](internal_.GatewayActivity.md#buttons)
- [created\_at](internal_.GatewayActivity.md#created_at)
- [details](internal_.GatewayActivity.md#details)
- [emoji](internal_.GatewayActivity.md#emoji)
- [flags](internal_.GatewayActivity.md#flags)
- [id](internal_.GatewayActivity.md#id)
- [instance](internal_.GatewayActivity.md#instance)
- [name](internal_.GatewayActivity.md#name)
- [party](internal_.GatewayActivity.md#party)
- [platform](internal_.GatewayActivity.md#platform)
- [secrets](internal_.GatewayActivity.md#secrets)
- [session\_id](internal_.GatewayActivity.md#session_id)
- [state](internal_.GatewayActivity.md#state)
- [sync\_id](internal_.GatewayActivity.md#sync_id)
- [timestamps](internal_.GatewayActivity.md#timestamps)
- [type](internal_.GatewayActivity.md#type)
- [url](internal_.GatewayActivity.md#url)

## Properties

### application\_id

• `Optional` **application\_id**: `string`

Application id for the game

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:151

___

### assets

• `Optional` **assets**: [`Partial`](../modules/internal_.md#partial)<[`Record`](../modules/internal_.md#record)<``"large_image"`` \| ``"large_text"`` \| ``"small_image"`` \| ``"small_text"``, `string`\>\>

Images for the presence and their hover texts

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:178

___

### buttons

• `Optional` **buttons**: `string`[] \| [`GatewayActivityButton`](internal_.GatewayActivityButton.md)[]

The custom buttons shown in the Rich Presence (max 2)

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:200

___

### created\_at

• **created\_at**: `number`

Unix timestamp of when the activity was added to the user's session

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:141

___

### details

• `Optional` **details**: ``null`` \| `string`

What the player is currently doing

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:155

___

### emoji

• `Optional` **emoji**: [`GatewayActivityEmoji`](../modules/internal_.md#gatewayactivityemoji)

The emoji used for a custom status

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:165

___

### flags

• `Optional` **flags**: [`ActivityFlags`](../enums/internal_.ActivityFlags.md)

Activity flags `OR`d together, describes what the payload includes

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:196

___

### id

• **id**: `string`

The activity's id

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:123

___

### instance

• `Optional` **instance**: `boolean`

Whether or not the activity is an instanced game session

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:188

___

### name

• **name**: `string`

The activity's name

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:127

___

### party

• `Optional` **party**: [`GatewayActivityParty`](internal_.GatewayActivityParty.md)

Information for the current party of the player

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-party

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:172

___

### platform

• `Optional` **platform**: [`ActivityPlatform`](../enums/internal_.ActivityPlatform.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:147

___

### secrets

• `Optional` **secrets**: [`Partial`](../modules/internal_.md#partial)<[`Record`](../modules/internal_.md#record)<``"match"`` \| ``"join"`` \| ``"spectate"``, `string`\>\>

Secrets for Rich Presence joining and spectating

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:184

___

### session\_id

• `Optional` **session\_id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:166

___

### state

• `Optional` **state**: ``null`` \| `string`

The user's current party status

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:159

___

### sync\_id

• `Optional` **sync\_id**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:146

___

### timestamps

• `Optional` **timestamps**: [`GatewayActivityTimestamps`](internal_.GatewayActivityTimestamps.md)

Unix timestamps for start and/or end of the game

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:145

___

### type

• **type**: [`ActivityType`](../enums/internal_.ActivityType.md)

Activity type

See https://discord.com/developers/docs/topics/gateway#activity-object-activity-types

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:133

___

### url

• `Optional` **url**: ``null`` \| `string`

Stream url, is validated when type is `1`

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:137
