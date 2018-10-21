const constants = require('./constants');
const commands = require('./commands');

const selectCommand = (command, args, config) => {
  if(command === undefined){
    console.error('Error: command is required');
    commands.help();
    return;
  }

  command = command.toUpperCase().replaceAll('-', '');
  
  switch (command) {
    case (constants.GENERATE):
      commands.generateComponent(args.slice(1), config);
      break;
    case (constants.HELP):
      commands.help();
      break;
    default:
      console.log(`The command ${command} not exists`);
      commands.help();
      break;
  }
}

module.exports = { selectCommand }

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

