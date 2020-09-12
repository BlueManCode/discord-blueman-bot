const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

// client login
client.login(process.env.BOT_TOKEN);

module.exports = client;
