[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIVoiceGuildScheduledEvent

# Interface: APIVoiceGuildScheduledEvent

[<internal>](../modules/internal_.md).APIVoiceGuildScheduledEvent

## Hierarchy

- [`APIGuildScheduledEventBase`](internal_.APIGuildScheduledEventBase.md)<[`Voice`](../modules/internal_.md#voice)\>

  ↳ **`APIVoiceGuildScheduledEvent`**

## Table of contents

### Properties

- [channel\_id](internal_.APIVoiceGuildScheduledEvent.md#channel_id)
- [creator](internal_.APIVoiceGuildScheduledEvent.md#creator)
- [creator\_id](internal_.APIVoiceGuildScheduledEvent.md#creator_id)
- [description](internal_.APIVoiceGuildScheduledEvent.md#description)
- [entity\_id](internal_.APIVoiceGuildScheduledEvent.md#entity_id)
- [entity\_metadata](internal_.APIVoiceGuildScheduledEvent.md#entity_metadata)
- [entity\_type](internal_.APIVoiceGuildScheduledEvent.md#entity_type)
- [guild\_id](internal_.APIVoiceGuildScheduledEvent.md#guild_id)
- [id](internal_.APIVoiceGuildScheduledEvent.md#id)
- [image](internal_.APIVoiceGuildScheduledEvent.md#image)
- [name](internal_.APIVoiceGuildScheduledEvent.md#name)
- [privacy\_level](internal_.APIVoiceGuildScheduledEvent.md#privacy_level)
- [scheduled\_end\_time](internal_.APIVoiceGuildScheduledEvent.md#scheduled_end_time)
- [scheduled\_start\_time](internal_.APIVoiceGuildScheduledEvent.md#scheduled_start_time)
- [status](internal_.APIVoiceGuildScheduledEvent.md#status)
- [user\_count](internal_.APIVoiceGuildScheduledEvent.md#user_count)

## Properties

### channel\_id

• **channel\_id**: `string`

The channel id in which the scheduled event will be hosted, or `null` if entity type is `EXTERNAL`

#### Overrides

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[channel_id](internal_.APIGuildScheduledEventBase.md#channel_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:75

___

### creator

• `Optional` **creator**: [`APIUser`](internal_.APIUser.md)

The user that created the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[creator](internal_.APIGuildScheduledEventBase.md#creator)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:60

___

### creator\_id

• `Optional` **creator\_id**: ``null`` \| `string`

The id of the user that created the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[creator_id](internal_.APIGuildScheduledEventBase.md#creator_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:20

___

### description

• `Optional` **description**: ``null`` \| `string`

The description of the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[description](internal_.APIGuildScheduledEventBase.md#description)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:28

___

### entity\_id

• **entity\_id**: ``null`` \| `string`

The id of the hosting entity associated with the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[entity_id](internal_.APIGuildScheduledEventBase.md#entity_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:52

___

### entity\_metadata

• **entity\_metadata**: ``null``

The entity metadata for the scheduled event

#### Overrides

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[entity_metadata](internal_.APIGuildScheduledEventBase.md#entity_metadata)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:76

___

### entity\_type

• **entity\_type**: [`Voice`](../modules/internal_.md#voice)

The type of hosting entity associated with the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[entity_type](internal_.APIGuildScheduledEventBase.md#entity_type)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:48

___

### guild\_id

• **guild\_id**: `string`

The guild id which the scheduled event belongs to

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[guild_id](internal_.APIGuildScheduledEventBase.md#guild_id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:12

___

### id

• **id**: `string`

The id of the guild event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[id](internal_.APIGuildScheduledEventBase.md#id)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:8

___

### image

• `Optional` **image**: ``null`` \| `string`

The cover image of the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[image](internal_.APIGuildScheduledEventBase.md#image)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:68

___

### name

• **name**: `string`

The name of the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[name](internal_.APIGuildScheduledEventBase.md#name)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:24

___

### privacy\_level

• **privacy\_level**: [`GuildOnly`](../modules/internal_.md#guildonly)

The privacy level of the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[privacy_level](internal_.APIGuildScheduledEventBase.md#privacy_level)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:40

___

### scheduled\_end\_time

• **scheduled\_end\_time**: ``null`` \| `string`

The time at which the guild event will end, or `null` if the event does not have a scheduled time to end

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[scheduled_end_time](internal_.APIGuildScheduledEventBase.md#scheduled_end_time)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:36

___

### scheduled\_start\_time

• **scheduled\_start\_time**: `string`

The time the scheduled event will start

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[scheduled_start_time](internal_.APIGuildScheduledEventBase.md#scheduled_start_time)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:32

___

### status

• **status**: [`GuildScheduledEventStatus`](../enums/internal_.GuildScheduledEventStatus.md)

The status of the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[status](internal_.APIGuildScheduledEventBase.md#status)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:44

___

### user\_count

• `Optional` **user\_count**: `number`

The number of users subscribed to the scheduled event

#### Inherited from

[APIGuildScheduledEventBase](internal_.APIGuildScheduledEventBase.md).[user_count](internal_.APIGuildScheduledEventBase.md#user_count)

#### Defined in

node_modules/discord-api-types/payloads/v10/guildScheduledEvent.d.ts:64
