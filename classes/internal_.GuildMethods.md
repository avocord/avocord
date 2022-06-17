[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GuildMethods

# Class: GuildMethods

[<internal>](../modules/internal_.md).GuildMethods

Methods for interacting with Guilds

## Table of contents

### Constructors

- [constructor](internal_.GuildMethods.md#constructor)

### Properties

- [requestHandler](internal_.GuildMethods.md#requesthandler)

### Methods

- [addGuildMember](internal_.GuildMethods.md#addguildmember)
- [addGuildMemberRole](internal_.GuildMethods.md#addguildmemberrole)
- [createGuild](internal_.GuildMethods.md#createguild)
- [createGuildBan](internal_.GuildMethods.md#createguildban)
- [createGuildChannel](internal_.GuildMethods.md#createguildchannel)
- [createGuildIntegration](internal_.GuildMethods.md#createguildintegration)
- [createGuildRole](internal_.GuildMethods.md#createguildrole)
- [createGuildTimeout](internal_.GuildMethods.md#createguildtimeout)
- [deleteGuild](internal_.GuildMethods.md#deleteguild)
- [editGuildWelcomeScreen](internal_.GuildMethods.md#editguildwelcomescreen)
- [getGuild](internal_.GuildMethods.md#getguild)
- [getGuildBan](internal_.GuildMethods.md#getguildban)
- [getGuildBans](internal_.GuildMethods.md#getguildbans)
- [getGuildChannels](internal_.GuildMethods.md#getguildchannels)
- [getGuildIntegrations](internal_.GuildMethods.md#getguildintegrations)
- [getGuildInvites](internal_.GuildMethods.md#getguildinvites)
- [getGuildMember](internal_.GuildMethods.md#getguildmember)
- [getGuildMembers](internal_.GuildMethods.md#getguildmembers)
- [getGuildPreview](internal_.GuildMethods.md#getguildpreview)
- [getGuildPruneCount](internal_.GuildMethods.md#getguildprunecount)
- [getGuildRoles](internal_.GuildMethods.md#getguildroles)
- [getGuildVanityURL](internal_.GuildMethods.md#getguildvanityurl)
- [getGuildVoiceRegions](internal_.GuildMethods.md#getguildvoiceregions)
- [getGuildWelcomeScreen](internal_.GuildMethods.md#getguildwelcomescreen)
- [getGuildWidget](internal_.GuildMethods.md#getguildwidget)
- [getGuildWidgetSettings](internal_.GuildMethods.md#getguildwidgetsettings)
- [listActiveThreads](internal_.GuildMethods.md#listactivethreads)
- [removeGuildBan](internal_.GuildMethods.md#removeguildban)
- [removeGuildIntegration](internal_.GuildMethods.md#removeguildintegration)
- [removeGuildMember](internal_.GuildMethods.md#removeguildmember)
- [removeGuildMemberRole](internal_.GuildMethods.md#removeguildmemberrole)
- [removeGuildRole](internal_.GuildMethods.md#removeguildrole)
- [searchGuildMembers](internal_.GuildMethods.md#searchguildmembers)
- [startGuildPrune](internal_.GuildMethods.md#startguildprune)
- [updateChannelPositions](internal_.GuildMethods.md#updatechannelpositions)
- [updateCurrentUserVoiceState](internal_.GuildMethods.md#updatecurrentuservoicestate)
- [updateGuild](internal_.GuildMethods.md#updateguild)
- [updateGuildIntegration](internal_.GuildMethods.md#updateguildintegration)
- [updateGuildMember](internal_.GuildMethods.md#updateguildmember)
- [updateGuildRole](internal_.GuildMethods.md#updateguildrole)
- [updateGuildRolePositions](internal_.GuildMethods.md#updateguildrolepositions)
- [updateGuildWidgetSettings](internal_.GuildMethods.md#updateguildwidgetsettings)
- [updateSelf](internal_.GuildMethods.md#updateself)
- [updateUserVoiceState](internal_.GuildMethods.md#updateuservoicestate)

## Constructors

### constructor

• **new GuildMethods**(`requestHandler`)

Create a new Guild Method Handler

Usually SnowTransfer creates a method handler for you, this is here for completion

You can access the methods listed via `client.guild.method`, where `client` is an initialized SnowTransfer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestHandler` | [`RequestHandler`](internal_.RequestHandler.md) | request handler that calls the rest api |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:14

## Properties

### requestHandler

• **requestHandler**: [`RequestHandler`](internal_.RequestHandler.md)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:5

## Methods

### addGuildMember

▸ **addGuildMember**(`guildId`, `memberId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Add a guild member to a guild via oauth2 access token

**You need the oauth2 `guilds.join` scope granted to the access_token**

**Your bot has to be a member of the guild you want to add the user to**

**`example`**
// add a user to a server
const client = new SnowTransfer('TOKEN')
const memberData = {
	access_token: 'access token of a user with the guilds.join scope'
}
client.guild.addGuildMember('guildId', 'memberId', memberData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data` | [`AddGuildMemberData`](../interfaces/internal_.AddGuildMemberData.md) | object containing the needed request data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

(https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

| Permissions needed    | Condition |
|-----------------------|-----------|
| CREATE_INSTANT_INVITE | always    |

| OAUTH2 Scopes |
|---------------|
| guilds.join   |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:161

___

### addGuildMemberRole

▸ **addGuildMemberRole**(`guildId`, `memberId`, `roleId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Add a role to a guild member

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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:223

___

### createGuild

▸ **createGuild**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Create a new Guild, **limited to 10 guilds (you may create more if you are whitelisted)**
Check the [discord docs](https://discord.com/developers/docs/resources/guild#create-guild) for more infos

**`example`**
// Creates a simple guild with the name "Demo Guild"
const client = new SnowTransfer('TOKEN')
const guildData = {
	name: 'Demo Guild'
}
client.guild.createGuild(guildData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`CreateGuildData`](../interfaces/internal_.CreateGuildData.md) | data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:29

___

### createGuildBan

▸ **createGuildBan**(`guildId`, `memberId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Ban a guild member

**`example`**
// Ban a user with a reason and delete the last 2 days of their messages
const client = new SnowTransfer('TOKEN')
const banData = {
	reason: 'Memes were not good enough',
	delete_message_days":2
}
client.guild.createGuildBan('guild Id', 'memberId', banData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data?` | `Object` | object with a reason and a delete-message-days property |
| `data.delete_message_days?` | `number` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:308

___

### createGuildChannel

▸ **createGuildChannel**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

Create a channel within a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`CreateGuildChannelData`](../interfaces/internal_.CreateGuildChannelData.md) | channel properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)\>

(https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

| Permissions needed | Condition                                     |
|--------------------|-----------------------------------------------|
| MANAGE_CHANNELS    | always                                        |
| ADMINISTRATOR      | setting MANAGE_ROLES in permission_overwrites |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:87

___

### createGuildIntegration

▸ **createGuildIntegration**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Attach a integration object from the user to the guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Integration object with id and type properties |
| `data.id` | `string` | - |
| `data.type` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:491

___

### createGuildRole

▸ **createGuildRole**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

Create a new Role

**`example`**
// Create a role with the name "Nice Role" and a color of a soft blue
const client = new SnowTransfer('TOKEN')
const roleData = {
	name: 'Nice Role',
	color: 0x7c7cf8
}
client.guild.createGuildRole('guild Id', roleData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data?` | [`RoleOptions`](../interfaces/internal_.RoleOptions-1.md) | data with role properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

(https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:378

___

### createGuildTimeout

▸ **createGuildTimeout**(`guildId`, `memberId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`example`**
// Timeout a user with a reason and disable their communication for 1 week
const client = new SnowTransfer('TOKEN')
const timeoutData = {
	reason: 'Bad words',
	"communication_disabled_until": new Date(Date.now() + 604800000).toISOString()
}
client.guild.createGuildTimeout('guild Id', 'memberId', timeoutData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data` | `Object` | object with a reason and a communication_disabled_until property |
| `data.communication_disabled_until?` | `string` | - |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution
| Permissions deeded | Condition |
|--------------------|-----------|
| MODERATE_MEMBERS   | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:331

___

### deleteGuild

▸ **deleteGuild**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild

**Your bot has to be the owner of the guild to do this**

**This action is irreversible, so use it with caution!**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:69

___

### editGuildWelcomeScreen

▸ **editGuildWelcomeScreen**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Update a guild welcome screen object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of guild |
| `data` | [`Partial`](../modules/internal_.md#partial)<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\> & { `enabled?`: `boolean`  } | Welcome screen data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

(https://discord.com/developers/docs/resources/guild#welcome-screen-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:586

___

### getGuild

▸ **getGuild**(`guildId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Get a guild via Id

**Your bot has to be a member of the guild for this function to work**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `options?` | `Object` | - |
| `options.with_counts?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:37

___

### getGuildBan

▸ **getGuildBan**(`guildId`, `memberId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)\>

Get a specific ban of a guild member

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the member |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)\>

(https://discord.com/developers/docs/resources/guild#ban-object-ban-structure) object

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:287

___

### getGuildBans

▸ **getGuildBans**(`guildId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Ban`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#ban)[]\>

Get bans of a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `options?` | `Object` | - |
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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:272

___

### getGuildChannels

▸ **getGuildChannels**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)[]\>

Get a list of channels for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildChannel`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Channel_.md#guildchannel)[]\>

list of [channels](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:75

___

### getGuildIntegrations

▸ **getGuildIntegrations**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

Get integrations for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

List of [integration objects](https://discord.com/developers/docs/resources/guild#integration-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:480

___

### getGuildInvites

▸ **getGuildInvites**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

Get invites for a guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

List of [invites](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:470

___

### getGuildMember

▸ **getGuildMember**(`guildId`, `memberId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

Get a guild member via Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)\>

(https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:114

___

### getGuildMembers

▸ **getGuildMembers**(`guildId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

Get a list of guild members

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data?` | [`GetGuildMembersData`](../interfaces/internal_.GetGuildMembersData.md) | query data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

list of [guild members](https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:121

___

### getGuildPreview

▸ **getGuildPreview**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`Pick`](../modules/internal_.md#pick)<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild), ``"name"`` \| ``"id"`` \| ``"icon"`` \| ``"splash"`` \| ``"discovery_splash"`` \| ``"emojis"`` \| ``"features"`` \| ``"approximate_member_count"`` \| ``"approximate_presence_count"`` \| ``"description"`` \| ``"stickers"``\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Required`](../modules/internal_.md#required)<[`Pick`](../modules/internal_.md#pick)<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild), ``"name"`` \| ``"id"`` \| ``"icon"`` \| ``"splash"`` \| ``"discovery_splash"`` \| ``"emojis"`` \| ``"features"`` \| ``"approximate_member_count"`` \| ``"approximate_presence_count"`` \| ``"description"`` \| ``"stickers"``\>\>\>

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:40

___

### getGuildPruneCount

▸ **getGuildPruneCount**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Get the amount of members that would be pruned when a prune with the passed amount of days would be started

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Object with a days property |
| `data.days?` | `number` | - |
| `data.include_roles?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Object with a "pruned" key indicating the amount of members that would be pruned

| Permissions needed | Condition |
|--------------------|-----------|
| KICK_MEMBERS       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:431

___

### getGuildRoles

▸ **getGuildRoles**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

Get a list of roles for a guild

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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:358

___

### getGuildVanityURL

▸ **getGuildVanityURL**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `code`: ``null`` \| `string` ; `uses`: `number`  }\>

Get a guild's vanity URL code

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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:566

___

### getGuildVoiceRegions

▸ **getGuildVoiceRegions**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

Get a list of voice regions for the guild, includes vip-regions unlike voice.getVoiceRegions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

List of [voice regions](https://discord.com/developers/docs/resources/voice#voice-region-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:460

___

### getGuildWelcomeScreen

▸ **getGuildWelcomeScreen**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

Get a guild's welcome screen object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WelcomeScreen`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#welcomescreen)\>

(https://discord.com/developers/docs/resources/guild#welcome-screen-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:575

___

### getGuildWidget

▸ **getGuildWidget**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidget`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidget)\>

Gets a guild widget object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`GuildWidget`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guildwidget)\>

(https://discord.com/developers/docs/resources/guild#guild-widget-object)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:526

___

### getGuildWidgetSettings

▸ **getGuildWidgetSettings**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `channel_id`: `string` ; `enabled`: `boolean`  }\>

Get a guild widget settings object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `channel_id`: `string` ; `enabled`: `boolean`  }\>

(https://discord.com/developers/docs/resources/guild#guild-widget-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:536

___

### listActiveThreads

▸ **listActiveThreads**(`guildId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: ([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md))[]  }\>

Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `members`: [`ThreadMember`](../modules/internal_.md#threadmember)[] ; `threads`: ([`NewsThread`](../interfaces/internal_.NewsThread.md) \| [`PublicThread`](../interfaces/internal_.PublicThread.md) \| [`PrivateThread`](../interfaces/internal_.PrivateThread.md))[]  }\>

All active threads and members the current user has access to.

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:104

___

### removeGuildBan

▸ **removeGuildBan**(`guildId`, `memberId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a ban of a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data?` | `Object` | object with a reason property |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| BAN_MEMBERS        | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:346

___

### removeGuildIntegration

▸ **removeGuildIntegration**(`guildId`, `integrationId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a guild integratiom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `integrationId` | `string` | Id of the integration |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:520

___

### removeGuildMember

▸ **removeGuildMember**(`guildId`, `memberId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a guild member (aka kick them)

**`example`**
// Kick a member with a reason of "spam"
const client = new SnowTransfer('TOKEN')
const kickData = {
	reason: 'spam'
}
client.guild.removeGuildMember('guild Id', 'memberId', kickData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data?` | `Object` | object with reason property |
| `data.reason?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| KICK_MEMBERS       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:260

___

### removeGuildMemberRole

▸ **removeGuildMemberRole**(`guildId`, `memberId`, `roleId`, `data?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Remove a role from a guild member

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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:238

___

### removeGuildRole

▸ **removeGuildRole**(`guildId`, `roleId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Delete a role from the guild

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `roleId` | `string` | Id of the role |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:420

___

### searchGuildMembers

▸ **searchGuildMembers**(`guildId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

Get a list of guild members that match a query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `options` | `Object` | query data |
| `options.limit?` | `number` | - |
| `options.query?` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Member`](../modules/internal_.md#member)[]\>

list of [guild members](https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure)

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:128

___

### startGuildPrune

▸ **startGuildPrune**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pruned`: `number`  }\>

Start a prune

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Object with a days property |
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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:447

___

### updateChannelPositions

▸ **updateChannelPositions**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Batch update the positions of channels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | { `id`: `string` ; `lock_permissions?`: ``null`` \| `boolean` ; `parent_id?`: ``null`` \| `string` ; `position?`: ``null`` \| `number`  }[] | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:93

___

### updateCurrentUserVoiceState

▸ **updateCurrentUserVoiceState**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates the current user's voice state in a stage channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | Data of the voice state |
| `data.channel_id` | `string` | - |
| `data.request_to_speak_timestamp` | ``null`` \| `string` | - |
| `data.suppress?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition                           |
|--------------------|-------------------------------------|
| MUTE_MEMBERS       | when trying to un-suppress yourself |
| REQUEST_TO_SPEAK   | when trying to request to speak     |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:600

___

### updateGuild

▸ **updateGuild**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

Update a guild

**`example`**
// Update the name of a guild to "Nice Guild"
const client = new SnowTransfer('TOKEN')
const guildData = {
	name: 'Nice Guild'
}
client.guild.updateGuild('guild Id', guildData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | [`UpdateGuildData`](../interfaces/internal_.UpdateGuildData.md) | data |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Guild`](../modules/internal_.__home_runner_work_disonejs_disonejs_node_modules_discord_typings_Resources_Guild_.md#guild)\>

(https://discord.com/developers/docs/resources/guild#guild-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:59

___

### updateGuildIntegration

▸ **updateGuildIntegration**(`guildId`, `integrationId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Update behaviour and settings of an [integration object](https://discord.com/developers/docs/resources/guild#integration-object)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `integrationId` | `string` | Id of the integration |
| `data` | `Object` | - |
| `data.enable_emoticons` | `boolean` | - |
| `data.expire_behavior` | `number` | - |
| `data.expire_grace_period` | `number` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:505

___

### updateGuildMember

▸ **updateGuildMember**(`guildId`, `memberId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Update properties of a guild member

**Check the table below to make sure you have the right permissions for the types of updates**

**Make sure that your bot has `CONNECT` and `MOVE_MEMBERS` on the channel you want to move the member to**

**`example`**
// Reset the nickname of a guild member
const client = new SnowTransfer('TOKEN')
const memberData = {
	nick: "" // You can reset nicknames by providing an empty string as the value of data.nick
}
client.guild.updateGuildMember('guild Id', 'memberId', memberData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `memberId` | `string` | Id of the guild member |
| `data` | [`UpdateGuildMemberData`](../interfaces/internal_.UpdateGuildMemberData.md) | Updated properties |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition    |
|--------------------|--------------|
| MANAGE_NICKNAMES   | Nick Updates |
| MANAGE_ROLES       | Role Updates |
| MUTE_MEMBERS       | Mute Updates |
| DEAFEN_MEMBERS     | Deaf Updates |
| MOVE_MEMBERS       | Voice Move   |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:189

___

### updateGuildRole

▸ **updateGuildRole**(`guildId`, `roleId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

Update a guild role

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `roleId` | `string` | Id of the role |
| `data` | [`RoleOptions`](../interfaces/internal_.RoleOptions-1.md) | updated properties of the role |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)\>

(https://discord.com/developers/docs/topics/permissions#role-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:409

___

### updateGuildRolePositions

▸ **updateGuildRolePositions**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

Modify the positions of a role or multiple roles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | { `id`: `string` ; `position?`: ``null`` \| `number` ; `reason?`: `string`  } \| { `id`: `string` ; `position?`: ``null`` \| `number` ; `reason?`: `string`  }[] | Role data to update |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Role`](../modules/internal_.md#role-1)[]\>

array of [roles](https://discord.com/developers/docs/topics/permissions#role-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_ROLES       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:389

___

### updateGuildWidgetSettings

▸ **updateGuildWidgetSettings**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `channel_id`: `string` ; `enabled`: `boolean`  }\>

Update a guild widget settings object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | basic data of widget settings |
| `data.channel_id?` | `string` | - |
| `data.enabled?` | `boolean` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `channel_id`: `string` ; `enabled`: `boolean`  }\>

(https://discord.com/developers/docs/resources/guild#guild-widget-object)

| Permissions needed | Condition |
|--------------------|-----------|
| MANAGE_GUILD       | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:550

___

### updateSelf

▸ **updateSelf**(`guildId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Update the nick of the current user

**`example`**
// change nick of bot to "Nice Nick"
const client = new SnowTransfer('TOKEN')
const nickData = {
	nick: 'Nice Nick'
}
client.guild.updateSelf('guildId', nickData)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | Id of the guild |
| `data` | `Object` | object with a nick property |
| `data.nick` | `string` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resolves the Promise on successful execution

| Permissions needed | Condition |
|--------------------|-----------|
| CHANGE_NICKNAME    | always    |

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:208

___

### updateUserVoiceState

▸ **updateUserVoiceState**(`guildId`, `userId`, `data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates a user's voice state in a stage channel

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

node_modules/snowtransfer/dist/methods/Guilds.d.ts:615
