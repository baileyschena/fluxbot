const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!"

if(message.content.indexOf(prefix) !== 0) return;

bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if if (message.content.startsWith(prefix + "ping") {
    message.reply("Pong!") {
    msg.reply('Pong!');
  }
});


bot.login(process.env.BOT_TOKEN);
