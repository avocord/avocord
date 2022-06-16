import BaseInteraction from '../BaseInteraction';
import { APIModalSubmitInteraction, APIModalSubmitDMInteraction, InteractionResponseType } from 'discord-api-types/v10';
import { InteractionResponse } from 'discord-typings';

class ModalInteraction extends BaseInteraction {
  data: APIModalSubmitInteraction | APIModalSubmitDMInteraction;
  get locale() {
    return this.data.locale;
  }

  reply(data: InteractionResponse['data']) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.ChannelMessageWithSource,
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
    return this.client.rest.interaction.deleteOriginalInteractionResponse(this.id, this.token);
  }
}

export default ModalInteraction;