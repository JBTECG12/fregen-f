const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .addField("Created A Invite Link", `\nhttps://discord.gg/XPH9pbK`, true)
            .setURL("https://discord.gg/XPH9pbK")
    return message.channel.send({ embed });
}

module.exports.help = {
    name: ">createinvite"
}



