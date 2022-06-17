[Avocord](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AddGuildMemberData

# Interface: AddGuildMemberData

[<internal>](../modules/internal_.md).AddGuildMemberData

## Table of contents

### Properties

- [access\_token](internal_.AddGuildMemberData.md#access_token)
- [deaf](internal_.AddGuildMemberData.md#deaf)
- [mute](internal_.AddGuildMemberData.md#mute)
- [nick](internal_.AddGuildMemberData.md#nick)
- [roles](internal_.AddGuildMemberData.md#roles)

## Properties

### access\_token

• **access\_token**: `string`

oauth2 access token with a `guilds.join` scope enabled

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:733

___

### deaf

• `Optional` **deaf**: `boolean`

if the new member is deaf

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:749

___

### mute

• `Optional` **mute**: `boolean`

if the new member should be muted

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:745

___

### nick

• `Optional` **nick**: `string`

nickname of the new member

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:737

___

### roles

• `Optional` **roles**: `string`[]

Array of Role Ids the new member should have

#### Defined in

node_modules/snowtransfer/dist/methods/Guilds.d.ts:741
