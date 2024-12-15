import { Request, Response } from 'express';
import { blogsData } from '../data/blogs';

export const getAllBlogs = (req: Request, res: Response) => {
  res.json(blogsData);
};

export const getBlogById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id) && id >= 0 && id < blogsData.length) {
    res.json(blogsData[id]);
  } else {
    res.status(404).json({ message: "Blog post not found" });
  }
};
