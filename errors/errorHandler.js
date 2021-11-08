function errorHandler(err) {
    if(err.isCastom) {
        console.log('ConfigurationError: Invalid configuration parameters entered');
        process.exit(9);
    } else {
        throw err;
    }
};

module.exports = errorHandler;