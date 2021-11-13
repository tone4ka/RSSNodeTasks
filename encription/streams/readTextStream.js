const path = require('path');
const {stdin} = require('process');
const ReadStream = require('./customReadFileStream');

function readTextStream(inputFile) {
    if(inputFile) {
        const readableStream =  new ReadStream(path.join(__dirname, '../../', inputFile));
        return readableStream;
    }
    return stdin;
};

module.exports = readTextStream;