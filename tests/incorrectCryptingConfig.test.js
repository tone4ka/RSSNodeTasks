const incorrectCryptingConfig = require("../src/checkOptions/incorrectCryptingConfig");

test("invalid ceasar direction", () => {
  expect(incorrectCryptingConfig("C1-C2")).toEqual(true);
});
test("invalid atbash direction", () => {
  expect(incorrectCryptingConfig("A1-A2")).toEqual(true);
});
test("invalid rot8 direction", () => {
  expect(incorrectCryptingConfig("R2")).toEqual(true);
});
test("correct ciphers directions", () => {
  expect(incorrectCryptingConfig("C1-R0-A")).toEqual(false);
});
