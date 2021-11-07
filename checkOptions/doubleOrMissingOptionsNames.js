function doubleOrMissingOptionsNames(options) {
    if(
        options.filter((item) => item ==='-i').length > 1 ||
        options.filter((item) => item ==='-o').length > 1 ||
        options.filter((item) => item ==='-c').length != 1
        ) {
            console.log('doubleOrMissingOptionsNames ERROR');
            return true;
    };
    return false;
}

module.exports = doubleOrMissingOptionsNames;