const { Writable } = require("stream");
const fs = require("fs");
const errorHandler = require("../../errors/errorHandler");

class WriteFileStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }
  _construct(callback) {
    fs.open(this.filename, "a", (err, fd) => {
      if (err) {
        err.isCastom = true;
        err.name = `Incorrect output file name`;
        errorHandler(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      err.isCastom = true;
      err.name = `Incorrect output file name`;
      errorHandler(err);
    }
  }
}

module.exports = WriteFileStream;
