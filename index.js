const process = require("process");
const checkOptions = require('./checkOptions/checkOptions');
const errorHandler = require('./errors/errorHandler');
const startEncryption = require('./encription/startEncryption');
const formatFlagsNames = require('./checkOptions/formatFlagsNames');

async function start() {
    const config = formatFlagsNames(process.argv.slice(2));
    await checkOptions(config);
    startEncryption(config);
}

try{
    start()
} catch (err) {
    errorHandler(err);
}

