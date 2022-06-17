import ApplicationCommandInteraction from '../structures/interactions/ApplicationCommandInteraction';
import ComponentInteraction from '../structures/interactions/ComponentInteraction';
import ModalInteraction from '../structures/interactions/ModalInteraction';

const { token } = require('../../env.json') as { token: string; };

import Client from '../gateway/Client';
const bot = new Client({
  token: token,
  cloudstormOptions: {
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES']
  }
});

bot.gateway.on('error', (x) => console.log(x));
bot.rest.requestHandler.on('requestError', (x) => console.log(x));
bot.on('ready', () => {
  console.log(bot.user!.tag);
}).on('messageCreate', (msg) => {
  console.log(msg);
}).on('interactionCreate', async (interaction) => {
  if (interaction instanceof ApplicationCommandInteraction) interaction.replyWithModal({
    custom_id: 'test',
    title: 'jaja',
    components: [{
      type: 1,
      components: [{
        type: 4,
        custom_id: 'xd',
        label: 'xdd',
        style: 1
      }]
    }]
  });
  else if (interaction instanceof ModalInteraction) interaction.reply({
    content: 'definitivamente xd :ping_pong:', components: [{
      type: 1,
      components: [{
        type: 2,
        custom_id: 'xd',
        label: 'xdd',
        style: 1
      }]
    }]
  });
  else if (interaction instanceof ComponentInteraction) {
    await interaction.updateMessage({ content: `presionaste un boton Pog ${interaction.member!.user.username} ${Date.now()}` });
    setTimeout(() => interaction.deleteOriginal(), 5000);
  }
}).on('guildCreate', (guild) => {
  console.log(guild);
});

bot.login();