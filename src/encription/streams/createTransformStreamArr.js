const TransformTextStream = require("./transformTextStream");

function createTransformStreamArr(config) {
  return config.split("-").map((XY) => new TransformTextStream(XY));
}

module.exports = createTransformStreamArr;
