class ConfigurationError extends Error {
    constructor (msg) {
        super(msg);
        this.name = 'Incorrect configuration entered';
        this.isCastom = true;
    }
}

module.exports = ConfigurationError;