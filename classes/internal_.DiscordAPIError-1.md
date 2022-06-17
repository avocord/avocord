[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DiscordAPIError

# Class: DiscordAPIError

[<internal>](../modules/internal_.md).DiscordAPIError

## Hierarchy

- [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

  ↳ **`DiscordAPIError`**

## Table of contents

### Constructors

- [constructor](internal_.DiscordAPIError-1.md#constructor)

### Properties

- [code](internal_.DiscordAPIError-1.md#code)
- [httpStatus](internal_.DiscordAPIError-1.md#httpstatus)
- [message](internal_.DiscordAPIError-1.md#message)
- [method](internal_.DiscordAPIError-1.md#method)
- [name](internal_.DiscordAPIError-1.md#name)
- [path](internal_.DiscordAPIError-1.md#path)
- [stack](internal_.DiscordAPIError-1.md#stack)
- [stackTraceLimit](internal_.DiscordAPIError-1.md#stacktracelimit)

### Methods

- [captureStackTrace](internal_.DiscordAPIError-1.md#capturestacktrace)
- [flattenErrors](internal_.DiscordAPIError-1.md#flattenerrors)
- [prepareStackTrace](internal_.DiscordAPIError-1.md#preparestacktrace)

## Constructors

### constructor

• **new DiscordAPIError**(`path`, `error`, `method`, `status`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `error` | `any` |
| `method` | [`HTTPMethod`](../modules/internal_.md#httpmethod-1) |
| `status` | `number` |

#### Overrides

Error.constructor

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:10

## Properties

### code

• **code**: `number`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:8

___

### httpStatus

• **httpStatus**: `number`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:9

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### method

• **method**: [`HTTPMethod`](../modules/internal_.md#httpmethod-1)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:6

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### path

• **path**: `string`

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:7

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | [`Object`](../modules/internal_.md#object) |
| `constructorOpt?` | [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133

___

### flattenErrors

▸ `Static` **flattenErrors**(`obj`, `key?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Record`](../modules/internal_.md#record)<`string`, `any`\> |
| `key?` | `string` |

#### Returns

`string`[]

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:11

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error ) |
| `stackTraces` | [`CallSite`](../interfaces/internal_.CallSite.md)[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140
