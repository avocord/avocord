import type { APIPingInteraction } from 'discord-api-types/v10';
import BaseInteraction from '../BaseInteraction';

class PingInteraction extends BaseInteraction {
  data: APIPingInteraction;
  pong() { 
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, { type: 1 });
  }
}

export default PingInteraction;