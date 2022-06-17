[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GitHubWebhookData

# Interface: GitHubWebhookData

[<internal>](../modules/internal_.md).GitHubWebhookData

Data from https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads#webhook-payload-object

## Table of contents

### Properties

- [action](internal_.GitHubWebhookData.md#action)
- [check\_run](internal_.GitHubWebhookData.md#check_run)
- [installation](internal_.GitHubWebhookData.md#installation)
- [organization](internal_.GitHubWebhookData.md#organization)
- [repository](internal_.GitHubWebhookData.md#repository)
- [requested\_action](internal_.GitHubWebhookData.md#requested_action)
- [sender](internal_.GitHubWebhookData.md#sender)

## Properties

### action

• **action**: ``"created"`` \| ``"completed"`` \| ``"rerequested"`` \| ``"requested_action"``

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:198

___

### check\_run

• `Optional` **check\_run**: `any`

https://docs.github.com/en/rest/reference/checks#get-a-check-run

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:202

___

### installation

• `Optional` **installation**: `any`

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:214

___

### organization

• `Optional` **organization**: `any`

https://docs.github.com/en/rest/reference/orgs#get-an-organization

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:213

___

### repository

• **repository**: `any`

https://docs.github.com/en/rest/reference/repos#get-a-repository

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:209

___

### requested\_action

• `Optional` **requested\_action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:203

___

### sender

• **sender**: `any`

#### Defined in

node_modules/snowtransfer/dist/methods/Webhooks.d.ts:215
