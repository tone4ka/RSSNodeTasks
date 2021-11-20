const incorrectOptionsLength = require('./incorrectOptionsLength');
const incorrectFlagsPositions = require('./incorrectFlagsPositions');
const doubleOptionsNames = require('./doubleOptionsNames');
const missingCOption = require('./missingCOption');
const incorrectOptNames = require('./incorrectOptNames');
const incorrectCryptingConfig = require('./incorrectCryptingConfig');
const sameFiles = require('./sameFiles');
const checkOutputFile = require('./checkOutputFile');
const ConfigurationError = require('../errors/ConfigurationError');
const myError = require('../errors/myError');
const errorHandler = require('../errors/errorHandler');

async function checkOptions(options) {
    try{
        let cryptingConfig;
        let inputFile;
        let outputFile;

        if(incorrectOptionsLength(options)) throw new ConfigurationError();
        if(incorrectFlagsPositions(options)) throw new ConfigurationError();
        if(doubleOptionsNames(options)) throw new myError('Error: You provided some argument more than once');
        if(missingCOption(options)) throw new myError('Error: You should provide -c argument');
        if(incorrectOptNames(options)) throw new ConfigurationError();

        for (let i = 0; i < options.length; i += 1) {
            if (options[i] === "-c") cryptingConfig = options[i + 1];
            if (options[i] === "-i") inputFile = options[i + 1];
            if (options[i] === "-o") outputFile = options[i + 1];
        }

        if(incorrectCryptingConfig(cryptingConfig)) throw new ConfigurationError();
        if(sameFiles(inputFile, outputFile)) throw new ConfigurationError();
        if(outputFile) await checkOutputFile(outputFile);
        
    } catch(err) {
        errorHandler(err);
    }
};

module.exports = checkOptions;