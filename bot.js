const Discord = require("discord.js");
const bot = new Discord.Client();
const botsettings = require("./package.json");



bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let command = msg.content.split(" ")[0];
    command = command.slice(botsettings.prefix.length);
    let args = message.content.split(" ")[0]
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
      msg.channel.send(members.mentions.first().user.avatarURL);
    }

});


bot.login(process.env.BOT_TOKEN);
