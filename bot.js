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
bot.on("messageUpdate", async (newMessage, oldMessage) => {
  if (["group"].includes(oldMessage.channel.type)) {
    let args = oldMessage.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let groupName = oldMessage.channel.recipients.map(r => r.username).join(", ");
    let sender = oldMessage.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(groupName)} ${chalk.magenta("old msg")} ${chalk.bgRed("GROUP DM")}: ${chalk.green(sender)}: ${newMessage.content}`);
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(groupName)} ${chalk.magenta("new msg")} ${chalk.bgRed("GROUP DM")}: ${chalk.green(sender)}: ${oldMessage.content}`);
  } else if (["dm"].includes(oldMessage.channel.type)) {
    let args = oldMessage.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let dmName = oldMessage.channel.recipient.username;
    let sender = oldMessage.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(dmName)} ${chalk.magenta("old msg")} ${chalk.bgRed("DM")}: ${chalk.green(sender)}: ${newMessage.content}`);
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(dmName)} ${chalk.magenta("new msg")} ${chalk.bgRed("DM")}: ${chalk.green(sender)}: ${oldMessage.content}`);
  } else if (["text"].includes(oldMessage.channel.type)) {
    let args = oldMessage.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let guildName = oldMessage.guild.name;
    let chanName = oldMessage.channel.name;
    let sender = oldMessage.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(guildName)} (${chalk.magenta(chanName)}) ${chalk.magenta("old msg")} ${chalk.bgRed("GUILD")}: ${chalk.green(sender)}: ${newMessage.content}`);
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(guildName)} (${chalk.magenta(chanName)}) ${chalk.magenta("new msg")} ${chalk.bgRed("GUILD")}: ${chalk.green(sender)}: ${oldMessage.content}`);
  }
});

bot.on("messageDelete", async message => {
  if (["group"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let groupName = message.channel.recipients.map(r => r.username).join(", ");
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(groupName)} ${chalk.red("DELETED")} ${chalk.bgRed("GROUP DM")}: ${chalk.green(sender)}: ${message.content}`);
  } else if (["dm"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let dmName = message.channel.recipient.username;
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(dmName)} ${chalk.red("DELETED")} ${chalk.bgRed("DM")}: ${chalk.green(sender)}: ${message.content}`);
  } else if (["text"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let guildName = message.guild.name;
    let chanName = message.channel.name;
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(guildName)} (${chalk.magenta(chanName)}) ${chalk.red("DELETED")} ${chalk.bgRed("GUILD")}: ${chalk.green(sender)}: ${message.content}`);
  }
});

bot.on("message", async message => {
  if (["group"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let groupName = message.channel.recipients.map(r => r.username).join(", ");
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(groupName)} ${chalk.bgRed("GROUP DM")}: ${chalk.green(sender)}: ${message.content}`);

    let command = message.content.split(" ")[0];
    command = command.slice(selfBotSettings.prefix.length);
    if (!message.content.startsWith(selfBotSettings.prefix)) return;

    if (command === "eval") {
      if (message.author.id !== selfBotSettings.creator) return;
      var ev
      try {
        ev = eval(args.join(" "))
        message.channel.send(ev, {
          code: "js"
        });
      } catch (e) {
        message.channel.send(e, {
          code: "js"
        });
      }
    }

    if (command === "quote") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (args.length === 0) return;
      if (args.length > 1) return;
      let quote = args[0];
      if (isNaN(quote)) return;
      let msg = await message.channel.fetchMessage(quote);
      if (!msg) return;
      let embed = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setDescription(msg.content)
      .setFooter(`Quoted by ${message.author.tag} | Sent by ${msg.author.tag} at ${moment(msg.createdTimestamp).format("MMMM Do YYYY, h:mm:ss a")} in ${msg.channel.recipients.map(r => r.username).join(", ")}`)
      .setColor(1303248)
      message.reply({ embed });
    }

    if (command === "avatar") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (!args[0]) return;
      if (!message.mentions.members.first()) return;
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.mentions.members.first().user.username}'s avatar`)
      .setImage(message.mentions.members.first().user.avatarURL)
      message.channel.send({ embed });
    }
  } else if (["dm"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let dmName = message.channel.recipient.username;
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(dmName)} ${chalk.bgRed("DM")}: ${chalk.green(sender)}: ${message.content}`);

    let command = message.content.split(" ")[0];
    command = command.slice(selfBotSettings.prefix.length);
    if (!message.content.startsWith(selfBotSettings.prefix)) return;

    if (command === "eval") {
      if (message.author.id !== selfBotSettings.creator) return;
      var ev
      try {
        ev = eval(args.join(" "))
        message.channel.send(ev, {
          code: "js"
        });
      } catch (e) {
        message.channel.send(e, {
          code: "js"
        });
      }
    }

    if (command === "quote") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (args.length === 0) return;
      if (args.length > 1) return;
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

    if (command === "avatar") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (!args[0]) return;
      if (!message.mentions.members.first()) return;
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.mentions.members.first().user.username}'s avatar`)
      .setImage(message.mentions.members.first().user.avatarURL)
      message.channel.send({ embed });
    }
  } else if (["text"].includes(message.channel.type)) {
    let args = message.content.split(" ").slice(1);
    let nowLog = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    let guildName = message.guild.name;
    let chanName = message.channel.name;
    let sender = message.author.username;
    console.log(`[${chalk.yellow(nowLog)}]: ${chalk.cyan(guildName)} (${chalk.magenta(chanName)}) ${chalk.bgRed("GUILD")}: ${chalk.green(sender)}: ${message.content}`);

    let command = message.content.split(" ")[0];
    command = command.slice(selfBotSettings.prefix.length);
    if (!message.content.startsWith(selfBotSettings.prefix)) return;

    if (command === "eval") {
      if (message.author.id !== selfBotSettings.creator) return;
      var ev
      try {
        ev = eval(args.join(" "))
        message.channel.send(ev, {
          code: "js"
        });
      } catch (e) {
        message.channel.send(e, {
          code: "js"
        });
      }
    }

    if (command === "quote") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (args.length === 0) return;
      if (args.length > 1) return;
      let quote = args[0];
      if (isNaN(quote)) return;
      let msg = await message.channel.fetchMessage(quote);
      if (!msg) return;
      let embed = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setDescription(msg.content)
      .setFooter(`Quoted by ${message.author.tag} | Sent by ${msg.author.tag} at ${moment(msg.createdTimestamp).format("MMMM Do YYYY, h:mm:ss a")} in ${msg.channel}`)
      .setColor(1303248)
      message.reply({ embed });
    }

    if (command === "avatar") {
      if (message.author.id !== selfBotSettings.creator) return;
      if (!args[0]) return;
      if (!message.mentions.members.first()) return;
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.mentions.members.first().user.username}'s avatar`)
      .setImage(message.mentions.members.first().user.avatarURL)
      message.channel.send({ embed });
    }
  }
});
bot.login(process.env.BOT_TOKEN);
