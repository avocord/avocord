[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Collection

# Class: Collection<K, V\>

[<internal>](../modules/internal_.md).Collection

An utility data structure used within the Discordoo.

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

## Hierarchy

- [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`K`, `V`\>

  ↳ **`Collection`**

## Table of contents

### Constructors

- [constructor](internal_.Collection.md#constructor)

### Properties

- [[toStringTag]](internal_.Collection.md#[tostringtag])
- [[species]](internal_.Collection.md#[species])

### Accessors

- [[species]](internal_.Collection.md#[species]-1)
- [empty](internal_.Collection.md#empty)
- [size](internal_.Collection.md#size)

### Methods

- [[iterator]](internal_.Collection.md#[iterator])
- [clear](internal_.Collection.md#clear)
- [clone](internal_.Collection.md#clone)
- [concat](internal_.Collection.md#concat)
- [delete](internal_.Collection.md#delete)
- [entries](internal_.Collection.md#entries)
- [equal](internal_.Collection.md#equal)
- [every](internal_.Collection.md#every)
- [filter](internal_.Collection.md#filter)
- [find](internal_.Collection.md#find)
- [findKey](internal_.Collection.md#findkey)
- [first](internal_.Collection.md#first)
- [firstKey](internal_.Collection.md#firstkey)
- [forEach](internal_.Collection.md#foreach)
- [get](internal_.Collection.md#get)
- [has](internal_.Collection.md#has)
- [intoChunks](internal_.Collection.md#intochunks)
- [keys](internal_.Collection.md#keys)
- [last](internal_.Collection.md#last)
- [lastKey](internal_.Collection.md#lastkey)
- [map](internal_.Collection.md#map)
- [random](internal_.Collection.md#random)
- [reduce](internal_.Collection.md#reduce)
- [set](internal_.Collection.md#set)
- [some](internal_.Collection.md#some)
- [values](internal_.Collection.md#values)

## Constructors

### constructor

• **new Collection**<`K`, `V`\>(`iterable`)

The Collection() constructor creates [Collection](internal_.Collection.md) objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | [`Iterable`](../interfaces/internal_.Iterable.md)<readonly [`K`, `V`]\> |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:11

• **new Collection**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:12

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@266

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@232

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Accessors

### [species]

• `get` **[species]**(): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:13

___

### empty

• `get` **empty**(): `boolean`

Checks if the collection is empty or not.

#### Returns

`boolean`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:46

___

### size

• `get` **size**(): `number`

Gets the amount of elements in this collection.

#### Returns

`number`

#### Overrides

Map.size

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:42

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@109

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

Removes all elements from the collection.

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:38

___

### clone

▸ **clone**(): [`Collection`](internal_.Collection.md)<`K`, `V`\>

Creates a new collection based on this one.

#### Returns

[`Collection`](internal_.Collection.md)<`K`, `V`\>

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:139

___

### concat

▸ **concat**(`collections`): [`Collection`](internal_.Collection.md)<`K`, `V`\>

Merges the specified collections into one and returns a new collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collections` | [`Collection`](internal_.Collection.md)<`K`, `V`\>[] | collections to merge |

#### Returns

[`Collection`](internal_.Collection.md)<`K`, `V`\>

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:150

___

### delete

▸ **delete**(`key`): `boolean`

Removes element from the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key of element |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:34

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### equal

▸ **equal**(`collection`, `options?`): `boolean`

Checks if two collections are equal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`Collection`](internal_.Collection.md)<`K`, `V`\> | collection to compare to |
| `options?` | [`CollectionEqualOptions`](../interfaces/internal_.CollectionEqualOptions.md) | options to use |

#### Returns

`boolean`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:145

___

### every

▸ **every**(`predicate`): `boolean`

Checks if all values satisfy the condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |

#### Returns

`boolean`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:160

___

### filter

▸ **filter**<`T`\>(`filter`, `options?`): [`K`, `V`][]

Filters out the elements which don't meet requirements and returns array (default).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`K`, `V`][] = [`K`, `V`][] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |
| `options?` | [`CollectionFilterOptions`](../interfaces/internal_.CollectionFilterOptions.md) | filter options |

#### Returns

[`K`, `V`][]

- array of [ Key, Value ]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:106

▸ **filter**<`T`\>(`filter`, `options`): [`Collection`](internal_.Collection.md)<`K`, `V`\>

Filters out the elements which don't meet requirements and returns collection (return collection option is specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Collection`](internal_.Collection.md)<`any`, `any`, `T`\> = [`Collection`](internal_.Collection.md)<`K`, `V`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |
| `options` | [`CollectionFilterOptions`](../interfaces/internal_.CollectionFilterOptions.md) | filter options |

#### Returns

[`Collection`](internal_.Collection.md)<`K`, `V`\>

- collection Key -> Value

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:113

▸ **filter**<`T`\>(`filter`, `options`): [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`K`, `V`\>

Filters out the elements which don't meet requirements and returns map (return map option is specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`K`, `V`, `T`\> = [`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`K`, `V`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |
| `options` | [`CollectionFilterOptions`](../interfaces/internal_.CollectionFilterOptions.md) | filter options |

#### Returns

[`Map`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map )<`K`, `V`\>

- map Key -> Value

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:120

___

### find

▸ **find**(`predicate`): `undefined` \| `V`

Searches for the element in collection and returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |

#### Returns

`undefined` \| `V`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:125

___

### findKey

▸ **findKey**(`predicate`): `undefined` \| `K`

Searches for the key in collection and returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |

#### Returns

`undefined` \| `K`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:130

___

### first

▸ **first**(): `undefined` \| `V`

Returns first collection value if it exists.

#### Returns

`undefined` \| `V`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:164

▸ **first**(`amount`): `V`[]

Returns first N collection values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`V`[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:168

___

### firstKey

▸ **firstKey**(): `undefined` \| `K`

Returns first collection key if it exists.

#### Returns

`undefined` \| `K`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:172

▸ **firstKey**(`amount`): `K`[]

Returns first N collection keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`K`[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:176

___

### forEach

▸ **forEach**(`predicate`): `void`

Executes a function on each of elements of collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `any` | function to use |

#### Returns

`void`

#### Overrides

Map.forEach

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:135

___

### get

▸ **get**(`key`): `undefined` \| `V`

Gets element from collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key of element |

#### Returns

`undefined` \| `V`

#### Overrides

Map.get

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:18

___

### has

▸ **has**(`key`): `boolean`

Checks if an element exists in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key of element |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:29

___

### intoChunks

▸ **intoChunks**(`size?`): [`Collection`](internal_.Collection.md)<`K`, `V`\>[]

Returns a collection chunked into several collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | chunk size |

#### Returns

[`Collection`](internal_.Collection.md)<`K`, `V`\>[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:208

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`K`\>

Returns an iterable of keys in the map

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### last

▸ **last**(): `undefined` \| `V`

Returns last collection value if it exists.

#### Returns

`undefined` \| `V`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:180

▸ **last**(`amount`): `V`[]

Returns last N collection values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`V`[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:184

___

### lastKey

▸ **lastKey**(): `undefined` \| `K`

Returns last collection key if it exists.

#### Returns

`undefined` \| `K`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:188

▸ **lastKey**(`amount`): `K`[]

Returns first N collection keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`K`[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:192

___

### map

▸ **map**<`T`\>(`predicate`): `T`[]

Maps each item to another value into an array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `T` | function to use |

#### Returns

`T`[]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:197

___

### random

▸ **random**(): `V`

Gets a random value from collection.

#### Returns

`V`

- value

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:51

▸ **random**(`amount`): `V`[]

Gets a random values from collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of values to get |

#### Returns

`V`[]

- array of values

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:57

▸ **random**<`T`\>(`amount`, `options`): `V`[]

Gets a random values from collection (returnType values option is specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `V`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of values to get |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

`V`[]

- array of values

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:64

▸ **random**<`T`\>(`amount`, `options`): `K`[]

Gets a random keys from collection (returnType keys option is specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `K`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of values to get |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

`K`[]

- array of keys

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:71

▸ **random**<`T`\>(`amount`, `options`): [`K`, `V`][]

Gets a random blocks from collection (returnType blocks option is specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`K`, `V`][] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of values to get |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

[`K`, `V`][]

- array of blocks [ Key, Value ]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:78

▸ **random**<`T`\>(`amount`, `options`): `V`

Gets a random value from collection (returnType values option is specified, amount not specified).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `undefined` | not specified in this case |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

`V`

- value

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:85

▸ **random**<`T`\>(`amount`, `options`): `K`

Gets a random key from collection (returnType keys option is specified, amount not specified).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `undefined` | not specified in this case |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

`K`

- key

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:92

▸ **random**<`T`\>(`amount`, `options`): [`K`, `V`]

Gets a random block from collection (returnType block option is specified, amount not specified).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`K`, `V`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `undefined` | not specified in this case |
| `options` | [`CollectionRandomOptions`](../interfaces/internal_.CollectionRandomOptions.md) | method options |

#### Returns

[`K`, `V`]

- block [ Key, Value ]

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:99

___

### reduce

▸ **reduce**<`T`\>(`predicate`, `initialValue?`): `T`

Executes a predicate function on each element of the collection, resulting in a single output value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`accumulator`: `T`, `value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `T` | function to use |
| `initialValue?` | `T` | initial value for the accumulator |

#### Returns

`T`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:203

___

### set

▸ **set**(`key`, `value`): [`Collection`](internal_.Collection.md)<`K`, `V`\>

Sets a new element in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | key of element |
| `value` | `V` | value (element) to set |

#### Returns

[`Collection`](internal_.Collection.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:24

___

### some

▸ **some**(`predicate`): `boolean`

Checks if any of values satisfies the condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](internal_.Collection.md)<`K`, `V`\>) => `boolean` | function to use |

#### Returns

`boolean`

#### Defined in

node_modules/@discordoo/collection/types/Collection.d.ts:155

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`V`\>

Returns an iterable of values in the map

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
