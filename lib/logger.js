var chalk = require('chalk');

var logger = {
  log: function(message, status) {
    switch(status) {
      case "info":
        logger.info(message);
        break;
      case "warning":
        logger.warning(message);
        break;
      case "error":
        logger.error(message);
        break;
    }
  },

  info: function(message) {
    console.log(chalk.blue(message));
  },

  warning: function(message) {
    console.log(chalk.green(message));
  },

  error: function(message) {
    console.log(chalk.red(message));
  },

};


module.exports = logger;
