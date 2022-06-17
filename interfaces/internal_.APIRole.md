[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIRole

# Interface: APIRole

[<internal>](../modules/internal_.md).APIRole

https://discord.com/developers/docs/topics/permissions#role-object

## Table of contents

### Properties

- [color](internal_.APIRole.md#color)
- [hoist](internal_.APIRole.md#hoist)
- [icon](internal_.APIRole.md#icon)
- [id](internal_.APIRole.md#id)
- [managed](internal_.APIRole.md#managed)
- [mentionable](internal_.APIRole.md#mentionable)
- [name](internal_.APIRole.md#name)
- [permissions](internal_.APIRole.md#permissions)
- [position](internal_.APIRole.md#position)
- [tags](internal_.APIRole.md#tags)
- [unicode\_emoji](internal_.APIRole.md#unicode_emoji)

## Properties

### color

• **color**: `number`

Integer representation of hexadecimal color code

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:20

___

### hoist

• **hoist**: `boolean`

If this role is pinned in the user listing

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:24

___

### icon

• `Optional` **icon**: ``null`` \| `string`

The role icon hash

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:28

___

### id

• **id**: `string`

Role id

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:12

___

### managed

• **managed**: `boolean`

Whether this role is managed by an integration

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:46

___

### mentionable

• **mentionable**: `boolean`

Whether this role is mentionable

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:50

___

### name

• **name**: `string`

Role name

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:16

___

### permissions

• **permissions**: `string`

Permission bit set

See https://en.wikipedia.org/wiki/Bit_field

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:42

___

### position

• **position**: `number`

Position of this role

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:36

___

### tags

• `Optional` **tags**: [`APIRoleTags`](internal_.APIRoleTags.md)

The tags this role has

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:54

___

### unicode\_emoji

• `Optional` **unicode\_emoji**: ``null`` \| `string`

The role unicode emoji as a standard emoji

#### Defined in

node_modules/discord-api-types/payloads/v10/permissions.d.ts:32
