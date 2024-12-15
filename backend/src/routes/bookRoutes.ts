import express from 'express';
import { getAllBooks, getBookById } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);

export default router;
