function startEncryption(options, errorHandler, configParser, createPipeline) {
  const {
    cryptingConfig,
    inputFile,
    outputFile
  } = configParser(options);

  createPipeline(
    cryptingConfig,
    inputFile,
    outputFile,
    errorHandler
    )
}

module.exports = startEncryption;
