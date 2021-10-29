const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Your Bot Activity", { type: "PLAYING"})
   console.log(`${client.user.username} Running 24/7`)
})

keepAlive()
client.login(TOKEN);
