"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoachingServiceById = exports.getAllCoachingServices = void 0;
const coaching_1 = require("../data/coaching");
const getAllCoachingServices = (req, res) => {
    res.json(coaching_1.coachingServicesData);
};
exports.getAllCoachingServices = getAllCoachingServices;
const getCoachingServiceById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!isNaN(id) && id >= 0 && id < coaching_1.coachingServicesData.length) {
        res.json(coaching_1.coachingServicesData[id]);
    }
    else {
        res.status(404).json({ message: "Coaching service not found" });
    }
};
exports.getCoachingServiceById = getCoachingServiceById;
