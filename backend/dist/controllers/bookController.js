"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = exports.getAllBooks = void 0;
const books_1 = require("../data/books");
const getAllBooks = (req, res) => {
    res.json(books_1.booksData);
};
exports.getAllBooks = getAllBooks;
const getBookById = (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    if (!isNaN(bookId) && bookId >= 0 && bookId < books_1.booksData.length) {
        res.json(books_1.booksData[bookId]);
    }
    else {
        res.status(404).json({ message: "Book not found" });
    }
};
exports.getBookById = getBookById;
