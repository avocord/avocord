import BaseChannel from '../BaseChannel';

class DMChannel extends BaseChannel {

	get lastMessageID() {
		return this.data.last_message_id;
	}

	get recipients() {
		return this.data.recipients;
	}

	get icon() {
		return this.data.icon;
	}

	get ownerID() {
		return this.data.owner_id;
	}

	get lastPinTimestamp() {
		return this.data.last_pin_timestamp;
	}

	get messageCount() {
		return this.data.message_count;
	}

	get user() {
		return this.data.recipients!.find(r => r.id !== this.client.user!.id);
	}

	close() {
		this.client.dmChannels.delete(this.id);
		return this.client.rest.channel.deleteChannel(this.id);
	}

}

export default DMChannel;