[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventEmitter

# Class: EventEmitter

[<internal>](../modules/internal_.md).EventEmitter

## Hierarchy

- **`EventEmitter`**

  ↳ [`internal`](internal_.internal-1.md)

## Table of contents

### Constructors

- [constructor](internal_.EventEmitter-1.md#constructor)

### Methods

- [addListener](internal_.EventEmitter-1.md#addlistener)
- [emit](internal_.EventEmitter-1.md#emit)
- [eventNames](internal_.EventEmitter-1.md#eventnames)
- [getMaxListeners](internal_.EventEmitter-1.md#getmaxlisteners)
- [listenerCount](internal_.EventEmitter-1.md#listenercount)
- [listeners](internal_.EventEmitter-1.md#listeners)
- [off](internal_.EventEmitter-1.md#off)
- [on](internal_.EventEmitter-1.md#on)
- [once](internal_.EventEmitter-1.md#once)
- [prependListener](internal_.EventEmitter-1.md#prependlistener)
- [prependOnceListener](internal_.EventEmitter-1.md#prependoncelistener)
- [rawListeners](internal_.EventEmitter-1.md#rawlisteners)
- [removeAllListeners](internal_.EventEmitter-1.md#removealllisteners)
- [removeListener](internal_.EventEmitter-1.md#removelistener)
- [setMaxListeners](internal_.EventEmitter-1.md#setmaxlisteners)

## Constructors

### constructor

• **new EventEmitter**()

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

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

#### Defined in

node_modules/@types/node/globals.d.ts:589

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Defined in

node_modules/@types/node/globals.d.ts:594

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

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

#### Defined in

node_modules/@types/node/globals.d.ts:587

___

### off

▸ **off**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:583

___

### on

▸ **on**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:580

___

### once

▸ **once**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:581

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:592

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

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

#### Defined in

node_modules/@types/node/globals.d.ts:588

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:584

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:582

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`EventEmitter`](internal_.EventEmitter-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EventEmitter`](internal_.EventEmitter-1.md)

#### Defined in

node_modules/@types/node/globals.d.ts:585
