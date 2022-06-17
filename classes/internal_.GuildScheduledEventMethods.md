[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildScheduledEventMethods

# Class: GuildScheduledEventMethods

[<internal>](../modules/internal_.md).GuildScheduledEventMethods

Methods for interacting with Guild Scheduled Events

## Table of contents

### Constructors

- [constructor](internal_.GuildScheduledEventMethods.md#constructor)

### Properties

- [requestHandler](internal_.GuildScheduledEventMethods.md#requesthandler)

### Methods

- [createGuildScheduledEvent](internal_.GuildScheduledEventMethods.md#createguildscheduledevent)
- [deleteGuildScheduledEvent](internal_.GuildScheduledEventMethods.md#deleteguildscheduledevent)
- [editGuildScheduledEvent](internal_.GuildScheduledEventMethods.md#editguildscheduledevent)
- [getGuildScheduledEvent](internal_.GuildScheduledEventMethods.md#getguildscheduledevent)
- [getGuildScheduledEventUsers](internal_.GuildScheduledEventMethods.md#getguildscheduledeventusers)
- [listGuildScheduledEvents](internal_.GuildScheduledEventMethods.md#listguildscheduledevents)

## Constructors

### constructor

• **new GuildScheduledEventMethods**(`requestHandler`)

Create a new Guild Scheduled Event Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guildscheduledevent.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:5

## Methods

### createGuildScheduledEvent

▸ **createGuildScheduledEvent**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Create a scheduled event for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `data` | [`CreateGuildScheduleEvent`](../modules/internal_.md#createguildscheduleevent) | Create data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

A [scheduled event](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

| Permissions needed | Condition                        |
|--------------------|----------------------------------|
| MANAGE_EVENTS      | always                           |
| MANAGE_CHANNELS    | If entity_type is STAGE_INSTANCE |
| MUTE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| MOVE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| VIEW_CHANNEL       | If entity_type is VOICE          |
| CONNECT            | If entity_type is VOICE          |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:43

___

### deleteGuildScheduledEvent

▸ **deleteGuildScheduledEvent**(`guildId`, `eventId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a specific scheduled event for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the promise on successful execution

| Permissions needed | Condition                        |
|--------------------|----------------------------------|
| MANAGE_EVENTS      | always                           |
| MANAGE_CHANNELS    | If entity_type is STAGE_INSTANCE |
| MUTE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| MOVE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| VIEW_CHANNEL       | If entity_type is VOICE          |
| CONNECT            | If entity_type is VOICE          |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:90

___

### editGuildScheduledEvent

▸ **editGuildScheduledEvent**(`guildId`, `eventId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Edit the details of a scheduled event for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`Pick`](../modules/internal_.md#pick)<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent), ``"name"`` \| ``"description"`` \| ``"entity_metadata"`` \| ``"privacy_level"`` \| ``"scheduled_start_time"`` \| ``"entity_type"``\> & { `channel_id`: `string` ; `image`: `string` ; `reason`: `string` ; `scheduled_end_time`: `string`  }\> | Edit data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

A [scheduled event](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

| Permissions needed | Condition                        |
|--------------------|----------------------------------|
| MANAGE_EVENTS      | always                           |
| MANAGE_CHANNELS    | If entity_type is STAGE_INSTANCE |
| MUTE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| MOVE_MEMBERS       | If entity_type is STAGE_INSTANCE |
| VIEW_CHANNEL       | If entity_type is VOICE          |
| CONNECT            | If entity_type is VOICE          |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:74

___

### getGuildScheduledEvent

▸ **getGuildScheduledEvent**(`guildId`, `eventId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Get a specific scheduled event for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `options?` | `Object` | Options for if how many users will be or are attending |
| `options.with_user_count?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

A [scheduled event](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

| Permissions needed | Condition                                 |
|--------------------|-------------------------------------------|
| VIEW_CHANNEL       | if entity_type is STAGE_INSTANCE or VOICE |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:55

___

### getGuildScheduledEventUsers

▸ **getGuildScheduledEventUsers**(`guildId`, `eventId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEventUser`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledeventuser) & { `member?`: [`Member`](../modules/internal_.md#member)  }[]\>

Get a list of users attending a specific event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `options?` | [`GetGuildScheduledEventUsers`](../interfaces/internal_.GetGuildScheduledEventUsers.md) | Options for how to get users |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEventUser`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledeventuser) & { `member?`: [`Member`](../modules/internal_.md#member)  }[]\>

An array of [event users](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure)

| Permissions needed | Condition                                 |
|--------------------|-------------------------------------------|
| VIEW_CHANNEL       | if entity_type is STAGE_INSTANCE or VOICE |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:102

___

### listGuildScheduledEvents

▸ **listGuildScheduledEvents**(`guildId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)[]\>

Get all scheduled events for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `options?` | `Object` | Options for if how many users will be or are attending |
| `options.with_user_count?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)[]\>

An array of [guild scheduled events](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

| Permissions needed | Condition                                 |
|--------------------|-------------------------------------------|
| VIEW_CHANNEL       | if entity_type is STAGE_INSTANCE or VOICE |

#### Defined in

node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:25
