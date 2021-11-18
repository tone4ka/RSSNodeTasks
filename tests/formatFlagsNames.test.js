const { inputParametersForTests } = require("./constants");
const formatFlagsNames = require("../src/checkOptions/formatFlagsNames");

test("Formatting the flags of the entered user command from --flag to -f", () => {
  expect(formatFlagsNames(inputParametersForTests).join(" ")).toBe(
    "-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./input.txt -o ./output.txt"
  );
});
