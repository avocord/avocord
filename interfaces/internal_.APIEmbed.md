[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIEmbed

# Interface: APIEmbed

[<internal>](../modules/internal_.md).APIEmbed

https://discord.com/developers/docs/resources/channel#embed-object-embed-structure

Length limit: 6000 characters

## Table of contents

### Properties

- [author](internal_.APIEmbed.md#author)
- [color](internal_.APIEmbed.md#color)
- [description](internal_.APIEmbed.md#description)
- [fields](internal_.APIEmbed.md#fields)
- [footer](internal_.APIEmbed.md#footer)
- [image](internal_.APIEmbed.md#image)
- [provider](internal_.APIEmbed.md#provider)
- [thumbnail](internal_.APIEmbed.md#thumbnail)
- [timestamp](internal_.APIEmbed.md#timestamp)
- [title](internal_.APIEmbed.md#title)
- [type](internal_.APIEmbed.md#type)
- [url](internal_.APIEmbed.md#url)
- [video](internal_.APIEmbed.md#video)

## Properties

### author

• `Optional` **author**: [`APIEmbedAuthor`](internal_.APIEmbedAuthor.md)

Author information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:793

___

### color

• `Optional` **color**: `number`

Color code of the embed

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:757

___

### description

• `Optional` **description**: `string`

Description of embed

Length limit: 4096 characters

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:745

___

### fields

• `Optional` **fields**: [`APIEmbedField`](internal_.APIEmbedField.md)[]

Fields information

Length limit: 25 field objects

See https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:801

___

### footer

• `Optional` **footer**: [`APIEmbedFooter`](internal_.APIEmbedFooter.md)

Footer information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:763

___

### image

• `Optional` **image**: [`APIEmbedImage`](internal_.APIEmbedImage.md)

Image information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:769

___

### provider

• `Optional` **provider**: [`APIEmbedProvider`](internal_.APIEmbedProvider.md)

Provider information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:787

___

### thumbnail

• `Optional` **thumbnail**: [`APIEmbedThumbnail`](internal_.APIEmbedThumbnail.md)

Thumbnail information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:775

___

### timestamp

• `Optional` **timestamp**: `string`

Timestamp of embed content

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:753

___

### title

• `Optional` **title**: `string`

Title of embed

Length limit: 256 characters

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:731

___

### type

• `Optional` **type**: [`EmbedType`](../enums/internal_.EmbedType.md)

Type of embed (always "rich" for webhook embeds)

**`deprecated`** *Embed types should be considered deprecated and might be removed in a future API version*

See https://discord.com/developers/docs/resources/channel#embed-object-embed-types

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:739

___

### url

• `Optional` **url**: `string`

URL of embed

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:749

___

### video

• `Optional` **video**: [`APIEmbedVideo`](internal_.APIEmbedVideo.md)

Video information

See https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:781
