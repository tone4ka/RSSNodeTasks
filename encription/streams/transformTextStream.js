const { Transform } = require("stream");
const addStars = require("./encriptionFunctions/addStars");

class TransformText extends Transform {
  constructor(opt) {
    super();
    this.encryptionMethod = opt[0];
    this.encriptionDirection = opt[1];
  }

  _transform(chunk, encoding, callback) {
    chunk = chunk.toString("utf8");
    try {
      const encryptionMethod = this.encryptionMethod;
      const encriptionDirection = this.encriptionDirection;
      const resultString = addStars(
        chunk,
        encryptionMethod,
        encriptionDirection
      );

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = TransformText;
