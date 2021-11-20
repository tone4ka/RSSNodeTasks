function errorHandler(err) {
    if(err.isCastom) {
        console.error(err.name);
        process.exit(9);
    }
};

module.exports = errorHandler;