[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / VoiceMethods

# Class: VoiceMethods

[<internal>](../modules/internal_.md).VoiceMethods

Methods for interacting with voice stuff via rest

## Table of contents

### Constructors

- [constructor](internal_.VoiceMethods.md#constructor)

### Properties

- [requestHandler](internal_.VoiceMethods.md#requesthandler)

### Methods

- [getVoiceRegions](internal_.VoiceMethods.md#getvoiceregions)

## Constructors

### constructor

• **new VoiceMethods**(`requestHandler`)

Create a new Voice Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.voice.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/Voices.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Voices.d.ts:5

## Methods

### getVoiceRegions

▸ **getVoiceRegions**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

Get currently available voice regions that can be used when creating servers

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

Array of [voice region](https://discord.com/developers/docs/resources/voice#voice-region-object) objects

#### Defined in

node_modules/snowtransfer/dist/methods/Voices.d.ts:19
