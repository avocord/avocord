import type { APISticker } from 'discord-api-types/v10';
import type Client from '../gateway/Client';
import type Guild from './Guild';

class Sticker {
  data: APISticker;
  client: Client;
  guild: Guild;

  constructor (client: Client, data: APISticker, guild: Guild) {
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

  get packId() {
    return this.data.pack_id ? this.data.pack_id : null;
  }

  get available() {
    return !!this.data.available;
  }

  get description() {
    return this.data.description;
  }

  get tags() {
    return this.data.tags;
  }

  get type() {
    return this.data.type;
  }

  get formatType() {
    return this.data.format_type;
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

  get user() {
    return this.data.user;
  }

  edit(data: {
		name?: string | undefined;
		description?: string | null | undefined;
		tags?: string | undefined;
		reason?: string | undefined;
	}) {
    return this.client.rest.guildAssets.updateGuildSticker(this.guild.id, this.id!, data);
  }

  delete(reason?: string) {
    return this.client.rest.guildAssets.deleteGuildSticker(this.guild.id, this.id!, reason);
  }

  async fetch() {
    const data = await this.client.rest.guildAssets.getSticker(this.id!);
    this.data = {
      description: data.description,
      id: data.id,
      name: data.name,
      tags: data.tags,
      type: data.type,
      format_type: data.format_type,
      user: data.user,
      available: data.available,
      pack_id: data.pack_id,
      guild_id: data.guild_id,
      sort_value: data.sort_value,
      // https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
      asset: ''
    };
    return data;
  }

}

export default Sticker;