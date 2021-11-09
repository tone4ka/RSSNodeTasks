function errorHandler(err) {
    if(err.isCastom) {
        console.log(err.name);
        process.exit(9);
    } else {
        throw err;
    }
};

module.exports = errorHandler;