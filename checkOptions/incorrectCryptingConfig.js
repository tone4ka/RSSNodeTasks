function incorrectCryptingConfig(cryptingConfig) {
    cryptingConfig = cryptingConfig.trim().split('-');
    const incorrectConfigOptions = cryptingConfig.filter((item) => {
        if (item[0] === 'C' && item.length === 2 && (item[1] === '1' || item[1] === '0')) {
            return false;
        }
        if (item[0] === 'R' && item.length === 2 && (item[1] === '1' || item[1] === '0')) {
            return false;
        }
        if (item === 'A') {
            return false;
        }
        return true;
    });
    if(incorrectConfigOptions.length > 0){
        console.log('cryptingConfigOptions ERROR');
        return true;
    };
    return false;
};

module.exports = incorrectCryptingConfig;