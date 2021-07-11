module.exports = {
    BASE_URL: (version) => `https://discord.com/api/v${version}`,
    CDN_URL: "https://cdn.discordapp.com/",
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
};
