class ConfigurationError extends Error {
    constructor (msg) {
        super(msg);
        this.name = 'ConfigurationError';
        this.isCastom = true;
    }
}

module.exports = ConfigurationError;