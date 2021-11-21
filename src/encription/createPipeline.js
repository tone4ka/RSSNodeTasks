const readTextStream = require("./streams/createReadTextStream");
const writeTextStream = require("./streams/createWriteTextStream");
const { pipeline } = require("stream");
const createTransformStreamArr = require("./streams/createTransformStreamArr");

function createPipeline(
    cryptingConfig,
    inputFile,
    outputFile,
    errorHandler
    ) {
        return pipeline(
            readTextStream(inputFile),
            ...createTransformStreamArr(cryptingConfig),
            writeTextStream(outputFile),
            (error) => {
              if (error) {
                error.isCastom = true;
                error.name = `File not found`;
                errorHandler(error);
              }
            }
          );
    }

    module.exports = createPipeline;