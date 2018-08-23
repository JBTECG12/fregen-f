const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTitle(":tada:Click Me For the Invite Link:tada:")
            .setURL("https://discord.gg/XPH9pbK")
    return message.channel.send({ embed });
}

module.exports.help = {
    name: ">backup"
}



