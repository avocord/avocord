import { Client as CloudstormClient, IWSMessage } from 'cloudstorm';

import ApplicationCommandInteraction from '../structures/interactions/ApplicationCommandInteraction';
import AutocompleteInteraction from '../structures/interactions/AutocompleteInteraction';
import ComponentInteraction from '../structures/interactions/ComponentInteraction';
import CategoryChannel from '../structures/channel/CategoryChannel';
import TextChannel from '../structures/channel/TextableChannel';
import ThreadChannel from '../structures/channel/ThreadChannel';
import ModalInteraction from '../structures/interactions/ModalInteraction';
import VoiceChannel from '../structures/channel/VoiceChannel';
import NewsChannel from '../structures/channel/NewsChannel';
import DMChannel from '../structures/channel/DMChannel';
import GuildMember from '../structures/GuildMember';
import Sticker from '../structures/Sticker';
import Message from '../structures/Message';
import Emoji from '../structures/Emoji';
import Guild from '../structures/Guild';
import User from '../structures/User';
import Role from '../structures/Role';
import Client from './Client';

import {
  GatewayGuildScheduledEventUserRemoveDispatchData,
  GatewayMessageReactionRemoveEmojiDispatchData,
  GatewayGuildScheduledEventCreateDispatchData,
  GatewayGuildScheduledEventDeleteDispatchData,
  GatewayMessageReactionRemoveAllDispatchData,
  GatewayGuildIntegrationsUpdateDispatchData,
  GatewayMessageReactionRemoveDispatchData,
  GatewayStageInstanceCreateDispatchData,
  GatewayStageInstanceDeleteDispatchData,
  GatewayStageInstanceUpdateDispatchData,
  GatewayMessageReactionAddDispatchData,
  GatewayThreadMemberUpdateDispatchData,
  GatewayChannelPinsUpdateDispatchData,
  GatewayIntegrationCreateDispatchData,
  GatewayIntegrationDeleteDispatchData,
  GatewayIntegrationUpdateDispatchData,
  GatewayInteractionCreateDispatchData,
  GatewayMessageDeleteBulkDispatchData,
  GatewayVoiceServerUpdateDispatchData,
  GatewayVoiceStateUpdateDispatchData,
  GatewayGuildBanRemoveDispatchData,
  GatewayPresenceUpdateDispatchData,
  GatewayWebhooksUpdateDispatchData,
  GatewayMessageDeleteDispatchData,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayGuildBanAddDispatchData,
  GatewayTypingStartDispatchData,
  GatewayReadyDispatchData,
  APIThreadChannel,
  InteractionType,
  APIGuildMember,
  ChannelType
} from 'discord-api-types/v10';
import PingInteraction from '../structures/interactions/PingInteraction';

class Gateway extends CloudstormClient {
  client: Client;

  constructor (client: Client, ops: {
		cloudstormOptions?: import('cloudstorm').IClientOptions,
		token: string;
	}) {
    super(ops.token, ops.cloudstormOptions);
    this.client = client;
    super.on('event', this.processEvent);
  }

