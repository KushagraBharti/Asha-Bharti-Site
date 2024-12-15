import { Request, Response } from 'express';
import { testimonialsData } from '../data/testimonials';

export const getAllTestimonials = (req: Request, res: Response) => {
  res.json(testimonialsData);
};

export const getTestimonialById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id) && id >= 0 && id < testimonialsData.length) {
    res.json(testimonialsData[id]);
  } else {
    res.status(404).json({ message: "Testimonial not found" });
  }
};
