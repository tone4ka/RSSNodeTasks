const fs = require("fs");
const path = require("path");
const { stdout } = require("process");

function writeTextStream(outputFile) {
  if (outputFile) {
    const writableStream = fs.createWriteStream(outputFile,{ flags: "a"});
    return writableStream;
  }
  return stdout;
}

module.exports = writeTextStream;
