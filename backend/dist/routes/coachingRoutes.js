"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coachingController_1 = require("../controllers/coachingController");
const router = express_1.default.Router();
router.get('/coaching-services', coachingController_1.getAllCoachingServices);
router.get('/coaching-services/:id', coachingController_1.getCoachingServiceById);
exports.default = router;
