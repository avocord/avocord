import { IWSMessage } from "cloudstorm";
import { Client as CloudstormClient } from "cloudstorm";
import User from '../structures/User';
import Guild from '../structures/Guild';
import BotClient from '../index';
import { ChannelType, GatewayReadyDispatchData, GatewayChannelPinsUpdateDispatchData } from 'discord-api-types';
import TextableChannel from "../structures/channel/textable";
import VoiceChannel from "../structures/channel/voice";
import CategoryChannel from "../structures/channel/category";
import ThreadChannel from "../structures/channel/thread";
import DMChannel from "../structures/channel/dm";

class Client extends CloudstormClient {
	client: BotClient;

	constructor(client: BotClient, ops: {
		cloudstormOptions?: import('cloudstorm').IClientOptions,
		token: string
	}) {
		super(ops.token, ops.cloudstormOptions);
		this.client = client;
		super.on('event', this.processEvent);
	}

	processEvent(payload: IWSMessage) {
		const { t: eventType, d: dataEvent } = payload;
		console.log(eventType);
		//message, guild, canales y roles
		switch (eventType) {
			case 'READY': {
				console.log(dataEvent);
				this.client.user = new User(this.client, dataEvent.user);
				this.client.emit('ready', dataEvent as GatewayReadyDispatchData);
				break;
			}
			case 'CHANNEL_CREATE':
			case 'CHANNEL_UPDATE': {
				let oldChannel = this.client.guilds.get(dataEvent.guild_id)?.channels.get(dataEvent.id);
				let channel: TextableChannel | VoiceChannel | CategoryChannel | undefined = undefined;
				switch (dataEvent.type) {
					case ChannelType.DM:
					case ChannelType.GroupDM:
						this.client.dmChannels.set(payload.d.id, new DMChannel(this.client, dataEvent));
						break;
					case ChannelType.GuildCategory:
						channel = new CategoryChannel(this.client, dataEvent);
						this.client.guilds.get(payload.d.guild_id)?.channels.set(payload.d.id, channel);
						break;
					case ChannelType.GuildText:
					case ChannelType.GuildNews:
						channel = new TextableChannel(this.client, dataEvent);
						this.client.guilds.get(payload.d.guild_id)?.channels.set(payload.d.id, channel);
						break;
					case ChannelType.GuildVoice:
					case ChannelType.GuildStageVoice:
						channel = new VoiceChannel(this.client, dataEvent);
						this.client.guilds.get(payload.d.guild_id)?.channels.set(payload.d.id, channel);
						break;
				}
				if (channel) this.client.emit(eventType == 'CHANNEL_CREATE' ? 'channelCreate' : 'channelUpdate', channel);
				break;
			}
			case 'CHANNEL_DELETE': {
				payload.d//GatewayChannelDeleteDispatchData
				let channel: TextableChannel | VoiceChannel | CategoryChannel | ThreadChannel | undefined = undefined;
				channel = this.client.guilds.get(payload.d.guild_id)?.channels.get(payload.d.id);
				this.client.emit('channelDelete', channel);
				// this.client.dmChannels.delete(payload.d.id);
				break;
			}
			case 'CHANNEL_PINS_UPDATE': {
				this.client.emit('channelPinsUpdate', payload.d as GatewayChannelPinsUpdateDispatchData);
				break;
			}
			case 'THREAD_CREATE': {
				const channel = new ThreadChannel(this.client, dataEvent);
				this.client.guilds.get(payload.d.guild_id)?.channels.set(payload.d.channel_id, channel);
				this.client.emit('threadCreate', channel);
				break;
			}
			case 'THREAD_UPDATE': {
				break;
			}
			case 'THREAD_DELETE': {
				break;
			}
			case 'THREAD_LIST_SYNC': {
				break;
			}
			case 'THREAD_MEMBER_UPDATE': {
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
				break;
			}
			case 'GUILD_DELETE': {
				const deletedGuild = this.client.guilds.get(dataEvent.id);
				this.client.guilds.delete(dataEvent.id);
				this.client.emit('guildDelete', deletedGuild);
				break;
			}
			case 'GUILD_BAN_ADD': {
				break;
			}
			case 'GUILD_BAN_REMOVE': {
				break;
			}
			case 'GUILD_EMOJIS_UPDATE': {
				break;
			}
			case 'GUILD_STICKERS_UPDATE': {
				break;
			}
			case 'GUILD_INTEGRATIONS_UPDATE': {
				break;
			}
			case 'GUILD_MEMBER_ADD': {
				break;
			}
			case 'GUILD_MEMBER_UPDATE': {
				break;
			}
			case 'GUILD_MEMBER_REMOVE': {
				break;
			}
			case 'GUILD_MEMBERS_CHUNK': {
				break;
			}
			case 'GUILD_ROLE_CREATE': {
				break;
			}
			case 'GUILD_ROLE_UPDATE': {
				break;
			}
			case 'GUILD_ROLE_DELETE': {
				break;
			}
			case 'GUILD_SCHEDULED_EVENT_CREATE': {
				break;
			}
			case 'GUILD_SCHEDULED_EVENT_DELETE': {
				break;
			}
			case 'GUILD_SCHEDULED_EVENT_USER_ADD': {
				break;
			}
			case 'GUILD_SCHEDULED_EVENT_USER_REMOVE': {
				break;
			}
			case 'INTEGRATION_CREATE': {
				break;
			}
			case 'INTEGRATION_UPDATE': {
				break;
			}
			case 'INTEGRATION_DELETE': {
				break;
			}
			case 'INTERACTION_CREATE': {
				break;
			}
			case 'INVITE_CREATE': {
				break;
			}
			case 'INVITE_DELETE': {
				break;
			}
			case 'MESSAGE_CREATE': {
				this.client.emit('messageCreate', dataEvent);
				break;
			}
			case 'MESSAGE_UPDATE': {
				break;
			}
			case 'MESSAGE_DELETE': {
				break;
			}
			case 'MESSAGE_DELETE_BULK': {
				break;
			}
			case 'MESSAGE_REACTION_ADD': {
				break;
			}
			case 'MESSAGE_REACTION_REMOVE': {
				break;
			}
			case 'MESSAGE_REACTION_REMOVE_ALL': {
				break;
			}
			case 'MESSAGE_REACTION_REMOVE_EMOJI': {
				break;
			}
			case 'PRESENCE_UPDATE': {
				break;
			}
			case 'STAGE_INSTANCE_CREATE': {
				break;
			}
			case 'STAGE_INSTANCE_UPDATE': {
				break;
			}
			case 'STAGE_INSTANCE_DELETE': {
				break;
			}
			case 'TYPING_START': {
				break;
			}
			case 'USER_UPDATE': {
				break;
			}
			case 'VOICE_STATE_UPDATE': {
				break;
			}
			case 'VOICE_SERVER_UPDATE': {
				break;
			}
			case 'WEBHOOKS_UPDATE': {
				break;
			}
			default: {
				this.client.emit('unknownEvent', eventType, dataEvent);
				break;
			}
		}
	}
}

export default Client;