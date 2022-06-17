import type { APIGuildMember } from 'discord-api-types/v10';
import type Client from '../gateway/Client';
import type Guild from './Guild';

class GuildMember {
  data: APIGuildMember;
  client: Client;
  guild: Guild;

  constructor (client: Client, data: APIGuildMember, guild: Guild) {
    this.data = data;
    this.client = client;
    this.guild = guild;
  }

  get id() {
    return this.user?.id;
  }

  get user() {
    return this.data.user;
  }

  get banner() {
    return this.user?.banner;
  }

  get bot() {
    return this.user?.bot;
  }

  get nick() {
    return this.data.nick;
  }

  // get displayName() {
  //     return this.nick || this.user.username;
  // }

  get roles() {
    return this.data.roles;
  }

  get joinedAt() {
    return new Date(this.data.joined_at);
  }

  get joinedTimestamp() {
    return this.joinedAt.getTime();
  }

  get deaf() {
    return this.data.deaf;
  }

  get mute() {
    return this.data.mute;
  }

  ban(data: {
		reason?: string | undefined;
		delete_message_days?: number | undefined;
	}) {
    return this.client.rest.guild.createGuildBan(this.guild.id, this.user!.id, data);
  }

  unban(data: {
		reason?: string | undefined;
	}) {
    return this.client.rest.guild.removeGuildBan(this.guild.id, this.user!.id, data);
  }

  kick(reason?: string) {
    return this.client.rest.guild.removeGuildMember(this.guild.id, this.user!.id, { reason });
  }

  async fetch() {
    const data = await this.client.rest.guild.getGuildMember(this.guild.id, this.user!.id);
    this.data = {
      deaf: data.deaf,
      joined_at: data.joined_at,
      mute: data.mute,
      nick: data.nick,
      roles: data.roles || [],
      user: data.user,
      avatar: data.avatar,
      communication_disabled_until: data.communication_disabled_until,
      pending: data.pending,
      premium_since: data.premium_since
    };
    return data;
  }

  setDeaf(deaf: boolean) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, { deaf });
  }

  setMute(mute: boolean) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, { mute });
  }

  setChannel(channel_id: string | null) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, { channel_id });
  }

  setRoles(roles: string[]) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, { roles });
  }
  //TODO add, delete roles

  setNickname(nick: string) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, { nick });
  }

  edit(data: {
		nick?: string | undefined;
		roles?: string[] | undefined;
		mute?: boolean | undefined;
		deaf?: boolean | undefined;
		channel_id?: string | undefined;
	}) {
    return this.client.rest.guild.updateGuildMember(this.guild.id, this.user!.id, data);
  }

  timeout(data: {
		reason?: string | undefined;
		communication_disabled_until?: string | undefined;
	}) {
    return this.client.rest.guild.createGuildTimeout(this.guild.id, this.user!.id, data);
  }

}

export default GuildMember;