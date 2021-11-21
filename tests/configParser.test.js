const { inputParametersForParserTests } = require("./constants");
const configParser = require('../src/encription/configParser')

test("should parse config correctly", () => {
    const {
        cryptingConfig,
        inputFile,
        outputFile
      } = configParser(inputParametersForParserTests);
    expect(cryptingConfig).toBe("C1-R1-C0-C0-A-R0-R1-R1-A-C1");
    expect(inputFile).toBe("./input.txt");
    expect(outputFile).toBe("./output.txt");
  });
  