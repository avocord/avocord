[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AuditLogMethods

# Class: AuditLogMethods

[<internal>](../modules/internal_.md).AuditLogMethods

Methods for interacting with Guild Audit Logs

## Table of contents

### Constructors

- [constructor](internal_.AuditLogMethods.md#constructor)

### Properties

- [requestHandler](internal_.AuditLogMethods.md#requesthandler)

### Methods

- [getAuditLog](internal_.AuditLogMethods.md#getauditlog)

## Constructors

### constructor

• **new AuditLogMethods**(`requestHandler`)

Create a new Audit Log Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.auditLog.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/AuditLog.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/AuditLog.d.ts:5

## Methods

### getAuditLog

▸ **getAuditLog**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuditLog`](../modules/internal_.md#auditlog)\>

Get the audit logs of the specified guild id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | id of a guild |
| `data?` | [`Partial`](../modules/internal_.md#partial)<[`Pick`](../modules/internal_.md#pick)<[`AuditLogEntry`](../modules/internal_.md#auditlogentry), ``"user_id"`` \| ``"action_type"``\> & { `before`: `string` ; `limit`: `number`  }\> | optional audit log filter values |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuditLog`](../modules/internal_.md#auditlog)\>

An object with [audit log data](https://discord.com/developers/docs/resources/audit-log#audit-log-object)

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_AUDIT_LOG     | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/AuditLog.d.ts:25
