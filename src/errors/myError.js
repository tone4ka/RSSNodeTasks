class myError extends Error {
    constructor (msg) {
        super(msg);
        this.name = msg;
        this.isCastom = true;
    }
}

module.exports = myError;