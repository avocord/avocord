[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIStageInstance

# Interface: APIStageInstance

[<internal>](../modules/internal_.md).APIStageInstance

https://discord.com/developers/docs/resources/stage-instance#stage-instance-object

## Table of contents

### Properties

- [channel\_id](internal_.APIStageInstance.md#channel_id)
- [discoverable\_disabled](internal_.APIStageInstance.md#discoverable_disabled)
- [guild\_id](internal_.APIStageInstance.md#guild_id)
- [guild\_scheduled\_event\_id](internal_.APIStageInstance.md#guild_scheduled_event_id)
- [id](internal_.APIStageInstance.md#id)
- [privacy\_level](internal_.APIStageInstance.md#privacy_level)
- [topic](internal_.APIStageInstance.md#topic)

## Properties

### channel\_id

• **channel\_id**: `string`

The id of the associated stage channel

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:18

___

### discoverable\_disabled

• **discoverable\_disabled**: `boolean`

Whether or not stage discovery is disabled

**`deprecated`**

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:33

___

### guild\_id

• **guild\_id**: `string`

The guild id of the associated stage channel

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:14

___

### guild\_scheduled\_event\_id

• `Optional` **guild\_scheduled\_event\_id**: `string`

The id of the scheduled event for this stage instance

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:37

___

### id

• **id**: `string`

The id of the stage instance

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:10

___

### privacy\_level

• **privacy\_level**: [`StageInstancePrivacyLevel`](../enums/internal_.StageInstancePrivacyLevel.md)

The privacy level of the stage instance

See https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:28

___

### topic

• **topic**: `string`

The topic of the stage instance (1-120 characters)

#### Defined in

node_modules/discord-api-types/payloads/v10/stageInstance.d.ts:22
