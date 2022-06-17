import type { WebhookCreateMessageData, WebhookEditMessageData } from './src/structures/interactions/Constants';
import type { Client as CloudstormClient, IWSMessage, IClientOptions } from 'cloudstorm';
import type { CreateMessageData, GetMessageOptions } from './src/structures/channel/Constants';
import type { Collection } from '@discordoo/collection';
import type { SnowTransfer } from 'snowtransfer';
import type { EventEmitter } from 'node:events';
import type {
  EditRolePosition,
  EditChannelData,
  RoleOptions
} from './src/structures/Constants';

import type {
  AutocompleteInteractionCallbackData,
  PrivateThread,
  PublicThread,
  GuildFeature,
  NewsThread,
  Invite,
  Member
} from 'discord-typings';
import type {
  GatewayGuildScheduledEventUserRemoveDispatchData,
  GatewayGuildScheduledEventUserAddDispatchData,
  GatewayMessageReactionRemoveEmojiDispatchData,
  GatewayGuildScheduledEventCreateDispatchData,
  GatewayGuildScheduledEventDeleteDispatchData,
  APIApplicationCommandAutocompleteInteraction,
  GatewayMessageReactionRemoveAllDispatchData,
  GatewayGuildIntegrationsUpdateDispatchData,
  GatewayMessageReactionRemoveDispatchData,
  GatewayStageInstanceCreateDispatchData,
  GatewayStageInstanceUpdateDispatchData,
  GatewayStageInstanceDeleteDispatchData,
  GatewayMessageReactionAddDispatchData,
  GatewayThreadMemberUpdateDispatchData,
  GatewayMessageDeleteBulkDispatchData,
  GatewayChannelPinsUpdateDispatchData,
  GatewayIntegrationCreateDispatchData,
  GatewayIntegrationUpdateDispatchData,
  GatewayIntegrationDeleteDispatchData,
  GatewayInteractionCreateDispatchData,
  GatewayVoiceServerUpdateDispatchData,
  GatewayVoiceStateUpdateDispatchData,
  GatewayPresenceUpdateDispatchData,
  GatewayWebhooksUpdateDispatchData,
  GatewayMessageDeleteDispatchData,
  APIApplicationCommandInteraction,
  GuildDefaultMessageNotifications,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayTypingStartDispatchData,
  APIMessageComponentInteraction,
  APIMessageActionRowComponent,
  APIModalSubmitDMInteraction,
  GuildExplicitContentFilter,
  APIInteractionGuildMember,
  APIModalSubmitInteraction,
  ThreadAutoArchiveDuration,
  GatewayReadyDispatchData,
  APIGuildCategoryChannel,
  GuildVerificationLevel,
  APIActionRowComponent,
  APIMessageInteraction,
  APIMessageReference,
  InteractionResponse,
  APIMessageActivity,
  APIPingInteraction,
  StickerFormatType,
  APIThreadMetadata,
  APIGroupDMChannel,
  APIThreadChannel,
  APIThreadMember,
  APIVoiceChannel,
  InteractionType,
  APIInteraction,
  APIStickerItem,
  APIApplication,
  APIGuildMember,
  APITextChannel,
  APINewsChannel,
  GuildMFALevel,
  APIAttachment,
  MessageFlags,
  LocaleString,
  APIOverwrite,
  APIDMChannel,
  APIReaction,
  MessageType,
  StickerType,
  APIRoleTags,
  ChannelType,
  APIChannel,
  APISticker,
  APIMessage,
  UserFlags,
  APIEmbed,
  APIEmoji,
  APIGuild,
  APIRole,
  APIUser,
  VideoQualityMode
} from 'discord-api-types/v10';

declare namespace Avocord {
  export type GuildChannelType =
    | ChannelType.GuildText
    | ChannelType.GuildVoice
    | ChannelType.GuildCategory
    | ChannelType.GuildNews
    | ChannelType.GuildNewsThread
    | ChannelType.GuildPublicThread
    | ChannelType.GuildPrivateThread
    | ChannelType.GuildStageVoice
    | ChannelType.GuildForum;
    export type AnyChannelType =
    | ChannelType.DM
    | ChannelType.GroupDM
    | GuildChannelType;

  export class BaseChannel<T extends APIChannel> {
    constructor(client: Client, data: T);

    data: T;
    client: Client;

    get name(): string;
    get id(): string;
    get type(): AnyChannelType;
  }

