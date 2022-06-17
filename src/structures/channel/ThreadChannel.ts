import { Collection } from '@discordoo/collection';
import BaseGuildChannel from '../BaseGuildChannel';

import type { CreateMessageData, GetMessageOptions } from './Constants';
import type { APIThreadChannel } from 'discord-api-types/v10';
import type Client from '../../gateway/Client';
import type GuildMember from '../GuildMember';
import type Guild from '../Guild';
 
class ThreadChannel extends BaseGuildChannel<APIThreadChannel> {

  members = new Collection<string, GuildMember>();

  constructor (client: Client, data: APIThreadChannel, guild: Guild) {
    super(client, data, guild);

    // for (let i of data.members) {}

  }

  get threadMetadata() {
    return this.data.thread_metadata!;
  }

  get archived() {
    return this.threadMetadata.archived;
  }

  get locked() {
    return !!this.threadMetadata.locked;
  }

  get autoArchiveDuration() {
    return this.threadMetadata.auto_archive_duration;
  }

  get invitable() {
    return !!this.threadMetadata.invitable;
  }

  get archiveTimestamp() {
    return this.threadMetadata.archive_timestamp;
  }

  get messageCount() {
    return this.data.message_count;
  }

  get memberCount() {
    return this.data.member_count;
  }

  get member() {
    return this.data.member;
  }

  get ownerId() {
    return this.data.owner_id!;
  }

  setRateLimitPerUser(rate_limit_per_user: number) {
    return this.edit({ rate_limit_per_user });
  }

  fetchPins() {
    return this.client.rest.channel.getChannelPinnedMessages(this.id);
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

  addMember(id: string) {
    return this.client.rest.channel.addThreadMember(this.id, id);
  }

  removeMember(id: string) {
    return this.client.rest.channel.removeThreadMember(this.id, id);
  }

}

export default ThreadChannel;