[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BotMethods

# Class: BotMethods

[<internal>](../modules/internal_.md).BotMethods

Methods for interacting with bot specific endpoints

## Table of contents

### Constructors

- [constructor](internal_.BotMethods.md#constructor)

### Properties

- [requestHandler](internal_.BotMethods.md#requesthandler)

### Methods

- [getGateway](internal_.BotMethods.md#getgateway)
- [getGatewayBot](internal_.BotMethods.md#getgatewaybot)

## Constructors

### constructor

• **new BotMethods**(`requestHandler`)

Create a new Bot Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.bot.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/Bots.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Bots.d.ts:5

## Methods

### getGateway

▸ **getGateway**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `url`: `string`  }\>

Get the gateway url to connect to

**`example`**
const client = new SnowTransfer('TOKEN');
const result = await client.bot.getGateway();
// result should be something like { url: "wss://gateway.discord.gg" }

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `url`: `string`  }\>

(https://discord.com/developers/docs/topics/gateway#get-gateway-example-response)

#### Defined in

node_modules/snowtransfer/dist/methods/Bots.d.ts:24

___

### getGatewayBot

▸ **getGatewayBot**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

Get the gateway url to connect to and a recommended amount of shards to use

**`example`**
const client = new SnowTransfer('TOKEN');
const result = await client.bot.getGateway();
// result should be something like { url: "wss://gateway.discord.gg", shards: 1, session_start_limit: { total: 1000, remaining: 999, reset_after: 14400000, max_concurrency: 1 } }

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `session_start_limit`: [`SessionStartLimit`](../modules/internal_.md#sessionstartlimit) ; `shards`: `number` ; `url`: `string`  }\>

(https://discord.com/developers/docs/topics/gateway#get-gateway-example-response)

#### Defined in

node_modules/snowtransfer/dist/methods/Bots.d.ts:36
