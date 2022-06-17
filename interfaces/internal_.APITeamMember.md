[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / APITeamMember

# Interface: APITeamMember

[<internal>](../modules/internal_.md).APITeamMember

https://discord.com/developers/docs/topics/teams#data-models-team-members-object

## Table of contents

### Properties

- [membership\_state](internal_.APITeamMember.md#membership_state)
- [permissions](internal_.APITeamMember.md#permissions)
- [team\_id](internal_.APITeamMember.md#team_id)
- [user](internal_.APITeamMember.md#user)

## Properties

### membership\_state

• **membership\_state**: [`TeamMemberMembershipState`](../enums/internal_.TeamMemberMembershipState.md)

The user's membership state on the team

See https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum

#### Defined in

node_modules/discord-api-types/payloads/v10/teams.d.ts:40

___

### permissions

• **permissions**: [``"*"``]

Will always be `["*"]`

#### Defined in

node_modules/discord-api-types/payloads/v10/teams.d.ts:44

___

### team\_id

• **team\_id**: `string`

The id of the parent team of which they are a member

#### Defined in

node_modules/discord-api-types/payloads/v10/teams.d.ts:48

___

### user

• **user**: [`APIUser`](internal_.APIUser.md)

The avatar, discriminator, id, and username of the user

See https://discord.com/developers/docs/resources/user#user-object

#### Defined in

node_modules/discord-api-types/payloads/v10/teams.d.ts:54
