[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / LocalBucket

# Class: LocalBucket

[<internal>](../modules/internal_.md).LocalBucket

Bucket used for saving ratelimits

## Table of contents

### Constructors

- [constructor](internal_.LocalBucket.md#constructor)

### Properties

- [\_remaining](internal_.LocalBucket.md#_remaining)
- [fnQueue](internal_.LocalBucket.md#fnqueue)
- [limit](internal_.LocalBucket.md#limit)
- [ratelimiter](internal_.LocalBucket.md#ratelimiter)
- [reset](internal_.LocalBucket.md#reset)
- [resetAt](internal_.LocalBucket.md#resetat)

### Accessors

- [remaining](internal_.LocalBucket.md#remaining)

### Methods

- [checkQueue](internal_.LocalBucket.md#checkqueue)
- [dropQueue](internal_.LocalBucket.md#dropqueue)
- [queue](internal_.LocalBucket.md#queue)
- [resetRemaining](internal_.LocalBucket.md#resetremaining)

## Constructors

### constructor

• **new LocalBucket**(`ratelimiter`)

Create a new bucket

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratelimiter` | [`Ratelimiter`](internal_.Ratelimiter.md) | ratelimiter used for ratelimiting requests |

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:36

## Properties

### \_remaining

• `Protected` **\_remaining**: `number`

Remaining amount of executions during the current timeframe

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:19

___

### fnQueue

• **fnQueue**: { `callback`: () => `any` ; `fn`: (...`args`: `any`[]) => `any`  }[]

array of functions waiting to be executed

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:8

___

### limit

• **limit**: `number`

Number of functions that may be executed during the timeframe set in limitReset

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:15

___

### ratelimiter

• **ratelimiter**: [`Ratelimiter`](internal_.Ratelimiter.md)

ratelimiter used for ratelimiting requests

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:31

___

### reset

• **reset**: `number`

Timeframe in milliseconds until the ratelimit resets

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:23

___

### resetAt

• **resetAt**: ``null`` \| `number`

The Date time in which the bucket will reset

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:27

## Accessors

### remaining

• `get` **remaining**(): `number`

#### Returns

`number`

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:37

• `set` **remaining**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:38

## Methods

### checkQueue

▸ **checkQueue**(): `void`

Check if there are any functions in the queue that haven't been executed yet

#### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:48

___

### dropQueue

▸ **dropQueue**(): `void`

Clear the current queue of events to be sent

#### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:56

___

### queue

▸ **queue**(`fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Queue a function to be executed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`bucket`: [`LocalBucket`](internal_.LocalBucket.md)) => `any` | function to be executed |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Result of the function if any

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:44

___

### resetRemaining

▸ **resetRemaining**(): `void`

Reset the remaining tokens to the base limit

#### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/ratelimitBuckets/LocalBucket.d.ts:52
