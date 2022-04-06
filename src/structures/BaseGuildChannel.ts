import { APIChannel } from 'discord-api-types';
import type Client from '../index';

// const ChannelTypes = {
//     GUILD_TEXT: 0,
//     DM: 1,
//     GROUP_DM: 3,
//     GUILD_NEWS: 5,

//     GUILD_NEWS_THREAD: 10,
//     GUILD_PUBLIC_THREAD: 11,
//     GUILD_PRIVATE_THREAD: 12,

//     GUILD_VOICE: 2,
//     GUILD_STAGE_VOICE: 13, //GUILD_STAGE: 13

//     GUILD_CATEGORY: 4,
// };

class BaseGuildChannel {
	data: APIChannel;
	client: Client;

	constructor(client: Client, data: APIChannel) {
		this.data = data;
		this.client = client;
	}

	get name() {
		return this.data.name!;
	}

	get id() {
		return this.data.id;
	}

	get type() {
		return this.data.type;
	}

	get guildID() {
		return this.data.guild_id;
	}

	delete(reason?: string) {
		return this.client.rest.channel.deleteChannel(this.id, reason)
	}

	edit(data: EditChannelData) {
		return this.client.rest.channel.updateChannel(this.id, data);
	}

}


export default BaseGuildChannel;

export interface EditChannelData {
	/**
	 * New name of the channel
	 */
	name?: string;
	/**
	 * New position of the channel
	 */
	position?: number;
	/**
	 * New topic of the channel
	 */
	topic?: string;
	/**
	 * Update nsfw type of the channel
	 */
	nsfw?: boolean;
	/**
	 * Update bitrate of the channel
	 */
	bitrate?: number;
	/**
	 * Update the limit of users that are allowed to be in a channel
	 */
	user_limit?: number;
	/**
	 * Update the permission overwrites
	 */
	permission_overwrites?: {
		id: string;
		type: number;
		allow: string;
		deny: string;
	}[];
	/**
	 * Id of the parent category of the channel
	 */
	parent_id?: string;
	/**
	 * Update whether or not a thread is archived
	 */
	archived?: boolean;
	/**
	 * Update how long it takes for a thread to become stale and archived automatically
	 */
	auto_archive_duration?: number;
	/**
	 * Update whether or not a thread is locked
	 */
	locked?: boolean;
	/**
	 * Update if slowmode is enabled and how long slow mode should last
	 */
	rate_limit_per_user?: number;
	/**
	 * Reason for updating the channel
	 */
	reason?: string;
}