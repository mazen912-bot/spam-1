const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657256963864002563")
setInterval(function() {
channel.send(`MAZEN is the best MAZEN is the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);