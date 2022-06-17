[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateMessageData

# Interface: CreateMessageData

[<internal>](../modules/internal_.md).CreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.CreateMessageData-1.md#allowed_mentions)
- [attachments](internal_.CreateMessageData-1.md#attachments)
- [components](internal_.CreateMessageData-1.md#components)
- [content](internal_.CreateMessageData-1.md#content)
- [embeds](internal_.CreateMessageData-1.md#embeds)
- [files](internal_.CreateMessageData-1.md#files)
- [message\_reference](internal_.CreateMessageData-1.md#message_reference)
- [nonce](internal_.CreateMessageData-1.md#nonce)
- [sticker\_ids](internal_.CreateMessageData-1.md#sticker_ids)
- [tts](internal_.CreateMessageData-1.md#tts)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[Allowed mentions](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for the message

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:663

___

### attachments

• `Optional` **attachments**: [`Attachment`](../modules/internal_.md#attachment-1)[]

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:673

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:671

___

### content

• `Optional` **content**: ``null`` \| `string`

Content of the message

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:638

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [Embeds](https://discord.com/developers/docs/resources/channel#embed-object) to send

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:634

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:650

___

### message\_reference

• `Optional` **message\_reference**: [`MessageReference`](../modules/internal_.md#messagereference)

[Reply](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) to a message

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:667

___

### nonce

• `Optional` **nonce**: `string` \| `number`

"a nonce that can be used for optimistic message sending"

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:642

___

### sticker\_ids

• `Optional` **sticker\_ids**: `string`[]

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:672

___

### tts

• `Optional` **tts**: ``null`` \| `boolean`

if this message is text-to-speech

#### Defined in

node_modules/snowtransfer/dist/methods/Channels.d.ts:646
