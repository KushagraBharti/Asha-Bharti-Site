"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workshopController_1 = require("../controllers/workshopController");
const router = express_1.default.Router();
router.get('/workshops', workshopController_1.getAllWorkshops);
router.get('/workshops/:id', workshopController_1.getWorkshopById);
exports.default = router;
