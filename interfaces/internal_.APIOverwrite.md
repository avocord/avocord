[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIOverwrite

# Interface: APIOverwrite

[<internal>](../modules/internal_.md).APIOverwrite

https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure

## Table of contents

### Properties

- [allow](internal_.APIOverwrite.md#allow)
- [deny](internal_.APIOverwrite.md#deny)
- [id](internal_.APIOverwrite.md#id)
- [type](internal_.APIOverwrite.md#type)

## Properties

### allow

• **allow**: `string`

Permission bit set

See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:628

___

### deny

• **deny**: `string`

Permission bit set

See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:636

___

### id

• **id**: `string`

Role or user id

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:614

___

### type

• **type**: [`OverwriteType`](../enums/internal_.OverwriteType.md)

Either 0 (role) or 1 (member)

[OverwriteType](../enums/internal_.OverwriteType.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:620
