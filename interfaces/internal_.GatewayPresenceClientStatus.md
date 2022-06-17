[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GatewayPresenceClientStatus

# Interface: GatewayPresenceClientStatus

[<internal>](../modules/internal_.md).GatewayPresenceClientStatus

https://discord.com/developers/docs/topics/gateway#client-status-object

## Table of contents

### Properties

- [desktop](internal_.GatewayPresenceClientStatus.md#desktop)
- [mobile](internal_.GatewayPresenceClientStatus.md#mobile)
- [web](internal_.GatewayPresenceClientStatus.md#web)

## Properties

### desktop

• `Optional` **desktop**: [`PresenceUpdateStatus`](../enums/internal_.PresenceUpdateStatus.md)

The user's status set for an active desktop (Windows, Linux, Mac) application session

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:106

___

### mobile

• `Optional` **mobile**: [`PresenceUpdateStatus`](../enums/internal_.PresenceUpdateStatus.md)

The user's status set for an active mobile (iOS, Android) application session

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:110

___

### web

• `Optional` **web**: [`PresenceUpdateStatus`](../enums/internal_.PresenceUpdateStatus.md)

The user's status set for an active web (browser, bot account) application session

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:114