  export class BaseGuildChannel<T extends APINewsChannel | APITextChannel | APIVoiceChannel | APIThreadChannel | APIGuildCategoryChannel> {
    constructor(client: Client, data: T, guild: Guild);

    data: T;
    client: Client;
    guild: Guild;

    get name(): string;
    get id(): string;
    get type(): GuildChannelType;
    get guildId(): string;

    delete(reason?: string): Promise<import('discord-typings').Channel>;
    edit(data: EditChannelData): Promise<import('discord-typings').Channel>;
  }

  export interface CreateInviteOptions {
    max_age?: number;
    max_uses?: number;
    temporary?: boolean;
    unique?: boolean;
    reason?: string;
  }

  export interface CreateThreadOptions {
    name: string;
    auto_archive_duration: 60 | 1440 | 4320 | 10080;
    type: 10 | 11 | 12;
    invitable?: boolean | undefined;
    reason?: string | undefined;
  }

  export class TextableChannel extends BaseChannel<APITextChannel> {
    get topic(): string | null | undefined;
    get lastMessageId():string | null | undefined;
    get rateLimitPerUser(): number | undefined;
    get parentId(): string | null | undefined;
    get permissionOverwrites(): APIOverwrite[] | undefined;
    get nsfw(): boolean | undefined;
    get lastPinTimestamp(): string | null | undefined;
    get defaultAutoArchiveDuration(): ThreadAutoArchiveDuration | undefined;

    setRateLimitPerUser(rate_limit_per_user: number): Promise<import('discord-typings').Channel>;
    fetchPins(): Promise<import('discord-typings').Message[]>;
    syncPermissions(): void;
    createInvite(data: CreateInviteOptions): Promise<Invite>;
    fetchInvites(): Promise<Invite[]>;
    createThread(options: CreateThreadOptions, message?: string): Promise<NewsThread | PublicThread | PrivateThread>;
    fetchThread(id: string): Promise<import('discord-typings').Channel>;
    getArchivedPublicThreads(): Promise<(NewsThread | PublicThread)[]>;
    getArchivedPrivateThreads(): Promise<PrivateThread[]>;
    fetchMessage(id: string): Promise<import('discord-typings').Message>;
    fetchMessages(data: GetMessageOptions): Promise<import('discord-typings').Message[]>;
    createMessage(data: CreateMessageData, options?: {
      disableEveryone?: boolean;
    }): Promise<import('discord-typings').Message>;
    deleteMessage(id: string): Promise<void>;
    deleteMessages(ids: string[], reason?: string): Promise<void>;
  }

  export class VoiceChannel extends BaseChannel<APIVoiceChannel> {
    voiceStates: Collection<string, unknown>;

    get bitrate(): number | undefined;
    get userLimit(): number | undefined;
    get parentId(): string | null | undefined;
    get permissionOverwrites(): APIOverwrite[] | undefined;
    get rtcRegion(): string | null | undefined;
    get nsfw(): boolean;
    get videoQualityMode(): VideoQualityMode | undefined;
  }

  export class CategoryChannel extends BaseChannel<APIGuildCategoryChannel> {
    get children(): [string, GuildChannel][];

    moveChannel(id: string): Promise<import('discord-typings').Channel>;
    deleteChannel(id: string): Promise<import('discord-typings').Channel>;
  }

  export class ThreadChannel extends BaseChannel<APIThreadChannel> {
    constructor(client: Client, data: APIThreadChannel, guild: Guild);

    members: Collection<string, GuildMember>;

    get threadMetadata(): APIThreadMetadata;
    get archived(): boolean;
    get locked(): boolean;
    get autoArchiveDuration(): ThreadAutoArchiveDuration;
    get invitable(): boolean;
    get archiveTimestamp(): string;
    get messageCount(): number | undefined;
    get memberCount(): number | undefined;
    get member(): APIThreadMember | undefined;
    get ownerId(): string;

    setRateLimitPerUser(rate_limit_per_user: number): Promise<import('discord-typings').Channel>;
    fetchPins(): Promise<import('discord-typings').Message[]>;
    fetchMessage(id: string): Promise<import('discord-typings').Message>;
    fetchMessages(data: GetMessageOptions): Promise<import('discord-typings').Message[]>;
    createMessage(data: CreateMessageData, options?: {
      disableEveryone?: boolean;
    }): Promise<import('discord-typings').Message>;
    addMember(id: string): Promise<void>;
    removeMember(id: string): Promise<void>;
  }

