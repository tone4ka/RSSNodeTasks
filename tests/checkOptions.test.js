const checkOptions = require("../src/checkOptions/checkOptions");
const { checkOptionsArguments } = require("./constants");
const ConfigurationError = require("../src/errors/ConfigurationError");
const myError = require("../src/errors/myError");

test("incorrectOptionsLength", async () => {
  try {
    await checkOptions(checkOptionsArguments.incorrectOptionsLength);
  } catch (err) {
    expect(err).toBeInstanceOf(ConfigurationError);
  }
});
test("missingCOption", async () => {
  try {
    await checkOptions(checkOptionsArguments.missingCOption);
  } catch (err) {
    expect(err).toBeInstanceOf(myError);
  }
});
test("incorrectOptNames", async () => {
  try {
    await checkOptions(checkOptionsArguments.incorrectOptNames);
  } catch (err) {
    expect(err).toBeInstanceOf(ConfigurationError);
  }
});
test("error in checkOutputFile test", async () => {
  const errorHandlerMock = jest.fn((err) => {
    return err;
  });
    await checkOptions(
      checkOptionsArguments.optionsWithIncorrectOutputFiles,
      errorHandlerMock
    ).catch((err)=>expect(err).toBeInstanceOf(myError));
});
