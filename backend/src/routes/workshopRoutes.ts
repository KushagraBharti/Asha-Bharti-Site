import express from 'express';
import { getAllWorkshops, getWorkshopById } from '../controllers/workshopController';

const router = express.Router();

router.get('/workshops', getAllWorkshops);
router.get('/workshops/:id', getWorkshopById);

export default router;
