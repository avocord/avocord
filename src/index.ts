import { EventEmitter } from "events";
import Gateway from './gateway/Gateway';
import { SnowTransfer } from 'snowtransfer'
import { Collection } from '@discordoo/collection';
import User from "./structures/User";
import Guild from "./structures/Guild";
import Emoji from './structures/Emoji';
import Role from './structures/Role';
import DMChannel from "./structures/channel/dm";
import ApplicationCommandInteraction from './structures/interactions/applicationcommand';
import ModalInteraction from "./structures/interactions/modal";
import ComponentInteraction from "./structures/interactions/component";
import type { GatewayMessageCreateDispatchData, GatewayReadyDispatchData } from "discord-api-types/v10";

class Client extends EventEmitter {
	guilds: Collection<string, Guild>;
	dmChannels: Collection<string, DMChannel>
	rest: SnowTransfer;
	gateway: Gateway;
	user: null | User;

	on(event: 'ready', listener: (data: GatewayReadyDispatchData) => void): this
	on (event: 'interactionCreate', listener:(data: ApplicationCommandInteraction | ModalInteraction | ComponentInteraction) => void):this;
	on(event: 'messageCreate', listener: (data: GatewayMessageCreateDispatchData) => void): this
	on(event: string | symbol, listener: (...args: any[]) => void): this {
		super.on(event, listener);
		return this;
	}

	constructor(ops: {
		token: string;
		cloudstormOptions?: import('cloudstorm').IClientOptions;
		snowtransferInstance?: SnowTransfer;
		snowtransferOptions?: {
			baseHost: string;
			disableEveryone: boolean;
		};
	}) {
		super();
		this.guilds = new Collection();
		this.dmChannels = new Collection();
		this.rest = ops.snowtransferInstance instanceof SnowTransfer
			? ops.snowtransferInstance
			: new SnowTransfer(ops.token, ops.snowtransferOptions);
		this.gateway = new Gateway(this, {
			cloudstormOptions: ops.cloudstormOptions,
			token: ops.token,
		});
		this.user = null;
	}

	login() {
		return this.gateway.connect();
	}

}

export default Client;