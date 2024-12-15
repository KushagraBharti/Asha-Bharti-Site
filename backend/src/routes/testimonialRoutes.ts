import express from 'express';
import { getAllTestimonials, getTestimonialById } from '../controllers/testimonialController';


const router = express.Router();

router.get('/testimonials', getAllTestimonials);
router.get('/testimonials/:id', getTestimonialById);

export default router;
