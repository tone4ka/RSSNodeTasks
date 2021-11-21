const incorrectOptionsLength = require("../src/checkOptions/incorrectOptionsLength");
const correctOptionsArr = [
  "--config",
  "C1-R1-C0-C0-A-R0-R1-R1-A-C1",
  "--input",
  "./input.txt",
  "--output",
  "./output.txt",
];
const invalidOptionsArr = [
  "C1-R1-C0-C0-A-R0-R1-R1-A-C1",
  "--input",
  "./input.txt",
  "--output",
  "./output.txt",
];

test("enter flags arguments without flag name", () => {
  expect(incorrectOptionsLength(invalidOptionsArr)).toEqual(true);
});
test("correct options entered", () => {
  expect(incorrectOptionsLength(correctOptionsArr)).toEqual(false);
});
