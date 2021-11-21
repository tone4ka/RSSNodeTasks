const errorHandler = require("../src/errors/errorHandler");
const myError = require("../src/errors/myError");

describe("Error Handler testing with process.exite mock and spyOn", () => {
  process.exit = jest.fn(() => {});
  const spy = jest.spyOn(console, "error").mockImplementation((str) => {
    return str;
  });
  test("Should show console.error(error.name)", () => {
    errorHandler(new myError("Error name"));
    expect(spy.mock.results[0].value).toEqual("Error name");
  });
  
  test("Should show console.error(unknown error)", () => {
    errorHandler(new Error());
    expect(spy.mock.results[1].value).toEqual("unknown error");
  });
});
