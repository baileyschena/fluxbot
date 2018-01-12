const Discord = require("discord.js");
const bot = new Discord.Client();
const botsettings = require("./package.json");



bot.on('ready', () => {
 console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let command = msg.content.split(" ")[0];
    command = command.slice(botsettings.prefix.length);
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
});


bot.login(process.env.BOT_TOKEN);
