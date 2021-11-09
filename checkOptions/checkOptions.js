const incorrectOptionsLength = require('./incorrectOptionsLength');
const incorrectFlagsPositions = require('./incorrectFlagsPositions');
const doubleOrMissingOptionsNames = require('./doubleOrMissingOptionsNames');
const incorrectOptNames = require('./incorrectOptNames');
const incorrectCryptingConfig = require('./incorrectCryptingConfig');
const sameFiles = require('./sameFiles');

function checkOptions(options) {
    let cryptingConfig;
    let inputFile;
    let outputFile;

    if(incorrectOptionsLength(options)) return false;
    if(incorrectFlagsPositions(options)) return false;
    if(doubleOrMissingOptionsNames(options)) return false;
    if(incorrectOptNames(options)) return false;

    for (let i = 0; i < options.length; i += 1) {
        if (options[i] === "-c") cryptingConfig = options[i + 1];
        if (options[i] === "-i") inputFile = options[i + 1];
        if (options[i] === "-o") outputFile = options[i + 1];
    }

    if(incorrectCryptingConfig(cryptingConfig)) return false;
    if(sameFiles(inputFile, outputFile)) return false;

    return true;
};

module.exports = checkOptions;