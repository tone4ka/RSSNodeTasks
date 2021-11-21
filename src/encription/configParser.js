function configParser(options) {
    let cryptingConfig;
    let inputFile;
    let outputFile;
  
    for (let i = 0; i < options.length; i += 1) {
      if (options[i] === "-c") cryptingConfig = options[i + 1];
      if (options[i] === "-i") inputFile = options[i + 1];
      if (options[i] === "-o") outputFile = options[i + 1];
    }
    return {
        cryptingConfig,
        inputFile,
        outputFile,
    }
};

module.exports = configParser;