const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['0.99 Meter',
	'----->1.00 Meter',
	'--------->1.45 Meter ',
	'You/He dont have a Penis :(',
	'->0.01 Meter',
	'---------------->10 Meter',
	'------------->2.04 Meter',
	'----------->1.65 Meter',
	'--------------->5.08 Meter',
	'-------------->4.09 Meter',
	'------------->3.01 Meter',
	'----------------->8.00 Meter',
	
	
	

        ];

    return rand[Math.floor(Math.random() * rand.length)];
	
}

module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .addField(":eggplant:Pennis Length:eggplant: ", (minecraft()), true)
    return message.channel.send({ embed });
}

module.exports.help = {
    name: ">plength"
}
