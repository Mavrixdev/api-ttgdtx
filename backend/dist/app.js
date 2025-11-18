"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const errorHandler_1 = require("./middlewares/errorHandler");
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./utils/logger");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }
    initializeMiddlewares() {
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)({
            origin: config_1.default.corsOrigin,
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, compression_1.default)());
        if (config_1.default.nodeEnv === 'development') {
            this.app.use((0, morgan_1.default)('dev'));
        }
        else {
            this.app.use((0, morgan_1.default)('combined'));
        }
        logger_1.Logger.info('Middlewares initialized');
    }
    initializeRoutes() {
        this.app.use('/', routes_1.default);
        logger_1.Logger.info('Routes initialized');
    }
    initializeErrorHandling() {
        this.app.use(errorHandler_1.notFoundHandler);
        this.app.use(errorHandler_1.errorHandler);
        logger_1.Logger.info('Error handling initialized');
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map