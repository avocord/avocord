[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookCreateMessageData

# Interface: WebhookCreateMessageData

[<internal>](../modules/internal_.md).WebhookCreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.WebhookCreateMessageData.md#allowed_mentions)
- [avatar\_url](internal_.WebhookCreateMessageData.md#avatar_url)
- [components](internal_.WebhookCreateMessageData.md#components)
- [content](internal_.WebhookCreateMessageData.md#content)
- [embeds](internal_.WebhookCreateMessageData.md#embeds)
- [files](internal_.WebhookCreateMessageData.md#files)
- [tts](internal_.WebhookCreateMessageData.md#tts)
- [username](internal_.WebhookCreateMessageData.md#username)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)

#### Defined in

[src/structures/interactions/Constants.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L45)

___

### avatar\_url

• `Optional` **avatar\_url**: ``null`` \| `string`

avatar url of the webhook

#### Defined in

[src/structures/interactions/Constants.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L20)

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

[src/structures/interactions/Constants.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L49)

___

### content

• `Optional` **content**: ``null`` \| `string`

content of the message

#### Defined in

[src/structures/interactions/Constants.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L12)

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)

#### Defined in

[src/structures/interactions/Constants.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L41)

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

[src/structures/interactions/Constants.ts:28](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L28)

___

### tts

• `Optional` **tts**: ``null`` \| `boolean`

send a text to speech message

#### Defined in

[src/structures/interactions/Constants.ts:24](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L24)

___

### username

• `Optional` **username**: ``null`` \| `string`

username to use for the webhook

#### Defined in

[src/structures/interactions/Constants.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L16)
