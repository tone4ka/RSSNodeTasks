const fs = require('fs');
const path = require('path');
// const errorHandler = require('../errors/errorHandler');

async function checkOutputFile(outputFile, errorHandler){
    try {
        return await fs.promises.access(path.join(__dirname, '../', outputFile), fs.constants.F_OK);
    } catch(err) {
        err.isCastom = true;
        err.name = `Incorrect output file name`;
        errorHandler(err);
    }
};

module.exports = checkOutputFile;