
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
client.on('ready', () => {
  console.log(`MR`);   
  
});
client.on('message', message => {     
const adminprefix = "$";  
const devs = ['471013646647164938'];
  var argresult = message.content.split(` `).slice(1).join(' ');  
    if (!devs.includes(message.author.id)) return;   
if (message.content.startsWith(adminprefix + 'p')) {  
  client.user.setGame(argresult); 
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**${argresult} تم تغيير بلاينق إلى 💙**`) 
  message.channel.sendEmbed(embed);
message.react("✔")
      } else      
if (message.content.startsWith(adminprefix + 't')) { 
  client.user.setGame(argresult, "https://www.twitch.tv/hngel2667"); 
const embed = new Discord.RichEmbed() 
 .setFooter(`Ⓕ -.9#3565`)
.setColor("#161d99")
   .setDescription(`**💜تم تغيير تويتش إلى  ${argresult}**`); 
  message.channel.sendEmbed(embed);
message.react("✔")
 } else      
if (message.content.startsWith(adminprefix + 'l')) { 
  client.user.setActivity(argresult,{type: 'listening'}); 
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**🖤تم تغيير ليستنق إلى ${argresult}**`); 
  message.channel.sendEmbed(embed);
message.react("✔")
 } else      
if (message.content.startsWith(adminprefix + 'w')) { 
  client.user.setActivity(argresult,{type: 'WATCHING'}); 
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**💛تم تغيير واتشنق إلى  ${argresult}**`); 
  message.channel.sendEmbed(embed);
message.react("✔")

} else      
if (message.content.startsWith('-')) { 
  
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**${argresult}**`); 
  message.channel.sendEmbed(embed);
message.delete();

 
}
 

}); 
client.login(process.env.BOT_TOKEN);
