function incorrectOptionsLength(options){
    if(!options.length || options.length > 6 || options.length % 2 > 0) {
    return true;
    };
    return false;
};

module.exports = incorrectOptionsLength;