  export class NewsChannel extends BaseChannel<APINewsChannel> {
    get topic(): string | null | undefined;
    get lastMessageId():string | null | undefined;
    get parentId(): string | null | undefined;
    get permissionOverwrites(): APIOverwrite[] | undefined;
    get nsfw(): boolean | undefined;
    get lastPinTimestamp(): string | null | undefined;
    get defaultAutoArchiveDuration(): ThreadAutoArchiveDuration | undefined;

    fetchPins(): Promise<import('discord-typings').Message[]>;
    syncPermissions(): void;
    createInvite(data: CreateInviteOptions): Promise<Invite>;
    fetchInvites(): Promise<Invite[]>;
    createThread(options: CreateThreadOptions, message?: string): Promise<NewsThread | PublicThread | PrivateThread>;
    fetchThread(id: string): Promise<import('discord-typings').Channel>;
    getArchivedPublicThreads(): Promise<(NewsThread | PublicThread)[]>;
    getArchivedPrivateThreads(): Promise<PrivateThread[]>;
    fetchMessage(id: string): Promise<import('discord-typings').Message>;
    fetchMessages(data: GetMessageOptions): Promise<import('discord-typings').Message[]>;
    createMessage(data: CreateMessageData, options?: {
      disableEveryone?: boolean;
    }): Promise<import('discord-typings').Message>;
    deleteMessage(id: string): Promise<void>;
    deleteMessages(ids: string[], reason?: string): Promise<void>;
  }

  export class DMChannel extends BaseChannel<APIDMChannel> {
    get lastMessageId(): string | null | undefined;
    get recipients(): APIUser[] | undefined;
    get user(): APIUser | undefined;

    close(): Promise<import('discord-typings').Channel>;
  }

  export class GroupDMChannel extends BaseChannel<APIGroupDMChannel> {
    get icon(): string | null | undefined;
    get recipients(): APIUser[] | undefined;
    get ownerId(): string | undefined;

    iconURL(format: string): string | null;
  }

  export type GuildChannel =
    | TextableChannel
    | VoiceChannel
    | CategoryChannel
    | ThreadChannel
    | NewsChannel;

  export type Channel = GuildChannel | DMChannel;

  export class Guild {
    constructor(client: Client, data: APIGuild)

    data: APIGuild;
    channels: Collection<string, GuildChannel>;
    roles: Collection<string, Role>;

    members: Collection<string, GuildMember>;
    emojis: Collection<string, Emoji>;
    presences: Collection<string, unknown>;
    client: Client;
    stickers: Collection<string, Sticker>;

    get id(): string;
    get name(): string;
    get icon(): string | null;
    get spalsh(): string | null;
    get owner(): boolean;
    get ownerId(): string;
    get permissions(): string | undefined;
    get afkChannelId(): string | null;
    get afkTimeout(): number;
    get verificationLevel(): GuildVerificationLevel;
    get defaultMessageNotifications(): GuildDefaultMessageNotifications;
    get explicitContentFilter(): GuildExplicitContentFilter;
    get features(): GuildFeature[];
    get mfaLevel(): GuildMFALevel;
    get applicationId(): string | null;
    get widgetEnabled(): boolean | undefined;
    get widgetChannelId(): string | null | undefined;
    get systemChannelId(): string | null;

    iconURL(format: string): string | null;
  }

  export interface BanOptions {
    reason?: string | undefined;
    delete_message_days?: number | undefined;
  }
  
  export interface UnbanOptions {
    reason?: string | undefined;
  }

  export interface EditGuildMemberOptions {
    nick?: string | undefined;
    roles?: string[] | undefined;
    mute?: boolean | undefined;
    deaf?: boolean | undefined;
    channel_id?: string | undefined;
  }

  export interface TimeoutGuildMemberOptions {
    reason?: string | undefined;
    communication_disabled_until?: string | undefined;
  }

  export class GuildMember {
    constructor(client: Client, data: APIGuildMember, guild: Guild);

    data: APIGuildMember;
    client: Client;
    guild: Guild;

    get id(): string | undefined;
    get user(): APIUser | undefined;
    get banner(): string | null | undefined;
    get bot(): boolean | undefined;
    get nick(): string | null | undefined;
    get roles(): string[];
    get joinedAt(): Date;
    get joinedTimestamp(): number;
    get deaf(): boolean;
    get mute(): boolean;

