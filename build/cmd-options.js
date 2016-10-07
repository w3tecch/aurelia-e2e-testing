var minimist = require('minimist');

var urlOptions = {
  string: 'baseUrl',
  default: { baseUrl: process.env.E2E_URL || 'http://localhost:9000' }
};

var cmdOptions = minimist(process.argv.slice(2), urlOptions);

process.env.E2E_URL = cmdOptions.baseUrl;

module.exports = cmdOptions;
