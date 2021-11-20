const start = require('../src/start');
const { inputParametersForTestingOfDoubleConfig } = require("./constants");

  test('User passes the same cli argument twice',  async () => {
    const mockErrorHandler = jest.fn(()=>{});
      try {
        await start(inputParametersForTestingOfDoubleConfig, mockErrorHandler);
      } catch(err) {
        expect(mockErrorHandler.mock.calls[0][0].name).toBe('Error: You provided some argument more than once');
        expect(mockErrorHandler).toHaveBeenCalledTimes(1);
      }
  });