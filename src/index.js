const process = require("process");
const checkOptions = require('./checkOptions/checkOptions');
const errorHandler = require('./errors/errorHandler');
const startEncryption = require('./encription/startEncryption');
const formatFlagsNames = require('./checkOptions/formatFlagsNames');

const args = process.argv.slice(2);

async function start(arguments) {
    try{
        const config = formatFlagsNames(arguments);
        await checkOptions(config);
        startEncryption(config);
    } catch (err) {
        errorHandler(err);
    }
}

start(args);

module.exports = start;