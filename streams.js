const { Readable, Writable, Transform } = require("stream");
const fs = require("fs");

class ReadText extends Readable {
  constructor(opt) {
    super(opt);
    //   this._max = 1000;
    //   this._index = 0;
  }

  _read() {
    console.log("ReadText");
    this.push("ReadText");
    // this = fs.readFile("./input.txt", async function (err, dataFromCopyFile) {// как почитать по частям и добавить к this???
    //   // this.push(dataFromCopyFile);
    //   console.log("ReadText");
    //   console.log(this);
    //   console.log(dataFromCopyFile);
    // });
    //   this._index += 1;

    //   if (this._index > this._max) {
    //     this.push(null);
    //   } else {
    //     const buf = Buffer.from(`${this._index}`, 'utf8');

    //     console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
    //   }
  }
}

class WriteText extends Writable {
  _write(chunk, encoding, callback) {
    //   console.log(chunk.toString());
    fs.writeFile(
      chunk.toString(),
      "./input.txt",
      async function (err, dataFromCopyFile) {
        console.log("WriteText");
      }
    );
    callback();
  }
}

module.exports = {
  ReadText,
  WriteText,
};
