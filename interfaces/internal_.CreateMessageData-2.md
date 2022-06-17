[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateMessageData

# Interface: CreateMessageData

[<internal>](../modules/internal_.md).CreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.CreateMessageData-2.md#allowed_mentions)
- [attachments](internal_.CreateMessageData-2.md#attachments)
- [components](internal_.CreateMessageData-2.md#components)
- [content](internal_.CreateMessageData-2.md#content)
- [embeds](internal_.CreateMessageData-2.md#embeds)
- [files](internal_.CreateMessageData-2.md#files)
- [flags](internal_.CreateMessageData-2.md#flags)
- [message\_reference](internal_.CreateMessageData-2.md#message_reference)
- [sticker\_ids](internal_.CreateMessageData-2.md#sticker_ids)
- [tts](internal_.CreateMessageData-2.md#tts)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[Allowed mentions](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:852

___

### attachments

• `Optional` **attachments**: [`Omit`](../modules/internal_.md#omit)<[`Attachment`](../modules/internal_.md#attachment-1), ``"ephemeral"`` \| ``"proxy_url"`` \| ``"url"`` \| ``"size"``\>[]

Attachments for embeds

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:881

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:860

___

### content

• `Optional` **content**: `string`

Content of the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:840

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [Embeds](https://discord.com/developers/docs/resources/channel#embed-object) to send

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:848

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:868

___

### flags

• `Optional` **flags**: `number`

Flags (only SUPPRESS_EMBEDS can be set)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:885

___

### message\_reference

• `Optional` **message\_reference**: [`MessageReference`](../modules/internal_.md#messagereference)

[Reply](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) to a message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:856

___

### sticker\_ids

• `Optional` **sticker\_ids**: `string`[]

Stickers to send

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:864

___

### tts

• `Optional` **tts**: `boolean`

if this message is text-to-speech

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Channels.d.ts:844
