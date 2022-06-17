[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIChatInputApplicationCommandInteractionDataResolved

# Interface: APIChatInputApplicationCommandInteractionDataResolved

[<internal>](../modules/internal_.md).APIChatInputApplicationCommandInteractionDataResolved

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure

## Table of contents

### Properties

- [attachments](internal_.APIChatInputApplicationCommandInteractionDataResolved.md#attachments)
- [channels](internal_.APIChatInputApplicationCommandInteractionDataResolved.md#channels)
- [members](internal_.APIChatInputApplicationCommandInteractionDataResolved.md#members)
- [roles](internal_.APIChatInputApplicationCommandInteractionDataResolved.md#roles)
- [users](internal_.APIChatInputApplicationCommandInteractionDataResolved.md#users)

## Properties

### attachments

• `Optional` **attachments**: [`Record`](../modules/internal_.md#record)<`string`, [`APIAttachment`](internal_.APIAttachment.md)\>

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:57

___

### channels

• `Optional` **channels**: [`Record`](../modules/internal_.md#record)<`string`, [`APIInteractionDataResolvedChannel`](internal_.APIInteractionDataResolvedChannel.md)\>

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:56

___

### members

• `Optional` **members**: [`Record`](../modules/internal_.md#record)<`string`, [`APIInteractionDataResolvedGuildMember`](internal_.APIInteractionDataResolvedGuildMember.md)\>

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:55

___

### roles

• `Optional` **roles**: [`Record`](../modules/internal_.md#record)<`string`, [`APIRole`](internal_.APIRole.md)\>

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:54

___

### users

• `Optional` **users**: [`Record`](../modules/internal_.md#record)<`string`, [`APIUser`](internal_.APIUser.md)\>

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.d.ts:53
