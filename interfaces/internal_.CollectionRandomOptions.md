[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CollectionRandomOptions

# Interface: CollectionRandomOptions

[<internal>](../modules/internal_.md).CollectionRandomOptions

## Table of contents

### Properties

- [returnType](internal_.CollectionRandomOptions.md#returntype)
- [unique](internal_.CollectionRandomOptions.md#unique)

## Properties

### returnType

• `Optional` **returnType**: ``"values"`` \| ``"keys"`` \| ``"blocks"``

Random returns only value(s) by default,
but you can specify what to return using this option

#### Defined in

node_modules/@discordoo/collection/types/interfaces/CollectionRandomOptions.d.ts:12

___

### unique

• `Optional` **unique**: `boolean`

Random returns non-unique elements by default,
but you can request unique elements using this option.
Please note that this reduces performance.

#### Defined in

node_modules/@discordoo/collection/types/interfaces/CollectionRandomOptions.d.ts:7
