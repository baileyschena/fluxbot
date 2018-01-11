const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!"


bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "ping") {
    msg.reply('Pong!');
  }
});


bot.login(process.env.BOT_TOKEN);
