[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIThreadMember

# Interface: APIThreadMember

[<internal>](../modules/internal_.md).APIThreadMember

https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure

## Table of contents

### Properties

- [flags](internal_.APIThreadMember.md#flags)
- [id](internal_.APIThreadMember.md#id)
- [join\_timestamp](internal_.APIThreadMember.md#join_timestamp)
- [user\_id](internal_.APIThreadMember.md#user_id)

## Properties

### flags

• **flags**: [`ThreadMemberFlags`](../enums/internal_.ThreadMemberFlags.md)

Member flags combined as a bitfield

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:702

___

### id

• `Optional` **id**: `string`

The id of the thread

**This field is omitted on the member sent within each thread in the `GUILD_CREATE` event**

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:686

___

### join\_timestamp

• **join\_timestamp**: `string`

An ISO8601 timestamp for when the member last joined

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:696

___

### user\_id

• `Optional` **user\_id**: `string`

The id of the member

**This field is omitted on the member sent within each thread in the `GUILD_CREATE` event**

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:692
