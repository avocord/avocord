[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / VoiceMethods

# Class: VoiceMethods

[<internal>](../modules/internal_.md).VoiceMethods

Methods for interacting with voice stuff via rest

## Table of contents

### Constructors

- [constructor](internal_.VoiceMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.VoiceMethods-1.md#requesthandler)
- [default](internal_.VoiceMethods-1.md#default)

### Methods

- [getVoiceRegions](internal_.VoiceMethods-1.md#getvoiceregions)

## Constructors

### constructor

• **new VoiceMethods**(`requestHandler`)

Create a new Voice Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.voice.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Voice.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Voice.d.ts:5

___

### default

▪ `Static` **default**: typeof [`VoiceMethods`](internal_.VoiceMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Voice.d.ts:6

## Methods

### getVoiceRegions

▸ **getVoiceRegions**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

Get currently available voice regions that can be used when creating servers

**`example`**
const client = new SnowTransfer("TOKEN")
const regions = await client.voice.getVoiceRegions()

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

Array of [voice region](https://discord.com/developers/docs/resources/voice#voice-region-object) objects

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Voice.d.ts:24
