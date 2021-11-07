function incorrectOptionsLength(options){
    if(!options.length || options.length > 6 || options.length % 2 > 0) {
    console.log('length ERROR');
    return true;
    };
    return false;
};

module.exports = incorrectOptionsLength;