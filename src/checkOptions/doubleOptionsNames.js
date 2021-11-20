function doubleOptionsNames(options) {
    if(
        options.filter((item) => item ==='-i').length > 1 ||
        options.filter((item) => item ==='-o').length > 1 ||
        options.filter((item) => item ==='-c').length > 1
        ) {
            return true;
    };
    return false;
}

module.exports = doubleOptionsNames;