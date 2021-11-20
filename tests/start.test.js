const start = require('../src/index');
const { inputParametersForTestingOfDoubleConfig } = require("./constants");

  test('User passes the same cli argument twice', async () => {
    const mockErrorHandler = jest.fn(()=>{});
    await start(inputParametersForTestingOfDoubleConfig, mockErrorHandler);
    expect(mockErrorHandler).toHaveBeenCalledTimes(1);
  });