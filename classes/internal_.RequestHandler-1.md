[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RequestHandler

# Class: RequestHandler

[<internal>](../modules/internal_.md).RequestHandler

Request Handler class

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`RequestHandler`**

## Table of contents

### Constructors

- [constructor](internal_.RequestHandler-1.md#constructor)

### Properties

- [\_applyRatelimitHeaders](internal_.RequestHandler-1.md#_applyratelimitheaders)
- [\_multiPartRequest](internal_.RequestHandler-1.md#_multipartrequest)
- [\_request](internal_.RequestHandler-1.md#_request)
- [apiURL](internal_.RequestHandler-1.md#apiurl)
- [latency](internal_.RequestHandler-1.md#latency)
- [options](internal_.RequestHandler-1.md#options)
- [ratelimiter](internal_.RequestHandler-1.md#ratelimiter)
- [DiscordAPIErrror](internal_.RequestHandler-1.md#discordapierrror)
- [defaultMaxListeners](internal_.RequestHandler-1.md#defaultmaxlisteners)

### Methods

- [addListener](internal_.RequestHandler-1.md#addlistener)
- [emit](internal_.RequestHandler-1.md#emit)
- [eventNames](internal_.RequestHandler-1.md#eventnames)
- [getMaxListeners](internal_.RequestHandler-1.md#getmaxlisteners)
- [listenerCount](internal_.RequestHandler-1.md#listenercount)
- [listeners](internal_.RequestHandler-1.md#listeners)
- [off](internal_.RequestHandler-1.md#off)
- [on](internal_.RequestHandler-1.md#on)
- [once](internal_.RequestHandler-1.md#once)
- [prependListener](internal_.RequestHandler-1.md#prependlistener)
- [prependOnceListener](internal_.RequestHandler-1.md#prependoncelistener)
- [rawListeners](internal_.RequestHandler-1.md#rawlisteners)
- [removeAllListeners](internal_.RequestHandler-1.md#removealllisteners)
- [removeListener](internal_.RequestHandler-1.md#removelistener)
- [request](internal_.RequestHandler-1.md#request)
- [setMaxListeners](internal_.RequestHandler-1.md#setmaxlisteners)
- [listenerCount](internal_.RequestHandler-1.md#listenercount-1)

## Constructors

### constructor

• **new RequestHandler**(`ratelimiter`, `options`)

Create a new request handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratelimiter` | [`Ratelimiter`](internal_.Ratelimiter-1.md) | ratelimiter to use for ratelimiting requests |
| `options` | `Object` | options |
| `options.baseHost` | `string` | - |
| `options.token?` | `string` | - |

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:66

## Properties

### \_applyRatelimitHeaders

• `Private` **\_applyRatelimitHeaders**: `any`

Apply the received ratelimit headers to the ratelimit bucket

**`param`** Ratelimit bucket to apply the headers to

**`param`** Http headers received from discord

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:84

___

### \_multiPartRequest

• `Private` **\_multiPartRequest**: `any`

Execute a multipart/form-data request

**`param`** Endpoint to use

**`param`** Http Method to use

**`param`** data to send

**`returns`** Result of the request

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:100

___

### \_request

• `Private` **\_request**: `any`

Execute a normal json request

**`param`** Endpoint to use

**`param`** Data to send

**`param`** Whether to send the data in the body or use query params

**`returns`** Result of the request

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:92

___

### apiURL

• **apiURL**: `string`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:59

___

### latency

• **latency**: `number`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:58

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseHost` | `string` |
| `baseURL` | `string` |
| `headers` | { `Authorization?`: `string` ; `User-Agent`: `string`  } |
| `headers.Authorization?` | `string` |
| `headers.User-Agent` | `string` |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:50

___

### ratelimiter

• **ratelimiter**: [`Ratelimiter`](internal_.Ratelimiter-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:49

___

### DiscordAPIErrror

▪ `Static` **DiscordAPIErrror**: typeof [`DiscordAPIError`](internal_.DiscordAPIError-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:60

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:31

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[]

#### Returns

keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:33

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[getMaxListeners](internal_.EventEmitter.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:20

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:34

___

### listeners

▸ **listeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:35

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:36

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:37

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:38

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:39

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:40

___

### rawListeners

▸ **rawListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:41

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:42

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`HandlerEvents`](../interfaces/internal_.HandlerEvents-1.md)[`E`]) => `any` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:43

___

### request

▸ **request**(`endpoint`, `method`, `dataType?`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Request a route from the discord api

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | endpoint to request |
| `method` | [`HTTPMethod`](../modules/internal_.md#httpmethod-1) | http method to use |
| `dataType?` | ``"json"`` \| ``"multipart"`` | type of the data being sent |
| `data?` | `any` | data to send, if any |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Result of the request

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:78

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RequestHandler`](internal_.RequestHandler-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RequestHandler`](internal_.RequestHandler-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[setMaxListeners](internal_.EventEmitter.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:19

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](internal_.EventEmitter.md) |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:8
