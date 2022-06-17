import BaseGuildChannel from '../BaseGuildChannel';

import type { APIGuildCategoryChannel } from 'discord-api-types/v10';
import type TextableChannel from './TextableChannel';
import type ThreadChannel from './ThreadChannel';
import type VoiceChannel from './VoiceChannel';
import type NewsChannel from './NewsChannel';

class CategoryChannel extends BaseGuildChannel<APIGuildCategoryChannel> {
 
  get children() {
    return this.client.guilds.get(this.data.guild_id!)!.channels.filter((c: TextableChannel | VoiceChannel | ThreadChannel | NewsChannel) => 'parentId' in c && c.parentId === this.id);
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