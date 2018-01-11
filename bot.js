const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
bot.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('git works idiot');
  }
});
bot.on('message', msg => {
  if (msg.content === 'test2') {
    msg.reply('git works on chromebook idiot');
  }
});


bot.login(process.env.BOT_TOKEN);
