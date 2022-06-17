[Avocord](../README.md) / [Exports](../modules.md) / Role

# Class: Role

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Properties

- [client](Role.md#client)
- [data](Role.md#data)
- [guild](Role.md#guild)

### Accessors

- [color](Role.md#color)
- [hoist](Role.md#hoist)
- [id](Role.md#id)
- [managed](Role.md#managed)
- [mentionable](Role.md#mentionable)
- [name](Role.md#name)
- [permissions](Role.md#permissions)
- [position](Role.md#position)
- [tags](Role.md#tags)

### Methods

- [delete](Role.md#delete)
- [editPosition](Role.md#editposition)
- [update](Role.md#update)

## Constructors

### constructor

• **new Role**(`client`, `data`, `guild`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | [`APIRole`](../interfaces/internal_.APIRole.md) |
| `guild` | [`Guild`](Guild.md) |

#### Defined in

[src/structures/Role.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L11)

## Properties

### client

• **client**: [`Client`](Client.md)

#### Defined in

[src/structures/Role.ts:8](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L8)

___

### data

• **data**: [`APIRole`](../interfaces/internal_.APIRole.md)

#### Defined in

[src/structures/Role.ts:7](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L7)

___

### guild

• **guild**: [`Guild`](Guild.md)

#### Defined in

[src/structures/Role.ts:9](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L9)

## Accessors

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/Role.ts:25](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L25)

___

### hoist

• `get` **hoist**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Role.ts:29](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L29)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Role.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L17)

___

### managed

• `get` **managed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Role.ts:41](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L41)

___

### mentionable

• `get` **mentionable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/structures/Role.ts:45](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L45)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Role.ts:21](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L21)

___

### permissions

• `get` **permissions**(): `string`

#### Returns

`string`

#### Defined in

[src/structures/Role.ts:37](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L37)

___

### position

• `get` **position**(): `number`

#### Returns

`number`

#### Defined in

[src/structures/Role.ts:33](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L33)

___

### tags

• `get` **tags**(): `undefined` \| [`APIRoleTags`](../interfaces/internal_.APIRoleTags.md)

#### Returns

`undefined` \| [`APIRoleTags`](../interfaces/internal_.APIRoleTags.md)

#### Defined in

[src/structures/Role.ts:49](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L49)

## Methods

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/structures/Role.ts:53](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L53)

___

### editPosition

▸ **editPosition**(`positions`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `positions` | [`EditRolePosition`](../modules/internal_.md#editroleposition) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

#### Defined in

[src/structures/Role.ts:61](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L61)

___

### update

▸ **update**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleOptions`](../interfaces/internal_.RoleOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

#### Defined in

[src/structures/Role.ts:57](https://github.com/avocord/disonejs/blob/0170c9a/src/structures/Role.ts#L57)
