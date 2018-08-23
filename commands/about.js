const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTitle("This is Me :)")
            .addField("FreeGen", `\nHello My Name is FreeGen :)
I was Developed By JBTech ;)
I'm Here to Distrubite Accounts to Peoples without Accounts!
`)
            .addField("Developer:", `\nMy Developer is JBTech#6428!`, true)
            .addField("Refiller:", `\nMy Refiller are:
JBTech#6428
Xavons#4176` ,true)
            .addField("My Stats",`\nServing ${bot.guilds.size} servers
I serve ${bot.users.size} users!
I'm on ${bot.channels.size} Channels Online!
My i Developed on 9.07.2018 at 14:00
My Last Update was 17.08.2018 at 16:34
My Last Restart was on 17.08.2018 at 18:54
My Prefix is >
My Help Command is >help`,true)
            .setFooter("Made by JBTech")
            .setURL("");
    return message.channel.send({ embed });
}

module.exports.help = {
    name: ">about"
}
