const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "487956113694654464"; 
var channel = "535809647274229760";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('TOP')
    },305);
})

client.login(process.env.BOT_TOKEN); 
