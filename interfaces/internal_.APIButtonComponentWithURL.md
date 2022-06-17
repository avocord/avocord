[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIButtonComponentWithURL

# Interface: APIButtonComponentWithURL

[<internal>](../modules/internal_.md).APIButtonComponentWithURL

## Hierarchy

- [`APIButtonComponentBase`](internal_.APIButtonComponentBase.md)<[`Link`](../modules/internal_.md#link)\>

  ↳ **`APIButtonComponentWithURL`**

## Table of contents

### Properties

- [disabled](internal_.APIButtonComponentWithURL.md#disabled)
- [emoji](internal_.APIButtonComponentWithURL.md#emoji)
- [label](internal_.APIButtonComponentWithURL.md#label)
- [style](internal_.APIButtonComponentWithURL.md#style)
- [type](internal_.APIButtonComponentWithURL.md#type)
- [url](internal_.APIButtonComponentWithURL.md#url)

## Properties

### disabled

• `Optional` **disabled**: `boolean`

The status of the button

#### Inherited from

[APIButtonComponentBase](internal_.APIButtonComponentBase.md).[disabled](internal_.APIButtonComponentBase.md#disabled)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1138

___

### emoji

• `Optional` **emoji**: [`APIMessageComponentEmoji`](internal_.APIMessageComponentEmoji.md)

The emoji to display to the left of the text

#### Inherited from

[APIButtonComponentBase](internal_.APIButtonComponentBase.md).[emoji](internal_.APIButtonComponentBase.md#emoji)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1134

___

### label

• `Optional` **label**: `string`

The label to be displayed on the button

#### Inherited from

[APIButtonComponentBase](internal_.APIButtonComponentBase.md).[label](internal_.APIButtonComponentBase.md#label)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1126

___

### style

• **style**: [`Link`](../modules/internal_.md#link)

The style of the button

#### Inherited from

[APIButtonComponentBase](internal_.APIButtonComponentBase.md).[style](internal_.APIButtonComponentBase.md#style)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1130

___

### type

• **type**: [`Button`](../enums/internal_.ComponentType.md#button)

The type of the component

#### Inherited from

[APIButtonComponentBase](internal_.APIButtonComponentBase.md).[type](internal_.APIButtonComponentBase.md#type)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1087

___

### url

• **url**: `string`

The URL to direct users to when clicked for Link buttons

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1164
