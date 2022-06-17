import BaseInteraction from '../BaseInteraction';

import type { APIPingInteraction } from 'discord-api-types/v10';

class PingInteraction extends BaseInteraction {
  data: APIPingInteraction;
  pong() { 
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, { type: 1 });
  }
}

export default PingInteraction;