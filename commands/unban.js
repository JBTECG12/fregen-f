exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
  message.channel.send(`:white_check_mark:${user} was Successfully Unbanned:white_check_mark:`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: '>unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
