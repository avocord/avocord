[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GatewayVoiceState

# Interface: GatewayVoiceState

[<internal>](../modules/internal_.md).GatewayVoiceState

https://discord.com/developers/docs/resources/voice#voice-state-object

## Table of contents

### Properties

- [channel\_id](internal_.GatewayVoiceState.md#channel_id)
- [deaf](internal_.GatewayVoiceState.md#deaf)
- [guild\_id](internal_.GatewayVoiceState.md#guild_id)
- [member](internal_.GatewayVoiceState.md#member)
- [mute](internal_.GatewayVoiceState.md#mute)
- [request\_to\_speak\_timestamp](internal_.GatewayVoiceState.md#request_to_speak_timestamp)
- [self\_deaf](internal_.GatewayVoiceState.md#self_deaf)
- [self\_mute](internal_.GatewayVoiceState.md#self_mute)
- [self\_stream](internal_.GatewayVoiceState.md#self_stream)
- [self\_video](internal_.GatewayVoiceState.md#self_video)
- [session\_id](internal_.GatewayVoiceState.md#session_id)
- [suppress](internal_.GatewayVoiceState.md#suppress)
- [user\_id](internal_.GatewayVoiceState.md#user_id)

## Properties

### channel\_id

• **channel\_id**: ``null`` \| `string`

The channel id this user is connected to

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:17

___

### deaf

• **deaf**: `boolean`

Whether this user is deafened by the server

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:35

___

### guild\_id

• `Optional` **guild\_id**: `string`

The guild id this voice state is for

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:13

___

### member

• `Optional` **member**: [`APIGuildMember`](internal_.APIGuildMember.md)

The guild member this voice state is for

See https://discord.com/developers/docs/resources/guild#guild-member-object

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:27

___

### mute

• **mute**: `boolean`

Whether this user is muted by the server

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:39

___

### request\_to\_speak\_timestamp

• **request\_to\_speak\_timestamp**: ``null`` \| `string`

The time at which the user requested to speak

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:63

___

### self\_deaf

• **self\_deaf**: `boolean`

Whether this user is locally deafened

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:43

___

### self\_mute

• **self\_mute**: `boolean`

Whether this user is locally muted

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:47

___

### self\_stream

• `Optional` **self\_stream**: `boolean`

Whether this user is streaming using "Go Live"

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:51

___

### self\_video

• **self\_video**: `boolean`

Whether this user's camera is enabled

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:55

___

### session\_id

• **session\_id**: `string`

The session id for this voice state

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:31

___

### suppress

• **suppress**: `boolean`

Whether this user is muted by the current user

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:59

___

### user\_id

• **user\_id**: `string`

The user id this voice state is for

#### Defined in

node_modules/discord-api-types/payloads/v10/voice.d.ts:21
