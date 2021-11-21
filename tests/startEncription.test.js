const startEncryption = require("../src/encription/startEncryption");

test("should parse config correctly", () => {
  const configParserMock = jest.fn((opt) => {
    return `parsed ${opt}`;
  });
  const createPipelineMock = jest.fn(() => {
    return `pipeline with parsed options`;
  });
  const errorHandlerMock = jest.fn((err) => {
    return err;
  });
  startEncryption(
    "options",
    errorHandlerMock,
    configParserMock,
    createPipelineMock
  );
  expect(configParserMock.mock.results[0].value).toBe("parsed options");
  expect(createPipelineMock.mock.results[0].value).toBe(
    "pipeline with parsed options"
  );
});
