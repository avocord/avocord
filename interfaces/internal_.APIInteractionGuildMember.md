[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIInteractionGuildMember

# Interface: APIInteractionGuildMember

[<internal>](../modules/internal_.md).APIInteractionGuildMember

https://discord.com/developers/docs/resources/guild#guild-member-object

## Hierarchy

- [`APIGuildMember`](internal_.APIGuildMember.md)

  ↳ **`APIInteractionGuildMember`**

## Table of contents

### Properties

- [avatar](internal_.APIInteractionGuildMember.md#avatar)
- [communication\_disabled\_until](internal_.APIInteractionGuildMember.md#communication_disabled_until)
- [deaf](internal_.APIInteractionGuildMember.md#deaf)
- [joined\_at](internal_.APIInteractionGuildMember.md#joined_at)
- [mute](internal_.APIInteractionGuildMember.md#mute)
- [nick](internal_.APIInteractionGuildMember.md#nick)
- [pending](internal_.APIInteractionGuildMember.md#pending)
- [permissions](internal_.APIInteractionGuildMember.md#permissions)
- [premium\_since](internal_.APIInteractionGuildMember.md#premium_since)
- [roles](internal_.APIInteractionGuildMember.md#roles)
- [user](internal_.APIInteractionGuildMember.md#user)

## Properties

### avatar

• `Optional` **avatar**: ``null`` \| `string`

The member's guild avatar hash

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[avatar](internal_.APIGuildMember.md#avatar)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:646

___

### communication\_disabled\_until

• `Optional` **communication\_disabled\_until**: ``null`` \| `string`

Timestamp of when the time out will be removed; until then, they cannot interact with the guild

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[communication_disabled_until](internal_.APIGuildMember.md#communication_disabled_until)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:680

___

### deaf

• **deaf**: `boolean`

Whether the user is deafened in voice channels

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[deaf](internal_.APIGuildMember.md#deaf)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:666

___

### joined\_at

• **joined\_at**: `string`

When the user joined the guild

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[joined_at](internal_.APIGuildMember.md#joined_at)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:656

___

### mute

• **mute**: `boolean`

Whether the user is muted in voice channels

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[mute](internal_.APIGuildMember.md#mute)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:670

___

### nick

• `Optional` **nick**: ``null`` \| `string`

This users guild nickname

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[nick](internal_.APIGuildMember.md#nick)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:642

___

### pending

• `Optional` **pending**: `boolean`

Whether the user has not yet passed the guild's Membership Screening requirements

*If this field is not present, it can be assumed as `false`.*

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[pending](internal_.APIGuildMember.md#pending)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:676

___

### permissions

• **permissions**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:37

___

### premium\_since

• `Optional` **premium\_since**: ``null`` \| `string`

When the user started boosting the guild

See https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[premium_since](internal_.APIGuildMember.md#premium_since)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:662

___

### roles

• **roles**: `string`[]

Array of role object ids

See https://discord.com/developers/docs/topics/permissions#role-object

#### Inherited from

[APIGuildMember](internal_.APIGuildMember.md).[roles](internal_.APIGuildMember.md#roles)

#### Defined in

node_modules/discord-api-types/payloads/v10/guild.d.ts:652

___

### user

• **user**: [`APIUser`](internal_.APIUser.md)

The user this guild member represents

**This field won't be included in the member object attached to `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.**

See https://discord.com/developers/docs/resources/user#user-object

#### Overrides

[APIGuildMember](internal_.APIGuildMember.md).[user](internal_.APIGuildMember.md#user)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:38
