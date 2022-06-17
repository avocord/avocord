[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildMethods

# Class: GuildMethods

[<internal>](../modules/internal_.md).GuildMethods

Methods for interacting with Guilds

## Table of contents

### Constructors

- [constructor](internal_.GuildMethods-1.md#constructor)

### Properties

- [requestHandler](internal_.GuildMethods-1.md#requesthandler)
- [default](internal_.GuildMethods-1.md#default)

### Methods

- [addGuildMember](internal_.GuildMethods-1.md#addguildmember)
- [addGuildMemberRole](internal_.GuildMethods-1.md#addguildmemberrole)
- [createGuild](internal_.GuildMethods-1.md#createguild)
- [createGuildBan](internal_.GuildMethods-1.md#createguildban)
- [createGuildChannel](internal_.GuildMethods-1.md#createguildchannel)
- [createGuildRole](internal_.GuildMethods-1.md#createguildrole)
- [deleteGuild](internal_.GuildMethods-1.md#deleteguild)
- [editGuildWelcomeScreen](internal_.GuildMethods-1.md#editguildwelcomescreen)
- [getGuild](internal_.GuildMethods-1.md#getguild)
- [getGuildBan](internal_.GuildMethods-1.md#getguildban)
- [getGuildBans](internal_.GuildMethods-1.md#getguildbans)
- [getGuildChannels](internal_.GuildMethods-1.md#getguildchannels)
- [getGuildIntegrations](internal_.GuildMethods-1.md#getguildintegrations)
- [getGuildInvites](internal_.GuildMethods-1.md#getguildinvites)
- [getGuildMember](internal_.GuildMethods-1.md#getguildmember)
- [getGuildMembers](internal_.GuildMethods-1.md#getguildmembers)
- [getGuildPreview](internal_.GuildMethods-1.md#getguildpreview)
- [getGuildPruneCount](internal_.GuildMethods-1.md#getguildprunecount)
- [getGuildRoles](internal_.GuildMethods-1.md#getguildroles)
- [getGuildVanityURL](internal_.GuildMethods-1.md#getguildvanityurl)
- [getGuildVoiceRegions](internal_.GuildMethods-1.md#getguildvoiceregions)
- [getGuildWelcomeScreen](internal_.GuildMethods-1.md#getguildwelcomescreen)
- [getGuildWidget](internal_.GuildMethods-1.md#getguildwidget)
- [getGuildWidgetSettings](internal_.GuildMethods-1.md#getguildwidgetsettings)
- [listActiveThreads](internal_.GuildMethods-1.md#listactivethreads)
- [removeGuildBan](internal_.GuildMethods-1.md#removeguildban)
- [removeGuildIntegration](internal_.GuildMethods-1.md#removeguildintegration)
- [removeGuildMember](internal_.GuildMethods-1.md#removeguildmember)
- [removeGuildMemberRole](internal_.GuildMethods-1.md#removeguildmemberrole)
- [removeGuildRole](internal_.GuildMethods-1.md#removeguildrole)
- [searchGuildMembers](internal_.GuildMethods-1.md#searchguildmembers)
- [startGuildPrune](internal_.GuildMethods-1.md#startguildprune)
- [updateChannelPositions](internal_.GuildMethods-1.md#updatechannelpositions)
- [updateCurrentUserVoiceState](internal_.GuildMethods-1.md#updatecurrentuservoicestate)
- [updateGuild](internal_.GuildMethods-1.md#updateguild)
- [updateGuildMember](internal_.GuildMethods-1.md#updateguildmember)
- [updateGuildRole](internal_.GuildMethods-1.md#updateguildrole)
- [updateGuildRolePositions](internal_.GuildMethods-1.md#updateguildrolepositions)
- [updateGuildWidgetSettings](internal_.GuildMethods-1.md#updateguildwidgetsettings)
- [updateSelf](internal_.GuildMethods-1.md#updateself)
- [updateUserVoiceState](internal_.GuildMethods-1.md#updateuservoicestate)

## Constructors

### constructor

• **new GuildMethods**(`requestHandler`)

Create a new Guild Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guild.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler-1.md) | request handler that calls the rest api |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:15

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:5

___

### default

▪ `Static` **default**: typeof [`GuildMethods`](internal_.GuildMethods-1.md)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:6

## Methods

### addGuildMember

▸ **addGuildMember**(`guildId`, `memberId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void` \| [`Member`](../modules/internal_.md#member)\>

Add a guild member to a guild via oauth2 access token

CurrentUser must be a member of the guild

**`example`**
// add a user to a server
const client = new SnowTransfer("TOKEN")
const memberData = {
	access_token: "access token of a user with the guilds.join scope"
}
client.guild.addGuildMember("guildId", "memberId", memberData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data` | [`AddGuildMemberData`](../interfaces/internal_.AddGuildMemberData-1.md) | object containing the needed request data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void` \| [`Member`](../modules/internal_.md#member)\>

(https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

| Permissions needed    | Condition |
|-----------------------|-----------|
| CREATE_INSTANT_INVITE | always    |

| OAUTH2 Scopes |
|---------------|
| guilds.join   |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:227

___

### addGuildMemberRole

▸ **addGuildMemberRole**(`guildId`, `memberId`, `roleId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Add a role to a guild member

**`example`**
// add a role to a member with a reason of "I want to add a role"
const client = new SnowTransfer("TOKEN")
client.guild.addGuildMemberRole("guildId", "memberId", "roleId", { reason: "I want to add a role" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `roleId` | `string` | Id of the role |
| `data?` | `Object` | object with reason property |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:293

___

### createGuild

▸ **createGuild**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Create a new Guild, **limited to 10 guilds (you may create more if you are whitelisted)**
Check the [discord docs](https://discord.com/developers/docs/resources/guild#create-guild) for more infos

**`example`**
// Creates a simple guild with the name "Demo Guild"
const client = new SnowTransfer("TOKEN")
const guildData = {
	name: "Demo Guild"
}
const guild = await client.guild.createGuild(guildData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`CreateGuildData`](../interfaces/internal_.CreateGuildData-1.md) | Data for the new guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:30

___

### createGuildBan

▸ **createGuildBan**(`guildId`, `memberId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Ban a guild member

**`example`**
// Ban a user with a reason and delete the last 2 days of their messages
const client = new SnowTransfer("TOKEN")
const banData = {
	reason: "Memes were not good enough",
	delete_message_days":2
}
client.guild.createGuildBan("guild Id", "memberId", banData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data?` | `Object` | object with a reason and a delete_message_days property |
| `data.delete_message_days?` | `number` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:387

___

### createGuildChannel

▸ **createGuildChannel**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

Create a channel within a guild

**`example`**
// Creates a guild voice channel with the name "nice voice channel" and with permission connect denied for the @everyone role
const client = new SnowTransfer("TOKEN")
const channelData = {
	name: "nice voice channel",
	type: 2,
	permission_overwrites: [{ id: "guild id", type: 0, allow: "0" deny: (BigInt(1) << BigInt(20)).toString() }]
}
const channel = await client.guild.createGuildChannel("guild id", channelData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`CreateGuildChannelData`](../interfaces/internal_.CreateGuildChannelData-1.md) | channel properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

(https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

| Permissions needed | Condition                                                       |
|--------------------|-----------------------------------------------------------------|
| MANAGE_CHANNELS    | always                                                          |
| ADMINISTRATOR      | setting MANAGE_ROLES in permission_overwrites                   |
| *                  | if setting * permission in overwrites where * is any permission |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:121

___

### createGuildRole

▸ **createGuildRole**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

Create a new Role

**`example`**
// Create a role with the name "Nice Role" and a color of a soft blue
const client = new SnowTransfer("TOKEN")
const roleData = {
	name: "Nice Role",
	color: 0x7c7cf8
}
client.guild.createGuildRole("guild Id", roleData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data?` | [`RoleOptions`](../interfaces/internal_.RoleOptions-2.md) | data with role properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:441

___

### deleteGuild

▸ **deleteGuild**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild

CurrentUser must be the owner of the guild

**This action is irreversible, so use it with caution!**

**`example`**
const client = new SnowTransfer("TOKEN")
client.guild.deleteGuild("guild id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:86

___

### editGuildWelcomeScreen

▸ **editGuildWelcomeScreen**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

Update a guild welcome screen object

**`example`**
// Disabled the welcome screen
const client = new SnowTransfer("TOKEN")
const welcomeScreen = await client.guild.updateGuildWelcomeScreen("guildId", { enabled: false })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of guild |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\> & { `enabled?`: `boolean` ; `reason?`: `string`  } | Welcome screen data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

(https://discord.com/developers/docs/resources/guild#welcome-screen-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:687

___

### getGuild

▸ **getGuild**(`guildId`, `with_counts?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Get a guild via Id

CurrentUser must be a member of the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const guild = await client.guild.getGuild("guild id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `with_counts?` | `boolean` | when true, will return approximate member and presence counts for the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:43

___

### getGuildBan

▸ **getGuildBan**(`guildId`, `memberId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)\>

Get a specific ban of a guild member

**`throws`** a `DiscordAPIError` if the member is not banned

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

**`example`**
const client = new SnowTransfer("TOKEN")
const ban = await client.guild.getGuildBan("guildId", "memberId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the member |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)\>

(https://discord.com/developers/docs/resources/guild#ban-object-ban-structure) object

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:366

___

### getGuildBans

▸ **getGuildBans**(`guildId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)[]\>

Get bans of a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const bans = await client.guild.getGuildBans("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `options?` | `Object` | Query string options |
| `options.after?` | `string` | - |
| `options.before?` | `string` | - |
| `options.limit?` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)[]\>

List of [bans](https://discord.com/developers/docs/resources/guild#ban-object-ban-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:345

___

### getGuildChannels

▸ **getGuildChannels**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)[]\>

Get a list of all channels for a guild. Does not include threads

CurrentUser must be a member of the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const channels = await client.guild.getGuildChannels("guild id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)[]\>

list of [channels](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:98

___

### getGuildIntegrations

▸ **getGuildIntegrations**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Integration`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#integration)[]\>

Get integrations for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const integrations = await client.guild.getGuildIntegrations("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Integration`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#integration)[]\>

List of [integration objects](https://discord.com/developers/docs/resources/guild#integration-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:583

___

### getGuildInvites

▸ **getGuildInvites**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite) & [`InviteMetadata`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.md#invitemetadata)[]\>

Get invites for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const invites = await client.guild.getGuildInvites("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Invite`](../modules/internal_.md#invite) & [`InviteMetadata`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_index_.md#invitemetadata)[]\>

List of [invites](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:569

___

### getGuildMember

▸ **getGuildMember**(`guildId`, `memberId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Get a guild member via Id

CurrentUser must be a member of the guild

**`example`**
const client = new SnowTransfer("TOKEN")
const member = await client.guild.getGuildMember("guild id", "member id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

(https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:168

___

### getGuildMembers

▸ **getGuildMembers**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

Get a list of guild members

CurrentUser must be a member of the guild

**`example`**
// Gets 10 members from a guild
const client = new SnowTransfer("TOKEN")
const members = await client.guild.getGuildMembers("guild id", { limit: 10 })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data?` | [`GetGuildMembersData`](../interfaces/internal_.GetGuildMembersData-1.md) | query data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

list of [guild members](https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

| Intents       |
|---------------|
| GUILD_MEMBERS |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:186

___

### getGuildPreview

▸ **getGuildPreview**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`Pick`](../modules/internal_.md#pick)<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild), ``"name"`` \| ``"id"`` \| ``"icon"`` \| ``"splash"`` \| ``"discovery_splash"`` \| ``"emojis"`` \| ``"features"`` \| ``"approximate_member_count"`` \| ``"approximate_presence_count"`` \| ``"description"`` \| ``"stickers"``\>\>\>

Gets a guild's preview. If the CurrentUser is not in the guild, the guild must be lurkable

**`example`**
const client = new SnowTransfer("TOKEN")
const guildPreview = await client.guild.getGuildPreview("guild id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`Pick`](../modules/internal_.md#pick)<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild), ``"name"`` \| ``"id"`` \| ``"icon"`` \| ``"splash"`` \| ``"discovery_splash"`` \| ``"emojis"`` \| ``"features"`` \| ``"approximate_member_count"`` \| ``"approximate_presence_count"`` \| ``"description"`` \| ``"stickers"``\>\>\>

(https://discord.com/developers/docs/resources/guild#guild-preview-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:53

___

### getGuildPruneCount

▸ **getGuildPruneCount**(`guildId`, `query?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Get the amount of members that would be pruned when a prune with the passed amount of days would be started

**`example`**
const client = new SnowTransfer("TOKEN")
const data = await client.guild.getGuildPruneCount("guildId", { days: 7 })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `query?` | `Object` | - |
| `query.days?` | `number` | - |
| `query.include_roles?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Object with a "pruned" key indicating the amount of members that would be pruned

| Permissions needed | Condition |
|--------------------|-----------|
| KICK_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:510

___

### getGuildRoles

▸ **getGuildRoles**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

Get a list of roles for a guild

**`example`**
const client = new SnowTransfer("TOKEN")
const roles = await client.guild.getGuildRoles("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

array of [roles](https://discord.com/developers/docs/topics/permissions#role-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:421

___

### getGuildVanityURL

▸ **getGuildVanityURL**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `code`: ``null`` \| `string` ; `uses`: `number`  }\>

Get a guild's vanity URL code

**`example`**
const client = new SnowTransfer("TOKEN")
const vanityUrl = await client.guild.getGuildVanityUrl("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `code`: ``null`` \| `string` ; `uses`: `number`  }\>

partial [invite object](https://discord.com/developers/docs/resources/guild#get-guild-vanity-url-example-partial-invite-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:654

___

### getGuildVoiceRegions

▸ **getGuildVoiceRegions**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

Get a list of voice regions for the guild, includes vip-regions unlike voice.getVoiceRegions

**`example`**
const client = new SnowTransfer("TOKEN")
const regions = await client.guild.getGuildVoiceRegions("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`VoiceRegion`](../modules/internal_.md#voiceregion)[]\>

List of [voice regions](https://discord.com/developers/docs/resources/voice#voice-region-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:555

___

### getGuildWelcomeScreen

▸ **getGuildWelcomeScreen**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

Get a guild's welcome screen object

**`example`**
const client = new SnowTransfer("TOKEN")
const welcomeScreen = await client.guild.getGuildWelcomeScreen("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

(https://discord.com/developers/docs/resources/guild#welcome-screen-object)

| Permissions needed | Condition                            |
|--------------------|--------------------------------------|
| MANAGE_GUILD       | if the welcome screen is not enabled |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:671

___

### getGuildWidget

▸ **getGuildWidget**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidget`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidget)\>

Gets a guild widget object

**`example`**
const client = new SnowTransfer("TOKEN")
const widget = await client.guild.getGuildWidget("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidget`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidget)\>

(https://discord.com/developers/docs/resources/guild#guild-widget-object)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:640

___

### getGuildWidgetSettings

▸ **getGuildWidgetSettings**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidgetSettings`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidgetsettings)\>

Get a guild widget settings object

**`example`**
const client = new SnowTransfer("TOKEN")
const widgetSettings = await client.guild.getGuildWidgetSettings("guildId")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidgetSettings`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidgetsettings)\>

(https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:612

___

### listActiveThreads

▸ **listActiveThreads**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`ThreadChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#threadchannel)[]  }\>

Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order

**`example`**
const client = new SnowTransfer("TOKEN")
const threads = await client.guild.listActiveThreads("guild id")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: [`ThreadChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#threadchannel)[]  }\>

All active threads and member objects of the CurrentUser that the CurrentUser has access to.

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:152

___

### removeGuildBan

▸ **removeGuildBan**(`guildId`, `memberId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a ban of a user

**`example`**
// Remove a ban of a user with a reason
const client = new SnowTransfer("TOKEN")
client.guild.removeGuildBan("guildId", "memberId", "This guy was cool")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `reason?` | `string` | Reason for removing the ban |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:407

___

### removeGuildIntegration

▸ **removeGuildIntegration**(`guildId`, `integrationId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild integration

**`example`**
const client = new SnowTransfer("TOKEN")
await client.guild.deleteGuildIntegration("guildId", "integrationId", "Didn't need anymore")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `integrationId` | `string` | Id of the integration |
| `reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:598

___

### removeGuildMember

▸ **removeGuildMember**(`guildId`, `memberId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a guild member (aka kick them)

**`example`**
// Kick a member with a reason of "spam"
const client = new SnowTransfer("TOKEN")
client.guild.removeGuildMember("guild Id", "memberId", "spam")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `reason?` | `string` | Reason for kicking the member |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| KICK_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:330

___

### removeGuildMemberRole

▸ **removeGuildMemberRole**(`guildId`, `memberId`, `roleId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a role from a guild member

**`example`**
// remove a role from a member with a reason of "I want to remove a role"
const client = new SnowTransfer("TOKEN")
client.guild.removeGuildMemberRole("guildId", "memberId", "roleId", "I want to remove a role")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `roleId` | `string` | Id of the role |
| `reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:313

___

### removeGuildRole

▸ **removeGuildRole**(`guildId`, `roleId`, `reason?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a role from the guild

**`example`**
// Deletes a role with a reason "This role is too cool"
const client = new SnowTransfer("TOKEN")
client.guild.deleteGuildRole("guildId", "roleId", "This role is too cool")

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `roleId` | `string` | Id of the role |
| `reason?` | `string` | Reason for deleting the role |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:495

___

### searchGuildMembers

▸ **searchGuildMembers**(`guildId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

Get a list of guild members that match a query

**`example`**
// Gets all members with the username "Wolke"
const client = new SnowTransfer("TOKEN")
const members = await client.guild.searchGuildMembers("guild id", { query: "Wolke" })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `options` | `Object` | query data |
| `options.limit?` | `number` | - |
| `options.query` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

list of [guild members](https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:198

___

### startGuildPrune

▸ **startGuildPrune**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Start a prune

**`example`**
const client = new SnowTransfer("TOKEN")
const data = await client.guild.startGuildPrune("guildId", { days: 7 })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Object with prune data |
| `data.compute_prune_count?` | `boolean` | - |
| `data.days?` | `number` | - |
| `data.include_roles?` | `string`[] | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Object with a "pruned" key indicating the amount of members that were pruned

| Permissions needed | Condition |
|--------------------|-----------|
| KICK_MEMBERS       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:530

▸ **startGuildPrune**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: ``null``  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |
| `data` | `Object` |
| `data.compute_prune_count` | ``false`` |
| `data.days?` | `number` |
| `data.include_roles?` | `string`[] |
| `data.reason?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: ``null``  }\>

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:538

___

### updateChannelPositions

▸ **updateChannelPositions**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Batch update the positions of channels. Only those being moved needs to be included here

**`example`**
// Sets the position of a channel to 2 under a category channel
const client = new SnowTransfer("TOKEN")
client.guild.updateChannelPositions("guild id", [{ id: "channel id", position: 2, category_id: "category id" }])

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | { `id`: `string` ; `lock_permissions?`: ``null`` \| `boolean` ; `parent_id?`: ``null`` \| `string` ; `position`: ``null`` \| `number`  }[] | Positional data to send |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_CHANNELS    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:137

___

### updateCurrentUserVoiceState

▸ **updateCurrentUserVoiceState**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates the current user's voice state in a stage channel

**`example`**
// Unsuppresses the CurrentUser in the stage channel they're in
const client = new SnowTransfer("TOKEN")
client.guild.updateGuildVoiceState("guildId", { channel_id: "channel id", suppress: false })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Data of the voice state |
| `data.channel_id` | `string` | - |
| `data.request_to_speak_timestamp?` | ``null`` \| `string` | - |
| `data.suppress?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                           |
|--------------------|-------------------------------------|
| MUTE_MEMBERS       | when trying to un-suppress yourself |
| REQUEST_TO_SPEAK   | when trying to request to speak     |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:707

___

### updateGuild

▸ **updateGuild**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Update a guild

**`example`**
// Update the name of a guild to "Nice Guild"
const client = new SnowTransfer("TOKEN")
const guildData = {
	name: "Nice Guild"
}
client.guild.updateGuild("guild Id", guildData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`UpdateGuildData`](../interfaces/internal_.UpdateGuildData-1.md) | Updated guild data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:72

___

### updateGuildMember

▸ **updateGuildMember**(`guildId`, `memberId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Update properties of a guild member

**`example`**
// Reset the nickname of a guild member
const client = new SnowTransfer("TOKEN")
const memberData = {
	nick: "" // You can reset nicknames by providing an empty string as the value of data.nick
}
const member = await client.guild.updateGuildMember("guild Id", "memberId", memberData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data` | [`UpdateGuildMemberData`](../interfaces/internal_.UpdateGuildMemberData-1.md) | Updated properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Resolves the Promise on successful execution

| Permissions needed | Condition    |
|--------------------|--------------|
| MANAGE_NICKNAMES   | Nick Updates |
| MANAGE_ROLES       | Role Updates |
| MUTE_MEMBERS       | Mute Updates |
| DEAFEN_MEMBERS     | Deaf Updates |
| MOVE_MEMBERS       | Voice Move   |
| CONNECT						| Voice Move   |
| MODERATE_MEMBERS   | Timeouts     |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:253

___

### updateGuildRole

▸ **updateGuildRole**(`guildId`, `roleId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

Update a guild role

**`example`**
const client = new SnowTransfer("TOKEN")
const roleData = {
	name: "Nicer Role",
}
client.guild.updateGuildRole("guildId", "roleId", roleData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `roleId` | `string` | Id of the role |
| `data` | [`RoleOptions`](../interfaces/internal_.RoleOptions-2.md) | updated properties of the role |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

(https://discord.com/developers/docs/topics/permissions#role-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:478

___

### updateGuildRolePositions

▸ **updateGuildRolePositions**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

Modify the positions of roles

**`example`**
const client = new SnowTransfer("TOKEN")
const roles = await client.guild.updateGuildRolePositions("guildId", [{ id: "guild id", position: 1 }, { id: "role id 2", position: 2 }])

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | { `id`: `string` ; `position?`: ``null`` \| `number`  }[] | Role data to update |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

array of [roles](https://discord.com/developers/docs/topics/permissions#role-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:456

___

### updateGuildWidgetSettings

▸ **updateGuildWidgetSettings**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidgetSettings`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidgetsettings)\>

Update a guild widget settings object

**`example`**
// Sets a widget as disabled
const client = new SnowTransfer("TOKEN")
const widgetSettings = await client.guild.updateGuildWidgetSettings("guildId", { enabled: false })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`GuildWidgetSettings`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidgetsettings) & { `reason`: `string`  }\> | widget settings |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidgetSettings`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidgetsettings)\>

Updated [Guild Widget settings](https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:628

___

### updateSelf

▸ **updateSelf**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Update the nick of the CurrentMember

**`example`**
// change nick of bot to "Nice Nick"
const client = new SnowTransfer("TOKEN")
const nickData = {
	nick: "Nice Nick"
}
client.guild.updateSelf("guildId", nickData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | object with a nick property and optionally, a reason property |
| `data.nick` | `string` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| CHANGE_NICKNAME    | always    |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:272

___

### updateUserVoiceState

▸ **updateUserVoiceState**(`guildId`, `userId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates a user's voice state in a stage channel

**`example`**
// Suppresses the user in the stage channel they're in
const client = new SnowTransfer("TOKEN")
client.guild.updateGuildVoiceState("guildId", "userId", { channel_id: "channel id", suppress: true })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `userId` | `string` | - |
| `data` | `Object` | Data of the voice state |
| `data.channel_id` | `string` | - |
| `data.suppress?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                           |
|--------------------|-------------------------------------|
| MUTE_MEMBERS       | when trying to suppress/un-suppress |

#### Defined in

node_modules/cloudstorm/node_modules/snowtransfer/dist/methods/Guilds.d.ts:727