    ban(data: BanOptions): Promise<void>;
    unban(data: UnbanOptions): Promise<void>;
    kick(reason?: string): Promise<void>;
    async fetch(): Promise<Member>;
    setDeaf(deaf: boolean): Promise<void>;
    setMute(mute: boolean): Promise<void>;
    setChannel(channel_id: string | null): Promise<void>;
    setRoles(roles: string[]): Promise<void>;
    setNickname(nick: string): Promise<void>;
    edit(data: EditGuildMemberOptions): Promise<void>;
    timeout(data: TimeoutGuildMemberOptions): Promise<void>;
  }

  export class Role {
    constructor(client: Client, data: APIRole, guild: Guild);

    data: APIRole;
    client: Client;
    guild: Guild;

    get id(): string;
    get name(): string;
    get color(): number;
    get hoist(): boolean;
    get position(): number;
    get permissions(): string;
    get managed(): boolean;
    get mentionable(): boolean;
    get tags(): APIRoleTags | undefined;

    delete(): Promise<void>;
    update(data: RoleOptions): Promise<Role>;
    editPosition(positions: EditRolePosition): Promise<Role[]>;
  }

  export interface EditEmojiOptions {
    name?: string | undefined;
    roles?: string[] | null | undefined;
    reason?: string | undefined;
  }

  export class Emoji {
    constructor(client: Client, data: APIEmoji, guild: Guild);

    data: APIEmoji;
    client: Client;
    guild: Guild;

    get id(): string | null;
    get name(): string | null;
    get requireColons(): boolean;
    get animated(): boolean;
    get available(): boolean;
    get url(): string;
    get createdAtTimestamp(): number;
    get createdAt(): Date;
    get creator(): APIUser | undefined;
    get roles(): string[] | undefined;
    get managed(): boolean;
    get user(): APIUser | undefined;

    edit(data: EditEmojiOptions): Promise<Emoji>;
    delete(reason?: string): Promise<void>;
    async fetch(): Promise<Emoji>;
  }

  export interface EditStickerOptions {
    name?: string | undefined;
    description?: string | null | undefined;
    tags?: string | undefined;
    reason?: string | undefined;
  }

  export class Sticker {
    constructor(client: Client, data: APISticker, guild: Guild);

    data: APISticker;
    client: Client;
    guild: Guild;

    get id(): string;
    get name(): string;
    get packId(): string | null;
    get available(): boolean;
    get description(): string | null;
    get tags(): string;
    get type(): StickerType;
    get formatType(): StickerFormatType;
    get createdAtTimestamp(): number;
    get createdAt(): Date;
    get creator(): APIUser | undefined;
    get user(): APIUser | undefined;

    edit(data: EditStickerOptions): Promise<Sticker>;
    delete(reason?: string): Promise<void>;
    async fetch(): Promise<Sticker>;
  }

  export interface EditUserOptions {
    username?: string;
    avatar?: string;
  }

  export class User {
    constructor(client: Client, data: APIUser);

    data: APIUser;
    client: Client;

    get id(): string;
    get username(): string;
    get discriminator(): string;
    get avatar(): string | null;
    get bot(): boolean;
    get flags(): UserFlags | undefined;
    get createdAtTimestamp(): number;
    get createdAt(): Date;
    get avatarURL(): string | null;
    get defaultAvatarRL(): string;
    get displayAvatarURL(): string;
    get tag(): string;
    get url(): string;

    async fetch(): Promise<User>
    setAvatar(avatar: string): Promise<Required<User>>;
    setUsername(username: string): Promise<Required<User>>;
    edit(options: EditUserOptions): Promise<Required<User>>;
    deleteDM(): Promise<import('discord-typings').Channel>;
    async createDM(): Promise<DMChannel>;
  }

  export class BaseInteraction {
    constructor (data: APIInteraction, client: Client);

    data: APIInteraction;
    client: Client;

    get channelId(): string | undefined;
    get guildLocale(): LocaleString | undefined; 
    get id(): string;
    get member(): APIInteractionGuildMember | undefined;
    get message(): APIMessage | undefined;
    get token(): string;
    get type(): InteractionType;
    get user(): APIUser | undefined;
    get version(): number;

    rawRespond(data: InteractionResponse): Promise<void>;
  }

  export class ApplicationCommandInteraction extends BaseInteraction {
    data: APIApplicationCommandInteraction;

    get locale(): LocaleString;

