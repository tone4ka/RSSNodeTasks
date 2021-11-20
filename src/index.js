const process = require("process");
const errorHandler = require('./errors/errorHandler');
const start = require('./start')

const args = process.argv.slice(2);

start(args, errorHandler);

