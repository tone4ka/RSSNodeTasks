const incorrectOptNames = require("../src/checkOptions/incorrectOptNames");

test("invalid flag names", () => {
  expect(incorrectOptNames(["-i", "C1-C0", "-h"])).toEqual(true);
});
test("empty flag names", () => {
  expect(incorrectOptNames(["-", "-h"])).toEqual(true);
});
test("correct flag names", () => {
  expect(incorrectOptNames(["-c", "-i", "-o"])).toEqual(false);
});
