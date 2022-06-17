[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildTemplateMethods

# Class: GuildTemplateMethods

[<internal>](../modules/internal_.md).GuildTemplateMethods

Methods for interacting with Guild Templates

## Table of contents

### Constructors

- [constructor](internal_.GuildTemplateMethods.md#constructor)

### Properties

- [requestHandler](internal_.GuildTemplateMethods.md#requesthandler)

### Methods

- [createGuildFromGuildTemplate](internal_.GuildTemplateMethods.md#createguildfromguildtemplate)
- [createGuildTemplate](internal_.GuildTemplateMethods.md#createguildtemplate)
- [deleteGuildTemplate](internal_.GuildTemplateMethods.md#deleteguildtemplate)
- [getGuildTemplate](internal_.GuildTemplateMethods.md#getguildtemplate)
- [getGuildTemplates](internal_.GuildTemplateMethods.md#getguildtemplates)
- [modifyGuildTemplate](internal_.GuildTemplateMethods.md#modifyguildtemplate)
- [syncGuildTemplate](internal_.GuildTemplateMethods.md#syncguildtemplate)

## Constructors

### constructor

• **new GuildTemplateMethods**(`requestHandler`)

Create a new Guild Template Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guildTemplate.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:5

## Methods

### createGuildFromGuildTemplate

▸ **createGuildFromGuildTemplate**(`code`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Creates a guild from a template. If using a bot account, the bot can only be in < 10 guilds (guild create limitation)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The code of the template |
| `options` | `Object` | Specific options for the new guild |
| `options.icon?` | ``null`` \| `string` | - |
| `options.name` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

A [guild](https://discord.com/developers/docs/resources/guild#guild-object-guild-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:27

___

### createGuildTemplate

▸ **createGuildTemplate**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Creates a template from the current state of the guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `data` | `Object` | Metadata for the template |
| `data.description?` | ``null`` \| `string` | - |
| `data.name` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild tempalte](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:51

___

### deleteGuildTemplate

▸ **deleteGuildTemplate**(`guildId`, `code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Deletes a template from a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `code` | `string` | The code of the template |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:91

___

### getGuildTemplate

▸ **getGuildTemplate**(`code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Get a guild template by code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The code for the template |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:20

___

### getGuildTemplates

▸ **getGuildTemplates**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)[]\>

Gets all templates from a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)[]\>

An array of [guild templates](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:40

___

### modifyGuildTemplate

▸ **modifyGuildTemplate**(`guildId`, `code`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Updates a guild template's metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `code` | `string` | The code of the template |
| `data` | `Object` | Metadata for the template |
| `data.description?` | ``null`` \| `string` | - |
| `data.name?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:77

___

### syncGuildTemplate

▸ **syncGuildTemplate**(`guildId`, `code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Updates a guild template to match the current state of the guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `code` | `string` | The code of the template |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:65
