import type {
  AllowedMentions,
  Attachment,
  ActionRow,
  Embed
} from 'discord-typings';

export interface WebhookCreateMessageData {
  /**
   * content of the message
   */
  content?: string | null;
  /**
   * username to use for the webhook
   */
  username?: string | null;
  /**
   * avatar url of the webhook
   */
  avatar_url?: string | null;
  /**
   * send a text to speech message
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
   * Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)
   */
  embeds?: Array<Embed>;
  /**
   * [alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)
   */
  allowed_mentions?: AllowedMentions;
  /**
   * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
   */
  components?: Array<ActionRow>;
}

export interface WebhookEditMessageData {
  /**
   * content of the message
   */
  content?: string | null;
  /**
   * Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)
   */
  embeds?: Array<Embed> | null;
  /**
   * Files that should be updated
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
   * [alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)
   */
  allowed_mentions?: AllowedMentions | null;
  attachments?: Array<Exclude<Attachment, 'ephemeral' | 'proxy_url' | 'url' | 'size'>>;
  /**
   * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
   */
  components?: Array<ActionRow>;
  thread_id?: string;
}