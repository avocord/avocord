[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ShardManager

# Class: ShardManager

[<internal>](../modules/internal_.md).ShardManager

Class used for managing shards for the user.

This class is automatically instantiated by the library and is documented for reference.

## Table of contents

### Constructors

- [constructor](internal_.ShardManager.md#constructor)

### Properties

- [\_addListener](internal_.ShardManager.md#_addlistener)
- [\_checkDisconnect](internal_.ShardManager.md#_checkdisconnect)
- [\_checkReady](internal_.ShardManager.md#_checkready)
- [client](internal_.ShardManager.md#client)
- [concurrencyBucket](internal_.ShardManager.md#concurrencybucket)
- [identifyBucket](internal_.ShardManager.md#identifybucket)
- [options](internal_.ShardManager.md#options)
- [shards](internal_.ShardManager.md#shards)
- [default](internal_.ShardManager.md#default)

### Methods

- [disconnect](internal_.ShardManager.md#disconnect)
- [presenceUpdate](internal_.ShardManager.md#presenceupdate)
- [requestGuildMembers](internal_.ShardManager.md#requestguildmembers)
- [shardPresenceUpdate](internal_.ShardManager.md#shardpresenceupdate)
- [spawn](internal_.ShardManager.md#spawn)
- [voiceStateUpdate](internal_.ShardManager.md#voicestateupdate)

## Constructors

### constructor

• **new ShardManager**(`client`)

Create a new ShardManager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](internal_.Client.md) |

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:20

## Properties

### \_addListener

• `Private` **\_addListener**: `any`

Add event listeners to a shard to that the manager can act on received events.

**`param`** Shard to add the event listeners to.

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:33

___

### \_checkDisconnect

• `Private` **\_checkDisconnect**: `any`

Checks if all shards spawned by this manager are disconnected.

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:41

___

### \_checkReady

• `Private` **\_checkReady**: `any`

Checks if all shards spawned by this manager are ready.

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:37

___

### client

• **client**: [`Client`](internal_.Client.md)

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:9

___

### concurrencyBucket

• **concurrencyBucket**: ``null`` \| [`RatelimitBucket`](internal_.RatelimitBucket.md)

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:15

___

### identifyBucket

• **identifyBucket**: [`RatelimitBucket`](internal_.RatelimitBucket.md)

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:14

___

### options

• **options**: [`Omit`](../modules/internal_.md#omit)<[`IClientOptions`](../interfaces/internal_.IClientOptions.md), ``"snowtransferInstance"``\> & { `endpoint?`: `string` ; `token`: `string`  }

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:10

___

### shards

• **shards**: `Object`

#### Index signature

▪ [id: `number`]: [`Shard`](internal_.Shard.md)

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:11

___

### default

▪ `Static` `Readonly` **default**: typeof [`ShardManager`](internal_.ShardManager.md)

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:16

## Methods

### disconnect

▸ **disconnect**(): `void`

Disconnect all shards facilitated by this manager.

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:28

___

### presenceUpdate

▸ **presenceUpdate**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Update the status of all currently connected shards which have been spawned by this manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:46

___

### requestGuildMembers

▸ **requestGuildMembers**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 8 REQUEST_GUILD_MEMBERS with a certain shard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard. |
| `data` | [`GuildRequestMembersPayload`](../modules/internal_.md#guildrequestmemberspayload) & { `limit?`: `number`  } | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:67

___

### shardPresenceUpdate

▸ **shardPresenceUpdate**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Update the status of a single connected shard which has been spawned by this manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard. |
| `data` | [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate) | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:52

___

### spawn

▸ **spawn**(): `void`

Create shard instances and add them to the connection queue.

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:24

___

### voiceStateUpdate

▸ **voiceStateUpdate**(`shardId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Send an OP 4 VOICE_STATE_UPDATE with a certain shard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | id of the shard. |
| `data` | [`VoiceStateUpdatePayload`](../modules/internal_.md#voicestateupdatepayload) & { `self_deaf?`: `boolean` ; `self_mute?`: `boolean`  } | Data to send. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/ShardManager.d.ts:58
