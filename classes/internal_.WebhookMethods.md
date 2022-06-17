[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WebhookMethods

# Class: WebhookMethods

[<internal>](../modules/internal_.md).WebhookMethods

Methods for handling webhook interactions

## Table of contents

### Constructors

- [constructor](internal_.WebhookMethods.md#constructor)

### Properties

- [disableEveryone](internal_.WebhookMethods.md#disableeveryone)
- [requestHandler](internal_.WebhookMethods.md#requesthandler)

### Methods

- [createWebhook](internal_.WebhookMethods.md#createwebhook)
- [deleteWebhook](internal_.WebhookMethods.md#deletewebhook)
- [deleteWebhookMessage](internal_.WebhookMethods.md#deletewebhookmessage)
- [editWebhookMessage](internal_.WebhookMethods.md#editwebhookmessage)
- [executeWebhook](internal_.WebhookMethods.md#executewebhook)
- [executeWebhookGitHub](internal_.WebhookMethods.md#executewebhookgithub)
- [executeWebhookSlack](internal_.WebhookMethods.md#executewebhookslack)
- [getWebhook](internal_.WebhookMethods.md#getwebhook)
- [getWebhookMessage](internal_.WebhookMethods.md#getwebhookmessage)
- [getWebhooksChannel](internal_.WebhookMethods.md#getwebhookschannel)
- [getWebhooksGuild](internal_.WebhookMethods.md#getwebhooksguild)
- [updateWebhook](internal_.WebhookMethods.md#updatewebhook)

## Constructors

### constructor

• **new WebhookMethods**(`requestHandler`, `disableEveryone`)

Create a new Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.webhook.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |
| `disableEveryone` | `boolean` | Disable [at]everyone/[at]here on outgoing messages |

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:17

## Properties

### disableEveryone

• **disableEveryone**: `boolean`

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:7

___

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:6

## Methods

### createWebhook

▸ **createWebhook**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Create a new Webhook

**`example`**
// Create a new Webhook with the name "Webby Webhook"
const client = new SnowTransfer('TOKEN');
const webhookData = {
	name: "Webby Webhook"
}
client.webhook.createWebhook('channel Id', webhookData);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the channel |
| `data` | `Object` | Object with webhook properties |
| `data.avatar?` | `string` | - |
| `data.name` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

(https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_WEBHOOKS    | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:36

___

### deleteWebhook

▸ **deleteWebhook**(`webhookId`, `token?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a Webhook

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

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:120

___

### deleteWebhookMessage

▸ **deleteWebhookMessage**(`webhookId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a message sent by a Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:192

___

### editWebhookMessage

▸ **editWebhookMessage**(`webhookId`, `token`, `messageId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edit a message sent by a Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-1.md) | Data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:184

___

### executeWebhook

▸ **executeWebhook**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send a message via Webhook

**`example`**
// Send a message saying "Hi from my webhook" with a previously created webhook
const client = new SnowTransfer('TOKEN');
client.webhook.executeWebhook('webhook Id', 'webhook token', {content: 'Hi from my webhook'})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token` | `string` | webhook token |
| `data` | [`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-1.md) | Webhook data to send |
| `options?` | `Object` | - |
| `options.disableEveryone?` | `boolean` | - |
| `options.thread_id?` | `string` | - |
| `options.wait?` | ``false`` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution unless wait is set to true, which returns a [message]() object

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:133

▸ **executeWebhook**(`webhookId`, `token`, `data`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookId` | `string` |
| `token` | `string` |
| `data` | [`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-1.md) |
| `options` | `Object` |
| `options.disableEveryone?` | `boolean` |
| `options.thread_id?` | `string` |
| `options.wait` | ``true`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:138

___

### executeWebhookGitHub

▸ **executeWebhookGitHub**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Executes a github style Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `data` | [`GitHubWebhookData`](../interfaces/internal_.GitHubWebhookData.md) | Check [GitHub's documentation](https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads#webhook-payload-object) |
| `options?` | `Object` | Options for disabling everyone/here pings or setting the wait query string |
| `options.thread_id?` | `string` | - |
| `options.wait?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:164

___

### executeWebhookSlack

▸ **executeWebhookSlack**(`webhookId`, `token`, `data`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Execute a slack style Webhook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `data` | `any` | Check [Slack's documentation](https://api.slack.com/incoming-webhooks) |
| `options?` | `Object` | Options for disabling everyone/here pings or setting the wait query string |
| `options.disableEveryone?` | `boolean` | - |
| `options.thread_id?` | `string` | - |
| `options.wait?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:151

___

### getWebhook

▸ **getWebhook**(`webhookId`, `token?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Get a single Webhook via Id

**`example`**
// Get a webhook via Id
const client = new SnowTransfer('TOKEN');
client.webhook.getWebhook('webhook Id', 'webhook token').then(console.log);

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

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:85

___

### getWebhookMessage

▸ **getWebhookMessage**(`webhookId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a single message from a specific Webhook via Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the Webhook |
| `token` | `string` | Webhook token |
| `messageId` | `string` | Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

(https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:175

___

### getWebhooksChannel

▸ **getWebhooksChannel**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Get webhooks created within a channel

**`example`**
// Get all webhooks within a channel
const client = new SnowTransfer('TOKEN');
client.webhook.getWebhooksChannel('channel Id').then(console.log);

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

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:54

___

### getWebhooksGuild

▸ **getWebhooksGuild**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)[]\>

Get all webhooks within a guild

**`example`**
// Get all webhooks within a guild
const client = new SnowTransfer('TOKEN');
client.webhook.getWebhooksGuild('guild Id').then(console.log);

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

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:69

___

### updateWebhook

▸ **updateWebhook**(`webhookId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Update a webhook

**`example`**
// Rename a webhook to "Captain Hook"
const client = new SnowTransfer('TOKEN');
const webhookData = {
	name: 'Captain Hook'
}
client.webhook.updateWebhook('webhook Id', 'webhook token', webhookData);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | Id of the webhook |
| `token` | `undefined` \| `string` | Webhook token |
| `data` | `Object` | Updated Webhook properties |
| `data.avatar?` | `string` | - |
| `data.channel_id?` | `string` | - |
| `data.name?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Webhook`](../modules/internal_.md#webhook)\>

Updated [Webhook Object](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure)

| Permissions needed | Condition     |
|--------------------|---------------|
| MANAGE_WEBHOOKS    | without token |

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:105
