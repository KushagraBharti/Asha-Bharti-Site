import { Request, Response } from 'express';
import { booksData } from '../data/books';

export const getAllBooks = (req: Request, res: Response) => {
  res.json(booksData);
};

export const getBookById = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id, 10);
  if (!isNaN(bookId) && bookId >= 0 && bookId < booksData.length) {
    res.json(booksData[bookId]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
