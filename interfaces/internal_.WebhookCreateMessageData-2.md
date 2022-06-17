[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookCreateMessageData

# Interface: WebhookCreateMessageData

[<internal>](../modules/internal_.md).WebhookCreateMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.WebhookCreateMessageData-2.md#allowed_mentions)
- [attachments](internal_.WebhookCreateMessageData-2.md#attachments)
- [avatar\_url](internal_.WebhookCreateMessageData-2.md#avatar_url)
- [components](internal_.WebhookCreateMessageData-2.md#components)
- [content](internal_.WebhookCreateMessageData-2.md#content)
- [embeds](internal_.WebhookCreateMessageData-2.md#embeds)
- [files](internal_.WebhookCreateMessageData-2.md#files)
- [flags](internal_.WebhookCreateMessageData-2.md#flags)
- [tts](internal_.WebhookCreateMessageData-2.md#tts)
- [username](internal_.WebhookCreateMessageData-2.md#username)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:265

___

### attachments

• `Optional` **attachments**: [`Partial`](../modules/internal_.md#partial)<[`Attachment`](../modules/internal_.md#attachment-1)\>[]

attachment objects with filename and description

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:286

___

### avatar\_url

• `Optional` **avatar\_url**: `string`

avatar url of the webhook

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:253

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:269

___

### content

• `Optional` **content**: `string`

content of the message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:245

___

### embeds

• `Optional` **embeds**: [`Embed`](../modules/internal_.md#embed)[]

Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:261

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be uploaded

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:273

___

### flags

• `Optional` **flags**: `number`

message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:290

___

### tts

• `Optional` **tts**: `boolean`

send a text to speech message

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:257

___

### username

• `Optional` **username**: `string`

username to use for the webhook

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:249
