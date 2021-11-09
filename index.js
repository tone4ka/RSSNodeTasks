const process = require("process");
const checkOptions = require('./checkOptions/checkOptions');
const ConfigurationError = require('./errors/ConfigurationError');
const errorHandler = require('./errors/errorHandler');
const startEncryption = require('./encription/startEncryption');
const formatFlagsNames = require('./checkOptions/formatFlagsNames');

try{
    const config = formatFlagsNames(process.argv.slice(2));
    const isCorrectOptions = checkOptions(config);
    if(!isCorrectOptions) throw new ConfigurationError('Invalid configuration parameters');
    startEncryption(config);
} catch (err) {
    errorHandler(err);
}

