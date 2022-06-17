[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / internal

# Class: internal

[<internal>](../modules/internal_.md).internal

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter-1.md)

  ↳ **`internal`**

  ↳↳ [`EventEmitter`](internal_.EventEmitter.md)

  ↳↳ [`EventEmitter`](internal_.internal.EventEmitter.md)

## Table of contents

### Constructors

- [constructor](internal_.internal-1.md#constructor)

### Methods

- [addListener](internal_.internal-1.md#addlistener)
- [emit](internal_.internal-1.md#emit)
- [eventNames](internal_.internal-1.md#eventnames)
- [getMaxListeners](internal_.internal-1.md#getmaxlisteners)
- [listenerCount](internal_.internal-1.md#listenercount)
- [listeners](internal_.internal-1.md#listeners)
- [off](internal_.internal-1.md#off)
- [on](internal_.internal-1.md#on)
- [once](internal_.internal-1.md#once)
- [prependListener](internal_.internal-1.md#prependlistener)
- [prependOnceListener](internal_.internal-1.md#prependoncelistener)
- [rawListeners](internal_.internal-1.md#rawlisteners)
- [removeAllListeners](internal_.internal-1.md#removealllisteners)
- [removeListener](internal_.internal-1.md#removelistener)
- [setMaxListeners](internal_.internal-1.md#setmaxlisteners)

## Constructors

### constructor

• **new internal**()

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[constructor](internal_.EventEmitter-1.md#constructor)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[addListener](internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/@types/node/globals.d.ts:579

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

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[emit](internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/@types/node/globals.d.ts:589

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[eventNames](internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/@types/node/globals.d.ts:594

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[getMaxListeners](internal_.EventEmitter-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/globals.d.ts:586

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[listenerCount](internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/@types/node/globals.d.ts:590

___

### listeners

▸ **listeners**(`event`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[listeners](internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/@types/node/globals.d.ts:587

___

### off

▸ **off**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[off](internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/@types/node/globals.d.ts:583

___

### on

▸ **on**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[on](internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/@types/node/globals.d.ts:580

___

### once

▸ **once**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[once](internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/globals.d.ts:581

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[prependListener](internal_.EventEmitter-1.md#prependlistener)

#### Defined in

node_modules/@types/node/globals.d.ts:592

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[prependOnceListener](internal_.EventEmitter-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/globals.d.ts:593

___

### rawListeners

▸ **rawListeners**(`event`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[rawListeners](internal_.EventEmitter-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/globals.d.ts:588

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[removeAllListeners](internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/globals.d.ts:584

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[removeListener](internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/@types/node/globals.d.ts:582

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`internal`](internal_.internal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`internal`](internal_.internal-1.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[setMaxListeners](internal_.EventEmitter-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/globals.d.ts:585
