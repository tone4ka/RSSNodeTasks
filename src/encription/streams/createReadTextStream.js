const path = require('path');
const {stdin} = require('process');
const ReadStream = require('./customReadFileStream');

function readTextStream(inputFile) {
    if(inputFile) {
        return new ReadStream(path.join(__dirname, '../../', inputFile));
    }
    return stdin;
};

module.exports = readTextStream;