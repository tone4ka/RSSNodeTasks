const TransformText = require('./transformTextStream');

function createTransformStreamArr(config) {
 return config.split('-').map((XY) =>  new TransformText(XY));
};

module.exports = createTransformStreamArr;