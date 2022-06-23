import CategoryChannel from './channel/CategoryChannel';
import TextableChannel from './channel/TextableChannel';
import ThreadChannel from './channel/ThreadChannel';
import { Collection } from '@discordoo/collection';
import VoiceChannel from './channel/VoiceChannel';
import NewsChannel from './channel/NewsChannel';
import GuildMember from './GuildMember';
import Sticker from './Sticker';
import Emoji from './Emoji';
import Role from './Role';

import { APIGuild, APIThreadChannel, ChannelType } from 'discord-api-types/v10';
import type Client from '../gateway/Client';

class Guild {
  data: APIGuild;
  channels: Collection<string, TextableChannel | VoiceChannel | CategoryChannel | ThreadChannel | NewsChannel>;
  roles: Collection<string, Role>;
  members: Collection<string, GuildMember>;
  emojis: Collection<string, Emoji>;
  presences: Collection<string, unknown>;
  client: Client;
  stickers: Collection<string, Sticker>;

  constructor (client: Client, data: APIGuild) {
    this.data = data;
    this.channels = new Collection();
    this.roles = new Collection();
    this.members = new Collection();
    this.emojis = new Collection();
    this.presences = new Collection();
    this.stickers = new Collection();
    this.client = client;

    for (let i of data.channels || []) {
      switch (i.type) {
      case ChannelType.GuildCategory:
        this.channels.set(i.id, new CategoryChannel(this.client, i, this));
        break;
      case ChannelType.GuildText:
        this.channels.set(i.id, new TextableChannel(this.client, i, this));
        break;
      case ChannelType.GuildStageVoice:
      case ChannelType.GuildVoice:
        this.channels.set(i.id, new VoiceChannel(this.client, i, this));
        break;
      case ChannelType.GuildPrivateThread:
      case ChannelType.GuildPublicThread:
      case ChannelType.GuildNewsThread:
        this.channels.set(i.id, new ThreadChannel(this.client, i, this));
        break;
      case ChannelType.GuildNews:
        this.channels.set(i.id, new NewsChannel(this.client, i, this));
        break;
      }

    }

    for (let i of data.threads || []) {
      this.channels.set(i.id, new ThreadChannel(this.client, i as APIThreadChannel, this));
    }

    for (let i of data.roles) {
      this.roles.set(i.id, new Role(this.client, i, this));
    }

    for (let i of data.members || []) {
      this.members.set(i.user!.id, new GuildMember(this.client, i, this));
    }

    for (let i of data.emojis || []) {
      this.emojis.set(i.id!, new Emoji(this.client, i, this));
    }

    for (let i of data.stickers || []) {
      this.stickers.set(i.id, new Sticker(this.client, i, this));
    }

    // for (let i of data.presences || []) {
    // 	this.presences.set(i.user!.id, i);
    // }

  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  get icon() {
    return this.data.icon;
  }

  iconURL(format = 'png') {
    return this.icon ? `https://cdn.discordapp.com/icons/${this.data.id}/${this.data.icon}.${format}` : null;
  }

  get splash() {
    return this.data.splash;
  }

  get owner() {
    return !!this.data.owner;
  }

  get ownerId() {
    return this.data.owner_id;
  }

  get permissions() {
    return this.data.permissions;
  }

  get afkChannelId() {
    return this.data.afk_channel_id;
  }

  get afkTimeout() {
    return this.data.afk_timeout;
  }

  get verificationLevel() {
    return this.data.verification_level;
  }

  get defaultMessageNotifications() {
    return this.data.default_message_notifications;
  }

  get explicitContentFilter() {
    return this.data.explicit_content_filter;
  }

  get features() {
    return this.data.features;
  }

  get mfaLevel() {
    return this.data.mfa_level;
  }

  get applicationId() {
    return this.data.application_id;
  }

  get widgetEnabled() {
    return this.data.widget_enabled;
  }

  get widgetChannelId() {
    return this.data.widget_channel_id;
  }

  get systemChannelId() {
    return this.data.system_channel_id;
  }
}

export default Guild;