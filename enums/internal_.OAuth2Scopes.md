[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OAuth2Scopes

# Enumeration: OAuth2Scopes

[<internal>](../modules/internal_.md).OAuth2Scopes

Types extracted from https://discord.com/developers/docs/topics/oauth2

## Table of contents

### Enumeration Members

- [ActivitiesRead](internal_.OAuth2Scopes.md#activitiesread)
- [ActivitiesWrite](internal_.OAuth2Scopes.md#activitieswrite)
- [ApplicationsBuildsRead](internal_.OAuth2Scopes.md#applicationsbuildsread)
- [ApplicationsBuildsUpload](internal_.OAuth2Scopes.md#applicationsbuildsupload)
- [ApplicationsCommands](internal_.OAuth2Scopes.md#applicationscommands)
- [ApplicationsCommandsUpdate](internal_.OAuth2Scopes.md#applicationscommandsupdate)
- [ApplicationsEntitlements](internal_.OAuth2Scopes.md#applicationsentitlements)
- [ApplicationsStoreUpdate](internal_.OAuth2Scopes.md#applicationsstoreupdate)
- [Bot](internal_.OAuth2Scopes.md#bot)
- [Connections](internal_.OAuth2Scopes.md#connections)
- [Email](internal_.OAuth2Scopes.md#email)
- [GroupDMJoins](internal_.OAuth2Scopes.md#groupdmjoins)
- [Guilds](internal_.OAuth2Scopes.md#guilds)
- [GuildsJoin](internal_.OAuth2Scopes.md#guildsjoin)
- [GuildsMembersRead](internal_.OAuth2Scopes.md#guildsmembersread)
- [Identify](internal_.OAuth2Scopes.md#identify)
- [MessagesRead](internal_.OAuth2Scopes.md#messagesread)
- [RPC](internal_.OAuth2Scopes.md#rpc)
- [RPCNotificationsRead](internal_.OAuth2Scopes.md#rpcnotificationsread)
- [RelationshipsRead](internal_.OAuth2Scopes.md#relationshipsread)
- [WebhookIncoming](internal_.OAuth2Scopes.md#webhookincoming)

## Enumeration Members

### ActivitiesRead

• **ActivitiesRead**

Allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:94

___

### ActivitiesWrite

• **ActivitiesWrite**

Allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)

See https://discord.com/developers/docs/game-sdk/activities

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:100

___

### ApplicationsBuildsRead

• **ApplicationsBuildsRead**

Allows your app to read build data for a user's applications

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:78

___

### ApplicationsBuildsUpload

• **ApplicationsBuildsUpload**

Allows your app to upload/update builds for a user's applications - requires Discord approval

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:74

___

### ApplicationsCommands

• **ApplicationsCommands**

Allows your app to use Application Commands in a guild

See https://discord.com/developers/docs/interactions/application-commands

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:106

___

### ApplicationsCommandsUpdate

• **ApplicationsCommandsUpdate**

Allows your app to update its Application Commands via this bearer token - client credentials grant only

See https://discord.com/developers/docs/interactions/application-commands

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:112

___

### ApplicationsEntitlements

• **ApplicationsEntitlements**

Allows your app to read entitlements for a user's applications

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:86

___

### ApplicationsStoreUpdate

• **ApplicationsStoreUpdate**

Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:82

___

### Bot

• **Bot**

For oauth2 bots, this puts the bot in the user's selected guild by default

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:8

___

### Connections

• **Connections**

Allows [/users/@me/connections](https://discord.com/developers/docs/resources/user#get-user-connections)
to return linked third-party accounts

See https://discord.com/developers/docs/resources/user#get-user-connections

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:15

___

### Email

• **Email**

Enables [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email`

See https://discord.com/developers/docs/resources/user#get-current-user

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:21

___

### GroupDMJoins

• **GroupDMJoins**

Allows your app to join users to a group dm

See https://discord.com/developers/docs/resources/channel#group-dm-add-recipient

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:53

___

### Guilds

• **Guilds**

Allows [/users/@me/guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds)
to return basic information about all of a user's guilds

See https://discord.com/developers/docs/resources/user#get-current-user-guilds

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:34

___

### GuildsJoin

• **GuildsJoin**

Allows [/guilds/{guild.id}/members/{user.id}](https://discord.com/developers/docs/resources/guild#add-guild-member)
to be used for joining users to a guild

See https://discord.com/developers/docs/resources/guild#add-guild-member

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:41

___

### GuildsMembersRead

• **GuildsMembersRead**

Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild

See https://discord.com/developers/docs/resources/user#get-current-user-guild-member

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:47

___

### Identify

• **Identify**

Allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without `email`

See https://discord.com/developers/docs/resources/user#get-current-user

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:27

___

### MessagesRead

• **MessagesRead**

For local rpc server api access, this allows you to read messages from all client channels
(otherwise restricted to channels/guilds your app creates)

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:58

___

### RPC

• **RPC**

For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:62

___

### RPCNotificationsRead

• **RPCNotificationsRead**

For local rpc server api access, this allows you to receive notifications pushed out to the user - requires Discord approval

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:66

___

### RelationshipsRead

• **RelationshipsRead**

Allows your app to know a user's friends and implicit relationships - requires Discord approval

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:90

___

### WebhookIncoming

• **WebhookIncoming**

This generates a webhook that is returned in the oauth token response for authorization code grants

#### Defined in

node_modules/discord-api-types/payloads/v10/oauth2.d.ts:70
