"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = void 0;
const logger_1 = require("../utils/logger");
const response_1 = require("../utils/response");
class ScheduleController {
    static async getSchedule(req, res, next) {
        try {
            logger_1.Logger.info('GET /tkb - Fetching schedule data');
            const scheduleData = {
                title: 'Thời khóa biểu áp dùng từ 17-11-2025',
                description: 'Thời khóa biểu mới áp dụng từ ngày 17-11-2025',
                link: 'https://ttgdnn-gdtxcumgar.edu.vn/thoi-khoa-bieu-ap-dung-tu-17-11-2025-41.html',
            };
            response_1.ResponseHandler.success(res, scheduleData, 'Lấy thời khóa biểu thành công', 200);
        }
        catch (error) {
            logger_1.Logger.error('Error in getSchedule:', error);
            next(error);
        }
    }
    static async healthCheck(req, res, next) {
        try {
            logger_1.Logger.info('GET /health - Health check');
            const healthData = {
                status: 'OK',
                timestamp: new Date().toISOString(),
                uptime: process.uptime(),
                environment: process.env.NODE_ENV || 'development',
            };
            response_1.ResponseHandler.success(res, healthData, 'Server is healthy', 200);
        }
        catch (error) {
            logger_1.Logger.error('Error in healthCheck:', error);
            next(error);
        }
    }
}
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=scheduleController.js.map