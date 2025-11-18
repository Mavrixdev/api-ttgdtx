"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const logger_1 = require("./utils/logger");
const PORT = config_1.default.port;
const server = app_1.default.listen(PORT, () => {
    logger_1.Logger.success(`🚀 Server is running on port ${PORT}`);
    logger_1.Logger.info(`📝 Environment: ${config_1.default.nodeEnv}`);
    logger_1.Logger.info(`🌐 CORS Origin: ${config_1.default.corsOrigin}`);
    logger_1.Logger.info(`\n🔗 Available endpoints:`);
    logger_1.Logger.info(`   GET  http://localhost:${PORT}/health`);
    logger_1.Logger.info(`   GET  http://localhost:${PORT}/tkb`);
    logger_1.Logger.info(`\n✨ Server ready to accept requests!\n`);
});
process.on('SIGTERM', () => {
    logger_1.Logger.info('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        logger_1.Logger.info('HTTP server closed');
        process.exit(0);
    });
});
process.on('SIGINT', () => {
    logger_1.Logger.info('SIGINT signal received: closing HTTP server');
    server.close(() => {
        logger_1.Logger.info('HTTP server closed');
        process.exit(0);
    });
});
process.on('unhandledRejection', (reason) => {
    logger_1.Logger.error('Unhandled Rejection:', reason);
    server.close(() => {
        process.exit(1);
    });
});
process.on('uncaughtException', (error) => {
    logger_1.Logger.error('Uncaught Exception:', error);
    server.close(() => {
        process.exit(1);
    });
});
exports.default = server;
//# sourceMappingURL=server.js.map