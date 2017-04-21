var _ = require('lodash');
var chalk = require('chalk');

var logs = require('./data/logs');
var logger = require('./lib/logger');

var error = chalk.bold.red;


logger.log("Message logged at INFO level", "info");
logger.log("Message logged at WARNING level", "warning");
logger.log("Message logged at ERROR level", "error");


_.each(logs, function(log) {
  logger.log(log.message, log.status);
});
