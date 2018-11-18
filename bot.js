const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Script By :hngel `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


//BY.MR.client
client.on('message', message => {    //BY.MR.client
    const adminprefix = "$";  
    const devs = ['471013646647164938'];
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
      client.user.setGame(argresult, "https://www.twitch.tv/hngel2667");//BY.MR.client
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


client.login(process.env.TOKEN);// لا تغير فيها شيء
