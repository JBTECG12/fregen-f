const Discord = require("discord.js");

exports.run = (client, message, args) => {

    if (!args[0]) return;

    if (args[0] === "bug") return msg.reply("Please give a FeedBack.");

    args = args.join(" ");

    message.reply("Thanks for your FeedBack!");
const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) Gived a FeedBack:\n~~-----------------------------------------------------~~\n${args}\n~~-----------------------------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;

    message.guild.channels.find(`name`, "feedbackslog").send(`${content}`)

}


exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};


exports.help = {

  name: '>feedback',

  description: 'FeedBack something.',

  usage: 'feedback <feedback>'

};
