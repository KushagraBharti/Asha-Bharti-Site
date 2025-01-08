"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestimonialById = exports.getAllTestimonials = void 0;
const testimonials_1 = require("../data/testimonials");
const getAllTestimonials = (req, res) => {
    res.json(testimonials_1.testimonialsData);
};
exports.getAllTestimonials = getAllTestimonials;
const getTestimonialById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!isNaN(id) && id >= 0 && id < testimonials_1.testimonialsData.length) {
        res.json(testimonials_1.testimonialsData[id]);
    }
    else {
        res.status(404).json({ message: "Testimonial not found" });
    }
};
exports.getTestimonialById = getTestimonialById;
