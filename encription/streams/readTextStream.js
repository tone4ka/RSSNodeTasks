const fs = require('fs');
const path = require('path');
const {stdin} = require('process');

function readTextStream(inputFile) {
    if(inputFile) {
        const readableStream =  fs.createReadStream(inputFile);
        readableStream.setEncoding('utf8');
        return readableStream;
    }
    return stdin;
};

module.exports = readTextStream;