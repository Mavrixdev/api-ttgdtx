"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const logger_1 = require("../utils/logger");
const response_1 = require("../utils/response");
class ApiController {
    static async getApiList(req, res, next) {
        try {
            logger_1.Logger.info('GET /api-list - Fetching API endpoints list');
            const apiEndpoints = {
                health: {
                    method: 'GET',
                    endpoint: '/health',
                    description: 'Kiểm tra trạng thái server',
                    example: 'http://localhost:3001/health'
                },
                schedule: {
                    method: 'GET',
                    endpoint: '/tkb',
                    description: 'Lấy thông tin thời khóa biểu',
                    example: 'http://localhost:3001/tkb'
                },
                apiList: {
                    method: 'GET',
                    endpoint: '/api-list',
                    description: 'Liệt kê tất cả API endpoints',
                    example: 'http://localhost:3001/api-list'
                }
            };
            response_1.ResponseHandler.success(res, apiEndpoints, 'Lấy danh sách API thành công', 200);
        }
        catch (error) {
            logger_1.Logger.error('Error in getApiList:', error);
            next(error);
        }
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=apiController.js.map