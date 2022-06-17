[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SnowTransfer

# Class: SnowTransfer

[<internal>](../modules/internal_.md).SnowTransfer

## Table of contents

### Constructors

- [constructor](internal_.SnowTransfer.md#constructor)

### Properties

- [auditLog](internal_.SnowTransfer.md#auditlog)
- [bot](internal_.SnowTransfer.md#bot)
- [channel](internal_.SnowTransfer.md#channel)
- [guild](internal_.SnowTransfer.md#guild)
- [guildAssets](internal_.SnowTransfer.md#guildassets)
- [guildScheduledEvent](internal_.SnowTransfer.md#guildscheduledevent)
- [guildTemplate](internal_.SnowTransfer.md#guildtemplate)
- [interaction](internal_.SnowTransfer.md#interaction)
- [invite](internal_.SnowTransfer.md#invite)
- [options](internal_.SnowTransfer.md#options)
- [ratelimiter](internal_.SnowTransfer.md#ratelimiter)
- [requestHandler](internal_.SnowTransfer.md#requesthandler)
- [stageInstance](internal_.SnowTransfer.md#stageinstance)
- [token](internal_.SnowTransfer.md#token)
- [user](internal_.SnowTransfer.md#user)
- [voice](internal_.SnowTransfer.md#voice)
- [webhook](internal_.SnowTransfer.md#webhook)

## Constructors

### constructor

• **new SnowTransfer**(`token?`, `options?`)

Create a new Rest Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` | Discord Bot token to use |
| `options?` | `Object` | options |
| `options.baseHost?` | `string` | - |
| `options.disableEveryone?` | `boolean` | - |

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:48

## Properties

### auditLog

• **auditLog**: [`AuditLogMethods`](internal_.AuditLogMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:40

___

### bot

• **bot**: [`BotMethods`](internal_.BotMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:39

___

### channel

• **channel**: [`ChannelMethods`](internal_.ChannelMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:28

___

### guild

• **guild**: [`GuildMethods`](internal_.GuildMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:33

___

### guildAssets

• **guildAssets**: [`GuildAssetsMethods`](internal_.GuildAssetsMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:31

___

### guildScheduledEvent

• **guildScheduledEvent**: [`GuildScheduledEventMethods`](internal_.GuildScheduledEventMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:34

___

### guildTemplate

• **guildTemplate**: [`GuildTemplateMethods`](internal_.GuildTemplateMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:35

___

### interaction

• **interaction**: [`InteractionMethods`](internal_.InteractionMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:36

___

### invite

• **invite**: [`InviteMethods`](internal_.InviteMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:37

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseHost` | `string` |
| `disableEveryone` | `boolean` |
| `sentryOptions` | { `extra`: { `snowtransferVersion`: `string`  }  } |
| `sentryOptions.extra` | { `snowtransferVersion`: `string`  } |
| `sentryOptions.extra.snowtransferVersion` | `string` |
| `useRedis` | `boolean` |

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:17

___

### ratelimiter

• **ratelimiter**: [`Ratelimiter`](internal_.Ratelimiter.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:42

___

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:29

___

### stageInstance

• **stageInstance**: [`StageInstanceMethods`](internal_.StageInstanceMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:41

___

### token

• **token**: `undefined` \| `string`

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:27

___

### user

• **user**: [`UserMethods`](internal_.UserMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:30

___

### voice

• **voice**: [`VoiceMethods`](internal_.VoiceMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:38

___

### webhook

• **webhook**: [`WebhookMethods`](internal_.WebhookMethods.md)

#### Defined in

node_modules/snowtransfer/dist/SnowTransfer.d.ts:32
