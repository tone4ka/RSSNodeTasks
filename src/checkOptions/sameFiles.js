function sameFiles(inputFile, outputFile) {
  if (inputFile && outputFile && inputFile.trim() === outputFile.trim()) {
    return true;
  }
  return false;
}

module.exports = sameFiles;
