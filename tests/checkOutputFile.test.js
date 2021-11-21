const checkOutputFile = require("../src/checkOptions/checkOutputFile");

test("Check if output file is unavailable", async () => {
  const mockErrorHandler = jest.fn((err) => {
    return err.name;
  });
  await checkOutputFile("gtfrtvgrv.txt", mockErrorHandler);
  expect(mockErrorHandler).toHaveBeenCalledTimes(1);
  expect(mockErrorHandler.mock.results[0].value).toBe(
    `Incorrect output file name`
  );
});
