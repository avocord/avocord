import BaseGuildChannel from '../BaseGuildChannel';
import TextableChannel from './TextableChannel';
import ThreadChannel from './ThreadChannel';
import VoiceChannel from './VoiceChannel';
import NewsChannel from './NewsChannel';

import type { APIGuildCategoryChannel } from 'discord-api-types/v10';

class CategoryChannel extends BaseGuildChannel<APIGuildCategoryChannel> {
 
  get children() {
    return this.client.guilds.get(this.data.guild_id!)!.channels.filter((c: TextableChannel | VoiceChannel | ThreadChannel | NewsChannel) => 'parentID' in c && c.parentID === this.id);
  }

  moveChannel(id: string) {
    return this.client.rest.channel.updateChannel(id, {
      parent_id: this.id
    });
  }

  deleteChannel(id: string) {
    return this.client.rest.channel.updateChannel(id, {
      parent_id: undefined
    });
  }
  /*
	 get children() {
		 return this.guild.channels.cache.filter(c => c.parentId === this.id);
		}
	*/
}

export default CategoryChannel;