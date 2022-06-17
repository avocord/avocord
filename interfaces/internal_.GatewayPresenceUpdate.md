[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GatewayPresenceUpdate

# Interface: GatewayPresenceUpdate

[<internal>](../modules/internal_.md).GatewayPresenceUpdate

https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields

## Table of contents

### Properties

- [activities](internal_.GatewayPresenceUpdate.md#activities)
- [client\_status](internal_.GatewayPresenceUpdate.md#client_status)
- [guild\_id](internal_.GatewayPresenceUpdate.md#guild_id)
- [status](internal_.GatewayPresenceUpdate.md#status)
- [user](internal_.GatewayPresenceUpdate.md#user)

## Properties

### activities

• `Optional` **activities**: [`GatewayActivity`](internal_.GatewayActivity.md)[]

User's current activities

See https://discord.com/developers/docs/topics/gateway#activity-object

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:81

___

### client\_status

• `Optional` **client\_status**: [`GatewayPresenceClientStatus`](internal_.GatewayPresenceClientStatus.md)

User's platform-dependent status

See https://discord.com/developers/docs/topics/gateway#client-status-object

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:87

___

### guild\_id

• **guild\_id**: `string`

ID of the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:71

___

### status

• `Optional` **status**: [`PresenceUpdateStatus`](../enums/internal_.PresenceUpdateStatus.md)

Either "idle", "dnd", "online", or "offline"

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:75

___

### user

• **user**: [`Partial`](../modules/internal_.md#partial)<[`APIUser`](internal_.APIUser.md)\> & [`Pick`](../modules/internal_.md#pick)<[`APIUser`](internal_.APIUser.md), ``"id"``\>

The user presence is being updated for

**The user object within this event can be partial, the only field which must be sent is the `id` field,
everything else is optional.**

See https://discord.com/developers/docs/resources/user#user-object

#### Defined in

node_modules/discord-api-types/payloads/v10/gateway.d.ts:67
