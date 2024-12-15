import express from 'express';
import { getAllCoachingServices, getCoachingServiceById } from '../controllers/coachingController';

const router = express.Router();

router.get('/coaching-services', getAllCoachingServices);
router.get('/coaching-services/:id', getCoachingServiceById);

export default router;
