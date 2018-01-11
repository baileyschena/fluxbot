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
if (command === "quote") {

  let quote = args[0];
  if (isNaN(quote)) return;
  let msg = await message.channel.fetchMessage(quote);
  if (!msg) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .setDescription(msg.content)
  .setFooter(`Quoted by ${message.author.tag} | Sent by ${msg.author.tag} at ${moment(msg.createdTimestamp).format("MMMM Do YYYY, h:mm:ss a")} in ${msg.channel.recipient.username}'s DM`)
  .setColor(1303248)
  message.reply({ embed });
}

bot.login(process.env.BOT_TOKEN);
