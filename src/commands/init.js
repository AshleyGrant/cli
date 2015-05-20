var cli    = process.AURELIA;
var stream = require('vinyl-fs');
var exists = require('fs').existsSync;
var logger = cli.import('lib/logger');
var ask    = cli.import('lib/ask');
// INIT
//
// Executable Command that will initialize the directory, and add an AureliaFile if !exists
//
function Init() {
  var init = cli.import('lib/init');
  var options = {};
  options.env = cli.env.argv.env;

  logger.ok('initializing');
  var config = cli.env.isConfig
    ? cli.aurelia._config
    : {env:{}};

  init(config, options);
}
module.exports = Init;
