const sameFiles = require("../src/checkOptions/sameFiles");

test("same docs names", () => {
  expect(sameFiles('input.txt', 'input.txt')).toEqual(true);
});
test("different docs names", () => {
    expect(sameFiles('input.txt', 'output.txt')).toEqual(false);
  });