import BaseGuildChannel from '../BaseGuildChannel';

class TextableChannel extends BaseGuildChannel {

	get topic() {
		return this.data.topic;
	}

	get lastMessageID() {
		return this.data.last_message_id;
	}

	get rateLimitPerUser() {
		return this.data.rate_limit_per_user;
	}

	get recipients() {
		return this.data.recipients;
	}

	get icon() {
		return this.data.icon;
	}

	get parentID() {
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

	setRateLimitPerUser(rate_limit_per_user: number) {
		return this.edit({ rate_limit_per_user })
	}

	fetchPins() {
		return this.client.rest.channel.getChannelPinnedMessages(this.id);
	}

	syncPermissions() {
		return this.client.rest.channel;
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

export default TextableChannel;

export interface GetMessageOptions {
	/**
	 * Get's messages around the Id of the passed snowflake
	 */
	around?: string;
	/**
	 * Get's messages before the Id of the passed snowflake
	 */
	before?: string;
	/**
	 * Get's messages after the Id of the passed snowflake
	 */
	after?: string;
	/**
	 * Number of messages to get, values between 1-100 allowed
	 */
	limit?: number;
}

export interface CreateMessageData {
	/**
	 * Array of [Embeds](https://discord.com/developers/docs/resources/channel#embed-object) to send
	 */
	embeds?: Array<import("discord-typings").Embed>;
	/**
	 * Content of the message
	 */
	content?: string | null;
	/**
	 * "a nonce that can be used for optimistic message sending"
	 */
	nonce?: string | number;
	/**
	 * if this message is text-to-speech
	 */
	tts?: boolean | null;
	/**
	 * Files that should be uploaded
	 */
	files?: Array<{
		/**
		 * Name of the file
		 */
		name: string;
		/**
		 * Buffer with file contents
		 */
		file: Buffer;
	}>;
	/**
	 * [Allowed mentions](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for the message
	 */
	allowed_mentions?: import("discord-typings").AllowedMentions;
	/**
	 * [Reply](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) to a message
	 */
	message_reference?: import("discord-typings").MessageReference;
	/**
	 * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
	 */
	components?: Array<import("discord-typings").ActionRow>;
	sticker_ids?: Array<string>;
	attachments?: Array<Exclude<import("discord-typings").Attachment, "ephemeral" | "proxy_url" | "url" | "size">>;
}