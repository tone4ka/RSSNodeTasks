const checkOptions = require('./checkOptions/checkOptions');
const startEncryption = require('./encription/startEncryption');
const formatFlagsNames = require('./checkOptions/formatFlagsNames');


async function start(inputArguments, erHand) {
    try{
        const config = formatFlagsNames(inputArguments);
        await checkOptions(config, erHand);
        startEncryption(config, erHand);
        console.log('Encoding completed successfully');
    } catch (err) {
        erHand(err);
    }
}

module.exports = start;