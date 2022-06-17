[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Ratelimiter

# Class: Ratelimiter

[<internal>](../modules/internal_.md).Ratelimiter

Ratelimiter used for handling the ratelimits imposed by the rest api

## Table of contents

### Constructors

- [constructor](internal_.Ratelimiter.md#constructor)

### Properties

- [\_timeout](internal_.Ratelimiter.md#_timeout)
- [\_timeoutDuration](internal_.Ratelimiter.md#_timeoutduration)
- [\_timeoutFN](internal_.Ratelimiter.md#_timeoutfn)
- [buckets](internal_.Ratelimiter.md#buckets)
- [global](internal_.Ratelimiter.md#global)
- [globalResetAt](internal_.Ratelimiter.md#globalresetat)

### Methods

- [queue](internal_.Ratelimiter.md#queue)
- [routify](internal_.Ratelimiter.md#routify)

## Constructors

### constructor

• **new Ratelimiter**()

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:22

## Properties

### \_timeout

• `Protected` **\_timeout**: [`Timeout`](internal_.Timeout.md)

This is an interval to constantly check Buckets which should be reset or unreferenced from the RateLimiter to be swept by the garbage collector.
This 1 timeout is more performant as compared to potentially many more ticking timers to reset individual bucket remaining values.

YOU SHOULD NEVER OVERRIDE THIS UNLESS YOU KNOW WHAT YOU'RE DOING. REQUESTS MAY POSSIBLY NEVER EXECUTE WITHOUT THIS AND/OR MEMORY MAY SLOWLY CLIMB OVER TIME.

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:19

___

### \_timeoutDuration

• `Protected` **\_timeoutDuration**: `number`

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:21

___

### \_timeoutFN

• `Protected` **\_timeoutFN**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:20

___

### buckets

• **buckets**: `Object`

#### Index signature

▪ [routeKey: `string`]: [`LocalBucket`](internal_.LocalBucket.md)

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:8

___

### global

• **global**: `boolean`

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:11

___

### globalResetAt

• **globalResetAt**: `number`

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:12

## Methods

### queue

▸ **queue**(`fn`, `url`, `method`): `void`

Queue a rest call to be executed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`bucket`: [`LocalBucket`](internal_.LocalBucket.md)) => `any` | function to call once the ratelimit is ready |
| `url` | `string` | Endpoint of the request |
| `method` | `string` | Http method used by the request |

#### Returns

`void`

#### Defined in

node_modules/snowtransfer/dist/Ratelimiter.d.ts:37

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

node_modules/snowtransfer/dist/Ratelimiter.d.ts:30
