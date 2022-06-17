[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / StageInstanceMethods

# Class: StageInstanceMethods

[<internal>](../modules/internal_.md).StageInstanceMethods

Methods for interacting with Stage instances

## Table of contents

### Constructors

- [constructor](internal_.StageInstanceMethods.md#constructor)

### Properties

- [requestHandler](internal_.StageInstanceMethods.md#requesthandler)

### Methods

- [createStageInstance](internal_.StageInstanceMethods.md#createstageinstance)
- [deleteStageInstance](internal_.StageInstanceMethods.md#deletestageinstance)
- [editStageInstance](internal_.StageInstanceMethods.md#editstageinstance)
- [getStageInstance](internal_.StageInstanceMethods.md#getstageinstance)

## Constructors

### constructor

• **new StageInstanceMethods**(`requestHandler`)

Create a new Stage Instance Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.stageInstance.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:5

## Methods

### createStageInstance

▸ **createStageInstance**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Creates a new stage instance associated to a stage channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The options for creating a stage instance |
| `data.channel_id` | `string` | - |
| `data.privacy_level?` | [`PrivacyLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_StageInstance_.md#privacylevel) | - |
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

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:26

___

### deleteStageInstance

▸ **deleteStageInstance**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Delete an existing stage instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_CHANNELS    | always    |
| MUTE_MEMBERS       | always    |
| MOVE_MEMBERS       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:65

___

### editStageInstance

▸ **editStageInstance**(`channelId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Updates an existing stage instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |
| `data` | `Object` | The new data to send |
| `data.privacy_level?` | [`PrivacyLevel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_StageInstance_.md#privacylevel) | - |
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

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:50

___

### getStageInstance

▸ **getStageInstance**(`channelId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

Gets the stage instance assocuated to a stage channel if it exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | Id of the stage channel |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StageInstance`](../modules/internal_.md#stageinstance-1)\>

a [stage instance](https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure) object

#### Defined in

node_modules/snowtransfer/dist/methods/StageInstance.d.ts:37
