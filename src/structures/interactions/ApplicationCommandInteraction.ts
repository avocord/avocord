import { APIApplicationCommandInteraction, InteractionResponseType } from 'discord-api-types/v10';
import BaseInteraction from '../BaseInteraction';

import type { WebhookCreateMessageData, WebhookEditMessageData } from './Constants';
import type { InteractionResponse } from 'discord-typings';

class ApplicationCommandInteraction extends BaseInteraction {
  data: APIApplicationCommandInteraction;

  get locale() {
    return this.data.locale;
  }

  reply(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.ChannelMessageWithSource,
      data 
    });
  }

  replyWithModal(data: InteractionResponse['data']) {
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

  editFollowup(messageId: string, data: WebhookEditMessageData) {
    return this.client.rest.interaction.editFollowupMessage(this.client.user!.id, this.token, messageId, data);
  }

  deleteFollowup(messageId: string) {
    return this.client.rest.interaction.deleteFollowupMessage(this.client.user!.id, this.token, messageId);
  }

}

export default ApplicationCommandInteraction;