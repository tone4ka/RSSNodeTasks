const doubleOptionsNames = require("../src/checkOptions/doubleOptionsNames");

test("all flags entered once", () => {
  expect(doubleOptionsNames(["-i", "-c", "-o"])).toEqual(false);
});
