[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildTemplateMethods

# Class: GuildTemplateMethods

[<internal>](../modules/internal_.md).GuildTemplateMethods

Methods for interacting with Guild Templates

## Table of contents

### Constructors

- [constructor](internal_.GuildTemplateMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.GuildTemplateMethods-1.md#requesthandler)
- [default](internal_.GuildTemplateMethods-1.md#default)

### Methods

- [createGuildFromGuildTemplate](internal_.GuildTemplateMethods-1.md#createguildfromguildtemplate)
- [createGuildTemplate](internal_.GuildTemplateMethods-1.md#createguildtemplate)
- [deleteGuildTemplate](internal_.GuildTemplateMethods-1.md#deleteguildtemplate)
- [getGuildTemplate](internal_.GuildTemplateMethods-1.md#getguildtemplate)
- [getGuildTemplates](internal_.GuildTemplateMethods-1.md#getguildtemplates)
- [modifyGuildTemplate](internal_.GuildTemplateMethods-1.md#modifyguildtemplate)
- [syncGuildTemplate](internal_.GuildTemplateMethods-1.md#syncguildtemplate)

## Constructors

### constructor

• **new GuildTemplateMethods**(`requestHandler`)

Create a new Guild Template Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guildTemplate.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:5

___

### default

▪ `Static` **default**: typeof [`GuildTemplateMethods`](internal_.GuildTemplateMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:6

## Methods

### createGuildFromGuildTemplate

▸ **createGuildFromGuildTemplate**(`code`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Creates a guild from a template. If using a bot account, the bot can only be in < 10 guilds (guild create limitation)

**`example`**
const client = new SnowTransfer("TOKEN")
const guild = await client.guildTemplate.createGuildFromGuildTemplate("code", { name: "Cool guild" })

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:36

___

### createGuildTemplate

▸ **createGuildTemplate**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Creates a template from the current state of the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const template = await client.guildTemplate.createGuildTemplate("guildId", { name: "Cool guild template", description: "This is a cool guild template" })

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:68

___

### deleteGuildTemplate

▸ **deleteGuildTemplate**(`guildId`, `code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Deletes a template from a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const template = await client.guildTemplate.deleteGuildTemplate("guildId", "code")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:120

___

### getGuildTemplate

▸ **getGuildTemplate**(`code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Get a guild template by code

**`example`**
const client = new SnowTransfer("TOKEN")
const template = await client.guildTemplate.getGuildTemplate("code")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The code for the template |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:25

___

### getGuildTemplates

▸ **getGuildTemplates**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)[]\>

Gets all templates from a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const templates = await client.guildTemplate.getGuildTemplates("guildId")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:53

___

### modifyGuildTemplate

▸ **modifyGuildTemplate**(`guildId`, `code`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Updates a guild template's metadata

**`example`**
const client = new SnowTransfer("TOKEN")
const template = await client.guildTemplate.modifyGuildTemplate("guildId", "code", { name: "Coolest guild template", description: "This is the coolest guild template hands down" })

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:102

___

### syncGuildTemplate

▸ **syncGuildTemplate**(`guildId`, `code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildTemplate`](../modules/internal_.md#guildtemplate)\>

Updates a guild template to match the current state of the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const template = await client.guildTemplate.syncGuildTemplate("guildId", "code")

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildTemplate.d.ts:86
