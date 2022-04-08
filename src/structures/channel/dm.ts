import BaseChannel from '../BaseChannel';
import { APIDMChannel } from 'discord-api-types/v10';

class DMChannel extends BaseChannel<APIDMChannel> {

	get lastMessageID() {
		return this.data.last_message_id;
	}

	get recipients() {
		return this.data.recipients;
	}

	get user() {
		return this.data.recipients!.find((r: any) => r.id !== this.client.user!.id); 
	}

	close() {
		this.client.dmChannels.delete(this.id);
		return this.client.rest.channel.deleteChannel(this.id);
	}

}

export default DMChannel;