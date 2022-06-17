[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookEditMessageData

# Interface: WebhookEditMessageData

[<internal>](../modules/internal_.md).WebhookEditMessageData

## Table of contents

### Properties

- [allowed\_mentions](internal_.WebhookEditMessageData.md#allowed_mentions)
- [attachments](internal_.WebhookEditMessageData.md#attachments)
- [components](internal_.WebhookEditMessageData.md#components)
- [content](internal_.WebhookEditMessageData.md#content)
- [embeds](internal_.WebhookEditMessageData.md#embeds)
- [files](internal_.WebhookEditMessageData.md#files)
- [thread\_id](internal_.WebhookEditMessageData.md#thread_id)

## Properties

### allowed\_mentions

• `Optional` **allowed\_mentions**: ``null`` \| [`AllowedMentions`](../modules/internal_.md#allowedmentions)

[alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)

#### Defined in

[src/structures/interactions/Constants.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L77)

___

### attachments

• `Optional` **attachments**: [`Attachment`](../modules/internal_.md#attachment-1)[]

#### Defined in

[src/structures/interactions/Constants.ts:78](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L78)

___

### components

• `Optional` **components**: [`ActionRow`](../modules/internal_.md#actionrow-1)[]

[Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message

#### Defined in

[src/structures/interactions/Constants.ts:82](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L82)

___

### content

• `Optional` **content**: ``null`` \| `string`

content of the message

#### Defined in

[src/structures/interactions/Constants.ts:56](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L56)

___

### embeds

• `Optional` **embeds**: ``null`` \| [`Embed`](../modules/internal_.md#embed)[]

Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)

#### Defined in

[src/structures/interactions/Constants.ts:60](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L60)

___

### files

• `Optional` **files**: { `file`: `Buffer` ; `name`: `string`  }[]

Files that should be updated

#### Defined in

[src/structures/interactions/Constants.ts:64](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L64)

___

### thread\_id

• `Optional` **thread\_id**: `string`

#### Defined in

[src/structures/interactions/Constants.ts:83](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/interactions/Constants.ts#L83)
