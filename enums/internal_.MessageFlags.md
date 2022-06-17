[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MessageFlags

# Enumeration: MessageFlags

[<internal>](../modules/internal_.md).MessageFlags

https://discord.com/developers/docs/resources/channel#message-object-message-flags

## Table of contents

### Enumeration Members

- [Crossposted](internal_.MessageFlags.md#crossposted)
- [Ephemeral](internal_.MessageFlags.md#ephemeral)
- [FailedToMentionSomeRolesInThread](internal_.MessageFlags.md#failedtomentionsomerolesinthread)
- [HasThread](internal_.MessageFlags.md#hasthread)
- [IsCrosspost](internal_.MessageFlags.md#iscrosspost)
- [Loading](internal_.MessageFlags.md#loading)
- [SourceMessageDeleted](internal_.MessageFlags.md#sourcemessagedeleted)
- [SuppressEmbeds](internal_.MessageFlags.md#suppressembeds)
- [Urgent](internal_.MessageFlags.md#urgent)

## Enumeration Members

### Crossposted

• **Crossposted**

This message has been published to subscribed channels (via Channel Following)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:541

___

### Ephemeral

• **Ephemeral**

This message is only visible to the user who invoked the Interaction

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:565

___

### FailedToMentionSomeRolesInThread

• **FailedToMentionSomeRolesInThread**

This message failed to mention some roles and add their members to the thread

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:573

___

### HasThread

• **HasThread**

This message has an associated thread, which shares its id

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:561

___

### IsCrosspost

• **IsCrosspost**

This message originated from a message in another channel (via Channel Following)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:545

___

### Loading

• **Loading**

This message is an Interaction Response and the bot is "thinking"

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:569

___

### SourceMessageDeleted

• **SourceMessageDeleted**

The source message for this crosspost has been deleted (via Channel Following)

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:553

___

### SuppressEmbeds

• **SuppressEmbeds**

Do not include any embeds when serializing this message

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:549

___

### Urgent

• **Urgent**

This message came from the urgent message system

#### Defined in

node_modules/discord-api-types/payloads/v10/channel.d.ts:557