  processEvent(payload: IWSMessage) {
    let { t: eventType, d: dataEvent } = payload;
    console.log(eventType);
    switch (eventType) {
    case 'READY': {
      this.client.user = new User(this.client, dataEvent.user);
      this.client.emit('ready', dataEvent as GatewayReadyDispatchData);
      break;
    }
    case 'CHANNEL_CREATE':
    case 'CHANNEL_UPDATE': {
      const oldChannel = this.client.guilds.get(dataEvent.guild_id)?.channels.get(dataEvent.id);
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      let channel: ThreadChannel | TextChannel | VoiceChannel | CategoryChannel | NewsChannel | undefined = undefined;
      switch (dataEvent.type) {
      case ChannelType.DM:
      case ChannelType.GroupDM:
        this.client.dmChannels.set(dataEvent.id, new DMChannel(this.client, dataEvent));
        break;
      case ChannelType.GuildCategory:
        channel = new CategoryChannel(this.client, dataEvent, guild);
        this.client.guilds.get(dataEvent.guild_id)?.channels.set(dataEvent.id, channel);
        break;
      case ChannelType.GuildText:
        channel = new TextChannel(this.client, dataEvent, guild);
        this.client.guilds.get(dataEvent.guild_id)?.channels.set(dataEvent.id, channel);
        break;
      case ChannelType.GuildNews:
        channel = new NewsChannel(this.client, dataEvent, guild);
        this.client.guilds.get(dataEvent.guild_id)?.channels.set(dataEvent.id, channel);
        break;
      case ChannelType.GuildVoice:
      case ChannelType.GuildStageVoice:
        channel = new VoiceChannel(this.client, dataEvent, guild);
        this.client.guilds.get(dataEvent.guild_id)?.channels.set(dataEvent.id, channel);
        break;
      }
      if (channel) {
        if (eventType == 'CHANNEL_CREATE') {
          this.client.emit('channelCreate', channel);
        } else {
          this.client.emit('channelUpdate', oldChannel, channel);
        }
      }
      break;
    }
    case 'CHANNEL_DELETE': {
      let channel: ThreadChannel | TextChannel | VoiceChannel | CategoryChannel | NewsChannel | undefined = undefined;
      channel = this.client.guilds.get(dataEvent.guild_id)?.channels.get(dataEvent.id);
      if (channel) this.client.emit('channelDelete', channel);
      // this.client.dmChannels.delete(dataEvent.id);
      break;
    }
    case 'CHANNEL_PINS_UPDATE': {
      this.client.emit('channelPinsUpdate', dataEvent as GatewayChannelPinsUpdateDispatchData);
      break;
    }
    case 'THREAD_CREATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const channel = new ThreadChannel(this.client, dataEvent, guild);
      this.client.guilds.get(dataEvent.guild_id)?.channels.set(dataEvent.channel_id, channel);
      this.client.emit('threadCreate', channel);
      break;
    }
    case 'THREAD_UPDATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const newThread = new ThreadChannel(this.client, dataEvent, guild);
      const oldThread = guild.channels.get(dataEvent.channel_id) as ThreadChannel | undefined;
      guild.channels.set(dataEvent.channel_id, newThread);
      this.client.emit('threadUpdate', oldThread, newThread);
      break;
    }
    case 'THREAD_DELETE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const deletedThread = guild.channels.get(dataEvent.channel_id) as ThreadChannel | undefined;
      this.client.emit('threadDelete', deletedThread);
      break;
    }
    case 'THREAD_LIST_SYNC': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??

      const threads = guild.channels;
      if (dataEvent.channel_ids) {
        for (const id of dataEvent.channel_ids) {
          const channel = guild.channels.get(id);
          if (channel) threads.forEach(t => threads.delete(t.id));
        }
      } else {
        for (const channel of guild.channels.values()) {
          threads.delete(channel.id);
        }
      }
      dataEvent.threads.map((t: APIThreadChannel) => new ThreadChannel(this.client, t, guild)).forEach((t: ThreadChannel) => guild.channels.set(t.id, t));
      this.client.emit('threadListSync');
      break;
    }
    case 'THREAD_MEMBER_UPDATE': {
      this.client.emit('threadMemberUpdate', dataEvent as GatewayThreadMemberUpdateDispatchData);
      break;
    }
    case 'GUILD_CREATE': {
      const guild = new Guild(this.client, dataEvent);
      this.client.guilds.set(guild.id, guild);
      this.client.emit('guildCreate', guild);
      break;
    }
    case 'GUILD_UPDATE': {
      const oldGuild = this.client.guilds.get(dataEvent.id);
      const newGuild = new Guild(this.client, dataEvent);
      this.client.guilds.set(dataEvent.id, newGuild);
      this.client.emit('guildUpdate', oldGuild, newGuild);
      break;
    }
    case 'GUILD_DELETE': {
      const deletedGuild = this.client.guilds.get(dataEvent.id);
      this.client.guilds.delete(dataEvent.id);
      this.client.emit('guildDelete', deletedGuild);
      break;
    }
    case 'GUILD_BAN_ADD': {
      this.client.guilds.get(dataEvent.guild_id)?.members.delete(dataEvent.user.id);
      const bannedUser = new User(this.client, (dataEvent as GatewayGuildBanAddDispatchData).user);
      this.client.emit('guildBanAdd', bannedUser, dataEvent.guild_id);
      break;
    }
    case 'GUILD_BAN_REMOVE': {
      const unbannedUser = new User(this.client, (dataEvent as GatewayGuildBanRemoveDispatchData).user);
      this.client.emit('guildBanRemove', unbannedUser, dataEvent.guild_id);
      break;
    }
    case 'GUILD_EMOJIS_UPDATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const oldEmoji = guild.emojis.get(dataEvent.emoji.id);
      const newEmoji = new Emoji(this.client, dataEvent.emoji, guild);
      guild.emojis.set(dataEvent.emoji.id, newEmoji);
      this.client.emit('guildEmojisUpdate', oldEmoji, newEmoji);
      break;
    }
    case 'GUILD_STICKERS_UPDATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const oldSticker = guild.stickers.get(dataEvent.sticker.id);
      const newSticker = new Sticker(this.client, dataEvent.sticker, guild);
      guild.stickers.set(dataEvent.sticker.id, newSticker);
      this.client.emit('guildStickersUpdate', oldSticker, newSticker);
      break;
    }
    case 'GUILD_INTEGRATIONS_UPDATE': {
      this.client.emit('guildIntegrationsUpdate', dataEvent as GatewayGuildIntegrationsUpdateDispatchData);
      break;
    }
    case 'GUILD_MEMBER_ADD': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const member = new GuildMember(this.client, dataEvent, guild);
      guild.members.set(member.user!.id, member);
      this.client.emit('guildMemberAdd', member);
      break;
    }
    case 'GUILD_MEMBER_UPDATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const oldMember = guild.members.get(dataEvent.user.id);
      const newMember = new GuildMember(this.client, dataEvent, guild);
      guild.members.set(dataEvent.user.id, newMember);
      this.client.emit('guildMemberUpdate', oldMember, newMember);
      break;
    }
    case 'GUILD_MEMBER_REMOVE': {
      this.client.guilds.get(dataEvent.guild_id)?.members.delete(dataEvent.user.id);
      this.client.emit('guildMemberRemove', new User(this.client, dataEvent.user));
      break;
    }
    case 'GUILD_MEMBERS_CHUNK': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??;
      const members = dataEvent.members.map((m: APIGuildMember) => new GuildMember(this.client, m, guild)) as GuildMember[];
      for (const member of members) {
        guild.members.set(member.user!.id, member);
      }
      this.client.emit('guildMembersChunk', members);
      break;
    }
    case 'GUILD_ROLE_CREATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const role = new Role(this.client, dataEvent, guild);
      guild.roles.set(role.id, role);
      this.client.emit('guildRoleCreate', role);
      break;
    }
    case 'GUILD_ROLE_UPDATE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const oldRole = guild.roles.get(dataEvent.role.id);
      const newRole = new Role(this.client, dataEvent, guild);
      guild.roles.set(dataEvent.role.id, newRole);
      this.client.emit('guildRoleUpdate', oldRole, newRole);
      break;
    }
    case 'GUILD_ROLE_DELETE': {
      const guild = this.client.guilds.get(dataEvent.guild_id);
      if (!guild) return;//??
      const role = guild.roles.get(dataEvent.role_id);
      guild.roles.delete(dataEvent.role_id);
      this.client.emit('guildRoleDelete', role);
      break;
    }
    case 'GUILD_SCHEDULED_EVENT_CREATE': {
      this.client.emit('guildScheduledEventCreate', dataEvent as GatewayGuildScheduledEventCreateDispatchData);
      break;
    }
    case 'GUILD_SCHEDULED_EVENT_DELETE': {
      this.client.emit('guildScheduledEventDelete', dataEvent as GatewayGuildScheduledEventDeleteDispatchData);
      break;
    }
    case 'GUILD_SCHEDULED_EVENT_USER_ADD': {
      this.client.emit('guildScheduledEventUserAdd', dataEvent);
      break;
    }
    case 'GUILD_SCHEDULED_EVENT_USER_REMOVE': {
      this.client.emit('guildScheduledEventUserRemove', dataEvent as GatewayGuildScheduledEventUserRemoveDispatchData);
      break;
    }
    case 'INTEGRATION_CREATE': {
      this.client.emit('integrationCreate', dataEvent as GatewayIntegrationCreateDispatchData);
      break;
    }
    case 'INTEGRATION_UPDATE': {
      this.client.emit('integrationUpdate', dataEvent as GatewayIntegrationUpdateDispatchData);
      break;
    }
    case 'INTEGRATION_DELETE': {
      this.client.emit('integrationDelete', dataEvent as GatewayIntegrationDeleteDispatchData);
      break;
    }
    case 'INTERACTION_CREATE': {
      let interaction;
      switch (dataEvent.type) {
      case InteractionType.ApplicationCommand: {
        interaction = new ApplicationCommandInteraction(dataEvent, this.client);
        break;
      }
      case InteractionType.MessageComponent: {
        interaction = new ComponentInteraction(dataEvent, this.client);
        break;
      }
      case InteractionType.ModalSubmit:
        interaction = new ModalInteraction(dataEvent, this.client);
        break;
      case InteractionType.ApplicationCommandAutocomplete:
        interaction = new AutocompleteInteraction(dataEvent, this.client);
        break;
      case InteractionType.Ping:
        interaction = new PingInteraction(dataEvent, this.client);
        break;
      default:
        interaction = dataEvent as GatewayInteractionCreateDispatchData;
        break;
      }
      this.client.emit('interactionCreate', interaction);
      break;
    }
    case 'INVITE_CREATE': {
      this.client.emit('inviteCreate', dataEvent as GatewayInviteCreateDispatchData);
      break;
    }
    case 'INVITE_DELETE': {
      this.client.emit('inviteDelete', dataEvent as GatewayInviteDeleteDispatchData);
      break;
    }
    case 'MESSAGE_CREATE': {
      let channel: DMChannel | TextChannel | ThreadChannel | VoiceChannel | NewsChannel /*poto*/ | undefined = undefined;
      if (!dataEvent.guild_id) {
        this.client.dmChannels.set(dataEvent.channel_id, new DMChannel(this.client, { id: dataEvent.channel_id, type: ChannelType.DM }));
      } else {
        const _channel = this.client.guilds.get(dataEvent.guild_id)!.channels.get(dataEvent.channel_id)!;
        if (_channel instanceof CategoryChannel) throw new Error('CategoryChannel is not supported');
        channel = _channel;
      }
      const message = new Message(this.client, dataEvent, channel!);
      this.client.emit('messageCreate', message);
      break;
    }
    case 'MESSAGE_UPDATE': {
      let channel: DMChannel | TextChannel | ThreadChannel | VoiceChannel | NewsChannel /*poto*/ | undefined = undefined;
      if (!dataEvent.guild_id) {
        this.client.dmChannels.set(dataEvent.channel_id, new DMChannel(this.client, { id: dataEvent.channel_id, type: ChannelType.DM }));
      } else {
        const _channel = this.client.guilds.get(dataEvent.guild_id)!.channels.get(dataEvent.channel_id)!;
        if (_channel instanceof CategoryChannel) throw new Error('CategoryChannel is not supported');
        channel = _channel;
      }
      const message = new Message(this.client, dataEvent, channel!);
      this.client.emit('messageUpdate', message);
      break;
    }
    case 'MESSAGE_DELETE': {
      this.client.emit('messageDelete', dataEvent as GatewayMessageDeleteDispatchData);
      break;
    }
    case 'MESSAGE_DELETE_BULK': {
      this.client.emit('messageDeleteBulk', dataEvent as GatewayMessageDeleteBulkDispatchData);
      break;
    }
    case 'MESSAGE_REACTION_ADD': {
      this.client.emit('messageReactionAdd', dataEvent as GatewayMessageReactionAddDispatchData);
      break;
    }
    case 'MESSAGE_REACTION_REMOVE': {
      this.client.emit('messageReactionRemove', dataEvent as GatewayMessageReactionRemoveDispatchData);
      break;
    }
    case 'MESSAGE_REACTION_REMOVE_ALL': {
      this.client.emit('messageReactionRemoveAll', dataEvent as GatewayMessageReactionRemoveAllDispatchData);
      break;
    }
    case 'MESSAGE_REACTION_REMOVE_EMOJI': {
      this.client.emit('messageReactionRemoveEmoji', dataEvent as GatewayMessageReactionRemoveEmojiDispatchData);
      break;
    }
    case 'PRESENCE_UPDATE': {
      this.client.emit('presenceUpdate', dataEvent as GatewayPresenceUpdateDispatchData);
      break;
    }
    case 'STAGE_INSTANCE_CREATE': {
      this.client.emit('stageInstanceCreate', dataEvent as GatewayStageInstanceCreateDispatchData);
      break;
    }
    case 'STAGE_INSTANCE_UPDATE': {
      this.client.emit('stageInstanceUpdate', dataEvent as GatewayStageInstanceUpdateDispatchData);
      break;
    }
    case 'STAGE_INSTANCE_DELETE': {
      this.client.emit('stageInstanceDelete', dataEvent as GatewayStageInstanceDeleteDispatchData);
      break;
    }
    case 'TYPING_START': {
      this.client.emit('typingStart', dataEvent as GatewayTypingStartDispatchData);
      break;
    }
    case 'USER_UPDATE': {
      const user = new User(this.client, dataEvent);
      if (user.id === this.client.user?.id) {
        Object.assign(this.client.user!, user);
      }
      this.client.emit('userUpdate', user);
      break;
    }
    case 'VOICE_STATE_UPDATE': {
      this.client.emit('voiceStateUpdate', dataEvent as GatewayVoiceStateUpdateDispatchData);
      break;
    }
    case 'VOICE_SERVER_UPDATE': {
      this.client.emit('voiceServerUpdate', dataEvent as GatewayVoiceServerUpdateDispatchData);
      break;
    }
    case 'WEBHOOKS_UPDATE': {
      this.client.emit('webhooksUpdate', dataEvent as GatewayWebhooksUpdateDispatchData);
      break;
    }
    default: {
      this.client.emit('unknownEvent', eventType, dataEvent);
      break;
    }
    }
  }
}

export default Gateway;