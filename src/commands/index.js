const ping = require('./ping');

// object of all commands
const all_commands = {
  ping: ping,
};

module.exports = async (msg) => {
  // get the command
  const args = msg.content.split(' ');
  // check if it starts with !
  if (args.length === 0 || args[0].charAt(0) !== '!') return;
  // remove ! from the commmand
  const command = args.shift().substr(1);

  // check if the command exist and execute
  if (command in all_commands) {
    all_commands[command](msg, args);
  }
};
