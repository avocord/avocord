[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APITextInputComponent

# Interface: APITextInputComponent

[<internal>](../modules/internal_.md).APITextInputComponent

https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure

## Hierarchy

- [`APIBaseComponent`](internal_.APIBaseComponent.md)<[`TextInput`](../enums/internal_.ComponentType.md#textinput)\>

  ↳ **`APITextInputComponent`**

## Table of contents

### Properties

- [custom\_id](internal_.APITextInputComponent.md#custom_id)
- [label](internal_.APITextInputComponent.md#label)
- [max\_length](internal_.APITextInputComponent.md#max_length)
- [min\_length](internal_.APITextInputComponent.md#min_length)
- [placeholder](internal_.APITextInputComponent.md#placeholder)
- [required](internal_.APITextInputComponent.md#required)
- [style](internal_.APITextInputComponent.md#style)
- [type](internal_.APITextInputComponent.md#type)
- [value](internal_.APITextInputComponent.md#value)

## Properties

### custom\_id

• **custom\_id**: `string`

The custom id for the text input

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1255

___

### label

• **label**: `string`

Text that appears on top of the text input field, max 80 characters

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1259

___

### max\_length

• `Optional` **max\_length**: `number`

Maximal length of text input

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1275

___

### min\_length

• `Optional` **min\_length**: `number`

Minimal length of text input

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1271

___

### placeholder

• `Optional` **placeholder**: `string`

Placeholder for the text input

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1263

___

### required

• `Optional` **required**: `boolean`

Whether or not this text input is required or not

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1279

___

### style

• **style**: [`TextInputStyle`](../enums/internal_.TextInputStyle.md)

One of text input styles

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1251

___

### type

• **type**: [`TextInput`](../enums/internal_.ComponentType.md#textinput)

The type of the component

#### Inherited from

[APIBaseComponent](internal_.APIBaseComponent.md).[type](internal_.APIBaseComponent.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1087

___

### value

• `Optional` **value**: `string`

The pre-filled text in the text input

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1267
