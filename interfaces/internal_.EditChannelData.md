[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EditChannelData

# Interface: EditChannelData

[<internal>](../modules/internal_.md).EditChannelData

## Table of contents

### Properties

- [archived](internal_.EditChannelData.md#archived)
- [auto\_archive\_duration](internal_.EditChannelData.md#auto_archive_duration)
- [bitrate](internal_.EditChannelData.md#bitrate)
- [locked](internal_.EditChannelData.md#locked)
- [name](internal_.EditChannelData.md#name)
- [nsfw](internal_.EditChannelData.md#nsfw)
- [parent\_id](internal_.EditChannelData.md#parent_id)
- [permission\_overwrites](internal_.EditChannelData.md#permission_overwrites)
- [position](internal_.EditChannelData.md#position)
- [rate\_limit\_per\_user](internal_.EditChannelData.md#rate_limit_per_user)
- [reason](internal_.EditChannelData.md#reason)
- [topic](internal_.EditChannelData.md#topic)
- [user\_limit](internal_.EditChannelData.md#user_limit)

## Properties

### archived

• `Optional` **archived**: `boolean`

Update whether or not a thread is archived

#### Defined in

[src/structures/Constants.ts:42](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L42)

___

### auto\_archive\_duration

• `Optional` **auto\_archive\_duration**: `number`

Update how long it takes for a thread to become stale and archived automatically

#### Defined in

[src/structures/Constants.ts:46](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L46)

___

### bitrate

• `Optional` **bitrate**: `number`

Update bitrate of the channel

#### Defined in

[src/structures/Constants.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L21)

___

### locked

• `Optional` **locked**: `boolean`

Update whether or not a thread is locked

#### Defined in

[src/structures/Constants.ts:50](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L50)

___

### name

• `Optional` **name**: `string`

New name of the channel

#### Defined in

[src/structures/Constants.ts:5](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L5)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Update nsfw type of the channel

#### Defined in

[src/structures/Constants.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L17)

___

### parent\_id

• `Optional` **parent\_id**: `string`

Id of the parent category of the channel

#### Defined in

[src/structures/Constants.ts:38](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L38)

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: { `allow`: `string` ; `deny`: `string` ; `id`: `string` ; `type`: `number`  }[]

Update the permission overwrites

#### Defined in

[src/structures/Constants.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L29)

___

### position

• `Optional` **position**: `number`

New position of the channel

#### Defined in

[src/structures/Constants.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L9)

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

Update if slowmode is enabled and how long slow mode should last

#### Defined in

[src/structures/Constants.ts:54](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L54)

___

### reason

• `Optional` **reason**: `string`

Reason for updating the channel

#### Defined in

[src/structures/Constants.ts:58](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L58)

___

### topic

• `Optional` **topic**: `string`

New topic of the channel

#### Defined in

[src/structures/Constants.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L13)

___

### user\_limit

• `Optional` **user\_limit**: `number`

Update the limit of users that are allowed to be in a channel

#### Defined in

[src/structures/Constants.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Constants.ts#L25)
