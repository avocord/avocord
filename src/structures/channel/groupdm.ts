import type { APIGroupDMChannel } from 'discord-api-types/v10';
import BaseChannel from '../BaseChannel';


class GroupDM extends BaseChannel<APIGroupDMChannel> {
  
  get icon() {
    return this.data.icon;
  }

  get recipients() {
    return this.data.recipients;
  }

  get ownerID() {
    return this.data.owner_id;
  }

  iconURL(format = 'png') {
		return this.icon ? `https://cdn.discordapp.com/icons/${this.data.id}/${this.data.icon}.${format}` : null;
	}
}