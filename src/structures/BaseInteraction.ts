
import type { APIInteraction } from 'discord-api-types/v10'
import type Client from '../index'
/*
type APIGuildInteraction =
APIApplicationCommandGuildInteraction |
APIMessageComponentGuildInteraction |
APIApplicationCommandAutocompleteGuildInteraction |
APIModalSubmitGuildInteraction


*/
class BaseInteraction {
    data: APIInteraction;
    client: Client;

  constructor (data: APIInteraction, client: Client) {
    this.data = data;
    this.client = client;
  }

  get id () {
    return this.data.id;
  }

  get token() {
    return this.data.token;
  }

  get version (){
    return this.data.version;
  }

  get type () {
    return this.data.type;
  }

  get user () {
    return this.data.user;
  }

  get channelId () {
    return this.data.channel_id;
  }

  get message () {
    return this.data.message;
  }

  get member () {
    return this.data.member;
  }
 
  rawRespond(data: import("discord-typings").InteractionResponse){
    return this.client.rest.interaction.createInteractionResponse(this.id, this.token, data);
  }

  get guildLocale () {
    return this.data.guild_locale;
  }

}

export default BaseInteraction;