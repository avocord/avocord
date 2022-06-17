import BaseGuildChannel from '../BaseGuildChannel';

import type { CreateMessageData, GetMessageOptions } from './Constants';
import type { APINewsChannel } from 'discord-api-types/v10';

class NewsChannel extends BaseGuildChannel<APINewsChannel> { 

  get topic() {
    return this.data.topic;
  }

  get lastMessageId() {
    return this.data.last_message_id;
  }

  get parentId() {
    return this.data.parent_id;
  }

  get permissionOverwrites() {
    return this.data.permission_overwrites;
  }

  get nsfw() {
    return this.data.nsfw;
  }

  get lastPinTimestamp() {
    return this.data.last_pin_timestamp;
  }

  get defaultAutoArchiveDuration() {
    return this.data.default_auto_archive_duration;
  }

  fetchPins() {
    return this.client.rest.channel.getChannelPinnedMessages(this.id);
  }

  // TODO
  syncPermissions() {
    throw new Error('Not implemented yet.');
  }

  createInvite(data: {
		max_age?: number;
		max_uses?: number;
		temporary?: boolean;
		unique?: boolean;
		reason?: string;
	}) {
    return this.client.rest.channel.createChannelInvite(this.id, data);
  }

  fetchInvites() {
    return this.client.rest.channel.getChannelInvites(this.id);
  }

  createThread(options: {
		name: string;
		auto_archive_duration: 60 | 1440 | 4320 | 10080;
		type: 10 | 12 | 11;
		invitable?: boolean | undefined;
		reason?: string | undefined;
	}, message?: string) {
    return message ? this.client.rest.channel.createThreadWithMessage(this.id, message, options) : this.client.rest.channel.createThreadWithoutMessage(this.id, options);
  }

  fetchThread(id: string) {
    return this.client.rest.channel.getChannel(id);
  }

  getArchivedPublicThreads() {
    return this.client.rest.channel.getChannelArchivedPublicThreads(this.id);
  }

  getArchivedPrivateThreads() {
    return this.client.rest.channel.getChannelArchivedPrivateThreads(this.id);
  }

  fetchMessage(id: string) {
    return this.client.rest.channel.getChannelMessage(this.id, id);
  }

  fetchMessages(data: GetMessageOptions) {
    return this.client.rest.channel.getChannelMessages(this.id, data);
  }

  createMessage(data: CreateMessageData, options?: {
		disableEveryone?: boolean;
	}) {
    return this.client.rest.channel.createMessage(this.id, data, options);
  }

  deleteMessage(id: string) {
    return this.client.rest.channel.deleteMessage(this.id, id);
  }

  deleteMessages(ids: string[], reason?: string) {
    return this.client.rest.channel.bulkDeleteMessages(this.id, ids, reason);
  }

}

export default NewsChannel;