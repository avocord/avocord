import { Client as CloudstormClient, IWSMessage, IClientOptions } from 'cloudstorm';
import { Collection } from '@discordoo/collection';
import { SnowTransfer } from 'snowtransfer';
import { EventEmitter } from 'node:events';

import type {
  GatewayReadyDispatchData,
  GatewayChannelPinsUpdateDispatchData,
  GatewayThreadMemberUpdateDispatchData,
  GatewayGuildIntegrationsUpdateDispatchData,
  GatewayGuildScheduledEventCreateDispatchData,
  GatewayGuildScheduledEventDeleteDispatchData,
  GatewayGuildScheduledEventUserAddDispatchData,
  GatewayGuildScheduledEventUserRemoveDispatchData,
  GatewayIntegrationCreateDispatchData,
  GatewayIntegrationUpdateDispatchData,
  GatewayIntegrationDeleteDispatchData,
  GatewayInteractionCreateDispatchData,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayMessageDeleteDispatchData,
  GatewayMessageDeleteBulkDispatchData,
  GatewayMessageReactionAddDispatchData,
  GatewayMessageReactionRemoveDispatchData,
  GatewayMessageReactionRemoveAllDispatchData,
  GatewayMessageReactionRemoveEmojiDispatchData,
  GatewayPresenceUpdateDispatchData,
  GatewayStageInstanceCreateDispatchData,
  GatewayStageInstanceUpdateDispatchData,
  GatewayStageInstanceDeleteDispatchData,
  GatewayTypingStartDispatchData,
  GatewayVoiceStateUpdateDispatchData,
  GatewayVoiceServerUpdateDispatchData,
  GatewayWebhooksUpdateDispatchData,
  APIChannel,
  APITextChannel,
  APIVoiceChannel,
  APIGuildCategoryChannel,
  APIThreadChannel,
  APINewsChannel,
  APIDMChannel,
  APIMessage,
  APIUser,
  APIGuildMember,
  APIAttachment,
  APIEmbed,
  APIReaction,
  MessageType,
  APIMessageActivity,
  APIApplication,
  APIMessageReference,
  MessageFlags,
  APIMessageInteraction,
  APIActionRowComponent,
  APIMessageActionRowComponent,
  APIStickerItem,
  APIInteraction,
  InteractionType,
  APIInteractionGuildMember,
  LocaleString
} from 'discord-api-types/v10';
import type { InteractionResponse } from 'discord-typings';

import type { CreateMessageData } from './src/structures/channel/TextableChannel';

declare namespace DisoneJS {
  export class BaseChannel<T extends APIChannel> { }

  export class BaseGuildChannel<T extends APINewsChannel | APITextChannel | APIVoiceChannel | APIThreadChannel | APIGuildCategoryChannel> { }

  export class TextableChannel extends BaseChannel<APITextChannel> { }

  export class VoiceChannel extends BaseChannel<APIVoiceChannel> { }

  export class CategoryChannel extends BaseChannel<APIGuildCategoryChannel> { }

  export class ThreadChannel extends BaseChannel<APIThreadChannel> { }

  export class NewsChannel extends BaseChannel<APINewsChannel> { }

  export class DMChannel extends BaseChannel<APIDMChannel> { }

  export type GuildChannel =
    | TextableChannel
    | VoiceChannel
    | CategoryChannel
    | ThreadChannel
    | NewsChannel;

  export type Channel = GuildChannel | DMChannel;

  export class Guild { }

  export class GuildMember { }

  export class Role { }

  export class Emoji { }

  export class Sticker { }

  export class User { }

  export class BaseInteraction {
    constructor (data: APIInteraction, client: Client);

    data: APIInteraction;
    client: Client;

    get channelId(): string | undefined;
    get guildLocale(): LocaleString | undefined;;
    get id(): string;
    get member(): APIInteractionGuildMember | undefined;
    get message(): APIMessage | undefined;
    get token(): string;
    get type(): InteractionType;
    get user(): APIUser | undefined;
    get version(): number;

    rawRespond(data: InteractionResponse): Promise<void>;
  }

  export class ApplicationCommandInteraction extends BaseInteraction { }

  export class ComponentInteraction extends BaseInteraction { }

  export class ModalInteraction extends BaseInteraction { }

  export class AutocompleteInteraction extends BaseInteraction { }

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

export = DisoneJS;