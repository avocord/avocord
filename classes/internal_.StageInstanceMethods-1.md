[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / StageInstanceMethods

# Class: StageInstanceMethods

[<internal>](../modules/internal_.md).StageInstanceMethods

Methods for interacting with Stage instances

## Table of contents

### Constructors

- [constructor](internal_.StageInstanceMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.StageInstanceMethods-1.md#requesthandler)
- [default](internal_.StageInstanceMethods-1.md#default)

### Methods

- [createStageInstance](internal_.StageInstanceMethods-1.md#createstageinstance)
- [deleteStageInstance](internal_.StageInstanceMethods-1.md#deletestageinstance)
- [editStageInstance](internal_.StageInstanceMethods-1.md#editstageinstance)
- [getStageInstance](internal_.StageInstanceMethods-1.md#getstageinstance)

## Constructors

### constructor

• **new StageInstanceMethods**(`requestHandler`)

Create a new Stage Instance Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.stageInstance.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:5

___

### default

▪ `Static` **default**: typeof [`StageInstanceMethods`](internal_.StageInstanceMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:6

## Methods

### createStageInstance

▸ **createStageInstance**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Creates a new stage instance associated to a stage channel

**`example`**
// Create a new stage instance for channel id and the topic "This My House"
const client = new SnowTransfer("TOKEN")
const instance = await client.stageInstance.createStageInstance({ channel_id: "channel id", topic: "This My House" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The options for creating a stage instance |
| `data.channel_id` | `string` | - |
| `data.privacy_level?` | [`PrivacyLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_StageInstance_.md#privacylevel) | - |
| `data.reason?` | `string` | - |
| `data.send_start_notification?` | `boolean` | - |
| `data.topic` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_CHANNELS    | always    |
| MUTE_MEMBERS       | always    |
| MOVE_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:32

___

### deleteStageInstance

▸ **deleteStageInstance**(`channelId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete an existing stage instance

**`example`**
const client = new SnowTransfer("TOKEN")
client.stageInstance.deleteStageInstance("channel id", "They already know who's house this is")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |
| `reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_CHANNELS    | always    |
| MUTE_MEMBERS       | always    |
| MOVE_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:85

___

### editStageInstance

▸ **editStageInstance**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Updates an existing stage instance

**`example`**
const client = new SnowTransfer("TOKEN")
const instance = await client.stageInstance.updateStageInstance("channel id", { topic: "This my city, this my town" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |
| `data` | `Object` | The new data to send |
| `data.privacy_level?` | [`PrivacyLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_StageInstance_.md#privacylevel) | - |
| `data.reason?` | `string` | - |
| `data.topic` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_CHANNELS    | always    |
| MUTE_MEMBERS       | always    |
| MOVE_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:65

___

### getStageInstance

▸ **getStageInstance**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Gets the stage instance assocuated to a stage channel if it exists

**`example`**
const client = new SnowTransfer("TOKEN")
const instance = await client.stageInstance.getStageInstance("channel id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/StageInstance.d.ts:48
