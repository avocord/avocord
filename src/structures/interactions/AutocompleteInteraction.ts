import { APIApplicationCommandAutocompleteInteraction, InteractionResponseType } from 'discord-api-types/v10';
import BaseInteraction from '../BaseInteraction';

import type { AutocompleteInteractionCallbackData } from 'discord-typings';

class AutocompleteInteraction extends BaseInteraction {
  data: APIApplicationCommandAutocompleteInteraction;
  get locale() {
    return this.data.locale;
  }

  reply(data: AutocompleteInteractionCallbackData) {
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, {
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data
    });
  }
}

export default AutocompleteInteraction;