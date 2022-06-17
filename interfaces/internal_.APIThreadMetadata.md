[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIThreadMetadata

# Interface: APIThreadMetadata

[<internal>](../modules/internal_.md).APIThreadMetadata

https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure

## Table of contents

### Properties

- [archive\_timestamp](internal_.APIThreadMetadata.md#archive_timestamp)
- [archived](internal_.APIThreadMetadata.md#archived)
- [auto\_archive\_duration](internal_.APIThreadMetadata.md#auto_archive_duration)
- [create\_timestamp](internal_.APIThreadMetadata.md#create_timestamp)
- [invitable](internal_.APIThreadMetadata.md#invitable)
- [locked](internal_.APIThreadMetadata.md#locked)

## Properties

### archive\_timestamp

• **archive\_timestamp**: `string`

An ISO8601 timestamp when the thread's archive status was last changed, used for calculating recent activity

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:657

___

### archived

• **archived**: `boolean`

Whether the thread is archived

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:649

___

### auto\_archive\_duration

• **auto\_archive\_duration**: [`ThreadAutoArchiveDuration`](../enums/internal_.ThreadAutoArchiveDuration.md)

Duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:653

___

### create\_timestamp

• `Optional` **create\_timestamp**: `string`

Timestamp when the thread was created; only populated for threads created after 2022-01-09

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:669

___

### invitable

• `Optional` **invitable**: `boolean`

Whether non-moderators can add other non-moderators to the thread; only available on private threads

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:665

___

### locked

• `Optional` **locked**: `boolean`

Whether the thread is locked; when a thread is locked, only users with `MANAGE_THREADS` can unarchive it

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:661
