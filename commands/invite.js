const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = [':moneybag: Head :moneybag: ',
	':moneybag: Tails :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Tails :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Tails :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Head :moneybag: ',
	':moneybag: Tails :moneybag: ',
	':moneybag: Head :moneybag: ',
	
	
	

        ];

    return rand[Math.floor(Math.random() * rand.length)];
	
}

module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTitle((minecraft()))
    return message.channel.send({ embed });
}

module.exports.help = {
    name: ">flipcoin"
}
