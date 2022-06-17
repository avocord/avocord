[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / LocalBucket

# Class: LocalBucket

[<internal>](../modules/internal_.md).LocalBucket

Bucket used for saving ratelimits

## Table of contents

### Constructors

- [constructor](internal_.LocalBucket-1.md#constructor)

### Properties

- [fnQueue](internal_.LocalBucket-1.md#fnqueue)
- [limit](internal_.LocalBucket-1.md#limit)
- [ratelimiter](internal_.LocalBucket-1.md#ratelimiter)
- [remaining](internal_.LocalBucket-1.md#remaining)
- [reset](internal_.LocalBucket-1.md#reset)
- [resetRemaining](internal_.LocalBucket-1.md#resetremaining)
- [resetTimeout](internal_.LocalBucket-1.md#resettimeout)
- [routeKey](internal_.LocalBucket-1.md#routekey)
- [default](internal_.LocalBucket-1.md#default)

### Methods

- [checkQueue](internal_.LocalBucket-1.md#checkqueue)
- [dropQueue](internal_.LocalBucket-1.md#dropqueue)
- [queue](internal_.LocalBucket-1.md#queue)

## Constructors

### constructor

• **new LocalBucket**(`ratelimiter`, `routeKey`)

Create a new bucket

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratelimiter` | [`Ratelimiter`](internal_.Ratelimiter-1.md) | ratelimiter used for ratelimiting requests |
| `routeKey` | `string` | Key used internally to routify requests. Assigned by ratelimiter |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:44

## Properties

### fnQueue

• **fnQueue**: { `callback`: () => `any` ; `fn`: (...`args`: `any`[]) => `any`  }[]

array of functions waiting to be executed

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:10

___

### limit

• **limit**: `number`

Number of functions that may be executed during the timeframe set in limitReset

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:17

___

### ratelimiter

• **ratelimiter**: [`Ratelimiter`](internal_.Ratelimiter-1.md)

ratelimiter used for ratelimiting requests

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:33

___

### remaining

• **remaining**: `number`

Remaining amount of executions during the current timeframe

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:21

___

### reset

• **reset**: `number`

Timeframe in milliseconds until the ratelimit resets

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:25

___

### resetRemaining

• `Private` **resetRemaining**: `any`

Reset the remaining tokens to the base limit

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:58

___

### resetTimeout

• **resetTimeout**: ``null`` \| [`Timeout`](internal_.Timeout.md)

Timeout that calls the reset function once the timeframe passed

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:29

___

### routeKey

• **routeKey**: `string`

Key used internally to routify requests

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:37

___

### default

▪ `Static` `Readonly` **default**: typeof [`LocalBucket`](internal_.LocalBucket-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:38

## Methods

### checkQueue

▸ **checkQueue**(): `void`

Check if there are any functions in the queue that haven't been executed yet

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:54

___

### dropQueue

▸ **dropQueue**(): `void`

Clear the current queue of events to be sent

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:62

___

### queue

▸ **queue**<`T`\>(`fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Queue a function to be executed

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`bucket`: [`LocalBucket`](internal_.LocalBucket-1.md)) => `T` | function to be executed |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Result of the function if any

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/LocalBucket.d.ts:50
