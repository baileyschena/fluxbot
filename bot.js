const Discord = require("discord.js");
const bot = new Discord.Client();
const botsettings = require("./package.json");




bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let command = msg.content.split(" ")[0];
    command = command.slice(botsettings.prefix.length);
    let args = msg.content.split(" ")[0]
    if (!msg.content.startsWith(botsettings.prefix)) return;
    if (command === "pingg") {
      msg.reply("pong");
    }
    if (command === "ty") {
      msg.reply("np");
    }
    if (command === "pong"){
      msg.reply("ping");
    }
    if (command === "test") {
      msg.reply("testpassed");
    }
    if (command === "mb") {
      msg.reply("its ok");
    }
    if (command === "way") {
      msg.reply("the way to uganda");
    }
    if (command === "epic") {
      msg.reply("I'm sorry I had to send this to you but now that you have opened it you can't stop reading this. Hi my name is Teresa Fidalgo I died 27 years. If you don't send this to 20 people I will sleep by your side forever. If you don't believe me search me up. Teresa Fidalgo. So send this to 20 people. A girl ignored this and her mom died 20 days later. NO SEND BACKS!!!!! #copied sorry to send this. Btw this is not fake search her up on google : )");
    }
    if (command === "avatar") {
      if (!args[0]) return;
      if (!msg.mentions.members.first()) return;
      msg.channel.send(msg.mentions.members.first().user.avatarURL);
    }
    if (command === "prune"){
      const amount = parseInt(args[0]);

      if (isNaN(amount)) {
        return message.reply('that isnt a valid number.')
      }
      else if (amount < 2) + (amount > 100) {
        return message.reply("Please choose a number between 2 and 100.")
      }
      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to prune messages in this channel!');
});
    }
    if (command === "help"){
      let embed = new Discord.RichEmbed()
      .setTitle("FluxBot Command Help")
      .addField("!avatar", "Shows a mentioned users profile picture", 0)
      .addField("!epic", "shitpost", 0)
      msg.channel.send({ embed })
    }

});


bot.login(process.env.BOT_TOKEN);
