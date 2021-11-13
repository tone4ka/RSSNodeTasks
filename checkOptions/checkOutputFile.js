const fs = require('fs');
const errorHandler = require('../errors/errorHandler');

async function checkOutputFile(outputFile){
    try {
        await fs.promises.access(outputFile, fs.constants.F_OK)
    } catch(err) {
        err.isCastom = true;
        err.name = `Incorrect output file name`;
        errorHandler(err);
    }
};

module.exports = checkOutputFile;