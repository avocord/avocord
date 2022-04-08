import BaseGuildChannel from '../BaseGuildChannel';
import type { APIGuildCategoryChannel } from 'discord-api-types/v10';

class CategoryChannel extends BaseGuildChannel<APIGuildCategoryChannel> {

	get children() {
		return this.client.guilds.get(this.data.guild_id!)!.channels.filter(c => 'parentID' in c && c.parentID === this.id);
	}

	moveChannel(id: string) {
		return this.client.rest.channel.updateChannel(id, {
			parent_id: this.id,
		});
	}

	deleteChannel(id: string) {
		return this.client.rest.channel.updateChannel(id, {
			parent_id: undefined,
		});
	}
	/*
	 get children() {
		 return this.guild.channels.cache.filter(c => c.parentId === this.id);
	  }
	*/
}

export default CategoryChannel;