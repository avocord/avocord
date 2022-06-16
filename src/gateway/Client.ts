import { Collection } from '@discordoo/collection';
import { SnowTransfer } from 'snowtransfer';
import { EventEmitter } from 'events';

import DMChannel from '../structures/channel/DMChannel';
import Guild from '../structures/Guild';
import User from '../structures/User';
import Gateway from './Gateway';
 
class Client extends EventEmitter {
  guilds: Collection<string, Guild>;
  dmChannels: Collection<string, DMChannel>;
  rest: SnowTransfer;
  gateway: Gateway;
  user: null | User;

  constructor (ops: {
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
      token: ops.token
    });
    this.user = null;
  }

  login() {
    return this.gateway.connect();
  }

}

export default Client;