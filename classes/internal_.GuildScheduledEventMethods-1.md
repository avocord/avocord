[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildScheduledEventMethods

# Class: GuildScheduledEventMethods

[<internal>](../modules/internal_.md).GuildScheduledEventMethods

Methods for interacting with Guild Scheduled Events

## Table of contents

### Constructors

- [constructor](internal_.GuildScheduledEventMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.GuildScheduledEventMethods-1.md#requesthandler)
- [default](internal_.GuildScheduledEventMethods-1.md#default)

### Methods

- [createGuildScheduledEvent](internal_.GuildScheduledEventMethods-1.md#createguildscheduledevent)
- [deleteGuildScheduledEvent](internal_.GuildScheduledEventMethods-1.md#deleteguildscheduledevent)
- [editGuildScheduledEvent](internal_.GuildScheduledEventMethods-1.md#editguildscheduledevent)
- [getGuildScheduledEvent](internal_.GuildScheduledEventMethods-1.md#getguildscheduledevent)
- [getGuildScheduledEventUsers](internal_.GuildScheduledEventMethods-1.md#getguildscheduledeventusers)
- [listGuildScheduledEvents](internal_.GuildScheduledEventMethods-1.md#listguildscheduledevents)

## Constructors

### constructor

• **new GuildScheduledEventMethods**(`requestHandler`)

Create a new Guild Scheduled Event Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guildScheduledEvent.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:5

___

### default

▪ `Static` **default**: typeof [`GuildScheduledEventMethods`](internal_.GuildScheduledEventMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:6

## Methods

### createGuildScheduledEvent

▸ **createGuildScheduledEvent**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Create a scheduled event for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const eventData = {
	name: "My event!",
	entity_type: 1,
	start_time: "2020-01-01T00:00:00Z",
	privacy_level: 1
}
const event = await client.guildScheduledEvent.createGuildScheduledEvent(guildId, eventData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `data` | [`CreateGuildScheduledEventData`](../interfaces/internal_.CreateGuildScheduledEventData.md) | Data for the new scheduled event |

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:52

___

### deleteGuildScheduledEvent

▸ **deleteGuildScheduledEvent**(`guildId`, `eventId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a specific scheduled event for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
client.guildScheduledEvent.deleteGuildScheduledEvent(guildId, eventId)

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:110

___

### editGuildScheduledEvent

▸ **editGuildScheduledEvent**(`guildId`, `eventId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Edit the details of a scheduled event for a guild

**`example`**
// Updates a scheduled event to be an external event that will take place in Brazil and end in 2025
const client = new SnowTransfer("TOKEN")
const event = await client.guildScheduledEvent.editGuildScheduledEvent(guildId, eventId, { entity_type: 3, channel_id: null, entity_metadata: { location: "Brazil" }, scheduled_end_time: "2025-01-01T00:00:00.000Z" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `data` | [`EditGuildScheduledEventData`](../interfaces/internal_.EditGuildScheduledEventData.md) | Edited scheduled event data |

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

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:90

___

### getGuildScheduledEvent

▸ **getGuildScheduledEvent**(`guildId`, `eventId`, `withCount?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

Get a specific scheduled event for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const event = await client.guildScheduledEvent.getGuildScheduledEvent(guildId, eventId)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `withCount?` | `boolean` | Include number of users subscribed to this event |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)\>

A [scheduled event](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

| Permissions needed | Condition                                 |
|--------------------|-------------------------------------------|
| VIEW_CHANNEL       | if entity_type is STAGE_INSTANCE or VOICE |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:68

___

### getGuildScheduledEventUsers

▸ **getGuildScheduledEventUsers**(`guildId`, `eventId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEventUser`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledeventuser) & { `member?`: [`Member`](../modules/internal_.md#member)  }[]\>

Get a list of users attending a specific event

**`example`**
const client = new SnowTransfer("TOKEN")
const users = await client.guildScheduledEvent.getGuildScheduledEventUsers(guildId, eventId)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `eventId` | `string` | The Id of the event |
| `query?` | [`GetGuildScheduledEventUsers`](../interfaces/internal_.GetGuildScheduledEventUsers-1.md) | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEventUser`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledeventuser) & { `member?`: [`Member`](../modules/internal_.md#member)  }[]\>

An array of [event users](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure)

| Permissions needed | Condition                                 |
|--------------------|-------------------------------------------|
| VIEW_CHANNEL       | if entity_type is STAGE_INSTANCE or VOICE |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:126

___

### listGuildScheduledEvents

▸ **listGuildScheduledEvents**(`guildId`, `withCounts?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)[]\>

Get all scheduled events for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const events = await client.guildScheduledEvent.listGuildScheduledEvents(guildId)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The Id of the guild |
| `withCounts?` | `boolean` | Include number of users subscribed to each event |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildScheduledEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_GuildScheduledEvent_.md#guildscheduledevent)[]\>

An array of [guild scheduled events](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/GuildScheduledEvent.d.ts:26
