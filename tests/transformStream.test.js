const TransformTextStream = require("../src/encription/streams/transformTextStream");

test("transformStream testing", async () => {
  const transformTextStream = new TransformTextStream("C1");
  let transformStr = "";

  await transformTextStream.on("data", (data) => {
    transformStr += data;
  });
  await transformTextStream.write("abcd");

  await transformTextStream.on("end", () => {});
  expect(transformStr).toBe("bcde");
});
