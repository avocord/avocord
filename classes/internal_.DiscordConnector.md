[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DiscordConnector

# Class: DiscordConnector

[<internal>](../modules/internal_.md).DiscordConnector

Class used for acting based on received events.

This class is automatically instantiated by the library and is documented for reference.

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`DiscordConnector`**

## Table of contents

### Constructors

- [constructor](internal_.DiscordConnector.md#constructor)

### Properties

- [\_checkPresenceData](internal_.DiscordConnector.md#_checkpresencedata)
- [\_checkRequestGuildMembersData](internal_.DiscordConnector.md#_checkrequestguildmembersdata)
- [\_checkVoiceStateUpdateData](internal_.DiscordConnector.md#_checkvoicestateupdatedata)
- [\_closing](internal_.DiscordConnector.md#_closing)
- [\_reconnect](internal_.DiscordConnector.md#_reconnect)
- [\_trace](internal_.DiscordConnector.md#_trace)
- [betterWs](internal_.DiscordConnector.md#betterws)
- [clearHeartBeat](internal_.DiscordConnector.md#clearheartbeat)
- [client](internal_.DiscordConnector.md#client)
- [handleDispatch](internal_.DiscordConnector.md#handledispatch)
- [handleWsClose](internal_.DiscordConnector.md#handlewsclose)
- [heartbeat](internal_.DiscordConnector.md#heartbeat)
- [heartbeatInterval](internal_.DiscordConnector.md#heartbeatinterval)
- [heartbeatTimeout](internal_.DiscordConnector.md#heartbeattimeout)
- [id](internal_.DiscordConnector.md#id)
- [lastACKAt](internal_.DiscordConnector.md#lastackat)
- [lastHeartbeatSend](internal_.DiscordConnector.md#lastheartbeatsend)
- [latency](internal_.DiscordConnector.md#latency)
- [messageAction](internal_.DiscordConnector.md#messageaction)
- [options](internal_.DiscordConnector.md#options)
- [reconnect](internal_.DiscordConnector.md#reconnect)
- [reset](internal_.DiscordConnector.md#reset)
- [resume](internal_.DiscordConnector.md#resume)
- [seq](internal_.DiscordConnector.md#seq)
- [sessionId](internal_.DiscordConnector.md#sessionid)
- [status](internal_.DiscordConnector.md#status)
- [default](internal_.DiscordConnector.md#default)
- [defaultMaxListeners](internal_.DiscordConnector.md#defaultmaxlisteners)

### Methods

- [addListener](internal_.DiscordConnector.md#addlistener)
- [connect](internal_.DiscordConnector.md#connect)
- [disconnect](internal_.DiscordConnector.md#disconnect)
- [emit](internal_.DiscordConnector.md#emit)
- [eventNames](internal_.DiscordConnector.md#eventnames)
- [getMaxListeners](internal_.DiscordConnector.md#getmaxlisteners)
- [identify](internal_.DiscordConnector.md#identify)
- [listenerCount](internal_.DiscordConnector.md#listenercount)
- [listeners](internal_.DiscordConnector.md#listeners)
- [off](internal_.DiscordConnector.md#off)
- [on](internal_.DiscordConnector.md#on)
- [once](internal_.DiscordConnector.md#once)
- [prependListener](internal_.DiscordConnector.md#prependlistener)
- [prependOnceListener](internal_.DiscordConnector.md#prependoncelistener)
- [presenceUpdate](internal_.DiscordConnector.md#presenceupdate)
- [rawListeners](internal_.DiscordConnector.md#rawlisteners)
- [removeAllListeners](internal_.DiscordConnector.md#removealllisteners)
- [removeListener](internal_.DiscordConnector.md#removelistener)
- [requestGuildMembers](internal_.DiscordConnector.md#requestguildmembers)
- [setMaxListeners](internal_.DiscordConnector.md#setmaxlisteners)
- [voiceStateUpdate](internal_.DiscordConnector.md#voicestateupdate)
- [listenerCount](internal_.DiscordConnector.md#listenercount-1)

## Constructors

### constructor

• **new DiscordConnector**(`id`, `client`)

Create a new Discord Connector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the shard that created this class. |
| `client` | [`Client`](internal_.Client.md) | Main client instance. |

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:53

## Properties

### \_checkPresenceData

• `Private` **\_checkPresenceData**: `any`

Checks presence data and fills in missing elements.

**`param`** Data to send.

**`returns`** Data after it's fixed/checked.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:129

___

### \_checkRequestGuildMembersData

• `Private` **\_checkRequestGuildMembersData**: `any`

Checks request guild members data and fills in missing elements.

**`param`** Data to send.

**`returns`** Data after it's fixed/checked.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:141

___

### \_checkVoiceStateUpdateData

• `Private` **\_checkVoiceStateUpdateData**: `any`

Checks voice state update data and fills in missing elements.

**`param`** Data to send.

**`returns`** Data after it's fixed/checked.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:135

___

### \_closing

• `Private` **\_closing**: `any`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:46

___

### \_reconnect

• `Private` **\_reconnect**: `any`

Reset this connector to be ready to resume or hard reconnect, then connect.

**`param`** Whether or not the client intends to send an OP 6 RESUME later.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:71

___

### \_trace

• **\_trace**: ``null`` \| `string`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:39

___

### betterWs

• **betterWs**: [`BetterWs`](internal_.BetterWs.md)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:36

___

### clearHeartBeat

• `Private` **clearHeartBeat**: `any`

Clear the heart beat interval, set it to null and set the cached heartbeat_interval as 0.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:79

___

### client

• **client**: [`Client`](internal_.Client.md)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:33

___

### handleDispatch

• `Private` **handleDispatch**: `any`

Handle dispatch events.

**`param`** Message received from the websocket.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:97

___

### handleWsClose

• `Private` **handleWsClose**: `any`

Handle a close from the underlying websocket.

**`param`** Websocket close code.

**`param`** Close reason if any.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:103

___

### heartbeat

• `Private` **heartbeat**: `any`

Send an OP 1 HEARTBEAT to the gateway.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:92

___

### heartbeatInterval

• **heartbeatInterval**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:38

___

### heartbeatTimeout

• **heartbeatTimeout**: ``null`` \| [`Timeout`](internal_.Timeout.md)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:37

___

### id

• **id**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:32

___

### lastACKAt

• **lastACKAt**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:43

___

### lastHeartbeatSend

• **lastHeartbeatSend**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:44

___

### latency

• **latency**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:45

___

### messageAction

• `Private` **messageAction**: `any`

Called with a parsed Websocket message to execute further actions.

**`param`** Message that was received.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:66

___

### options

• **options**: [`Omit`](../modules/internal_.md#omit)<[`IClientOptions`](../interfaces/internal_.IClientOptions.md), ``"snowtransferInstance"``\> & { `endpoint?`: `string` ; `token`: `string`  }

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:34

___

### reconnect

• **reconnect**: `boolean`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:35

___

### reset

• `Private` **reset**: `any`

Hard reset this connector.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:75

___

### resume

• `Private` **resume**: `any`

Send an OP 6 RESUME to the gateway.

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:88

___

### seq

• **seq**: `number`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:40

___

### sessionId

• **sessionId**: ``null`` \| `string`

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:42

___

### status

• **status**: ``"ready"`` \| ``"disconnected"`` \| ``"connecting"`` \| ``"identifying"`` \| ``"resuming"``

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:41

___

### default

▪ `Static` `Readonly` **default**: typeof [`DiscordConnector`](internal_.DiscordConnector.md)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:47

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:12

___

### connect

▸ **connect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Connect to Discord.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:57

___

### disconnect

▸ **disconnect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Close the websocket connection and disconnect.

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:61

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:13

___

### eventNames

▸ **eventNames**(): keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[]

#### Returns

keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:14

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

### identify

▸ **identify**(`force?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 2 IDENTIFY to the gateway or an OP 6 RESUME if forceful identify is falsy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | Whether CloudStorm should send an OP 2 IDENTIFY even if there's a session that could be resumed. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:84

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:15

___

### listeners

▸ **listeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:16

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:17

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:18

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:19

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:21

___

### presenceUpdate

▸ **presenceUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 3 PRESENCE_UPDATE to the gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) | Presence data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:108

___

### rawListeners

▸ **rawListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:22

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:23

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`ConnectorEvents`](../interfaces/internal_.ConnectorEvents.md)[`E`]) => `any` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:24

___

### requestGuildMembers

▸ **requestGuildMembers**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 8 REQUEST_GUILD_MEMBERS to the gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`GuildRequestMembersPayload`](../modules/internal_.md#guildrequestmemberspayload) & { `limit?`: `number`  } | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:121

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`DiscordConnector`](internal_.DiscordConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`DiscordConnector`](internal_.DiscordConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[setMaxListeners](internal_.EventEmitter.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:19

___

### voiceStateUpdate

▸ **voiceStateUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 4 VOICE_STATE_UPDATE to the gateway.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`VoiceStateUpdatePayload`](../modules/internal_.md#voicestateupdatepayload) & { `self_deaf?`: `boolean` ; `self_mute?`: `boolean`  } | Voice state update data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/connector/DiscordConnector.d.ts:113

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
