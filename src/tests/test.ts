;
import Client from '../index';
const { token } = require('../../env.json') as { token: string };
const bot = new Client({
	token: token,
	cloudstormOptions: {
		intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES']
	},
});
;
bot.on('ready', () => console.log(bot.user!.tag));
bot.on('messageCreate', (msg) => {
	console.log(msg);
});
;
bot.login();
;