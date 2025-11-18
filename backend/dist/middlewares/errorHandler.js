"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = exports.AppError = void 0;
const logger_1 = require("../utils/logger");
const response_1 = require("../utils/response");
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
const errorHandler = (err, req, res, next) => {
    logger_1.Logger.error('Error occurred:', err.message);
    if (err instanceof AppError) {
        response_1.ResponseHandler.error(res, err.message, err.statusCode, err.stack);
        return;
    }
    response_1.ResponseHandler.error(res, 'Internal server error', 500, process.env.NODE_ENV === 'development' ? err.stack : undefined);
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res, next) => {
    response_1.ResponseHandler.notFound(res, `Route ${req.originalUrl} not found`);
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=errorHandler.js.map