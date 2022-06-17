[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RatelimitBucket

# Class: RatelimitBucket

[<internal>](../modules/internal_.md).RatelimitBucket

RatelimitBucket, used for ratelimiting the execution of functions.

## Table of contents

### Constructors

- [constructor](internal_.RatelimitBucket.md#constructor)

### Properties

- [checkQueue](internal_.RatelimitBucket.md#checkqueue)
- [defaultReset](internal_.RatelimitBucket.md#defaultreset)
- [fnQueue](internal_.RatelimitBucket.md#fnqueue)
- [limit](internal_.RatelimitBucket.md#limit)
- [limitReset](internal_.RatelimitBucket.md#limitreset)
- [remaining](internal_.RatelimitBucket.md#remaining)
- [resetRemaining](internal_.RatelimitBucket.md#resetremaining)
- [resetTimeout](internal_.RatelimitBucket.md#resettimeout)
- [default](internal_.RatelimitBucket.md#default)

### Methods

- [dropQueue](internal_.RatelimitBucket.md#dropqueue)
- [queue](internal_.RatelimitBucket.md#queue)

## Constructors

### constructor

• **new RatelimitBucket**(`limit?`, `limitReset?`, `defaultReset?`)

Create a new Bucket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of functions that may be executed during the timeframe set in limitReset. |
| `limitReset?` | `number` | Timeframe in milliseconds until the ratelimit resets. |
| `defaultReset?` | `number` | If the bucket info does not provide default values, but provides remaining, this is the reset to use after the initial reset. |

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:24

## Properties

### checkQueue

• `Private` **checkQueue**: `any`

Check if there are any functions in the queue that haven't been executed yet.

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:34

___

### defaultReset

• **defaultReset**: `undefined` \| `number`

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:14

___

### fnQueue

• **fnQueue**: { `error`: [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ) ; `callback`: () => `unknown` ; `fn`: () => `unknown`  }[]

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:6

___

### limit

• **limit**: `number`

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:11

___

### limitReset

• **limitReset**: `number`

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:13

___

### remaining

• **remaining**: `number`

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:12

___

### resetRemaining

• `Private` **resetRemaining**: `any`

Reset the remaining tokens to the base limit.

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:38

___

### resetTimeout

• **resetTimeout**: ``null`` \| [`Timeout`](internal_.Timeout.md)

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:15

___

### default

▪ `Static` `Readonly` **default**: typeof [`RatelimitBucket`](internal_.RatelimitBucket.md)

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:16

## Methods

### dropQueue

▸ **dropQueue**(): `void`

Clear the current queue of events to be sent.

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:42

___

### queue

▸ **queue**<`T`\>(`fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Queue a function to be executed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `T` | Function to be executed. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Result of the function if any.

#### Defined in

node_modules/cloudstorm/dist/structures/RatelimitBucket.d.ts:30
