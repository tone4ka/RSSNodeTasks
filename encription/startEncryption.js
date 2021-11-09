const readTextStream = require('../streams/readTextStream');
const writeTextStream = require('../streams/writeTextStream');
const { pipeline } = require('stream');
const FileNotFoundError = require('../errors/FileNotFoundError');
const errorHandler = require('../errors/errorHandler');

function startEncryption(options) {
    let cryptingConfig;
    let inputFile;
    let outputFile;

    for (let i = 0; i < options.length; i += 1) {
        if (options[i] === "-c") cryptingConfig = options[i + 1];
        if (options[i] === "-i") inputFile = options[i + 1];
        if (options[i] === "-o") outputFile = options[i + 1];
    }

    pipeline(
        readTextStream(inputFile),
        /* ...TransformStream,*/
        writeTextStream(outputFile),
        (error) => {
            if(error){
                error.isCastom = true;
                error.name =  `File not found`;
                errorHandler(error);
                }
            }
        );
};

module.exports = startEncryption;