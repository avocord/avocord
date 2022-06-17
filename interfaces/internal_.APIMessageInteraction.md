[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIMessageInteraction

# Interface: APIMessageInteraction

[<internal>](../modules/internal_.md).APIMessageInteraction

https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object

## Table of contents

### Properties

- [id](internal_.APIMessageInteraction.md#id)
- [member](internal_.APIMessageInteraction.md#member)
- [name](internal_.APIMessageInteraction.md#name)
- [type](internal_.APIMessageInteraction.md#type)
- [user](internal_.APIMessageInteraction.md#user)

## Properties

### id

• **id**: `string`

ID of the interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:15

___

### member

• `Optional` **member**: [`PartialAPIMessageInteractionGuildMember`](../modules/internal_.md#partialapimessageinteractionguildmember)

The guild member who invoked the interaction, only sent in MESSAGE_CREATE events

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:31

___

### name

• **name**: `string`

The name of the ApplicationCommand

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:23

___

### type

• **type**: [`InteractionType`](../enums/internal_.InteractionType.md)

The type of interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:19

___

### user

• **user**: [`APIUser`](internal_.APIUser.md)

The user who invoked the interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/base.d.ts:27
