const errorHandler = require('../src/errors/errorHandler');
const myError = require('../src/errors/myError');

describe('Error Handler testing with process.exite mock and spyOn', () => {
  test('Should show console.error(error.name)', () => {
    process.exit = jest.fn(()=>{});
    const spy = jest.spyOn(console, 'error').mockImplementation((str) => {return str});  
    errorHandler(new myError('Error name'));
    expect(spy.mock.results[0].value).toEqual('Error name');
  });
})
