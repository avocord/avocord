[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BetterWs

# Class: BetterWs

[<internal>](../modules/internal_.md).BetterWs

Helper Class for simplifying the websocket connection to Discord.

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`BetterWs`**

## Table of contents

### Constructors

- [constructor](internal_.BetterWs.md#constructor)

### Properties

- [\_connecting](internal_.BetterWs.md#_connecting)
- [\_internal](internal_.BetterWs.md#_internal)
- [\_onClose](internal_.BetterWs.md#_onclose)
- [\_onError](internal_.BetterWs.md#_onerror)
- [\_onReadable](internal_.BetterWs.md#_onreadable)
- [\_processFrame](internal_.BetterWs.md#_processframe)
- [\_socket](internal_.BetterWs.md#_socket)
- [\_write](internal_.BetterWs.md#_write)
- [address](internal_.BetterWs.md#address)
- [compress](internal_.BetterWs.md#compress)
- [encoding](internal_.BetterWs.md#encoding)
- [options](internal_.BetterWs.md#options)
- [presenceBucket](internal_.BetterWs.md#presencebucket)
- [wsBucket](internal_.BetterWs.md#wsbucket)
- [defaultMaxListeners](internal_.BetterWs.md#defaultmaxlisteners)

### Accessors

- [status](internal_.BetterWs.md#status)

### Methods

- [addListener](internal_.BetterWs.md#addlistener)
- [close](internal_.BetterWs.md#close)
- [connect](internal_.BetterWs.md#connect)
- [emit](internal_.BetterWs.md#emit)
- [eventNames](internal_.BetterWs.md#eventnames)
- [getMaxListeners](internal_.BetterWs.md#getmaxlisteners)
- [listenerCount](internal_.BetterWs.md#listenercount)
- [listeners](internal_.BetterWs.md#listeners)
- [off](internal_.BetterWs.md#off)
- [on](internal_.BetterWs.md#on)
- [once](internal_.BetterWs.md#once)
- [prependListener](internal_.BetterWs.md#prependlistener)
- [prependOnceListener](internal_.BetterWs.md#prependoncelistener)
- [rawListeners](internal_.BetterWs.md#rawlisteners)
- [removeAllListeners](internal_.BetterWs.md#removealllisteners)
- [removeListener](internal_.BetterWs.md#removelistener)
- [sendMessage](internal_.BetterWs.md#sendmessage)
- [setMaxListeners](internal_.BetterWs.md#setmaxlisteners)
- [listenerCount](internal_.BetterWs.md#listenercount-1)

## Constructors

### constructor

• **new BetterWs**(`address`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `options` | [`IClientWSOptions`](../interfaces/internal_.IClientWSOptions.md) |

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:39

## Properties

### \_connecting

• `Private` **\_connecting**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:38

___

### \_internal

• `Private` **\_internal**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:37

___

### \_onClose

• `Private` **\_onClose**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:46

___

### \_onError

• `Private` **\_onError**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:45

___

### \_onReadable

• `Private` **\_onReadable**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:47

___

### \_processFrame

• `Private` **\_processFrame**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:48

___

### \_socket

• `Private` **\_socket**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:36

___

### \_write

• `Private` **\_write**: `any`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:44

___

### address

• **address**: `string`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:32

___

### compress

• **compress**: `boolean`

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:31

___

### encoding

• **encoding**: ``"json"`` \| ``"etf"``

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:30

___

### options

• **options**: [`IClientWSOptions`](../interfaces/internal_.IClientWSOptions.md)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:33

___

### presenceBucket

• **presenceBucket**: [`RatelimitBucket`](internal_.RatelimitBucket.md)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:35

___

### wsBucket

• **wsBucket**: [`RatelimitBucket`](internal_.RatelimitBucket.md)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:34

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Accessors

### status

• `get` **status**(): ``1`` \| ``2`` \| ``3`` \| ``4``

#### Returns

``1`` \| ``2`` \| ``3`` \| ``4``

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:40

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:12

___

### close

▸ **close**(`code`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:42

___

### connect

▸ **connect**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:41

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:13

___

### eventNames

▸ **eventNames**(): keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[]

#### Returns

keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:14

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
| `event` | keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:15

___

### listeners

▸ **listeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:16

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:17

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:18

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:19

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:21

___

### rawListeners

▸ **rawListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Returns

(...`args`: `any`[]) => `any`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:22

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BetterWs`](internal_.BetterWs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:23

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`BetterWs`](internal_.BetterWs.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`BWSEvents`](../interfaces/internal_.BWSEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | (...`args`: [`BWSEvents`](../interfaces/internal_.BWSEvents.md)[`E`]) => `any` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:24

___

### sendMessage

▸ **sendMessage**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IWSMessage`](../interfaces/internal_.IWSMessage.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

node_modules/cloudstorm/dist/structures/BetterWs.d.ts:43

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`BetterWs`](internal_.BetterWs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BetterWs`](internal_.BetterWs.md)

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
