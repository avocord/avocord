import { APIRole } from "discord-api-types/v10";
import type Client from '../index';
import Guild from "./Guild";

class Role {
	data: APIRole;
	client: Client;
	guild: Guild;

	constructor(client: Client, data: APIRole, guild: Guild) {
		this.client = client;
		this.data = data;
		this.guild = guild;
	}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
	}

	get color() {
		return this.data.color;
	}

	get hoist() {
		return this.data.hoist;
	}

	get position() {
		return this.data.position;
	}

	get permissions() {
		return this.data.permissions;
	}

	get managed() {
		return this.data.managed;
	}

	get mentionable() {
		return this.data.mentionable;
	}

	get tags() {
		return this.data.tags;
	}

	delete() {
		return this.client.rest.guild.removeGuildRole(this.guild.id, this.id);
	}

	update(data: RoleOptions) {
		return this.client.rest.guild.updateGuildRole(this.guild.id, this.id, data);
	}

	editPosition(positions: editPosition) {
		return this.client.rest.guild.updateGuildRolePositions(this.guild.id, positions)
	}


}

export default Role;

export interface RoleOptions {
	name?: string;
	permissions?: number;
	color?: number;
	hoist?: boolean;
	icon?: string | null;
	unicode_emoji?: string | null;
	mentionable?: boolean;
}

export type editPosition = { id: string; position?: number | null; reason?: string; } | Array<{ id: string; position?: number | null; reason?: string; }>