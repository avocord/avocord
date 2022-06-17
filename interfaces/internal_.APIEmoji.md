[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIEmoji

# Interface: APIEmoji

[<internal>](../modules/internal_.md).APIEmoji

https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure

## Hierarchy

- [`APIPartialEmoji`](internal_.APIPartialEmoji.md)

  ↳ **`APIEmoji`**

## Table of contents

### Properties

- [animated](internal_.APIEmoji.md#animated)
- [available](internal_.APIEmoji.md#available)
- [id](internal_.APIEmoji.md#id)
- [managed](internal_.APIEmoji.md#managed)
- [name](internal_.APIEmoji.md#name)
- [require\_colons](internal_.APIEmoji.md#require_colons)
- [roles](internal_.APIEmoji.md#roles)
- [user](internal_.APIEmoji.md#user)

## Properties

### animated

• `Optional` **animated**: `boolean`

Whether this emoji is animated

#### Inherited from

[APIPartialEmoji](internal_.APIPartialEmoji.md).[animated](internal_.APIPartialEmoji.md#animated)

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:22

___

### available

• `Optional` **available**: `boolean`

Whether this emoji can be used, may be false due to loss of Server Boosts

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:47

___

### id

• **id**: ``null`` \| `string`

Emoji id

#### Inherited from

[APIPartialEmoji](internal_.APIPartialEmoji.md).[id](internal_.APIPartialEmoji.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:14

___

### managed

• `Optional` **managed**: `boolean`

Whether this emoji is managed

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:43

___

### name

• **name**: ``null`` \| `string`

Emoji name (can be null only in reaction emoji objects)

#### Inherited from

[APIPartialEmoji](internal_.APIPartialEmoji.md).[name](internal_.APIPartialEmoji.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:18

___

### require\_colons

• `Optional` **require\_colons**: `boolean`

Whether this emoji must be wrapped in colons

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:39

___

### roles

• `Optional` **roles**: `string`[]

Roles this emoji is whitelisted to

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:31

___

### user

• `Optional` **user**: [`APIUser`](internal_.APIUser.md)

User that created this emoji

#### Defined in

node_modules/discord-api-types/payloads/v10/emoji.d.ts:35
