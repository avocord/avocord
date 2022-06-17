[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIGuildMember

# Interface: APIGuildMember

[<internal>](../modules/internal_.md).APIGuildMember

https://discord.com/developers/docs/resources/guild#guild-member-object

## Hierarchy

- **`APIGuildMember`**

  ↳ [`APIInteractionGuildMember`](internal_.APIInteractionGuildMember.md)

## Table of contents

### Properties

- [avatar](internal_.APIGuildMember.md#avatar)
- [communication\_disabled\_until](internal_.APIGuildMember.md#communication_disabled_until)
- [deaf](internal_.APIGuildMember.md#deaf)
- [joined\_at](internal_.APIGuildMember.md#joined_at)
- [mute](internal_.APIGuildMember.md#mute)
- [nick](internal_.APIGuildMember.md#nick)
- [pending](internal_.APIGuildMember.md#pending)
- [premium\_since](internal_.APIGuildMember.md#premium_since)
- [roles](internal_.APIGuildMember.md#roles)
- [user](internal_.APIGuildMember.md#user)

## Properties

### avatar

• `Optional` **avatar**: ``null`` \| `string`

The member's guild avatar hash

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:646

___

### communication\_disabled\_until

• `Optional` **communication\_disabled\_until**: ``null`` \| `string`

Timestamp of when the time out will be removed; until then, they cannot interact with the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:680

___

### deaf

• **deaf**: `boolean`

Whether the user is deafened in voice channels

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:666

___

### joined\_at

• **joined\_at**: `string`

When the user joined the guild

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:656

___

### mute

• **mute**: `boolean`

Whether the user is muted in voice channels

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:670

___

### nick

• `Optional` **nick**: ``null`` \| `string`

This users guild nickname

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:642

___

### pending

• `Optional` **pending**: `boolean`

Whether the user has not yet passed the guild's Membership Screening requirements

*If this field is not present, it can be assumed as `false`.*

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:676

___

### premium\_since

• `Optional` **premium\_since**: ``null`` \| `string`

When the user started boosting the guild

See https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:662

___

### roles

• **roles**: `string`[]

Array of role object ids

See https://discord.com/developers/docs/topics/permissions#role-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:652

___

### user

• `Optional` **user**: [`APIUser`](internal_.APIUser.md)

The user this guild member represents

**This field won't be included in the member object attached to `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.**

See https://discord.com/developers/docs/resources/user#user-object

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:638
