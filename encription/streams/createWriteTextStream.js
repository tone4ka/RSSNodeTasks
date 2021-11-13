const path = require("path");
const { stdout } = require("process");
const WriteFileStream = require('./customWriteFileStream')

function writeTextStream(outputFile) {
  if (outputFile) {
    return new WriteFileStream(path.join(__dirname, '../../', outputFile));
  }
  return stdout;
}

module.exports = writeTextStream;
