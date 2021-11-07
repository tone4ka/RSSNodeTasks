const process = require("process");
const { ReadText, WriteText } = require("./streams");
const checkOptions = require('./checkOptions/checkOptions');

const config = process.argv.slice(2);
const isTrueOptions = checkOptions(config);
console.log('isTrueOptions: ' + isTrueOptions);

const readText = new ReadText(/*{ highWaterMark: 2 }*/);
const writeText = new WriteText(/*{ highWaterMark: 2 }*/);
// const transformText = new TransformText(/*{ highWaterMark: 2 }*/);

// readText.pipe(writeText);
