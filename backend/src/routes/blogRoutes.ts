import express from 'express';
import { getAllBlogs, getBlogById } from '../controllers/blogController';

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);

export default router;
