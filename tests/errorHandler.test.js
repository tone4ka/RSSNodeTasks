const errorHandler = require('../src/errors/errorHandler');
const myError = require('../src/errors/myError');

  test('Error handler works good', () => {
    process.exit = jest.fn(()=>{});
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});  
    errorHandler(new myError('Hello'));
    expect(spy.mock.calls).toEqual([['Hello']]);
  });