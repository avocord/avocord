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

export interface RoleOptions {
	name?: string;
	permissions?: number;
	color?: number;
	hoist?: boolean;
	icon?: string | null;
	unicode_emoji?: string | null;
	mentionable?: boolean;
}

export type EditRolePosition = { id: string; position?: number | null; reason?: string; } | Array<{ id: string; position?: number | null; reason?: string; }>;