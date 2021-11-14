const incorrectOptionsLength = require('./incorrectOptionsLength');
const incorrectFlagsPositions = require('./incorrectFlagsPositions');
const doubleOrMissingOptionsNames = require('./doubleOrMissingOptionsNames');
const incorrectOptNames = require('./incorrectOptNames');
const incorrectCryptingConfig = require('./incorrectCryptingConfig');
const sameFiles = require('./sameFiles');
const checkOutputFile = require('./checkOutputFile');
const ConfigurationError = require('../errors/ConfigurationError');
const errorHandler = require('../errors/errorHandler');

async function checkOptions(options) {
    try{
        let cryptingConfig;
        let inputFile;
        let outputFile;

        if(incorrectOptionsLength(options)) throw new ConfigurationError();
        if(incorrectFlagsPositions(options)) throw new ConfigurationError();
        if(doubleOrMissingOptionsNames(options)) throw new ConfigurationError();
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