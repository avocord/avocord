[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionMethods

# Class: InteractionMethods

[<internal>](../modules/internal_.md).InteractionMethods

Methods for interacting with slash command specific endpoints

## Table of contents

### Constructors

- [constructor](internal_.InteractionMethods.md#constructor)

### Properties

- [requestHandler](internal_.InteractionMethods.md#requesthandler)
- [webhooks](internal_.InteractionMethods.md#webhooks)

### Methods

- [batchEditApplicationCommandPermissions](internal_.InteractionMethods.md#batcheditapplicationcommandpermissions)
- [bulkOverwriteApplicationCommands](internal_.InteractionMethods.md#bulkoverwriteapplicationcommands)
- [bulkOverwriteGuildApplicationCommand](internal_.InteractionMethods.md#bulkoverwriteguildapplicationcommand)
- [createApplicationCommand](internal_.InteractionMethods.md#createapplicationcommand)
- [createFollowupMessage](internal_.InteractionMethods.md#createfollowupmessage)
- [createGuildApplicationCommand](internal_.InteractionMethods.md#createguildapplicationcommand)
- [createInteractionResponse](internal_.InteractionMethods.md#createinteractionresponse)
- [deleteApplicationCommand](internal_.InteractionMethods.md#deleteapplicationcommand)
- [deleteFollowupMessage](internal_.InteractionMethods.md#deletefollowupmessage)
- [deleteGuildApplicationCommand](internal_.InteractionMethods.md#deleteguildapplicationcommand)
- [deleteOriginalInteractionResponse](internal_.InteractionMethods.md#deleteoriginalinteractionresponse)
- [editApplicationCommand](internal_.InteractionMethods.md#editapplicationcommand)
- [editFollowupMessage](internal_.InteractionMethods.md#editfollowupmessage)
- [editGuildApplicationCommand](internal_.InteractionMethods.md#editguildapplicationcommand)
- [editGuildApplicationCommandPermissions](internal_.InteractionMethods.md#editguildapplicationcommandpermissions)
- [editOriginalInteractionResponse](internal_.InteractionMethods.md#editoriginalinteractionresponse)
- [getApplicationCommand](internal_.InteractionMethods.md#getapplicationcommand)
- [getApplicationCommands](internal_.InteractionMethods.md#getapplicationcommands)
- [getFollowupMessage](internal_.InteractionMethods.md#getfollowupmessage)
- [getGuildApplicationCommand](internal_.InteractionMethods.md#getguildapplicationcommand)
- [getGuildApplicationCommandPermissions](internal_.InteractionMethods.md#getguildapplicationcommandpermissions)
- [getGuildApplicationCommands](internal_.InteractionMethods.md#getguildapplicationcommands)
- [getGuildApplicationCommandsPermissions](internal_.InteractionMethods.md#getguildapplicationcommandspermissions)
- [getOriginalInteractionResponse](internal_.InteractionMethods.md#getoriginalinteractionresponse)

## Constructors

### constructor

• **new InteractionMethods**(`requestHandler`, `webhooks`)

Create a new Interaction Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.interaction.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |
| `webhooks` | [`WebhookMethods`](internal_.WebhookMethods.md) | - |

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:16

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:6

___

### webhooks

• **webhooks**: [`WebhookMethods`](internal_.WebhookMethods.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:7

## Methods

### batchEditApplicationCommandPermissions

▸ **batchEditApplicationCommandPermissions**(`appId`, `guildId`, `permissions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

Batch edits permissions for all commands in a guild. Takes an Array of partial [guild application command permission](https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure) objects.
You can only add up to 10 permission overwrites for a command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `permissions` | [`Pick`](../modules/internal_.md#pick)<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions), ``"id"`` \| ``"permissions"``\>[] | New application command permissions data Array |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

An Array of [guild application command permission](https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:205

___

### bulkOverwriteApplicationCommands

▸ **bulkOverwriteApplicationCommands**(`appId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands that are registered globally for this application.
Updates will be available in all guilds after 1 hour

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `any` | The Id of the application |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)[] | Array of commands |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:52

___

### bulkOverwriteGuildApplicationCommand

▸ **bulkOverwriteGuildApplicationCommand**(`appId`, `guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Takes a list of application commands, overwriting existing commands for the guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)[] | Array of commands |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:99

___

### createApplicationCommand

▸ **createApplicationCommand**(`appId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Create a new global command. New global commands will be available in all guilds after 1 hour

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase) | The command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:36

___

### createFollowupMessage

▸ **createFollowupMessage**(`appId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Create a followup message for an Interaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `data` | [`WebhookCreateMessageData`](../interfaces/internal_.WebhookCreateMessageData-1.md) & { `flags?`: `number`  } | Message data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:145

___

### createGuildApplicationCommand

▸ **createGuildApplicationCommand**(`appId`, `guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Create a new guild command. New guild commands will be available in the guild immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `data` | [`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase) | Command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:82

___

### createInteractionResponse

▸ **createInteractionResponse**(`interactionId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Create a response to an Interaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactionId` | `string` | The Id of the interaction |
| `token` | `string` | The token of the interaction |
| `data` | [`InteractionResponse`](../modules/internal_.md#interactionresponse) | Response data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:122

___

### deleteApplicationCommand

▸ **deleteApplicationCommand**(`appId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes a global command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:59

___

### deleteFollowupMessage

▸ **deleteFollowupMessage**(`appId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes a followup message for an Interaction

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

node_modules/snowtransfer/dist/methods/Interactions.d.ts:172

___

### deleteGuildApplicationCommand

▸ **deleteGuildApplicationCommand**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild command

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

node_modules/snowtransfer/dist/methods/Interactions.d.ts:107

___

### deleteOriginalInteractionResponse

▸ **deleteOriginalInteractionResponse**(`appId`, `token`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Deletes the initial Interaction response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:137

___

### editApplicationCommand

▸ **editApplicationCommand**(`appId`, `cmdId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Edit a global command. Updates will be available in all guilds after 1 hour

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)\> | The command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:44

___

### editFollowupMessage

▸ **editFollowupMessage**(`appId`, `token`, `messageId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edits a followup message for an Interaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `messageId` | `string` | The Id of the message |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-1.md) | The new message data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:164

___

### editGuildApplicationCommand

▸ **editGuildApplicationCommand**(`appId`, `guildId`, `cmdId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Edit a guild command. Updates for guild commands will be available immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`ApplicationCommandBase`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandbase)\> | New command data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:91

___

### editGuildApplicationCommandPermissions

▸ **editGuildApplicationCommandPermissions**(`appId`, `guildId`, `cmdId`, `permissions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

Edits command permissions for a specific command for your application in a guild. You can only add up to 10 permission overwrites for a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |
| `permissions` | [`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[] | New application command permissions data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

A [guild application command permission](https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:196

___

### editOriginalInteractionResponse

▸ **editOriginalInteractionResponse**(`appId`, `token`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Edits the initial Interaction response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |
| `data` | [`WebhookEditMessageData`](../interfaces/internal_.WebhookEditMessageData-1.md) | New response data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:130

___

### getApplicationCommand

▸ **getApplicationCommand**(`appId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommand`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommand)\>

Fetch a global command for your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommand`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommand)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:29

___

### getApplicationCommands

▸ **getApplicationCommands**(`appId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommand`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommand)[]\>

Fetch all global commands for your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommand`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommand)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:22

___

### getFollowupMessage

▸ **getFollowupMessage**(`appId`, `token`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Get a followup message for an Interaction

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

node_modules/snowtransfer/dist/methods/Interactions.d.ts:155

___

### getGuildApplicationCommand

▸ **getGuildApplicationCommand**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

Fetch a guild command for your application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)\>

An [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:74

___

### getGuildApplicationCommandPermissions

▸ **getGuildApplicationCommandPermissions**(`appId`, `guildId`, `cmdId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

Fetches command permissions for a specific command for your application in a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |
| `cmdId` | `string` | The Id of the command |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)\>

A [guild application command permission](https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:187

___

### getGuildApplicationCommands

▸ **getGuildApplicationCommands**(`appId`, `guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

Fetch all of the guild commands for your application for a specific guild.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FetchedApplicationCommand`](../interfaces/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.FetchedApplicationCommand.md)[]\>

An Array of [application command](https://discord.com/developers/docs/interactions/slash-commands#application-command-object) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:66

___

### getGuildApplicationCommandsPermissions

▸ **getGuildApplicationCommandsPermissions**(`appId`, `guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

Fetches command permissions for all commands for your application in a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `guildId` | `string` | The Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ApplicationCommandPermissions`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Interactions_ApplicationCommands_.md#applicationcommandpermissions)[]\>

An Array of [guild application command permission](https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:179

___

### getOriginalInteractionResponse

▸ **getOriginalInteractionResponse**(`appId`, `token`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

Returns the initial Interaction response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `string` | The Id of the application |
| `token` | `string` | The token of the interaction |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Message`](../modules/internal_.md#message)\>

A [message](https://discord.com/developers/docs/resources/channel#message-object) object

#### Defined in

node_modules/snowtransfer/dist/methods/Interactions.d.ts:114
