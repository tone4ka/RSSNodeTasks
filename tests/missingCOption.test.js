const {
  inputParametersForTestingMissingCOption,
  inputParametersForTestingCOption,
} = require("./constants");
const missingCOption = require("../src/checkOptions/missingCOption");

test("missingCOption should return true if no -c argument", () => {
  expect(missingCOption(inputParametersForTestingMissingCOption)).toEqual(true);
});

test("missingCOption should return false if -c argument was entered", () => {
  expect(missingCOption(inputParametersForTestingCOption)).toEqual(false);
});
