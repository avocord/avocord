[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventEmitter

# Class: EventEmitter

[<internal>](../modules/internal_.md).EventEmitter

## Hierarchy

- [`internal`](internal_.internal-1.md)

  ↳ **`EventEmitter`**

  ↳↳ [`Client`](Client.md)

  ↳↳ [`Client`](internal_.Client.md)

  ↳↳ [`RequestHandler`](internal_.RequestHandler.md)

  ↳↳ [`Shard`](internal_.Shard.md)

  ↳↳ [`RequestHandler`](internal_.RequestHandler-1.md)

  ↳↳ [`DiscordConnector`](internal_.DiscordConnector.md)

  ↳↳ [`BetterWs`](internal_.BetterWs.md)

## Table of contents

### Constructors

- [constructor](internal_.EventEmitter.md#constructor)

### Properties

- [defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

### Methods

- [addListener](internal_.EventEmitter.md#addlistener)
- [emit](internal_.EventEmitter.md#emit)
- [eventNames](internal_.EventEmitter.md#eventnames)
- [getMaxListeners](internal_.EventEmitter.md#getmaxlisteners)
- [listenerCount](internal_.EventEmitter.md#listenercount)
- [listeners](internal_.EventEmitter.md#listeners)
- [off](internal_.EventEmitter.md#off)
- [on](internal_.EventEmitter.md#on)
- [once](internal_.EventEmitter.md#once)
- [prependListener](internal_.EventEmitter.md#prependlistener)
- [prependOnceListener](internal_.EventEmitter.md#prependoncelistener)
- [rawListeners](internal_.EventEmitter.md#rawlisteners)
- [removeAllListeners](internal_.EventEmitter.md#removealllisteners)
- [removeListener](internal_.EventEmitter.md#removelistener)
- [setMaxListeners](internal_.EventEmitter.md#setmaxlisteners)
- [listenerCount](internal_.EventEmitter.md#listenercount-1)

## Constructors

### constructor

• **new EventEmitter**()

#### Inherited from

[internal](internal_.internal-1.md).[constructor](internal_.internal-1.md#constructor)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[addListener](internal_.internal-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:11

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

[internal](internal_.internal-1.md).[emit](internal_.internal-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:23

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Overrides

[internal](internal_.internal-1.md).[eventNames](internal_.internal-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:24

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Overrides

[internal](internal_.internal-1.md).[getMaxListeners](internal_.internal-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:20

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Overrides

[internal](internal_.internal-1.md).[listenerCount](internal_.internal-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:25

___

### listeners

▸ **listeners**(`event`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Overrides

[internal](internal_.internal-1.md).[listeners](internal_.internal-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:21

___

### off

▸ **off**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[off](internal_.internal-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:17

___

### on

▸ **on**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[on](internal_.internal-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:12

___

### once

▸ **once**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[once](internal_.internal-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:13

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[prependListener](internal_.internal-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:14

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[prependOnceListener](internal_.internal-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:15

___

### rawListeners

▸ **rawListeners**(`event`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Overrides

[internal](internal_.internal-1.md).[rawListeners](internal_.internal-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:22

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[removeAllListeners](internal_.internal-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:18

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[removeListener](internal_.internal-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:16

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`EventEmitter`](internal_.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EventEmitter`](internal_.EventEmitter.md)

#### Overrides

[internal](internal_.internal-1.md).[setMaxListeners](internal_.internal-1.md#setmaxlisteners)

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

#### Defined in

node_modules/@types/node/events.d.ts:8
