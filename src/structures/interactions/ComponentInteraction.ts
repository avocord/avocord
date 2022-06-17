import { APIMessageComponentInteraction, InteractionResponseType } from 'discord-api-types/v10';
import BaseInteraction from '../BaseInteraction';

import type { InteractionResponse } from 'discord-typings';

class ComponentInteraction extends BaseInteraction {
  data: APIMessageComponentInteraction;
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

  updateMessage(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.UpdateMessage,
      data
    });
  }

  deleteOriginal() {
    return this.client.rest.interaction.deleteOriginalInteractionResponse(this.appId, this.token);
  }

  defer(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.DeferredMessageUpdate,
      data
    });
  }

  get appId() {
    return this.data.application_id;
  }

}

export default ComponentInteraction;