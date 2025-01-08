"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkshopById = exports.getAllWorkshops = void 0;
const workshops_1 = require("../data/workshops");
const getAllWorkshops = (req, res) => {
    res.json(workshops_1.workshopsData);
};
exports.getAllWorkshops = getAllWorkshops;
const getWorkshopById = (req, res) => {
    const workshopId = parseInt(req.params.id, 10);
    if (!isNaN(workshopId) && workshopId >= 0 && workshopId < workshops_1.workshopsData.length) {
        res.json(workshops_1.workshopsData[workshopId]);
    }
    else {
        res.status(404).json({ message: "Workshop not found" });
    }
};
exports.getWorkshopById = getWorkshopById;
