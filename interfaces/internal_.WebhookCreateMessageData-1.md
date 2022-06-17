[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookCreateMessageData

# Interface: WebhookCreateMessageData

[<internal>](../modules/internal_.md).WebhookCreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.WebhookCreateMessageData-1.md#allowed_mentions)
- [avatar\_url](internal_.WebhookCreateMessageData-1.md#avatar_url)
- [components](internal_.WebhookCreateMessageData-1.md#components)
- [content](internal_.WebhookCreateMessageData-1.md#content)
- [embeds](internal_.WebhookCreateMessageData-1.md#embeds)
- [files](internal_.WebhookCreateMessageData-1.md#files)
- [tts](internal_.WebhookCreateMessageData-1.md#tts)
- [username](internal_.WebhookCreateMessageData-1.md#username)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:254

___

### avatar\_url

• `Optional` **avatar\_url**: ``null`` \| `string`

avatar url of the webhook

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:229

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:258

___

### content

• `Optional` **content**: ``null`` \| `string`

content of the message

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:221

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:250

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:237

___

### tts

• `Optional` **tts**: ``null`` \| `boolean`

send a text to speech message

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:233

___

### username

• `Optional` **username**: ``null`` \| `string`

username to use for the webhook

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:225
