const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['carolee.shepard@yahoo.com:jackrox1234',
'rosannaltrausch@gmail.com:Jan31994',
'jeffrey_2001@live.nl:Chipsoor8',
'118giggles@gmail.com:tanyasuwan135',
'rdtooker@live.com:ronald1200',
'mantheship@gmail.com:Ipod93lamp',
'melcaldeira@hotmail.com:r5jtov9x',
'keegan.mulcahy@yahoo.com:Keeg9811',
'noesalomoncastrejon@gmail.com:Salomon2002',
'nooochthespdooch@gmail.com:Nooch6632',
       ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["@everyone"].includes(r.name))) {
        message.channel.send(` Yeay You Just Generated a Minecraft Account:)
  Check Your DM's `)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Sucefully Generated a Minecraft Account!")
            .addField("Your Minecraft Account", (minecraft()), true)
            .setFooter(`Made by JBTech`)
            .addField("Important", `\nJoin The BackUp server:
This is a 99% Working Alt because you are a VIP!`, true)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send("It Doesn't Look That You can use That Command,Get VIP to use it ;)");
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP go on the Server and type -new VIP or type donate ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: ">vipmc"
}
