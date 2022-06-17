[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Ratelimiter

# Class: Ratelimiter

[<internal>](../modules/internal_.md).Ratelimiter

Ratelimiter used for handling the ratelimits imposed by the rest api

## Table of contents

### Constructors

- [constructor](internal_.Ratelimiter-1.md#constructor)

### Properties

- [\_global](internal_.Ratelimiter-1.md#_global)
- [buckets](internal_.Ratelimiter-1.md#buckets)
- [globalReset](internal_.Ratelimiter-1.md#globalreset)
- [globalResetTimeout](internal_.Ratelimiter-1.md#globalresettimeout)
- [default](internal_.Ratelimiter-1.md#default)

### Accessors

- [global](internal_.Ratelimiter-1.md#global)

### Methods

- [queue](internal_.Ratelimiter-1.md#queue)
- [routify](internal_.Ratelimiter-1.md#routify)

## Constructors

### constructor

• **new Ratelimiter**()

## Properties

### \_global

• `Private` **\_global**: `any`

If you're being globally rate limited

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:17

___

### buckets

• **buckets**: `Object`

An object of Buckets that store rate limit info

#### Index signature

▪ [routeKey: `string`]: [`LocalBucket`](internal_.LocalBucket-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:11

___

### globalReset

• **globalReset**: `number`

Timeframe in milliseconds until when the global rate limit resets

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:21

___

### globalResetTimeout

• **globalResetTimeout**: ``null`` \| [`Timeout`](internal_.Timeout.md)

Timeout that resets the global ratelimit once the timeframe has passed

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:25

___

### default

▪ `Static` **default**: typeof [`Ratelimiter`](internal_.Ratelimiter-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:26

## Accessors

### global

• `get` **global**(): `boolean`

If you're being globally rate limited

#### Returns

`boolean`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:30

• `set` **global**(`value`): `void`

If you're being globally rate limited

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:34

## Methods

### queue

▸ **queue**(`fn`, `url`, `method`): `void`

Queue a rest call to be executed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`bucket`: [`LocalBucket`](internal_.LocalBucket-1.md)) => `any` | function to call once the ratelimit is ready |
| `url` | `string` | Endpoint of the request |
| `method` | `string` | Http method used by the request |

#### Returns

`void`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:49

___

### routify

▸ **routify**(`url`, `method`): `string`

Returns a key for saving ratelimits for routes
(Taken from https://github.com/abalabahaha/eris/blob/master/lib/rest/RequestHandler.js) -> I luv u abal <3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url to reduce to a key something like /channels/266277541646434305/messages/266277541646434305/ |
| `method` | `string` | method of the request, usual http methods like get, etc. |

#### Returns

`string`

reduced url: /channels/266277541646434305/messages/:id/

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/Ratelimiter.d.ts:42
