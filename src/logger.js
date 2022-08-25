class Logger {
    constructor () {}

    // might want to separate these into different log files in real world application

    audit(message) {
        // might have some more sepcific logging done here, ex. Special logging system (log to file, as well as external DB somewhere)
        this.logMessage("AUDIT", message)
    }

    info(message) {
        this.logMessage("INFO", message)        
    }

    debug(message) {
        this.logMessage("DEBUG", message)
    }

    error(message) {
        this.logMessage("ERROR", message)
    }

    logMessage(type, message) {
        console.log(`${type}: ${this.getTimeStamp()}: ${message}`)
    }

    getTimeStamp() {
        const now = new Date(Date.now());
        return now.toUTCString();
    }
}

const logger = new Logger()

module.exports = logger