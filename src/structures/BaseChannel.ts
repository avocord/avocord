import type { APIChannel } from 'discord-api-types/v10';
import type Client from '../gateway/Client';

class BaseChannel <T extends APIChannel>{
  data: T;
  client: Client;

  constructor(client: Client, data: T) {
    this.data = data;
    this.client = client;
  }

  get name() {
    return this.data.name!;
  }

  get id() {
    return this.data.id;
  }

  get type() {
    return this.data.type;
  }
}

export default BaseChannel;