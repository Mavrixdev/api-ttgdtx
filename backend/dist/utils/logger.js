"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static getTimestamp() {
        return new Date().toISOString();
    }
    static info(message, ...args) {
        console.log(`[${this.getTimestamp()}] [INFO] ${message}`, ...args);
    }
    static error(message, ...args) {
        console.error(`[${this.getTimestamp()}] [ERROR] ${message}`, ...args);
    }
    static warn(message, ...args) {
        console.warn(`[${this.getTimestamp()}] [WARN] ${message}`, ...args);
    }
    static debug(message, ...args) {
        if (process.env.NODE_ENV === 'development') {
            console.debug(`[${this.getTimestamp()}] [DEBUG] ${message}`, ...args);
        }
    }
    static success(message, ...args) {
        console.log(`[${this.getTimestamp()}] [SUCCESS] ✓ ${message}`, ...args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map