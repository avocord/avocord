[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AuditLogMethods

# Class: AuditLogMethods

[<internal>](../modules/internal_.md).AuditLogMethods

Methods for interacting with Guild Audit Logs

## Table of contents

### Constructors

- [constructor](internal_.AuditLogMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.AuditLogMethods-1.md#requesthandler)
- [default](internal_.AuditLogMethods-1.md#default)

### Methods

- [getAuditLog](internal_.AuditLogMethods-1.md#getauditlog)

## Constructors

### constructor

• **new AuditLogMethods**(`requestHandler`)

Create a new Audit Log Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.auditLog.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/AuditLog.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/AuditLog.d.ts:5

___

### default

▪ `Static` **default**: typeof [`AuditLogMethods`](internal_.AuditLogMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/AuditLog.d.ts:6

## Methods

### getAuditLog

▸ **getAuditLog**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuditLog`](../modules/internal_.md#auditlog)\>

Get the audit logs of the specified guild id

**`example`**
// Get an audit log entry of user 12345678901234567 updating themself (24 is MEMBER_UPDATE)
const client = new SnowTransfer("TOKEN")
const data = {
	user_id: "12345678901234567",
	action_type: 24,
}
const channel = await client.auditLog.getAuditLog("guild id", data)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | id of a guild |
| `data?` | `Object` | optional audit log filter values |
| `data.action_type?` | [`AuditLogEvent`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.md#auditlogevent) | - |
| `data.before?` | `string` | - |
| `data.limit?` | `number` | - |
| `data.user_id?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuditLog`](../modules/internal_.md#auditlog)\>

An object with [audit log data](https://discord.com/developers/docs/resources/audit-log#audit-log-object)

| Permissions needed | Condition |
|--------------------|-----------|
| VIEW_AUDIT_LOG     | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/AuditLog.d.ts:35
