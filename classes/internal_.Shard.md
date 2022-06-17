[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Shard

# Class: Shard

[<internal>](../modules/internal_.md).Shard

Shard class, which provides a wrapper around the DiscordConnector with metadata like the id of the shard.

This class is automatically instantiated by the library and is documented for reference.

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`Shard`**

## Table of contents

### Constructors

- [constructor](internal_.Shard.md#constructor)

### Properties

- [client](internal_.Shard.md#client)
- [connector](internal_.Shard.md#connector)
- [id](internal_.Shard.md#id)
- [ready](internal_.Shard.md#ready)
- [default](internal_.Shard.md#default)
- [defaultMaxListeners](internal_.Shard.md#defaultmaxlisteners)

### Accessors

- [latency](internal_.Shard.md#latency)

### Methods

- [addListener](internal_.Shard.md#addlistener)
- [connect](internal_.Shard.md#connect)
- [disconnect](internal_.Shard.md#disconnect)
- [emit](internal_.Shard.md#emit)
- [eventNames](internal_.Shard.md#eventnames)
- [getMaxListeners](internal_.Shard.md#getmaxlisteners)
- [listenerCount](internal_.Shard.md#listenercount)
- [listeners](internal_.Shard.md#listeners)
- [off](internal_.Shard.md#off)
- [on](internal_.Shard.md#on)
- [once](internal_.Shard.md#once)
- [prependListener](internal_.Shard.md#prependlistener)
- [prependOnceListener](internal_.Shard.md#prependoncelistener)
- [presenceUpdate](internal_.Shard.md#presenceupdate)
- [rawListeners](internal_.Shard.md#rawlisteners)
- [removeAllListeners](internal_.Shard.md#removealllisteners)
- [removeListener](internal_.Shard.md#removelistener)
- [requestGuildMembers](internal_.Shard.md#requestguildmembers)
- [setMaxListeners](internal_.Shard.md#setmaxlisteners)
- [voiceStateUpdate](internal_.Shard.md#voicestateupdate)
- [listenerCount](internal_.Shard.md#listenercount-1)

## Constructors

### constructor

• **new Shard**(`id`, `client`)

Create a new Shard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the shard. |
| `client` | [`Client`](internal_.Client.md) | Main class used for forwarding events. |

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:40

## Properties

### client

• **client**: [`Client`](internal_.Client.md)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:31

___

### connector

• **connector**: [`DiscordConnector`](internal_.DiscordConnector.md)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:33

___

### id

• **id**: `number`

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:30

___

### ready

• **ready**: `boolean`

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:32

___

### default

▪ `Static` `Readonly` **default**: typeof [`Shard`](internal_.Shard.md)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:34

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Accessors

### latency

• `get` **latency**(): `number`

Time in ms it took for Discord to ackknowledge an OP 1 HEARTBEAT.

#### Returns

`number`

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:44

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:10

___

### connect

▸ **connect**(): `void`

Create a new connection to Discord.

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:48

___

### disconnect

▸ **disconnect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Close the current connection to Discord.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:52

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:11

___

### eventNames

▸ **eventNames**(): keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[]

#### Returns

keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:12

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
| `event` | keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:13

___

### listeners

▸ **listeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:14

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:15

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:16

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:17

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:18

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:19

___

### presenceUpdate

▸ **presenceUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 3 PRESENCE_UPDATE to Discord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:57

___

### rawListeners

▸ **rawListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:20

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Shard`](internal_.Shard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:21

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`Shard`](internal_.Shard.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ShardEvents`](../interfaces/internal_.ShardEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ShardEvents`](../interfaces/internal_.ShardEvents.md)[`E`]) => `any` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:22

___

### requestGuildMembers

▸ **requestGuildMembers**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 8 REQUEST_GUILD_MEMBERS to Discord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`GuildRequestMembersPayload`](../modules/internal_.md#guildrequestmemberspayload) & { `limit?`: `number`  } | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:70

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Shard`](internal_.Shard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Shard`](internal_.Shard.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[setMaxListeners](internal_.EventEmitter.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:19

___

### voiceStateUpdate

▸ **voiceStateUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 4 VOICE_STATE_UPDATE to Discord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`VoiceStateUpdatePayload`](../modules/internal_.md#voicestateupdatepayload) & { `self_deaf?`: `boolean` ; `self_mute?`: `boolean`  } | Data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/Shard.d.ts:62

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
