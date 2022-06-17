[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / HandlerEvents

# Interface: HandlerEvents

[<internal>](../modules/internal_.md).HandlerEvents

## Table of contents

### Properties

- [done](internal_.HandlerEvents-1.md#done)
- [rateLimit](internal_.HandlerEvents-1.md#ratelimit)
- [request](internal_.HandlerEvents-1.md#request)
- [requestError](internal_.HandlerEvents-1.md#requesterror)

## Properties

### done

• **done**: [`string`, `Response`]

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:20

___

### rateLimit

• **rateLimit**: [{ `limit`: `number` ; `method`: [`HTTPMethod`](../modules/internal_.md#httpmethod-1) ; `path`: `string` ; `route`: `string` ; `timeout`: `number`  }]

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:22

___

### request

• **request**: [`string`, { `data`: `any` ; `dataType`: ``"json"`` \| ``"multipart"`` ; `endpoint`: `string` ; `method`: [`HTTPMethod`](../modules/internal_.md#httpmethod-1)  }]

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:14

___

### requestError

• **requestError**: [`string`, [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )]

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/RequestHandler.d.ts:21
