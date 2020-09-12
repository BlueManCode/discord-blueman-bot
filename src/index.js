const client = require('./config');
const command_handler = require('./commands');
// once the bot is ready
client.once('ready', () => {
  console.log('🤖 BlueBot up and running!');
});

// listens for messages
client.on('message', command_handler);
