module.exports = {
  inputParametersForTests: [
    "--config",
    "C1-R1-C0-C0-A-R0-R1-R1-A-C1",
    "--input",
    "./input.txt",
    "--output",
    "./output.txt",
  ],
  inputParametersForTestingOfDoubleConfig: [
    "--config",
    "C1-R1-C0-C0-A-R0-R1-R1-A-C1",
    "--config",
    "./input.txt",
    "--output",
    "./output.txt",
  ],
  inputParametersForTestingMissingCOption: ["--output", "./output.txt"],
  inputParametersForTestingCOption: ["-c", "./output.txt"],
  checkOptionsArguments: {
    incorrectOptionsLength: ["--config"],
    missingCOption: ["-i", "./input.txt", "-o", "./output.txt"],
    incorrectOptNames: ["-c", "C1-R1", "-i", "-w"],
  },
};
