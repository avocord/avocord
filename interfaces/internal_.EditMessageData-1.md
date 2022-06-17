[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditMessageData

# Interface: EditMessageData

[<internal>](../modules/internal_.md).EditMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.EditMessageData-1.md#allowed_mentions)
- [attachments](internal_.EditMessageData-1.md#attachments)
- [components](internal_.EditMessageData-1.md#components)
- [content](internal_.EditMessageData-1.md#content)
- [embeds](internal_.EditMessageData-1.md#embeds)
- [files](internal_.EditMessageData-1.md#files)
- [flags](internal_.EditMessageData-1.md#flags)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[Allowed mentions](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:903

___

### attachments

• `Optional` **attachments**: [`Omit`](../modules/internal_.md#omit)<[`Attachment`](../modules/internal_.md#attachment-1), ``"ephemeral"`` \| ``"proxy_url"`` \| ``"url"`` \| ``"size"``\>[]

[Attached files](https://discord.com/developers/docs/resources/channel#attachment-object) to remove or edit descriptions for

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:924

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:907

___

### content

• `Optional` **content**: ``null`` \| `string`

Content of the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:891

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [Embeds](https://discord.com/developers/docs/resources/channel#embed-object) to send

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:895

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be updated

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:911

___

### flags

• `Optional` **flags**: `number`

1 << 2 to set a message SUPPRESS_EMBEDS

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:899
