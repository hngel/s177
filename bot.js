const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(` streem on`);  
});//---------------------------------------------------------=fs
client.on('message', message => {
    var prefix = "$"; 
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
if (message.content.startsWith(prefix)) {
  if (message.author.id !== '471013646647164938') return
client.user.setGame(argresult, "https://www.twitch.tv/hngel2667"); 
const embed = new Discord.RichEmbed() 
             .setColor("#010700")
             .setThumbnail(message.author.avatarURL)
            .setFooter(`Ⓕ -.9#3565`)
             .addField("✔تـــــــم ")
             .setDescription(`**${argresult}** تم تغيير تويتش إلى`)
    message.channel.sendEmbed(embed);
    
}


});//BY.MR.client
client.login(process.env.TOKEN);
