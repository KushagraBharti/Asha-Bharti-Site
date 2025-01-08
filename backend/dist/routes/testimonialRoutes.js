"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimonialController_1 = require("../controllers/testimonialController");
const router = express_1.default.Router();
router.get('/testimonials', testimonialController_1.getAllTestimonials);
router.get('/testimonials/:id', testimonialController_1.getTestimonialById);
exports.default = router;
