[Avocord](../README.md) / [Exports](../modules.md) / Client

# Class: Client

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter.md)

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [dmChannels](Client.md#dmchannels)
- [gateway](Client.md#gateway)
- [guilds](Client.md#guilds)
- [rest](Client.md#rest)
- [user](Client.md#user)
- [defaultMaxListeners](Client.md#defaultmaxlisteners)

### Methods

- [addListener](Client.md#addlistener)
- [emit](Client.md#emit)
- [eventNames](Client.md#eventnames)
- [getMaxListeners](Client.md#getmaxlisteners)
- [listenerCount](Client.md#listenercount)
- [listeners](Client.md#listeners)
- [login](Client.md#login)
- [off](Client.md#off)
- [on](Client.md#on)
- [once](Client.md#once)
- [prependListener](Client.md#prependlistener)
- [prependOnceListener](Client.md#prependoncelistener)
- [rawListeners](Client.md#rawlisteners)
- [removeAllListeners](Client.md#removealllisteners)
- [removeListener](Client.md#removelistener)
- [setMaxListeners](Client.md#setmaxlisteners)
- [listenerCount](Client.md#listenercount-1)

## Constructors

### constructor

• **new Client**(`ops`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | `Object` |
| `ops.cloudstormOptions?` | [`IClientOptions`](../interfaces/internal_.IClientOptions.md) |
| `ops.snowtransferInstance?` | [`SnowTransfer`](internal_.SnowTransfer.md) |
| `ops.snowtransferOptions?` | `Object` |
| `ops.snowtransferOptions.baseHost` | `string` |
| `ops.snowtransferOptions.disableEveryone` | `boolean` |
| `ops.token` | `string` |

#### Overrides

[EventEmitter](internal_.EventEmitter.md).[constructor](internal_.EventEmitter.md#constructor)

#### Defined in

[src/gateway/Client.ts:17](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L17)

## Properties

### dmChannels

• **dmChannels**: [`Collection`](internal_.Collection.md)<`string`, [`DMChannel`](DMChannel.md)\>

#### Defined in

[src/gateway/Client.ts:12](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L12)

___

### gateway

• **gateway**: [`Gateway`](Gateway.md)

#### Defined in

[src/gateway/Client.ts:14](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L14)

___

### guilds

• **guilds**: [`Collection`](internal_.Collection.md)<`string`, [`Guild`](Guild.md)\>

#### Defined in

[src/gateway/Client.ts:11](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L11)

___

### rest

• **rest**: [`SnowTransfer`](internal_.SnowTransfer.md)

#### Defined in

[src/gateway/Client.ts:13](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L13)

___

### user

• **user**: ``null`` \| [`User`](User.md)

#### Defined in

[src/gateway/Client.ts:15](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L15)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[defaultMaxListeners](internal_.EventEmitter.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:9

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[addListener](internal_.EventEmitter.md#addlistener)

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

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[emit](internal_.EventEmitter.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:23

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[eventNames](internal_.EventEmitter.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:24

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

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listenerCount](internal_.EventEmitter.md#listenercount)

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

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[listeners](internal_.EventEmitter.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:21

___

### login

▸ **login**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[src/gateway/Client.ts:39](https://github.com/avocord/disonejs/blob/0170c9a/src/gateway/Client.ts#L39)

___

### off

▸ **off**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[off](internal_.EventEmitter.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:17

___

### on

▸ **on**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[on](internal_.EventEmitter.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:12

___

### once

▸ **once**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[once](internal_.EventEmitter.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:13

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependListener](internal_.EventEmitter.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:14

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[prependOnceListener](internal_.EventEmitter.md#prependoncelistener)

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

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[rawListeners](internal_.EventEmitter.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:22

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeAllListeners](internal_.EventEmitter.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:18

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter.md).[removeListener](internal_.EventEmitter.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:16

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](Client.md)

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
