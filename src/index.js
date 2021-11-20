const process = require("process");
const checkOptions = require('./checkOptions/checkOptions');
const errorHandler = require('./errors/errorHandler');
const startEncryption = require('./encription/startEncryption');
const formatFlagsNames = require('./checkOptions/formatFlagsNames');

const args = process.argv.slice(2);

async function start(inputArguments, erHand) {
    try{
        const config = formatFlagsNames(inputArguments);
        await checkOptions(config, erHand);
        startEncryption(config, erHand);
    } catch (err) {
        erHand(err);
    }
}

// start(args, errorHandler);

module.exports = start;