[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APIButtonComponentWithCustomId

# Interface: APIButtonComponentWithCustomId

[<internal>](../modules/internal_.md).APIButtonComponentWithCustomId

## Hierarchy

- [`APIButtonComponentBase`](internal_.APIButtonComponentBase.md)<[`Primary`](../modules/internal_.md#primary) \| [`Secondary`](../modules/internal_.md#secondary) \| [`Success`](../modules/internal_.md#success) \| [`Danger`](../modules/internal_.md#danger)\>

  ↳ **`APIButtonComponentWithCustomId`**

## Table of contents

### Properties

- [custom\_id](internal_.APIButtonComponentWithCustomId.md#custom_id)
- [disabled](internal_.APIButtonComponentWithCustomId.md#disabled)
- [emoji](internal_.APIButtonComponentWithCustomId.md#emoji)
- [label](internal_.APIButtonComponentWithCustomId.md#label)
- [style](internal_.APIButtonComponentWithCustomId.md#style)
- [type](internal_.APIButtonComponentWithCustomId.md#type)

## Properties

### custom\_id

• **custom\_id**: `string`

The custom_id to be sent in the interaction when clicked

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:1158

___

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

• **style**: [`Primary`](../modules/internal_.md#primary) \| [`Secondary`](../modules/internal_.md#secondary) \| [`Success`](../modules/internal_.md#success) \| [`Danger`](../modules/internal_.md#danger)

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
