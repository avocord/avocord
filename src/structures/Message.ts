import TextableChannel from './channel/TextableChannel';
import { APIMessage } from 'discord-api-types/v10';
import VoiceChannel from './channel/VoiceChannel';
import NewsChannel from './channel/NewsChannel';
import Thread from './channel/ThreadChannel';
import DMChannel from './channel/DMChannel';
import Client from '../gateway/Client';

import type { CreateMessageData } from './channel/Constants';

class Message {
  client: Client;
  data: APIMessage;
  channel: TextableChannel | Thread | DMChannel | VoiceChannel | NewsChannel;

  constructor (client: Client, data: APIMessage, channel: TextableChannel | Thread | DMChannel | VoiceChannel | NewsChannel) {
    this.client = client;
    this.data = data;
    this.channel = channel;
  }

  get id() {
    return this.data.id;
  }

  get channelId() {
    return this.data.channel_id;
  }

  get guildId() {
    return this.data.guild_id;
  }

  get author() {
    return this.data.author;
  }

  get member() {
    return this.data.member;
  }

  get content() {
    return this.data.content;
  }

  get timestamp() {
    return new Date(this.data.timestamp);
  }

  get editedTimestamp() {
    return this.data.edited_timestamp ? new Date(this.data.edited_timestamp) : null;
  }

  get tts() {
    return this.data.tts;
  }

  get mentionEveryone() {
    return this.data.mention_everyone;
  }

  get mentions() {
    return this.data.mentions;
  }

  get mentionRoles() {
    return this.data.mention_roles;
  }

  get mentionChannels() {
    return (this.content && this.content.match(/<#[0-9]+>/g) || []).map((mention) => mention.substring(2, mention.length - 1));
  }

  get attachments() {
    return this.data.attachments;
  }

  get embeds() {
    return this.data.embeds;
  }

  get reactions() {
    return this.data.reactions;
  }

  get nonce() {
    return this.data.nonce;
  }

  get pinned() {
    return this.data.pinned;
  }

  get webhookId() {
    return this.data.webhook_id;
  }

  get type() {
    return this.data.type;
  }

  get activity() {
    return this.data.activity;
  }

  get application() {
    return this.data.application;
  }

  get applicationId() {
    return this.data.application_id;
  }

  get messageReference() {
    return this.data.message_reference;
  }

  get flags() {
    return this.data.flags;
  }

  get referencedMessage() {
    return this.data.referenced_message;
  }

  get interaction() {
    return this.data.interaction;
  }

  get thread() {
    return this.data.thread;
  }

  get components() {
    return this.data.components;
  }

  get stickers() {
    return this.data.sticker_items;
  }

  //Deprecated:
  // get stickers (){
  // 	return this.data.stickers;
  // }

  delete() {
    return this.client.rest.channel.deleteMessage(this.channelId, this.id);
  }

  pin(reason?: string) {
    return this.client.rest.channel.addChannelPinnedMessage(this.channelId, this.id, reason);
  }

  unpin(reason?: string) {
    return this.client.rest.channel.removeChannelPinnedMessage(this.channelId, this.id, reason);
  }

  react(emoji: string) {
    return this.client.rest.channel.createReaction(this.channelId, this.id, emoji);
  }

  reply(data: CreateMessageData, options?: {
		disableEveryone?: boolean;
		failIfNotExists?: boolean;
	}) {
    return this.client.rest.channel.createMessage(this.channelId, {
      message_reference: {
        channel_id: this.channelId,
        message_id: this.id,
        guild_id: this.guildId,
        fail_if_not_exists: options?.failIfNotExists
      },
      ...data
    }, { disableEveryone: options?.disableEveryone });
  }

  removeEmbeds() {
    // SUPPRESS_EMBEDS: 1 << 2
    return this.client.rest.channel.editMessage(this.channelId, this.id, { flags: (this.flags ?? 0) & (1 << 2) });
  }

  crosspost() {
    return this.client.rest.channel.crosspostMessage(this.channelId, this.id);
  }

}

export default Message;