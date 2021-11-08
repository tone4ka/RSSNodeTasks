const process = require("process");
const { ReadText, WriteText } = require("./streams");
const checkOptions = require('./checkOptions/checkOptions');
const ConfigurationError = require('./errors/ConfigurationError');
const errorHandler = require('./errors/errorHandler');

try{
    const config = process.argv.slice(2);
    const isCorrectOptions = checkOptions(config);
    if(!isCorrectOptions) throw new ConfigurationError('Invalid configuration parameters');
console.log(isCorrectOptions);
} catch (err) {
    errorHandler(err);
}

