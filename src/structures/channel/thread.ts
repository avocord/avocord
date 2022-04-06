import BaseGuildChannel from "../BaseGuildChannel";
import { CreateMessageData, GetMessageOptions } from "./textable";

class ThreadChannel extends BaseGuildChannel {

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

	get defaultAutoArchiveDuration() {
		return this.data.default_auto_archive_duration;
	}

	get ownerID() {
		return this.data.owner_id!;
	}

	setRateLimitPerUser(rate_limit_per_user: number) {
		return this.edit({ rate_limit_per_user })
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