import { Request, Response } from 'express';
import { coachingServicesData } from '../data/coaching';

export const getAllCoachingServices = (req: Request, res: Response) => {
  res.json(coachingServicesData);
};

export const getCoachingServiceById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id) && id >= 0 && id < coachingServicesData.length) {
    res.json(coachingServicesData[id]);
  } else {
    res.status(404).json({ message: "Coaching service not found" });
  }
};
