const { Readable, Writable, Transform } = require('stream');
const {stdin, stdout} = require('process');
stdin.pipe(transform).pipe(stdout);
class ReadText extends Readable {
    constructor(opt) {
      super(opt);
    //   this._max = 1000;
    //   this._index = 0;
    }
  
    _read() {
      // fs.readFile('./components/translate/result/copy.xml', async function(err, dataFromCopyFile) {});
    //   this._index += 1;
  
    //   if (this._index > this._max) {
    //     this.push(null);
    //   } else {
    //     const buf = Buffer.from(`${this._index}`, 'utf8');
  
    //     console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
    //   }
    }
  };

  class WriteText extends Writable {
    _write(chunk, encoding, callback) {
    //   console.log(chunk.toString());
  
      callback();
    }
  }

  class TransformText extends Transform {
    _transform(chunk, encoding, callback) {
      try {
        // const resultString = `*${chunk.toString('utf8')}*`;
  
        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    }
  };

  const readText = new ReadText(/*{ highWaterMark: 2 }*/);
const writeText = new WriteText(/*{ highWaterMark: 2 }*/);
const transformText = new TransformText(/*{ highWaterMark: 2 }*/);

readText.pipe(transformText).pipe(writeText);



const fs = require('fs');
const readableStream = fs.createReadStream('file1.txt');
const writableStream = fs.createWriteStream('file2.txt');

readableStream.setEncoding('utf8');
readableStream.pipe(transformText).pipe(writableStream)

// readableStream.on('data', function(chunk) {
//     writableStream.write(chunk);
// });






// ??????????????????????????????????
var Transform = require("stream").Transform
var inherits = require("util").inherits

function ToUpper (options) {
  Transform.call(this, options)
}

inherits(ToUpper, Transform)

ToUpper.prototype._transform = function (chunk, encoding, callback) {
  var str = chunk.toString().toUpperCase()
  this.push(str)
  callback()
}

// a simple transform stream
var tx = new ToUpper;

// a simple source stream
var Readable = require('stream').Readable;
var rs = new Readable;
rs.push('the quick brown fox ');
rs.push('jumps over the lazy dog.\n');
rs.push(null);

rs.pipe(tx).pipe(process.stdout);

// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.