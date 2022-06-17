[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIInteractionDataResolvedChannel

# Interface: APIInteractionDataResolvedChannel

[<internal>](../modules/internal_.md).APIInteractionDataResolvedChannel

https://discord.com/developers/docs/resources/channel#channel-object

## Hierarchy

- [`Required`](../modules/internal_.md#required)<[`APIPartialChannel`](internal_.APIPartialChannel.md)\>

  ↳ **`APIInteractionDataResolvedChannel`**

## Table of contents

### Properties

- [id](internal_.APIInteractionDataResolvedChannel.md#id)
- [name](internal_.APIInteractionDataResolvedChannel.md#name)
- [parent\_id](internal_.APIInteractionDataResolvedChannel.md#parent_id)
- [permissions](internal_.APIInteractionDataResolvedChannel.md#permissions)
- [thread\_metadata](internal_.APIInteractionDataResolvedChannel.md#thread_metadata)
- [type](internal_.APIInteractionDataResolvedChannel.md#type)

## Properties

### id

• **id**: `string`

The id of the channel

#### Inherited from

Required.id

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:19

___

### name

• **name**: `string`

The name of the channel (2-100 characters)

#### Inherited from

Required.name

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:29

___

### parent\_id

• `Optional` **parent\_id**: ``null`` \| `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.d.ts:89

___

### permissions

• **permissions**: `string`

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.d.ts:88

___

### thread\_metadata

• `Optional` **thread\_metadata**: ``null`` \| [`APIThreadMetadata`](internal_.APIThreadMetadata.md)

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.d.ts:87

___

### type

• **type**: [`ChannelType`](../enums/internal_.ChannelType.md)

The type of the channel

See https://discord.com/developers/docs/resources/channel#channel-object-channel-types

#### Inherited from

Required.type

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:25
