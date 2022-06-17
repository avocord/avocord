[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookMethods

# Class: WebhookMethods

[<internal>](../modules/internal_.md).WebhookMethods

Methods for handling webhook interactions

## Table of contents

### Constructors

- [constructor](internal_.WebhookMethods-1.md#constructor)

### Properties

- [disableEveryone](internal_.WebhookMethods-1.md#disableeveryone)
- [requestHandler](internal_.WebhookMethods-1.md#requesthandler)
- [default](internal_.WebhookMethods-1.md#default)

### Methods

- [createWebhook](internal_.WebhookMethods-1.md#createwebhook)
- [deleteWebhook](internal_.WebhookMethods-1.md#deletewebhook)
- [deleteWebhookMessage](internal_.WebhookMethods-1.md#deletewebhookmessage)
- [editWebhookMessage](internal_.WebhookMethods-1.md#editwebhookmessage)
- [executeWebhook](internal_.WebhookMethods-1.md#executewebhook)
- [executeWebhookGitHub](internal_.WebhookMethods-1.md#executewebhookgithub)
- [executeWebhookSlack](internal_.WebhookMethods-1.md#executewebhookslack)
- [getChannelWebhooks](internal_.WebhookMethods-1.md#getchannelwebhooks)
- [getGuildWebhooks](internal_.WebhookMethods-1.md#getguildwebhooks)
- [getWebhook](internal_.WebhookMethods-1.md#getwebhook)
- [getWebhookMessage](internal_.WebhookMethods-1.md#getwebhookmessage)
- [updateWebhook](internal_.WebhookMethods-1.md#updatewebhook)

## Constructors

### constructor

• **new WebhookMethods**(`requestHandler`, `disableEveryone`)

Create a new Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.webhook.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |
| `disableEveryone` | `boolean` | Disable [at]everyone/[at]here on outgoing messages |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:18

## Properties

### disableEveryone

• **disableEveryone**: `boolean`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:7

___

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:6

___

### default

▪ `Static` **default**: typeof [`WebhookMethods`](internal_.WebhookMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:8

## Methods

### createWebhook

▸ **createWebhook**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Create a new Webhook

**`example`**
// Create a new Webhook with the name "Webby Webhook"
const client = new SnowTransfer("TOKEN")
const webhookData = {
	name: "Webby Webhook"
}
const webhook = await client.webhook.createWebhook("channel Id", webhookData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `data` | `Object` | Object with webhook properties |
| `data.avatar?` | ``null`` \| `string` | - |
| `data.name` | `string` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

(https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_WEBHOOKS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:37

___

### deleteWebhook

▸ **deleteWebhook**(`webhookId`, `token?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a Webhook

**`example`**
// Delete a webhook via Id providing a webhook token
const client = new SnowTransfer(); // No token needed if webhook token is provided
client.webhook.deleteWebhook("webhook Id", "webhook token")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token?` | `string` | Webhook token |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition     |
|--------------------|---------------|
| MANAGE_WEBHOOKS    | without token |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:133

___

### deleteWebhookMessage

▸ **deleteWebhookMessage**(`webhookId`, `token`, `messageId`, `threadId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a message sent by a Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |
| `threadId?` | `string` | Id of the thread the message was sent in |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:216

___

### editWebhookMessage

▸ **editWebhookMessage**(`webhookId`, `token`, `messageId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edit a message sent by a Webhook

**`example`**
const client = new SnowTransfer()
const message = await client.webhook.editWebhookMessage("webhook Id", "webhook token", "message Id", { content: "New content" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-2.md) | Data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:207

___

### executeWebhook

▸ **executeWebhook**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send a message via Webhook

**`example`**
// Send a message saying "Hi from my webhook" with a previously created webhook
const client = new SnowTransfer()
client.webhook.executeWebhook("webhook Id", "webhook token", {content: "Hi from my webhook"})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token` | `string` | webhook token |
| `data` | [`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-2.md) | Webhook data to send |
| `options?` | `Object` | Options for executing the webhook |
| `options.disableEveryone?` | `boolean` | - |
| `options.thread_id?` | `string` | - |
| `options.wait?` | ``false`` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution unless wait is set to true, which returns a [message]() object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:147

▸ **executeWebhook**(`webhookId`, `token`, `data`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookId` | `string` |
| `token` | `string` |
| `data` | [`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-2.md) |
| `options` | `Object` |
| `options.disableEveryone?` | `boolean` |
| `options.thread_id?` | `string` |
| `options.wait` | ``true`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:152

___

### executeWebhookGitHub

▸ **executeWebhookGitHub**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Executes a github style Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `data` | [`GitHubWebhookData`](../interfaces/internal_.GitHubWebhookData-1.md) | Check [GitHub's documentation](https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads#webhook-payload-object) |
| `options?` | `Object` | Options for executing the webhook |
| `options.thread_id?` | `string` | - |
| `options.wait?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:182

___

### executeWebhookSlack

▸ **executeWebhookSlack**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Execute a slack style Webhook

**`example`**
const client = new SnowTransfer() // No token needed
client.webhook.executeSlackWebhook("webhook Id", "webhook token", slackdata)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `data` | `any` | Check [Slack's documentation](https://api.slack.com/incoming-webhooks) |
| `options?` | `Object` | Options for executing the webhook |
| `options.disableEveryone?` | `boolean` | - |
| `options.thread_id?` | `string` | - |
| `options.wait?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:169

___

### getChannelWebhooks

▸ **getChannelWebhooks**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Get all webhooks within a channel

**`example`**
// Get all webhooks within a channel
const client = new SnowTransfer("TOKEN")
const webhooks = await client.webhook.getChannelWebhooks("channel Id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Array of [Webhook Objects](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_WEBHOOKS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:56

___

### getGuildWebhooks

▸ **getGuildWebhooks**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Get all webhooks within a guild

**`example`**
// Get all webhooks within a guild
const client = new SnowTransfer("TOKEN")
const webhooks = await client.webhook.getGuildWebhooks("guild Id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Array of [Webhook Objects](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_WEBHOOKS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:71

___

### getWebhook

▸ **getWebhook**(`webhookId`, `token?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Get a single Webhook via Id

**`example`**
// Get a webhook via Id providing a webhook token
const client = new SnowTransfer() // No token needed if webhook token is provided
const webhook = await client.webhook.getWebhook("webhook Id", "webhook token")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token?` | `string` | Webhook token |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

(https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition     |
|--------------------|---------------|
| MANAGE_WEBHOOKS    | without token |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:87

___

### getWebhookMessage

▸ **getWebhookMessage**(`webhookId`, `token`, `messageId`, `threadId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a single message from a specific Webhook via Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |
| `threadId?` | `string` | Id of the thread the message was sent in |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:194

___

### updateWebhook

▸ **updateWebhook**(`webhookId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Update a webhook

**`example`**
// Rename a webhook to "Captain Hook" with a webhook token
const client = new SnowTransfer(); // No token needed if webhook token is provided
const webhookData = {
	name: "Captain Hook"
}
const webhook = await client.webhook.updateWebhook("webhook Id", "webhook token", webhookData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token` | `string` | Webhook token |
| `data` | `Object` | Updated Webhook properties |
| `data.avatar?` | ``null`` \| `string` | - |
| `data.channel_id?` | `string` | - |
| `data.name?` | `string` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Updated [Webhook Object](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition     |
|--------------------|---------------|
| MANAGE_WEBHOOKS    | without token |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:107

▸ **updateWebhook**(`webhookId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookId` | `string` |
| `token` | `undefined` |
| `data` | `Object` |
| `data.avatar?` | ``null`` \| `string` |
| `data.name?` | `string` |
| `data.reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Webhooks.d.ts:113
