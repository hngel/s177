const Discord = require('discord.js');//BY.MR.Hngel
const hngel = new Discord.Client();//BY.MR.Hngel
hngel.on('ready', () => {
  console.log(`MR.Hngel`);  //BY.MR.Hngel
//BY.MR.Hngel
});
//BY.MR.Hngel
hngel.on('message', message => {    //BY.MR.Hngel
const adminprefix = "$";  
const devs = ['471013646647164938'];
  var argresult = message.content.split(` `).slice(1).join(' ');  
    if (!devs.includes(message.author.id)) return;  //BY.MR.Hngel
if (message.content.startsWith(adminprefix + 'p')) {  
  hngel.user.setGame(argresult);//BY.MR.Hngel
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**${argresult} تم تغيير بلاينق إلى 💙**`)//BY.MR.Hngel
  message.channel.sendEmbed(embed);
message.react("✔")
      } else     //BY.MR.Hngel
if (message.content.startsWith(adminprefix + 't')) {//BY.MR.Hngel
  hngel.user.setGame(argresult, "https://www.twitch.tv/hngel2667");//BY.MR.Hngel
const embed = new Discord.RichEmbed() 
 .setFooter(`Ⓕ -.9#3565`)
.setColor("#161d99")
   .setDescription(`**💜تم تغيير تويتش إلى  ${argresult}**`);//BY.MR.Hngel
  message.channel.sendEmbed(embed);
message.react("✔")
 } else     //BY.MR.Hngel
if (message.content.startsWith(adminprefix + 'l')) {//BY.MR.Hngel
  hngel.user.setActivity(argresult,{type: 'listening'});//BY.MR.Hngel
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**🖤تم تغيير ليستنق إلى ${argresult}**`);//BY.MR.Hngel
  message.channel.sendEmbed(embed);
message.react("✔")
 } else     //BY.MR.Hngel
if (message.content.startsWith(adminprefix + 'w')) {//BY.MR.Hngel
  hngel.user.setActivity(argresult,{type: 'WATCHING'});//BY.MR.Hngel
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**💛تم تغيير واتشنق إلى  ${argresult}**`);//BY.MR.Hngel
  message.channel.sendEmbed(embed);
message.react("✔")

} else     //BY.MR.Hngel
if (message.content.startsWith('-')) {//BY.MR.Hngel
  
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**${argresult}**`);//BY.MR.Hngel
  message.channel.sendEmbed(embed);
message.delete();


//BY.MR.Hngel


//BY.MR.Hngel
}
//BY.MR.Hngel

});//BY.MR.Hngel
hngel.login(process.env.BOT_TOKEN);
