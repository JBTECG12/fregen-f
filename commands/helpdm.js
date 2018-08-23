const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["@everyone"].includes(r.name))) {
        message.channel.send(`Check Your Dm for The Commands!`)
        
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTimestamp()
            .setTitle("Here are my Commands ;)")
            .addField("User Commands", `\n>>mc: Get a 30% Working Minecraft Account!
>>about: Shows Bot Infos!
>>bug [bug]: Reports a Bug!
>>suggest [Suggestion]: Suggest Something!
>>fedback [FeedBack]: Give Your FeedBack
>>bug [Bug]: Reports a Bug
>>report [User] [Reason]; Reports a User
>>ping: I wonder what this does?;)
>>google [Name]: Googles Something!
>>uptime: Shows for how Long the Bot was Online
>>rps: Rock, Paper, Scissors.
>>backup: Join the BackUp Server
>>help: Shows this Message!
>>dmhelp: Sends this Message to your DM`, true)
            .addField("VIP Commands", `\n>>vipmc: Get A 99% Working Minecraft Account
>>vipspoti: Get a Spotify Premium Account!
>>vipuplay: Get a Uplay Account with Games
More Comming Soon.........!`, true)
            .addField("Admin Commands", `\n>>purge [Number]: Purges X amount of messages!
>>clear [Amount]: Clear Messages
>>setgame [Game}: Sets the Bot game [Just JBTECH]
>>setstatus [Status]: Sets the Bot status [Just JBTECH]
>>lockdown [Dration]: Locks down the Channel
>>say [Text]: Make the Bot to say Something!
>>kick [User] [Reason]: Kicks a User
>>ban [User] [Reasaon]: Ban a User
>>tempmute [User] [Time] [Reason]: Mutes a User`, true)
            .setURL("https://discord.gg/XPH9pbK")
            .addField("BackUp Server", `\nhttps://discord.gg/XPH9pbK`, true)
            .setFooter(`Made by JBTech`);

        return message.author.send({ embed });
    } else {
        message.channel.send("Check Your Dm for The Commands!");
        message.author.send("There is s Problem Please Contact JBTech!");
        
    }
}

module.exports.help = {
    name: ">dmhelp"
}
