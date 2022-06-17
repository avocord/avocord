[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / IClientOptions

# Interface: IClientOptions

[<internal>](../modules/internal_.md).IClientOptions

## Table of contents

### Properties

- [initialPresence](internal_.IClientOptions.md#initialpresence)
- [intents](internal_.IClientOptions.md#intents)
- [largeGuildThreshold](internal_.IClientOptions.md#largeguildthreshold)
- [reconnect](internal_.IClientOptions.md#reconnect)
- [shards](internal_.IClientOptions.md#shards)
- [snowtransferInstance](internal_.IClientOptions.md#snowtransferinstance)
- [totalShards](internal_.IClientOptions.md#totalshards)
- [ws](internal_.IClientOptions.md#ws)

## Properties

### initialPresence

• `Optional` **initialPresence**: [`GatewayPresenceUpdate`](../modules/internal_.md#gatewaypresenceupdate)

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:26

___

### intents

• `Optional` **intents**: [`IntentResolvable`](../modules/internal_.md#intentresolvable)

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:27

___

### largeGuildThreshold

• `Optional` **largeGuildThreshold**: `number`

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:13

___

### reconnect

• `Optional` **reconnect**: `boolean`

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:25

___

### shards

• `Optional` **shards**: `number`[] \| ``"auto"``

A note on "auto" sharding:
"auto" will always start at 0 as there is no way to know the next available shard id.
If you have more than one "cluster", you must specify an Array of shard ids. along with totalShards

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:19

___

### snowtransferInstance

• `Optional` **snowtransferInstance**: [`SnowTransfer`](../classes/internal_.SnowTransfer-1.md)

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:28

___

### totalShards

• `Optional` **totalShards**: `number`

Ignored and overwrote if using "auto" sharding.
The total number of shards expected across all clusters.

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:24

___

### ws

• `Optional` **ws**: [`IClientWSOptions`](internal_.IClientWSOptions.md)

#### Defined in

node_modules/cloudstorm/dist/Types.d.ts:29
