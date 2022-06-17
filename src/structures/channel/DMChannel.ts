import BaseChannel from '../BaseChannel';

import type { APIDMChannel, APIUser } from 'discord-api-types/v10';

class DMChannel extends BaseChannel<APIDMChannel> {
 
  get lastMessageId() {
    return this.data.last_message_id;
  }

  get recipients() {
    return this.data.recipients;
  }

  get user() {
    return this.data.recipients!.find((r: APIUser) => r.id !== this.client.user!.id);
  }

  close() {
    this.client.dmChannels.delete(this.id);
    return this.client.rest.channel.deleteChannel(this.id);
  }

}

export default DMChannel;