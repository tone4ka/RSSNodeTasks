const writeTextStream = require("../src/encription/streams/createWriteTextStream");
const readTextStream = require("../src/encription/streams/createReadTextStream");
const createTransformStreamArr = require("../src/encription/streams/createTransformStreamArr");
const { Writable, Readable, Transform } = require("stream");
const process = require("process");

test("writeStream to file creation test", async () => {
  const writestream = new writeTextStream("./input.txt");
  expect(writestream).toBeInstanceOf(Writable);
});
test("writeStream to stdout creation test", async () => {
  const writestream = new writeTextStream("");
  expect(writestream).toEqual(process.stdout);
});
test("readStream from file creation test", async () => {
  const readstream = new readTextStream("./input.txt");
  expect(readstream).toBeInstanceOf(Readable);
});
test("readStream from stdin creation test", async () => {
  const readstream = new readTextStream("");
  expect(readstream).toEqual(process.stdin);
});
test("transformStreamsArr creation test", async () => {
  const readestreamsArr = createTransformStreamArr("C1-A");
  expect(readestreamsArr).toBeInstanceOf(Array);
  expect(readestreamsArr[0]).toBeInstanceOf(Transform);
});
