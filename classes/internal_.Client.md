[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Client

# Class: Client

[<internal>](../modules/internal_.md).Client

Main class used for receiving events and interacting with the Discord gateway.

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`Client`**

  ↳↳ [`Gateway`](Gateway.md)

## Table of contents

### Constructors

- [constructor](internal_.Client.md#constructor)

### Properties

- [\_restClient](internal_.Client.md#_restclient)
- [\_updateEndpoint](internal_.Client.md#_updateendpoint)
- [options](internal_.Client.md#options)
- [shardManager](internal_.Client.md#shardmanager)
- [token](internal_.Client.md#token)
- [version](internal_.Client.md#version)
- [default](internal_.Client.md#default)
- [defaultMaxListeners](internal_.Client.md#defaultmaxlisteners)

### Methods

- [addListener](internal_.Client.md#addlistener)
- [connect](internal_.Client.md#connect)
- [disconnect](internal_.Client.md#disconnect)
- [emit](internal_.Client.md#emit)
- [eventNames](internal_.Client.md#eventnames)
- [fetchConnectInfo](internal_.Client.md#fetchconnectinfo)
- [getGateway](internal_.Client.md#getgateway)
- [getGatewayBot](internal_.Client.md#getgatewaybot)
- [getMaxListeners](internal_.Client.md#getmaxlisteners)
- [listenerCount](internal_.Client.md#listenercount)
- [listeners](internal_.Client.md#listeners)
- [off](internal_.Client.md#off)
- [on](internal_.Client.md#on)
- [once](internal_.Client.md#once)
- [prependListener](internal_.Client.md#prependlistener)
- [prependOnceListener](internal_.Client.md#prependoncelistener)
- [presenceUpdate](internal_.Client.md#presenceupdate)
- [rawListeners](internal_.Client.md#rawlisteners)
- [removeAllListeners](internal_.Client.md#removealllisteners)
- [removeListener](internal_.Client.md#removelistener)
- [requestGuildMembers](internal_.Client.md#requestguildmembers)
- [setMaxListeners](internal_.Client.md#setmaxlisteners)
- [shardStatusUpdate](internal_.Client.md#shardstatusupdate)
- [voiceStateUpdate](internal_.Client.md#voicestateupdate)
- [listenerCount](internal_.Client.md#listenercount-1)

## Constructors

### constructor

• **new Client**(`token`, `options?`)

Create a new Client to connect to the Discord gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Token received from creating a discord bot user, which will be used to connect to the gateway. |
| `options?` | [`IClientOptions`](../interfaces/internal_.IClientOptions.md) | - |

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:51

## Properties

### \_restClient

• `Private` **\_restClient**: `any`

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:45

___

### \_updateEndpoint

• `Private` **\_updateEndpoint**: `any`

Update the endpoint shard websockets will connect to.

**`param`** Base gateway wss url to update the cached endpoint to.

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:165

___

### options

• **options**: [`Omit`](../modules/internal_.md#omit)<[`IClientOptions`](../interfaces/internal_.IClientOptions.md), ``"snowtransferInstance"``\> & { `endpoint?`: `string` ; `token`: `string`  }

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:39

___

### shardManager

• **shardManager**: [`ShardManager`](internal_.ShardManager.md)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:43

___

### token

• **token**: `string`

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:38

___

### version

• **version**: `string`

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:44

___

### default

▪ `Static` `Readonly` **default**: typeof [`Client`](internal_.Client.md)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:46

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:20

___

### connect

▸ **connect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Create one or more connections (depending on the selected amount of shards) to the Discord gateway.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

This function returns a promise which is solely used for awaiting the getGateway() method's return value.

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:56

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the bot gracefully,
you will receive a 'disconnected' event once the ShardManager successfully closes all shard websocket connections.

#### Returns

`void`

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

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:21

___

### eventNames

▸ **eventNames**(): keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[]

#### Returns

keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

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

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:63

___

### getGateway

▸ **getGateway**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Get the gateway endpoint to connect to.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

String url with the Gateway Endpoint to connect to.

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:68

___

### getGatewayBot

▸ **getGatewayBot**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

Get the GatewayData including recommended amount of shards and other helpful info.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

Object with url and shards to use to connect to discord.

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:73

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[getMaxListeners](internal_.EventEmitter.md#getmaxlisteners)

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

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

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

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:24

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:25

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:26

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:27

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:28

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

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

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:98

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

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:30

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Client`](internal_.Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`ClientEvents`](../interfaces/internal_.ClientEvents.md) |

#### Returns

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:31

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`Client`](internal_.Client.md)

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

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

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

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:158

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](internal_.Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](internal_.Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[setMaxListeners](internal_.EventEmitter.md#setmaxlisteners)

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

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:8
