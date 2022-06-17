[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIGroupDMChannel

# Interface: APIGroupDMChannel

[<internal>](../modules/internal_.md).APIGroupDMChannel

## Hierarchy

- [`Omit`](../modules/internal_.md#omit)<[`APIDMChannelBase`](internal_.APIDMChannelBase.md)<[`GroupDM`](../modules/internal_.md#groupdm)\>, ``"name"``\>

  ↳ **`APIGroupDMChannel`**

## Table of contents

### Properties

- [application\_id](internal_.APIGroupDMChannel.md#application_id)
- [flags](internal_.APIGroupDMChannel.md#flags)
- [icon](internal_.APIGroupDMChannel.md#icon)
- [id](internal_.APIGroupDMChannel.md#id)
- [last\_message\_id](internal_.APIGroupDMChannel.md#last_message_id)
- [name](internal_.APIGroupDMChannel.md#name)
- [owner\_id](internal_.APIGroupDMChannel.md#owner_id)
- [recipients](internal_.APIGroupDMChannel.md#recipients)
- [type](internal_.APIGroupDMChannel.md#type)

## Properties

### application\_id

• `Optional` **application\_id**: `string`

Application id of the group DM creator if it is bot-created

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:140

___

### flags

• `Optional` **flags**: [`Pinned`](../modules/internal_.md#pinned)

#### Inherited from

Omit.flags

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:37

___

### icon

• `Optional` **icon**: ``null`` \| `string`

Icon hash

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:144

___

### id

• **id**: `string`

The id of the channel

#### Inherited from

Omit.id

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### last\_message\_id

• `Optional` **last\_message\_id**: ``null`` \| `string`

The id of the last message sent in this channel (may not point to an existing or valid message)

#### Overrides

Omit.last\_message\_id

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:156

___

### name

• `Optional` **name**: ``null`` \| `string`

The name of the channel (2-100 characters)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:148

___

### owner\_id

• `Optional` **owner\_id**: `string`

ID of the DM creator

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:152

___

### recipients

• `Optional` **recipients**: [`APIUser`](internal_.APIUser.md)[]

The recipients of the DM

See https://discord.com/developers/docs/resources/user#user-object

#### Inherited from

Omit.recipients

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:133

___

### type

• **type**: [`GroupDM`](../modules/internal_.md#groupdm)

#### Inherited from

Omit.type

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:36