    reply(data: InteractionResponse['data']): Promise<void>;
    replyWithModal(data: InteractionResponse['data']): Promise<void>;
    defer(data: InteractionResponse['data']): Promise<void>;
    getOriginal(): Promise<Message>;
    editOriginal(data: WebhookCreateMessageData & { flags?: number | undefined; }): Promise<Message>;
    getFollowup(messageId: string): Promise<Message>;
    editFollowup(messageId: string, data: WebhookEditMessageData): Promise<Message>;
    deleteFollowup(messageId: string): Promise<void>;
  }

  export class ComponentInteraction extends BaseInteraction {
    data: APIMessageComponentInteraction;

    get appId(): string;
    get locale(): LocaleString;

    reply(data: InteractionResponse['data']): Promise<void>;
    replyWithModal(data: InteractionResponse['data']): Promise<void>;
    updateMessage(data: InteractionResponse['data']): Promise<void>;
    deleteOriginal(): Promise<void>;
    defer(data: InteractionResponse['data']): Promise<void>;
  }

  export class ModalInteraction extends BaseInteraction {
    data: APIModalSubmitInteraction | APIModalSubmitDMInteraction;

    get locale(): LocaleString;

    reply(data: InteractionResponse['data']): Promise<void>;
    updateMessage(data: InteractionResponse['data']): Promise<void>;
    deleteOriginal(): Promise<void>;
  }

  export class AutocompleteInteraction extends BaseInteraction {
    data: APIApplicationCommandAutocompleteInteraction;

    get locale(): LocaleString;

    reply(data: AutocompleteInteractionCallbackData): Promise<void>;
  }

  export class PingInteraction extends BaseInteraction {
    data: APIPingInteraction;

    pong(): Promise<void>;
  }

  export type Interaction =
    | ApplicationCommandInteraction
    | ComponentInteraction
    | ModalInteraction
    | AutocompleteInteraction;

  export interface ReplyOptions {
    disableEveryone?: boolean;
    failIfNotExists?: boolean;
  }

  export class Message {
    constructor (client: Client, data: APIMessage, channel: Channel);

    client: Client;
    data: APIMessage;
    channel: Channel;

    get activity(): APIMessageActivity | undefined;
    get application(): Partial<APIApplication> | undefined;
    get appllicationId(): string | undefined;
    get attachments(): APIAttachment[];
    get author(): APIUser;
    get channelId(): string;
    get components(): APIActionRowComponent<APIMessageActionRowComponent>[] | undefined;
    get content(): string;
    get editedTimestamp(): Date | null;
    get embeds(): APIEmbed[];
    get flags(): MessageFlags | undefined;
    get guildId(): string | undefined;
    get id(): string;
    get interaction(): APIMessageInteraction | undefined;
    get mentionChannels(): string[];
    get mentionEveryone(): boolean;
    get mentionRoles(): string[];
    get mentions(): (APIUser & { member?: Omit<APIGuildMember, 'user'> | undefined; })[];
    get messageReference(): APIMessageReference | undefined;
    get nonce(): string | number | undefined;
    get pinned(): boolean;
    get reactions(): APIReaction[] | undefined;
    get referencedMessage(): APIMessage | null | undefined;
    get stickers(): APIStickerItem[] | undefined;
    get timestamp(): Date;
    get thread(): APIChannel | undefined;
    get tts(): boolean;
    get type(): MessageType;
    get webhookId(): string | undefined;

    crosspost(): Promise<Message>;
    delete(): Promise<void>;
    pin(reason?: string): Promise<void>;
    react(emoji: string): Promise<void>;
    reply(data: CreateMessageData, options?: ReplyOptions): Promise<Message>;
    removeEmbeds(): Promise<Message>;
    unpin(reason?: string): Promise<void>;
  }

  export interface GatewayOptions {
    token: string;
    cloudstormOptions?: IClientOptions;
  }

  export class Gateway extends CloudstormClient {
    constructor (client: Client, options: GatewayOptions);

    client: Client;

    processEvent(payload: IWSMessage): void;
  }

  export interface SnowTransferOptions {
    baseHost?: string;
    disableEveryone?: boolean;
  }

  export interface ClientOptions {
    token: string;
    cloudstormOptions?: IClientOptions;
    snowtransferInstance?: SnowTransfer;
    snowtransferOptions?: SnowTransferOptions;
  }

  export class Client extends EventEmitter {
    constructor (options: ClientOptions);

    guilds: Collection<string, Guild>;
    dmChannels: Collection<string, DMChannel>;
    rest: SnowTransfer;
    gateway: Gateway;
    user: User | null;

