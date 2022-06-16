import type {
  MessageReference,
  AllowedMentions,
  Attachment,
  ActionRow,
  Embed
} from 'discord-typings';

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
  embeds?: Array<Embed>;
  /**
   * Content of the message
   */
  content?: string | null;
  /**
   * 'a nonce that can be used for optimistic message sending'
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
  allowed_mentions?: AllowedMentions;
  /**
   * [Reply](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) to a message
   */
  message_reference?: MessageReference;
  /**
   * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
   */
  components?: Array<ActionRow>;
  sticker_ids?: Array<string>;
  attachments?: Array<Exclude<Attachment, 'ephemeral' | 'proxy_url' | 'url' | 'size'>>;
}