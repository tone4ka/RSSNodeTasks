function errorHandler(err) {
    if(err.isCastom) {
        console.log(err.name);
        process.exit(9);
    } else {
        console.log('unknown error');
        process.exit(9);
    }
};

module.exports = errorHandler;