import type { APINewsChannel, APITextChannel, APIVoiceChannel, APIThreadChannel, APIGuildCategoryChannel } from 'discord-api-types/v10';
import type  { EditChannelData } from './Constants';
import type Client from '../gateway/Client';
import type Guild from './Guild';

class BaseGuildChannel<T extends (APINewsChannel | APITextChannel | APIVoiceChannel | APIThreadChannel | APIGuildCategoryChannel)> {
  data: T;
  client: Client;
  guild: Guild;

  constructor(client: Client, data: T, guild: Guild) {
    this.data = data;
    this.client = client;
    this.guild = guild;
  }

  get name() {
    return this.data.name!;
  }

  get id() {
    return this.data.id;
  }

  get type() {
    return this.data.type;
  }

  get guildId() {
    return this.guild.id;
  }

  delete(reason?: string) {
    return this.client.rest.channel.deleteChannel(this.id, reason);
  }

  edit(data: EditChannelData) {
    return this.client.rest.channel.updateChannel(this.id, data);
  }

}

export default BaseGuildChannel;