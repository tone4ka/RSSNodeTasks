const encrypt = require('../src/encription/streams/encriptionFunctions/encrypt');

test("correct caesar encription", () => {
  expect( encrypt('a!', 'C', 1)).toEqual('b!');
});
test("correct rot8 encription", () => {
    expect( encrypt('a', 'R', 1)).toEqual('i');
  });
  test("correct atbash encription", () => {
    expect( encrypt('a', 'A', undefined)).toEqual('z');
  });
  test("correct atbash symbol encription", () => {
    expect( encrypt('!', 'A', 1)).toEqual('!');
  });
  test("correct caesar symbol encription", () => {
    expect( encrypt('!', 'C', 1)).toEqual('!');
  });
  test("correct rot8 symbol encription", () => {
    expect( encrypt('!', 'R', 1)).toEqual('!');
  });
  test("correct caesar decription", () => {
    expect( encrypt('b', 'C', 0)).toEqual('a');
  });
  test("correct rot8 decription", () => {
      expect( encrypt('i', 'R', 0)).toEqual('a');
    });