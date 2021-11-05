const process = require('process');
const fs = require('fs');

const config = process.argv;
let cryptingConfig;
let inputFile;
let outputFile;

for(let i = 0; i<config.length; i += 1) {
    if(config[i] === 'xx' /*повторяющиеся либо некорректные аргументы!!!!!!!!!!!!!!!! */) {
      fs.writeSync(
      process.stderr.fd,/*не поняла, что это("выдать соответствующий"... что-то вроде кастомной ошибки??? */
      `111111111111111111111111111111`
      );
      process.exit(1)
    };
  if(config[i] === '-c') cryptingConfig = config[i + 1];
  if(config[i] === '-i') inputFile = config[i + 1];
  if(config[i] === '-o') outputFile = config[i + 1];

  
}
console.log('cryptingConfig: ' + cryptingConfig);
console.log('inputFile: ' + inputFile);
console.log('outputFile: ' + outputFile);