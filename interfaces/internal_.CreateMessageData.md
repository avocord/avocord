[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CreateMessageData

# Interface: CreateMessageData

[<internal>](../modules/internal_.md).CreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.CreateMessageData.md#allowed_mentions)
- [attachments](internal_.CreateMessageData.md#attachments)
- [components](internal_.CreateMessageData.md#components)
- [content](internal_.CreateMessageData.md#content)
- [embeds](internal_.CreateMessageData.md#embeds)
- [files](internal_.CreateMessageData.md#files)
- [message\_reference](internal_.CreateMessageData.md#message_reference)
- [nonce](internal_.CreateMessageData.md#nonce)
- [sticker\_ids](internal_.CreateMessageData.md#sticker_ids)
- [tts](internal_.CreateMessageData.md#tts)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[Allowed mentions](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for the message

#### Defined in

[src/structures/channel/Constants.ts:61](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L61)

___

### attachments

• `Optional` **attachments**: [`Attachment`](../modules/internal_.md#attachment-1)[]

#### Defined in

[src/structures/channel/Constants.ts:71](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L71)

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

[src/structures/channel/Constants.ts:69](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L69)

___

### content

• `Optional` **content**: ``null`` \| `string`

Content of the message

#### Defined in

[src/structures/channel/Constants.ts:36](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L36)

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [Embeds](https://discord.com/developers/docs/resources/channel#embed-object) to send

#### Defined in

[src/structures/channel/Constants.ts:32](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L32)

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

[src/structures/channel/Constants.ts:48](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L48)

___

### message\_reference

• `Optional` **message\_reference**: [`MessageReference`](../modules/internal_.md#messagereference)

[Reply](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) to a message

#### Defined in

[src/structures/channel/Constants.ts:65](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L65)

___

### nonce

• `Optional` **nonce**: `string` \| `number`

'a nonce that can be used for optimistic message sending'

#### Defined in

[src/structures/channel/Constants.ts:40](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L40)

___

### sticker\_ids

• `Optional` **sticker\_ids**: `string`[]

#### Defined in

[src/structures/channel/Constants.ts:70](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L70)

___

### tts

• `Optional` **tts**: ``null`` \| `boolean`

if this message is text-to-speech

#### Defined in

[src/structures/channel/Constants.ts:44](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/channel/Constants.ts#L44)
