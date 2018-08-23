const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['carolee.shepard@yahoo.com:jackrox1234',
'cezary.cezary4@wp.pl:sasukee5',
'jhat2014@gmail.com:Cardinals11',
'chantelletilley@yahoo.com:hailey626',
'paulowinckler@gmail.com:pendra6699',
'nicomueller0903@yahoo.de:n1i9c9o5',
'tribalmafio@gmail.com:Kikokiko11',
'timc13@yahoo.com:taffy1',
'kikutiryouta93@yahoo.co.jp:kikukiku72',
'lucas123luti4@yahoo.com.br:sorveteria22',
'jakeverke@gmail.com:imdabes73',
'mirandamoo20@hotmail.com:diddy245',
'shmittie@gmail.com:cooper2005',
'dadzio888@interia.pl:dawid121',
'grant17dennis@yahoo.com:Genius17',
'izfearnz@gmail.com:Rosie7jess',
'jayslayfon@gmail.com:sistard123',
'raysabino89@gmail.com:flute0809',
'samu.04.sc@gmail.com:r34t56u8',
'viktor.pilheden@hotmail.com:lazarus01',
'andibecca00@gmail.com:Charmed2010',
'crypos@hotmail.de:Crypos1234',
'akmontgomery@att.net:cole3008',
'michaelcrowther20@hotmail.com:As118977',
'jaminoussalah@gmx.de:RockLee92',
'bliss.morgan@gmail.com:slithy1981',
'deholexp@gmail.com:ncityexp0',
'kieronkieronkieron@hotmail.co.uk:kxdrjj89db',
'lilou05200@hotmail.com:tachot03021989',
'michael.ogorman@gmail.com:ka1tl1nemma',
'tvwhip@gmail.com:02lancer',
        ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["VIP"].includes(r.name))) {
        message.channel.send(` Yeay You Just Generated a Minecraft Account:)
  Check Your DM's `)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Sucefully Generated a Spotify Account!")
            .addField("Your spotify Account", (minecraft()), true)
            .setFooter(`Made by JBTech`)
            .addField("Important", `\nJoin The BackUp server:
This is a 30% Working Alt because you are a User!`, true)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send("It Doesn't Look That You can use That Command,Get VIP to use it ;)");
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP go on the Server and type -new VIP or type donate ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: ">vipspoti"
}
