[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookEditMessageData

# Interface: WebhookEditMessageData

[<internal>](../modules/internal_.md).WebhookEditMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.WebhookEditMessageData-1.md#allowed_mentions)
- [attachments](internal_.WebhookEditMessageData-1.md#attachments)
- [components](internal_.WebhookEditMessageData-1.md#components)
- [content](internal_.WebhookEditMessageData-1.md#content)
- [embeds](internal_.WebhookEditMessageData-1.md#embeds)
- [files](internal_.WebhookEditMessageData-1.md#files)
- [thread\_id](internal_.WebhookEditMessageData-1.md#thread_id)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: ``null`` \| [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:285

___

### attachments

• `Optional` **attachments**: [`Attachment`](../modules/internal_.md#attachment-1)[]

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:286

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:290

___

### content

• `Optional` **content**: ``null`` \| `string`

content of the message

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:264

___

### embeds

• `Optional` **embeds**: ``null`` \| [`Embed`](../modules/internal_.md#embed)[]

Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:268

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be updated

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:272

___

### thread\_id

• `Optional` **thread\_id**: `string`

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:291
