import BaseInteraction from "../BaseInteraction";
import { APIApplicationCommandInteraction, InteractionResponseType } from 'discord-api-types/v10'
import type { InteractionResponse } from 'discord-typings';
import Message from "../Message";

class ApplicationCommandInteraction extends BaseInteraction {
  data: APIApplicationCommandInteraction;
   get locale () {
    return this.data.locale;
  }
  
  reply(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.ChannelMessageWithSource,
      data
    });
  }

  replywithmodal(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.Modal,
      data
    });
  }

//   deleteMessage() {
//     return this.client.rest.interaction.deleteOriginalInteractionResponse(this.client.user!.id, this.token);
//   }

  defer(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data
    });
  }

  getOriginal() {
    return this.client.rest.interaction.getOriginalInteractionResponse(this.client.user!.id, this.token);
  }
  
  editOriginal(data: WebhookEditMessageData) {
    return this.client.rest.interaction.editOriginalInteractionResponse(this.client.user!.id, this.token, data);
  }
  
  deleteOriginal() {
    return this.client.rest.interaction.deleteOriginalInteractionResponse(this.client.user!.id, this.token);
  }
  
  createFollowup(data: WebhookCreateMessageData & {
    flags?: number | undefined;
}) {
    return this.client.rest.interaction.createFollowupMessage(this.client.user!.id, this.token, data);
  }

  getFollowup(messageId: string) {
    return this.client.rest.interaction.getFollowupMessage(this.client.user!.id, this.token, messageId);
  }

  editFollowup(messageId:string, data: WebhookEditMessageData) {    
    return this.client.rest.interaction.editFollowupMessage(this.client.user!.id, this.token, messageId, data);
  }

  deleteFollowup(messageId: string) {
    return this.client.rest.interaction.deleteFollowupMessage(this.client.user!.id, this.token, messageId);
  }

}

export default ApplicationCommandInteraction;

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
	embeds?: Array<import("discord-typings").Embed>;
	/**
	 * [alowed mentions object](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)
	 */
	allowed_mentions?: import("discord-typings").AllowedMentions;
	/**
	 * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
	 */
	components?: Array<import("discord-typings").ActionRow>;
}


export interface WebhookEditMessageData {
	/**
	 * content of the message
	 */
	content?: string | null;
	/**
	 * Array of [embed objects](https://discord.com/developers/docs/resources/channel#embed-object)
	 */
	embeds?: Array<import("discord-typings").Embed> | null;
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
	allowed_mentions?: import("discord-typings").AllowedMentions | null;
	attachments?: Array<Exclude<import("discord-typings").Attachment, "ephemeral" | "proxy_url" | "url" | "size">>;
	/**
	 * [Components](https://discord.com/developers/docs/interactions/message-components#component-object) to add to the message
	 */
	components?: Array<import("discord-typings").ActionRow>;
	thread_id?: string;
}