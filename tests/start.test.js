const start = require('../src/start');
const { inputParametersForTestingOfDoubleConfig } = require("./constants");

describe('Start function test with error handler mock', () => {
  test('User passes the same cli argument twice',  async () => {
    const mockErrorHandler = jest.fn((err) => { return err.name });
      try {
        await start(inputParametersForTestingOfDoubleConfig, mockErrorHandler);
      } catch(err) {
        expect(mockErrorHandler.mock.calls[0][0]).toBe('Error: You provided some argument more than once');
        expect(mockErrorHandler).toHaveBeenCalledTimes(1);
      }
  });
})
