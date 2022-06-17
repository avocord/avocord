[Avocord](../README.md) / [Exports](../modules.md) / GuildMember

# Class: GuildMember

## Table of contents

### Constructors

- [constructor](GuildMember.md#constructor)

### Properties

- [client](GuildMember.md#client)
- [data](GuildMember.md#data)
- [guild](GuildMember.md#guild)

### Accessors

- [banner](GuildMember.md#banner)
- [bot](GuildMember.md#bot)
- [deaf](GuildMember.md#deaf)
- [id](GuildMember.md#id)
- [joinedAt](GuildMember.md#joinedat)
- [joinedTimestamp](GuildMember.md#joinedtimestamp)
- [mute](GuildMember.md#mute)
- [nick](GuildMember.md#nick)
- [roles](GuildMember.md#roles)
- [user](GuildMember.md#user)

### Methods

- [ban](GuildMember.md#ban)
- [edit](GuildMember.md#edit)
- [fetch](GuildMember.md#fetch)
- [kick](GuildMember.md#kick)
- [setChannel](GuildMember.md#setchannel)
- [setDeaf](GuildMember.md#setdeaf)
- [setMute](GuildMember.md#setmute)
- [setNickname](GuildMember.md#setnickname)
- [setRoles](GuildMember.md#setroles)
- [timeout](GuildMember.md#timeout)
- [unban](GuildMember.md#unban)

## Constructors

### constructor

• **new GuildMember**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIGuildMember`](../interfaces/internal_.APIGuildMember.md) |
| `guild` | [`Guild`](Guild.md) |

#### Defined in

[src/structures/GuildMember.ts:10](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L10)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/GuildMember.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L7)

___

### data

• **data**: [`APIGuildMember`](../interfaces/internal_.APIGuildMember.md)

#### Defined in

[src/structures/GuildMember.ts:6](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L6)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/GuildMember.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L8)

## Accessors

### banner

• `get` **banner**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/GuildMember.ts:24](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L24)

___

### bot

• `get` **bot**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/structures/GuildMember.ts:28](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L28)

___

### deaf

• `get` **deaf**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/GuildMember.ts:52](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L52)

___

### id

• `get` **id**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/structures/GuildMember.ts:16](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L16)

___

### joinedAt

• `get` **joinedAt**(): [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Returns

[`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[src/structures/GuildMember.ts:44](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L44)

___

### joinedTimestamp

• `get` **joinedTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/GuildMember.ts:48](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L48)

___

### mute

• `get` **mute**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/GuildMember.ts:56](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L56)

___

### nick

• `get` **nick**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[src/structures/GuildMember.ts:32](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L32)

___

### roles

• `get` **roles**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/structures/GuildMember.ts:40](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L40)

___

### user

• `get` **user**(): `undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Returns

`undefined` \| [`APIUser`](../interfaces/internal_.APIUser.md)

#### Defined in

[src/structures/GuildMember.ts:20](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L20)

## Methods

### ban

▸ **ban**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.delete_message_days?` | `number` |
| `data.reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:60](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L60)

___

### edit

▸ **edit**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.channel_id?` | `string` |
| `data.deaf?` | `boolean` |
| `data.mute?` | `boolean` |
| `data.nick?` | `string` |
| `data.roles?` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:115](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L115)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

#### Defined in

[src/structures/GuildMember.ts:77](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L77)

___

### kick

▸ **kick**(`reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:73](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L73)

___

### setChannel

▸ **setChannel**(`channel_id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel_id` | ``null`` \| `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:102](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L102)

___

### setDeaf

▸ **setDeaf**(`deaf`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deaf` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:94](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L94)

___

### setMute

▸ **setMute**(`mute`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mute` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:98](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L98)

___

### setNickname

▸ **setNickname**(`nick`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nick` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:111](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L111)

___

### setRoles

▸ **setRoles**(`roles`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:106](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L106)

___

### timeout

▸ **timeout**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.communication_disabled_until?` | `string` |
| `data.reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:125](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L125)

___

### unban

▸ **unban**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/GuildMember.ts:67](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/GuildMember.ts#L67)
