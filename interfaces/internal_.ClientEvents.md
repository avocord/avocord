[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ClientEvents

# Interface: ClientEvents

[<internal>](../modules/internal_.md).ClientEvents

## Table of contents

### Properties

- [debug](internal_.ClientEvents.md#debug)
- [disconnected](internal_.ClientEvents.md#disconnected)
- [dispatch](internal_.ClientEvents.md#dispatch)
- [error](internal_.ClientEvents.md#error)
- [event](internal_.ClientEvents.md#event)
- [rawReceive](internal_.ClientEvents.md#rawreceive)
- [rawSend](internal_.ClientEvents.md#rawsend)
- [ready](internal_.ClientEvents.md#ready)
- [shardReady](internal_.ClientEvents.md#shardready)
- [voiceStateUpdate](internal_.ClientEvents.md#voicestateupdate)

## Properties

### debug

• **debug**: [`string`]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:5

___

### disconnected

• **disconnected**: []

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:17

___

### dispatch

• **dispatch**: [[`IGatewayMessage`](internal_.IGatewayMessage.md)]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:9

___

### error

• **error**: [`string`]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:15

___

### event

• **event**: [[`IGatewayMessage`](internal_.IGatewayMessage.md)]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:8

___

### rawReceive

• **rawReceive**: [[`IGatewayMessage`](internal_.IGatewayMessage.md)]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:7

___

### rawSend

• **rawSend**: [[`IWSMessage`](internal_.IWSMessage.md)]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:6

___

### ready

• **ready**: []

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:16

___

### shardReady

• **shardReady**: [{ `id`: `number` ; `ready`: `boolean`  }]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:11

___

### voiceStateUpdate

• **voiceStateUpdate**: [[`IGatewayMessage`](internal_.IGatewayMessage.md)]

#### Defined in

node_modules/cloudstorm/dist/Client.d.ts:10
