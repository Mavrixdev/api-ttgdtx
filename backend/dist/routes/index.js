"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scheduleController_1 = require("../controllers/scheduleController");
const router = (0, express_1.Router)();
router.get('/health', scheduleController_1.ScheduleController.healthCheck);
router.get('/tkb', scheduleController_1.ScheduleController.getSchedule);
exports.default = router;
//# sourceMappingURL=index.js.map