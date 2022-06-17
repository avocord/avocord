[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionMethods

# Class: InteractionMethods

[<internal>](../modules/internal_.md).InteractionMethods

Methods for interacting with slash command specific endpoints

## Table of contents

### Constructors

- [constructor](internal_.InteractionMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.InteractionMethods-1.md#requesthandler)
- [webhooks](internal_.InteractionMethods-1.md#webhooks)
- [default](internal_.InteractionMethods-1.md#default)

### Methods

- [bulkOverwriteApplicationCommands](internal_.InteractionMethods-1.md#bulkoverwriteapplicationcommands)
- [bulkOverwriteGuildApplicationCommands](internal_.InteractionMethods-1.md#bulkoverwriteguildapplicationcommands)
- [createApplicationCommand](internal_.InteractionMethods-1.md#createapplicationcommand)
- [createFollowupMessage](internal_.InteractionMethods-1.md#createfollowupmessage)
- [createGuildApplicationCommand](internal_.InteractionMethods-1.md#createguildapplicationcommand)
- [createInteractionResponse](internal_.InteractionMethods-1.md#createinteractionresponse)
- [deleteApplicationCommand](internal_.InteractionMethods-1.md#deleteapplicationcommand)
- [deleteFollowupMessage](internal_.InteractionMethods-1.md#deletefollowupmessage)
- [deleteGuildApplicationCommand](internal_.InteractionMethods-1.md#deleteguildapplicationcommand)
- [deleteOriginalInteractionResponse](internal_.InteractionMethods-1.md#deleteoriginalinteractionresponse)
- [editApplicationCommand](internal_.InteractionMethods-1.md#editapplicationcommand)
- [editFollowupMessage](internal_.InteractionMethods-1.md#editfollowupmessage)
- [editGuildApplicationCommand](internal_.InteractionMethods-1.md#editguildapplicationcommand)
- [editGuildApplicationCommandPermissions](internal_.InteractionMethods-1.md#editguildapplicationcommandpermissions)
- [editOriginalInteractionResponse](internal_.InteractionMethods-1.md#editoriginalinteractionresponse)
- [getApplicationCommand](internal_.InteractionMethods-1.md#getapplicationcommand)
- [getApplicationCommands](internal_.InteractionMethods-1.md#getapplicationcommands)
- [getFollowupMessage](internal_.InteractionMethods-1.md#getfollowupmessage)
- [getGuildApplicationCommand](internal_.InteractionMethods-1.md#getguildapplicationcommand)
- [getGuildApplicationCommandPermissions](internal_.InteractionMethods-1.md#getguildapplicationcommandpermissions)
- [getGuildApplicationCommands](internal_.InteractionMethods-1.md#getguildapplicationcommands)
- [getOriginalInteractionResponse](internal_.InteractionMethods-1.md#getoriginalinteractionresponse)

## Constructors

### constructor

• **new InteractionMethods**(`requestHandler`, `webhooks`)

Create a new Interaction Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.interaction.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |
| `webhooks` | [`WebhookMethods`](internal_.WebhookMethods-1.md) | - |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:18

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:7

___

### webhooks

• **webhooks**: [`WebhookMethods`](internal_.WebhookMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:8

___

### default

▪ `Static` **default**: typeof [`InteractionMethods`](internal_.InteractionMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:9

## Methods

### bulkOverwriteApplicationCommands

▸ **bulkOverwriteApplicationCommands**(`appId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands that are registered globally for this application.
Updates will be available in all guilds after 1 hour

**`example`**
const client = new SnowTransfer("TOKEN")
const commands = await client.interaction.bulkOverwriteApplicationCommands("appId", [{ name: "test", description: "testing 1, 2, 3" }])

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)[] | Array of commands |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:86

___

### bulkOverwriteGuildApplicationCommands

▸ **bulkOverwriteGuildApplicationCommands**(`appId`, `guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands for the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const commands = await client.interaction.bulkOverwriteGuildApplicationCommands("appId", "guildId", [{ name: "test", description: "testing 1, 2, 3" }])

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)[] | Array of commands |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:159

___

### createApplicationCommand

▸ **createApplicationCommand**(`appId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Create a new global command. New global commands will be available in all guilds after 1 hour

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.createApplicationCommand("appId", { name: "test", description: "testing 1, 2, 3" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase) | The command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:40

___

### createFollowupMessage

▸ **createFollowupMessage**(`appId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Create a followup message for an Interaction

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
const message = await client.interaction.createFollowupMessage("appId", "token", { content: "The pacer gram fitness test-" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `data` | [`Omit`](../modules/internal_.md#omit)<[`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-2.md), ``"username"`` \| ``"avatar_url"``\> | Message data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:259

___

### createGuildApplicationCommand

▸ **createGuildApplicationCommand**(`appId`, `guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Create a new guild command. New guild commands will be available in the guild immediately.

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.createGuildApplicationCommand("appId", "guildId", { name: "test", description: "testing 1, 2, 3" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase) | Command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:110

___

### createInteractionResponse

▸ **createInteractionResponse**(`interactionId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Create a response to an Interaction

When uploading attachments to respond to message interactions, you must provide the top level files property
which needs to match attachments array length and each element needs to match the same indexes as where their filename is defined (the top level files property gets deleted before it's appended to payload_json).
Should you have a more elegant solution, possibly rewriting the interface with the request handler, please submit a PR/issue.

**`example`**
// Respond to a message interaction
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
client.interaction.createInteractionResponse("interactionId", "token", { type: 4, data: { content: "Hello World" } })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactionId` | `string` | The Id of the interaction |
| `token` | `string` | The token of the interaction |
| `data` | [`InteractionResponse`](../modules/internal_.md#interactionresponse) & { `files?`: { `file`: `Buffer` ; `name`: `string`  }[]  } | Response data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:208

___

### deleteApplicationCommand

▸ **deleteApplicationCommand**(`appId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes a global command

**`example`**
const client = new SnowTransfer("TOKEN")
client.interaction.deleteApplicationCommand("appId", "cmdId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:74

___

### deleteFollowupMessage

▸ **deleteFollowupMessage**(`appId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes a followup message for an Interaction

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
client.interaction.deleteFollowupMessage("appId", "token", "messageId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `messageId` | `string` | The Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:296

___

### deleteGuildApplicationCommand

▸ **deleteGuildApplicationCommand**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild command

**`example`**
const client = new SnowTransfer("TOKEN")
client.interaction.deleteGuildApplicationCommand("appId", "guildId", "cmdId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:147

___

### deleteOriginalInteractionResponse

▸ **deleteOriginalInteractionResponse**(`appId`, `token`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes the initial Interaction response

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
client.interaction.deleteOriginalInteractionResponse("appId", "token")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:247

___

### editApplicationCommand

▸ **editApplicationCommand**(`appId`, `cmdId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Edit a global command. Updates will be available in all guilds after 1 hour

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.editApplicationCommand("appId", "cmdId", { name: "cool", description: "tells you how cool you are" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)\> | The command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:63

___

### editFollowupMessage

▸ **editFollowupMessage**(`appId`, `token`, `messageId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edits a followup message for an Interaction

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
const message = await client.interaction.editFollowupMessage("appId", "token", "messageId", { content: "-is a multistage aerobic capacity test" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `messageId` | `string` | The Id of the message |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-2.md) | The new message data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:284

___

### editGuildApplicationCommand

▸ **editGuildApplicationCommand**(`appId`, `guildId`, `cmdId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Edit a guild command. Updates for guild commands will be available immediately.

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.editGuildApplicationCommand("appId", "guildId", "cmdId", { name: "coolest", description: "tells you that you are the coolest" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)\> | New command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:135

___

### editGuildApplicationCommandPermissions

▸ **editGuildApplicationCommandPermissions**(`appId`, `guildId`, `cmdId`, `permissions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

Edits command permissions for a specific command for your application in a guild. You can only add up to 10 permission overwrites for a command.

**`example`**
const client = new SnowTransfer("TOKEN")
const permissions = await client.interaction.editGuildApplicationCommandPermissions("appId", "guildId", "cmdId", [{ type: 2, id: "userId", permission: true }])

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |
| `permissions` | [`ApplicationCommandPermission`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermission)[] | New application command permissions data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

A [guild application command permission](https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:191

___

### editOriginalInteractionResponse

▸ **editOriginalInteractionResponse**(`appId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edits the initial Interaction response

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
const message = await client.interaction.editOriginalInteractionResponse("appId", "token", { content: "The world said hello back" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-2.md) | New response data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:236

___

### getApplicationCommand

▸ **getApplicationCommand**(`appId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Fetch a global command for your application

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.getApplicationCommand("appId", "cmdId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:51

___

### getApplicationCommands

▸ **getApplicationCommands**(`appId`, `withLocalizations?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Fetch all global commands for your application

**`example`**
const client = new SnowTransfer("TOKEN")
const commands = await client.interaction.getApplicationCommands("appId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `withLocalizations?` | `boolean` | Whether or not to include localizations |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:29

___

### getFollowupMessage

▸ **getFollowupMessage**(`appId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a followup message for an Interaction

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
const message = await client.interaction.getFollowupMessage("appId", "token", "messageId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `messageId` | `string` | The Id of the message |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:271

___

### getGuildApplicationCommand

▸ **getGuildApplicationCommand**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Fetch a guild command for your application

**`example`**
const client = new SnowTransfer("TOKEN")
const command = await client.interaction.getGuildApplicationCommand("appId", "guildId", "cmdId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:122

___

### getGuildApplicationCommandPermissions

▸ **getGuildApplicationCommandPermissions**(`appId`, `guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

Fetches command permissions for all or a specific command for your application in a guild

**`example`**
// Gets all commands' permissions
const client = new SnowTransfer("TOKEN")
const permissions = await client.interaction.getGuildApplicationCommandPermissions("appId", "guildId")

**`example`**
// Gets a specific command's permissions
const client = new SnowTransfer("TOKEN")
const permissions = await client.interaction.getGuildApplicationCommandPermissions("appId", "guildId", "cmdId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

An Array or single [guild application command permission](https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:177

▸ **getGuildApplicationCommandPermissions**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `guildId` | `string` |
| `cmdId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:178

___

### getGuildApplicationCommands

▸ **getGuildApplicationCommands**(`appId`, `guildId`, `withLocalizations?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Fetch all of the guild commands for your application for a specific guild.

**`example`**
const client = new SnowTransfer("TOKEN")
const commands = await client.interaction.getGuildCommands("appId", "guildId", true)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `withLocalizations?` | `boolean` | Whether or not to include localizations |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:98

___

### getOriginalInteractionResponse

▸ **getOriginalInteractionResponse**(`appId`, `token`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Returns the initial Interaction response

**`example`**
const client = new SnowTransfer() // This endpoint does not require a Bot token. The interaction token alone will suffice
const message = await client.interaction.getOriginalInteractionResponse("appId", "token")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Interactions.d.ts:224
