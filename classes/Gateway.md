[Avocord](../README.md) / [Exports](../modules.md) / Gateway

# Class: Gateway

## Hierarchy

- [`Client`](internal_.Client.md)

  ↳ **`Gateway`**

## Table of contents

### Constructors

- [constructor](Gateway.md#constructor)

### Properties

- [client](Gateway.md#client)
- [options](Gateway.md#options)
- [shardManager](Gateway.md#shardmanager)
- [token](Gateway.md#token)
- [version](Gateway.md#version)
- [default](Gateway.md#default)
- [defaultMaxListeners](Gateway.md#defaultmaxlisteners)

### Methods

- [addListener](Gateway.md#addlistener)
- [connect](Gateway.md#connect)
- [disconnect](Gateway.md#disconnect)
- [emit](Gateway.md#emit)
- [eventNames](Gateway.md#eventnames)
- [fetchConnectInfo](Gateway.md#fetchconnectinfo)
- [getGateway](Gateway.md#getgateway)
- [getGatewayBot](Gateway.md#getgatewaybot)
- [getMaxListeners](Gateway.md#getmaxlisteners)
- [listenerCount](Gateway.md#listenercount)
- [listeners](Gateway.md#listeners)
- [off](Gateway.md#off)
- [on](Gateway.md#on)
- [once](Gateway.md#once)
- [prependListener](Gateway.md#prependlistener)
- [prependOnceListener](Gateway.md#prependoncelistener)
- [presenceUpdate](Gateway.md#presenceupdate)
- [processEvent](Gateway.md#processevent)
- [rawListeners](Gateway.md#rawlisteners)
- [removeAllListeners](Gateway.md#removealllisteners)
- [removeListener](Gateway.md#removelistener)
- [requestGuildMembers](Gateway.md#requestguildmembers)
- [setMaxListeners](Gateway.md#setmaxlisteners)
- [shardStatusUpdate](Gateway.md#shardstatusupdate)
- [voiceStateUpdate](Gateway.md#voicestateupdate)
- [listenerCount](Gateway.md#listenercount-1)

## Constructors

### constructor

• **new Gateway**(`client`, `ops`)

Create a new Client to connect to the Discord gateway.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `ops` | `Object` |
| `ops.cloudstormOptions?` | [`IClientOptions`](../interfaces/internal_.IClientOptions.md) |
| `ops.token` | `string` |

#### Overrides

[Client](internal_.Client.md).[constructor](internal_.Client.md#constructor)

#### Defined in

[src/gateway/Gateway.ts:62](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Gateway.ts#L62)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/gateway/Gateway.ts:60](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Gateway.ts#L60)

___

### options

• **options**: [`Omit`](../modules/internal_.md#omit)<[`IClientOptions`](../interfaces/internal_.IClientOptions.md), ``"snowtransferInstance"``\> & { `endpoint?`: `string` ; `token`: `string`  }

#### Inherited from

[Client](internal_.Client.md).[options](internal_.Client.md#options)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:39

___

### shardManager

• **shardManager**: [`ShardManager`](internal_.ShardManager.md)

#### Inherited from

[Client](internal_.Client.md).[shardManager](internal_.Client.md#shardmanager)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:43

___

### token

• **token**: `string`

#### Inherited from

[Client](internal_.Client.md).[token](internal_.Client.md#token)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:38

___

### version

• **version**: `string`

#### Inherited from

[Client](internal_.Client.md).[version](internal_.Client.md#version)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:44

___

### default

▪ `Static` `Readonly` **default**: typeof [`Client`](internal_.Client.md)

#### Inherited from

[Client](internal_.Client.md).[default](internal_.Client.md#default)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:46

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Client](internal_.Client.md).[defaultMaxListeners](internal_.Client.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[addListener](internal_.Client.md#addlistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:20

___

### connect

▸ **connect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Create one or more connections (depending on the selected amount of shards) to the Discord gateway.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

This function returns a promise which is solely used for awaiting the getGateway() method's return value.

#### Inherited from

[Client](internal_.Client.md).[connect](internal_.Client.md#connect)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:56

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the bot gracefully,
you will receive a 'disconnected' event once the ShardManager successfully closes all shard websocket connections.

#### Returns

`void`

#### Inherited from

[Client](internal_.Client.md).[disconnect](internal_.Client.md#disconnect)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:82

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`] |

#### Returns

`boolean`

#### Inherited from

[Client](internal_.Client.md).[emit](internal_.Client.md#emit)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:21

___

### eventNames

▸ **eventNames**(): keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[]

#### Returns

keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[]

#### Inherited from

[Client](internal_.Client.md).[eventNames](internal_.Client.md#eventnames)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:22

___

### fetchConnectInfo

▸ **fetchConnectInfo**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

Method to grab initial connection info from Discord.
Should only be called automatically by the lib unless you are a large bot with a max_concurrency not equal to 1.
If you are a large bot, you should call this method at a rate of your own discretion to update your max_concurrency cached value to have up to date bucket info.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

The amount of shards the bot should spawn if set to auto.

#### Inherited from

[Client](internal_.Client.md).[fetchConnectInfo](internal_.Client.md#fetchconnectinfo)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:63

___

### getGateway

▸ **getGateway**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Get the gateway endpoint to connect to.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

String url with the Gateway Endpoint to connect to.

#### Inherited from

[Client](internal_.Client.md).[getGateway](internal_.Client.md#getgateway)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:68

___

### getGatewayBot

▸ **getGatewayBot**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

Get the GatewayData including recommended amount of shards and other helpful info.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

Object with url and shards to use to connect to discord.

#### Inherited from

[Client](internal_.Client.md).[getGatewayBot](internal_.Client.md#getgatewaybot)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:73

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[Client](internal_.Client.md).[getMaxListeners](internal_.Client.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:20

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Returns

`number`

#### Inherited from

[Client](internal_.Client.md).[listenerCount](internal_.Client.md#listenercount)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:23

___

### listeners

▸ **listeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[Client](internal_.Client.md).[listeners](internal_.Client.md#listeners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:24

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[off](internal_.Client.md#off)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:25

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[on](internal_.Client.md#on)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:26

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[once](internal_.Client.md#once)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:27

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[prependListener](internal_.Client.md#prependlistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:28

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[prependOnceListener](internal_.Client.md#prependoncelistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:29

___

### presenceUpdate

▸ **presenceUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 3 PRESENCE_UPDATE to Discord, which updates the status of all shards facilitated by this client's ShardManager.

**`example`**
// Connect to Discord and set status to do not disturb and game to "Memes are Dreams".
const CloudStorm = require("cloudstorm"); // CloudStorm also supports import statements.
const token = "token";
const client = new CloudStorm.Client(token);
client.connect();
client.once("ready", () => {
	// Client is connected to Discord and is ready, so we can update the status.
	client.presenceUpdate({ status: "dnd", game: { name: "Memes are Dreams" } });
});

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Promise that's resolved once all shards have sent the websocket payload.

#### Inherited from

[Client](internal_.Client.md).[presenceUpdate](internal_.Client.md#presenceupdate)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:98

___

### processEvent

▸ **processEvent**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IWSMessage`](../interfaces/internal_.IWSMessage.md) |

#### Returns

`void`

#### Defined in

[src/gateway/Gateway.ts:71](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Gateway.ts#L71)

___

### rawListeners

▸ **rawListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[Client](internal_.Client.md).[rawListeners](internal_.Client.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:30

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Gateway`](Gateway.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[removeAllListeners](internal_.Client.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:31

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`Gateway`](Gateway.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[`E`]) => `any` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[removeListener](internal_.Client.md#removelistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:32

___

### requestGuildMembers

▸ **requestGuildMembers**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 8 REQUEST_GUILD_MEMBERS to Discord.

**`example`**
// Connect to Discord and request guild members.
const CloudStorm = require("cloudstorm"); // CloudStorm also supports import statements.
const token = "token";
const client = new CloudStorm.Client(token);
client.connect();
client.once("ready", () => {
	// Client is connected to Discord and is ready, so we can send the request guild members payload.
	// We will use shard 0 as the shard to send the payload.
	client.requestGuildMembers(0, { guild_id: "id" });
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard that should send the payload. |
| `data` | [`GuildRequestMembersPayload`](../modules/internal_.md#guildrequestmemberspayload) & { `limit?`: `number`  } | Request guild members data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Promise that's resolved once the payload was send to Discord.

#### Inherited from

[Client](internal_.Client.md).[requestGuildMembers](internal_.Client.md#requestguildmembers)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:158

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Gateway`](Gateway.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Gateway`](Gateway.md)

#### Inherited from

[Client](internal_.Client.md).[setMaxListeners](internal_.Client.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:19

___

### shardStatusUpdate

▸ **shardStatusUpdate**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 3 PRESENCE_UPDATE to Discord, which updates the status of a single shard facilitated by this client's ShardManager.

**`example`**
// Connect to Discord and set status to do not disturb and game to "Im shard 0".
const CloudStorm = require("cloudstorm"); // CloudStorm also supports import statements.
const token = "token";
const client = new CloudStorm.Client(token);
client.connect();
client.once("ready", () => {
	// Client is connected to Discord and is ready, so we can update the status of shard 0.
	client.shardPresenceUpdate(0, { status: "dnd", game: { name: "Im shard 0" } });
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard that should update it's status. |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) | Presence data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Promise that's resolved once the shard has sent the websocket payload.

#### Inherited from

[Client](internal_.Client.md).[shardStatusUpdate](internal_.Client.md#shardstatusupdate)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:116

___

### voiceStateUpdate

▸ **voiceStateUpdate**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 4 VOICE_STATE_UPDATE to Discord. this does **not** allow you to send audio with CloudStorm itself,
it just provides the necessary data for another application to send audio data to Discord.

**`example`**
// Connect to Discord and join a voice channel
const CloudStorm = require("cloudstorm"); // CloudStorm also supports import statements.
const token = "token";
const client = new CloudStorm.Client(token);
client.connect();
client.once("ready", () => {
	// Client is connected to Discord and is ready, so we can join a voice channel.
	// We will use shard 0 as the shard to send the payload.
	client.voiceStateUpdate(0, { guild_id: "id", channel_id: "id", self_mute: false, self_deaf: false });
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard that should send the payload. |
| `data` | [`VoiceStateUpdatePayload`](../modules/internal_.md#voicestateupdatepayload) & { `self_deaf?`: `boolean` ; `self_mute?`: `boolean`  } | Voice state update data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Promise that's resolved once the payload was sent to Discord.

#### Inherited from

[Client](internal_.Client.md).[voiceStateUpdate](internal_.Client.md#voicestateupdate)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:136

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](internal_.EventEmitter.md) |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[Client](internal_.Client.md).[listenerCount](internal_.Client.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:8
