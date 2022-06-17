[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIInteractionDataResolvedGuildMember

# Interface: APIInteractionDataResolvedGuildMember

[<internal>](../modules/internal_.md).APIInteractionDataResolvedGuildMember

https://discord.com/developers/docs/resources/guild#guild-member-object

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`APIGuildMember`](internal_.APIGuildMember.md), ``"user"`` \| ``"deaf"`` \| ``"mute"``\>

  ↳ **`APIInteractionDataResolvedGuildMember`**

## Table of contents

### Properties

- [avatar](internal_.APIInteractionDataResolvedGuildMember.md#avatar)
- [communication\_disabled\_until](internal_.APIInteractionDataResolvedGuildMember.md#communication_disabled_until)
- [joined\_at](internal_.APIInteractionDataResolvedGuildMember.md#joined_at)
- [nick](internal_.APIInteractionDataResolvedGuildMember.md#nick)
- [pending](internal_.APIInteractionDataResolvedGuildMember.md#pending)
- [permissions](internal_.APIInteractionDataResolvedGuildMember.md#permissions)
- [premium\_since](internal_.APIInteractionDataResolvedGuildMember.md#premium_since)
- [roles](internal_.APIInteractionDataResolvedGuildMember.md#roles)

## Properties

### avatar

• `Optional` **avatar**: ``null`` \| `string`

The member's guild avatar hash

#### Inherited from

Omit.avatar

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:646

___

### communication\_disabled\_until

• `Optional` **communication\_disabled\_until**: ``null`` \| `string`

Timestamp of when the time out will be removed; until then, they cannot interact with the guild

#### Inherited from

Omit.communication\_disabled\_until

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:680

___

### joined\_at

• **joined\_at**: `string`

When the user joined the guild

#### Inherited from

Omit.joined\_at

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:656

___

### nick

• `Optional` **nick**: ``null`` \| `string`

This users guild nickname

#### Inherited from

Omit.nick

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:642

___

### pending

• `Optional` **pending**: `boolean`

Whether the user has not yet passed the guild's Membership Screening requirements

*If this field is not present, it can be assumed as `false`.*

#### Inherited from

Omit.pending

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:676

___

### permissions

• **permissions**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.d.ts:95

___

### premium\_since

• `Optional` **premium\_since**: ``null`` \| `string`

When the user started boosting the guild

See https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-

#### Inherited from

Omit.premium\_since

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:662

___

### roles

• **roles**: `string`[]

Array of role object ids

See https://discord.com/developers/docs/topics/permissions#role-object

#### Inherited from

Omit.roles

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:652
