"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogById = exports.getAllBlogs = void 0;
const blogs_1 = require("../data/blogs");
const getAllBlogs = (req, res) => {
    res.json(blogs_1.blogsData);
};
exports.getAllBlogs = getAllBlogs;
const getBlogById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!isNaN(id) && id >= 0 && id < blogs_1.blogsData.length) {
        res.json(blogs_1.blogsData[id]);
    }
    else {
        res.status(404).json({ message: "Blog post not found" });
    }
};
exports.getBlogById = getBlogById;
