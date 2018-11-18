const Discord = require('discord.js');//BY.MR.client
const client = new Discord.Client();//BY.MR.client
client.on('ready', () => {
  console.log(`MR.client`);  //BY.MR.client
//BY.MR.client
});
//BY.MR.client
client.on('message', message => {    //BY.MR.client
const adminprefix = "$";  
const devs = ["471013646647164938","269031102340005888"];
  var argresult = message.content.split(` `).slice(1).join(' ');  
    if (!devs.includes(message.author.id)) return;  //BY.MR.client
if (message.content.startsWith(adminprefix + 'p')) {  
  client.user.setGame(argresult);//BY.MR.client
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**${argresult} تم تغيير بلاينق إلى 💙**`)//BY.MR.client
  message.channel.sendEmbed(embed);
message.react("✔")
      } else     //BY.MR.client
if (message.content.startsWith(adminprefix + 't')) {//BY.MR.client
  client.user.setGame(argresult, "https://www.twitch.tv/client2667");//BY.MR.client
const embed = new Discord.RichEmbed() 
 .setFooter(`Ⓕ -.9#3565`)
.setColor("#161d99")
   .setDescription(`**💜تم تغيير تويتش إلى  ${argresult}**`);//BY.MR.client
  message.channel.sendEmbed(embed);
message.react("✔")
 } else     //BY.MR.client
if (message.content.startsWith(adminprefix + 'l')) {//BY.MR.client
  client.user.setActivity(argresult,{type: 'listening'});//BY.MR.client
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
    .setDescription(`**🖤تم تغيير ليستنق إلى ${argresult}**`);//BY.MR.client
  message.channel.sendEmbed(embed);
message.react("✔")
 } else     //BY.MR.client
if (message.content.startsWith(adminprefix + 'w')) {//BY.MR.client
  client.user.setActivity(argresult,{type: 'WATCHING'});//BY.MR.client
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**💛تم تغيير واتشنق إلى  ${argresult}**`);//BY.MR.client
  message.channel.sendEmbed(embed);
message.react("✔")

} else     //BY.MR.client
if (message.content.startsWith('-')) {//BY.MR.client
  
const embed = new Discord.RichEmbed() 
.setColor("#161d99")
   .setDescription(`**${argresult}**`);//BY.MR.client
  message.channel.sendEmbed(embed);
message.delete();


//BY.MR.client


//BY.MR.client
}
//BY.MR.client

});//BY.MR.client
client.login(process.env.BOT_TOKEN);
