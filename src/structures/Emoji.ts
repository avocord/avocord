import { APIEmoji } from "discord-api-types";
import type Client from '../index';
import Guild from "./Guild";

class Emoji {
	data: APIEmoji;
	client: Client;
	guild: Guild;

	constructor(client: Client, data: APIEmoji, guild: Guild) {
		this.data = data;
		this.client = client;
		this.guild = guild;
	}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
	}

	get requireColons() {
		return !!this.data.require_colons;
	}

	get animated() {
		return !!this.data.animated;
	}

	get available() {
		return !!this.data.available;
	}

	get url() {
		return `https://cdn.discordapp.com/emojis/${this.data.id}.${this.data.animated ? 'gif' : 'png'}`;
	}

	get createdAtTimestamp() {
		return this.id ? Number(BigInt(this.id) >> 22n) + 1_420_070_400_000 : 0;
	}

	get createdAt() {
		return new Date(this.createdAtTimestamp);
	}

	get creator() {
		return this.data.user;
	}

	get roles() {
		return this.data.roles;
	}

	get managed() {
		return !!this.data.managed;
	}

	get user() {
		return this.data.user;
	}

	edit(data: {
		name?: string | undefined;
		roles?: string[] | null | undefined;
		reason?: string | undefined;
	}) {
		return this.client.rest.guildAssets.updateEmoji(this.guild.id, this.id!, data)
	}

	delete(reason?: string) {
		return this.client.rest.guildAssets.deleteEmoji(this.guild.id, this.id!, reason);
	}

	async fetch() {
		const data = await this.client.rest.guildAssets.getEmoji(this.guild.id, this.id!);
		this.data = data;
		return data;
	}
}

export default Emoji;