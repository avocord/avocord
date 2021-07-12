module.exports = {
    BASE_URL: (version) => `https://discord.com/api/v${version}/`,
    CDN_URL: "https://cdn.discordapp.com/",
    GATEWAY: "/gateway",
    GATEWAY_BOT: "/gateway/bot",
    CDN_ENDPOINTS: {
        CUSTOM_EMOJIS: (emojiID, type) => `/emojis/${emojiID}.${type}`,
        GUILD_ICON: (guildID, iconHash, type) =>
            `/icons/${guildID}/${iconHash}.${type}`,
        GUILD_SPLASH: (guildID, splashHash, type) =>
            `/splashes/${guildID}/${splashHash}}.${type}`,
        GUILD_DISCOVERY_SPLASH: (guildID, discoverySplashHash, type) =>
            `discovery-splashes/${guildID}}/${discoverySplashHash}}.${type}`,
        GUILD_BANNER: (guildID, bannerHash, type) =>
            `banners/${bannerHash}}/${guildID}}.${type}`,
        DEFAULT_USER_AVATAR: (userDiscriminator) =>
            `embed/avatars/${userDiscriminator}.png`,
        USER_AVATAR: (userID, userAvatarHash, type) =>
            `avatars/${userID}/${userAvatarHash}}.${type}`,
        APPLICATION_ICON: (applicationID, iconHash, type) =>
            `app-icons/${applicationID}/${iconHash}.${type}`,
        APPLICATION_COVER: (applicationID, coverImageHash, type) =>
            `app-icons/${applicationID}/${coverImageHash}.${type}`,
        APPLICATION_ASSET: (applicationID, assetID, type) =>
            `app-assets/${applicationID}/${assetID}.${type}`,
        ACHIEVEMENT_ICON: (applicationId, achievementID, iconHash, type) =>
            `app-assets/${applicationId}/achievements/${achievementID}/icons/${iconHash}.${type}`,
        TEAM_ICON: (teamID, TeamIconHash, type) =>
            `team-icons/${teamID}/${TeamIconHash}.${type}`,
    },
    SLASH_COMMANDS: {
        GLOBAL_APPLICATION_COMMANDS: (applicationID) =>
            `/applications/${applicationID}/commands`,
        GLOBAL_APPLICATION_COMMAND: (applicationID, commandID) =>
            `/applications/${applicationID}/commands/${commandID}`,
        GUILD_APPLICATION_COMMANDS: (applicationID, guildID) =>
            `/applications/${applicationID}/guilds/${guildID}/commands`,
        BULK_OVERWRITE_GUILD_APPLICATION_COMMANDS: (applicationID, guildID) =>
            `/applications/${applicationID}/guilds/${guildID}/commands`,
        CREATE_INTERACTION_RESPONSE: (interactionID, interactionToken) =>
            `/interactions/${interactionID}/${interactionToken}/callback`,
        ORIGINAL_INTERACTION_RESPONSE: (applicationID, interactionToken) =>
            `/webhooks/${applicationID}/${interactionToken}/messages/@original`,
        CREATE_FOLLOWUP_MESSAGE: (applicationID, interactionToken) =>
            `/webhooks/${applicationID}/${interactionToken}`,
        FOLLOWUP_MESSAGE: (applicationID, interactionToken, messageID) =>
            `/webhooks/${applicationID}/${interactionToken}/messages/${messageID}`,
        GUILD_APPLICATION_COMMAND_PERMISSIONS: (applicationID, guildID) =>
            `/applications/${applicationID}/guilds/${guildID}/commands/permissions`,
        APPLICATION_COMMAND_PERMISSIONS: (applicationID, guildID, commandID) =>
            `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions`,
        BATCH_EDIT_APPLICATION_COMMAND_PERMISSIONS: (applicationID, guildID) =>
            `/applications/${applicationID}/guilds/${guildID}/commands/permissions`,
    },
    GUILD_AUDIT_LOG: (guildID) => `/guilds/${guildID}/audit-logs`,
    CHANNEL: (channelID) => `/channels/${channelID}`,
    CHANNEL_MESSAGES: (channelID) => `/channels/${channelID}/messages`,
    CHANNEL_MESSAGE: (channelID, messageID) =>
        `/channels/${channelID}/messages/${messageID}`,
    CROSSPOST_MESSAGE: (channelID, messageID) =>
        `/channels/${channelID}/messages/${messageID}/crosspost`,
    REACTION_ME: (channelID, messageID, emoji) =>
        `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`,
    USER_REACTION: (channelID, messageID, emoji, userID) =>
        `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}`,
    REACTION: (channelID, messageID, emoji) =>
        `/channels/${channelID}/messages/${messageID}/reactions/${emoji}`,
    ALL_REACTIONS: (channelID, messageID) =>
        `/channels/${channelID}/messages/${messageID}/reactions`,
    ALL_REACTIONS_FOR_EMOJI: (channelID, messageID, emoji) =>
        `/channels/${channelID}/messages/${messageID}/reactions/${emoji}`,
    BULK_DELETE_MESSAGES: (channelID) =>
        `/channels/${channelID}/messages/bulk-delete`,
    CHANNEL_PERMISSIONS: (channelID, permissionsID) =>
        `/channels/${channelID}/permissions/${permissionsID}`,
    CHANNEL_INVITES: (channelID) => `/channels/${channelID}/invites`,
    FOLLOW_NEWS_CHANNEL: (channelID) => `/channels/${channelID}/followers`,
    TYPING_INDICATOR: (channelID) => `/channels/${channelID}/typing`,
    PINNED_MESSAGES: (channelID) => `/channels/${channelID}/pins`,
    PIN_MESSAGE: (channelID, messageID) =>
        `/channels/${channelID}/pins/${messageID}`,
    GROUP_DM_RECIPIENT: (channelID, userID) =>
        `/channels/${channelID}/recipients/${userID}`,
    START_THREAD_WITH_MESSAGE: (channelID, messageID) =>
        `/channels/${channelID}/messages/${messageID}/threads`,
    START_THREAD_WITHOUT_MESSAGE: (channelID) =>
        `/channels/${channelID}/threads`,
    THREAD_ME_ACTION: (channelID) =>
        `/channels/${channelID}/thread-members/@me`,
    THREAD_MEMBER_ACTION: (channelID, userID) =>
        `/channels/${channelID}/thread-members/${userID}`,
    THREAD_MEMBERS: (channelID) => `/channels/${channelID}/thread-members`,
    ACTIVE_THREADS: (channelID) => `/channels/${channelID}/threads/active`,
    PUBLIC_ARCHIVED_THREADS: (channelID) =>
        `/channels/${channelID}/threads/archived/public`,
    PRIVATE_ARCHIVED_THREADS: (channelID) =>
        `/channels/${channelID}/threads/archived/private`,
    JOINED_PRIVATE_ARCHIVED_THREADS: (channelID) =>
        `/channels/${channelID}/users/@me/threads/archived/private`,
    GUILD_EMOJIS: (guildID) => `/guilds/${guildID}/emojis`,
    GUILD_EMOJI: (guildID, emojiID) => `/guilds/${guildID}/emojis/${emojiID}`,
    CREATE_GUILD: "/guilds",
    GUILD: (guildID) => `/guilds/${guildID}`,
    GUILD_CHANNELS: (guildID) => `/guilds/${guildID}/channels`,
    GUILD_MEMBER: (guildID, userID) => `/guilds/${guildID}/members/${userID}`,
    GUILD_MEMBERS: (guildID) => `/guilds/${guildID}/members`,
    SEARCH_GUILD_MEMBERS: (guildID) => `/guilds/${guildID}/members/search`,
    CHANGE_USER_NICK_ME: (guildID) => `/guilds/${guildID}/members/@me/nick`,
    GUILD_MEMBER_ROLES_ACTION: (guildID, userID, roleID) =>
        `/guilds/${guildID}/members/${userID}/roles/${roleID}`,
    GUILD_BANS: (guildID) => `/guilds/${guildID}/bans`,
    GUILD_BAN: (guildID, userID) => `/guilds/${guildID}/bans/${userID}`,
    GUILD_ROLES: (guildID) => `/guilds/${guildID}/roles`,
    GUILD_ROLE: (guildID, roleID) => `/guilds/${guildID}/roles/${roleID}`,
    GUILD_PRUNE_COUNT: (guildID) => `/guilds/${guildID}/prune`,
    GUILD_VOICE_REGION: (guildID) => `/guilds/${guildID}/regions`,
    GUILD_INVITES: (guildID) => `/guilds/${guildID}/invites`,
    GUILD_INTEGRATIONS: (guildID) => `/guilds/${guildID}/integrations`,
    GUILD_INTEGRATION: (guildID, integrationID) =>
        `/guilds/${guildID}/integrations/${integrationID}`,
    GUILD_WIDGET_SETTINGS: (guildID) => `/guilds/${guildID}/widget`,
    GUILD_WIDGET: (guildID) => `/guilds/${guildID}/widget.json`,
    GUILD_VANITY_URL: (guildID) => `/guilds/${guildID}/vanity-url`,
    GUILD_WIDGET_IMAGE: (guildID) => `/guilds/${guildID}/widget.png`,
    GUILD_WELCOME_SCREEN: (guildID) => `/guilds/${guildID}/welcome-screen`,
    CHANGE_ME_USER_VOICE_STAGE: (guildID) =>
        `/guilds/${guildID}/voice-states/@me`,
    CHANGE_USER_VOICE_STAGE: (guildID, userID) =>
        `/guilds/${guildID}/voice-states/${userID}`,
    GUILD_TEMPLATE: (templateCode) => `/guilds/templates/${templateCode}`,
    GUILD_TEMPLATES: (guildID) => `/guilds/${guildID}/templates`,
    GUILD_TEMPLATE_GUILD: (guildID, templateCode) =>
        `/guilds/${guildID}/templates/${templateCode}`,
    INVITE: (inviteCode) => `/invites/${inviteCode}`,
    STAGE_INSTANCES: "/stage-instances",
    STAGE_INSTANCE: (channelID) => `/stage-instances/${channelID}`,
    USER: (userID) => `/users/${userID}`,
    USER_ME: "/users/@me",
    USER_GUILDS_ME: "/users/@me/guilds",
    GROUP_DM: "/users/@me/channels",
    USER_CONNECTIONS: "GET/users/@me/connections",
    VOICE_REGIONS: "/voice/regions",
    CHANNEL_WEBHOOKS: (channelID) => `/channels/${channelID}/webhooks`,
    GUILD_WEBHOOKS: (guildID) => `/guilds/${guildID}/webhooks`,
    WEBHOOK: (webhookID) => `/webhooks/${webhookID}`,
    WEBHOOK_WITH_TOKEN: (webhookID, webhookTOKEN) =>
        `/webhooks/${webhookID}/${webhookTOKEN}`,
    SLACK_WEBHOOK: (webhookID, webhookTOKEN) =>
        `/webhooks/${webhookID}/${webhookTOKEN}/slack`,
    GITHUB_WEBHOOK: (webhookID, webhookTOKEN) =>
        `/webhooks/${webhookID}/${webhookTOKEN}/github`,
    WEBHOOK_MESSAGE: (webhookID, webhookTOKEN, messageID) =>
        `/webhooks/${webhookID}/${webhookTOKEN}/messages/${messageID}`,
};
