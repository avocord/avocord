[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APISticker

# Interface: APISticker

[<internal>](../modules/internal_.md).APISticker

https://discord.com/developers/docs/resources/sticker#sticker-object

## Table of contents

### Properties

- [asset](internal_.APISticker.md#asset)
- [available](internal_.APISticker.md#available)
- [description](internal_.APISticker.md#description)
- [format\_type](internal_.APISticker.md#format_type)
- [guild\_id](internal_.APISticker.md#guild_id)
- [id](internal_.APISticker.md#id)
- [name](internal_.APISticker.md#name)
- [pack\_id](internal_.APISticker.md#pack_id)
- [sort\_value](internal_.APISticker.md#sort_value)
- [tags](internal_.APISticker.md#tags)
- [type](internal_.APISticker.md#type)
- [user](internal_.APISticker.md#user)

## Properties

### asset

• `Optional` **asset**: ``""``

Previously the sticker asset hash, now an empty string

**`deprecated`**

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:34

___

### available

• `Optional` **available**: `boolean`

Whether this guild sticker can be used, may be false due to loss of Server Boosts

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:50

___

### description

• **description**: ``null`` \| `string`

Description of the sticker

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:25

___

### format\_type

• **format\_type**: [`StickerFormatType`](../enums/internal_.StickerFormatType.md)

Type of sticker format

See https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:46

___

### guild\_id

• `Optional` **guild\_id**: `string`

ID of the guild that owns this sticker

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:54

___

### id

• **id**: `string`

ID of the sticker

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:13

___

### name

• **name**: `string`

Name of the sticker

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:21

___

### pack\_id

• `Optional` **pack\_id**: `string`

For standard stickers, ID of the pack the sticker is from

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:17

___

### sort\_value

• `Optional` **sort\_value**: `number`

The standard sticker's sort order within its pack

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:62

___

### tags

• **tags**: `string`

For guild stickers, the Discord name of a unicode emoji representing the sticker's expression. for standard stickers, a comma-separated list of related expressions.

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:29

___

### type

• **type**: [`StickerType`](../enums/internal_.StickerType.md)

Type of sticker

See https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:40

___

### user

• `Optional` **user**: [`APIUser`](internal_.APIUser.md)

The user that uploaded the guild sticker

#### Defined in

node_modules/discord-api-types/payloads/v10/sticker.d.ts:58
