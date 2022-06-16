import DMChannel from './channel/DMChannel';

import type { APIUser } from 'discord-api-types/v10';
import type Client from '../gateway/Client';

class User {
  data: APIUser;
  client: Client;

  constructor (client: Client, data: APIUser) {
    this.client = client;
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get username() {
    return this.data.username;
  }

  get discriminator() {
    return this.data.discriminator;
  }

  get avatar() {
    return this.data.avatar;
  }

  get bot() {
    return !!this.data.bot;
  }

  get flags() {
    //TODO: Implement flags
    return this.data.flags;
  }

  get createdAtTimestamp() {
    return Number(BigInt(this.data.id) >> 22n) + 1_420_070_400_000;
  }

  get createdAt() {
    return new Date(this.createdAtTimestamp);
  }

  get avatarURL() {
    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;
  }

  get defaultAvatarURL() {
    return `https://cdn.discordapp.com/embed/avatars/${Number(this.discriminator) % 5}.png`;
  }

  get displayAvatarURL() {
    return this.avatarURL || this.defaultAvatarURL;
  }

  get tag() {
    return `${this.username}#${this.discriminator}`;
  }

  get url() {
    return `https://discordapp.com/users/${this.id}/${this.username}`;
  }

  get createdTimestamp() {
    return this.createdAt.getTime();
  }

  async fetch() {
    const data = await this.client.rest.user.getUser(this.id);
    this.data = data;
    return data;
  }

  //base64
  setAvatar(avatar: string) {
    return this.client.rest.user.updateSelf({ avatar });
  }

  setUsername(username: string) {
    return this.client.rest.user.updateSelf({ username });
  }

  edit(options: { username?: string, avatar?: string; }) {
    return this.client.rest.user.updateSelf(options);
  }

  deleteDM() {
    this.client.dmChannels.delete(this.id);
    return this.client.rest.channel.deleteChannel(this.id);
  }

  async createDM() {
    let channel = this.client.dmChannels.get(this.id);
    if (!channel) {
      const fetch = await this.client.rest.user.createDirectMessageChannel(this.id);
      channel = new DMChannel(this.client, fetch);
      this.client.dmChannels.set(this.id, channel);
    }
    return channel;
  }

}

export default User;