    login(): Promise<void>;
    once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    off(event: string, listener: (...args: any[]) => void): this;
    on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    emit<K extends keyof Events>(event: K, ...args: Events[K]): boolean;
    emit(event: string, ...args: any[]): boolean;
  }

  export interface Events {
    ready: [data: GatewayReadyDispatchData];
    autoModerationRuleCreate: [rule: object];
    autoModerationRuleUpdate: [rule: object];
    autoModerationRuleDelete: [rule: object];
    autoModerationActionExecution: [action: object];
    channelCreate: [channel: Channel];
    channelUpdate: [oldChannel: Channel | undefined, newChannel: Channel];
    channelDelete: [channel: Channel];
    channelPinsUpdate: [channel: GatewayChannelPinsUpdateDispatchData];
    threadCreate: [channel: ThreadChannel];
    threadUpdate: [oldThread: ThreadChannel | undefined, newThread: ThreadChannel];
    threadDelete: [thread: ThreadChannel | undefined];
    threadListSync: [];
    threadMemberUpdate: [member: GatewayThreadMemberUpdateDispatchData];
    guildCreate: [guild: Guild];
    guildUpdate: [oldGuild: Guild | undefined, newGuild: Guild];
    guildDelete: [guild: Guild | undefined];
    guildBanAdd: [user: User, guildId: string];
    guildBanRemove: [user: User, guildId: string];
    guildEmojisUpdate: [oldEmoji: Emoji | undefined, newEmoji: Emoji];
    guildStickersUpdate: [oldSticker: Sticker | undefined, newSticker: Sticker];
    guildIntegrationsUpdate: [guild: GatewayGuildIntegrationsUpdateDispatchData];
    guildMemberAdd: [member: GuildMember];
    guildMemberUpdate: [oldMember: GuildMember | undefined, newMember: GuildMember];
    guildMemberRemove: [user: User];
    guildMembersChunk: [members: GuildMember[]];
    guildRoleCreate: [role: Role];
    guildRoleUpdate: [oldRole: Role | undefined, newRole: Role];
    guildRoleDelete: [role: Role | undefined];
    guildScheduledEventCreate: [guildScheduledEvent: GatewayGuildScheduledEventCreateDispatchData];
    guildScheduledEventDelete: [guildScheduledEvent: GatewayGuildScheduledEventDeleteDispatchData];
    guildScheduledEventUserAdd: [guildScheduledEventUser: GatewayGuildScheduledEventUserAddDispatchData];
    guildScheduledEventUserRemove: [guildScheduledEventUser: GatewayGuildScheduledEventUserRemoveDispatchData];
    integrationCreate: [integration: GatewayIntegrationCreateDispatchData];
    integrationUpdate: [integration: GatewayIntegrationUpdateDispatchData];
    integrationDelete: [integration: GatewayIntegrationDeleteDispatchData];
    interactionCreate: [interaction: Interaction | GatewayInteractionCreateDispatchData];
    inviteCreate: [invite: GatewayInviteCreateDispatchData];
    inviteDelete: [invite: GatewayInviteDeleteDispatchData];
    messageCreate: [message: Message];
    messageUpdate: [message: Message];
    messageDelete: [message: GatewayMessageDeleteDispatchData];
    messageDeleteBulk: [messages: GatewayMessageDeleteBulkDispatchData];
    messageReactionAdd: [messageReaction: GatewayMessageReactionAddDispatchData];
    messageReactionRemove: [messageReaction: GatewayMessageReactionRemoveDispatchData];
    messageReactionRemoveAll: [messageReaction: GatewayMessageReactionRemoveAllDispatchData];
    messageReactionRemoveEmoji: [messageReaction: GatewayMessageReactionRemoveEmojiDispatchData];
    presenceUpdate: [presence: GatewayPresenceUpdateDispatchData];
    stageInstanceCreate: [stageInstance: GatewayStageInstanceCreateDispatchData];
    stageInstanceUpdate: [stageInstance: GatewayStageInstanceUpdateDispatchData];
    stageInstanceDelete: [stageInstance: GatewayStageInstanceDeleteDispatchData];
    typingStart: [typingIndicator: GatewayTypingStartDispatchData];
    userUpdate: [user: User];
    voiceStateUpdate: [voiceState: GatewayVoiceStateUpdateDispatchData];
    voiceServerUpdate: [voiceServer: GatewayVoiceServerUpdateDispatchData];
    webhooksUpdate: [webhook: GatewayWebhooksUpdateDispatchData];
    unknownEvent: [data: object];
  }
}

export = Avocord;