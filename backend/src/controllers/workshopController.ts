import { Request, Response } from 'express';
import { workshopsData } from '../data/workshops';

export const getAllWorkshops = (req: Request, res: Response) => {
  res.json(workshopsData);
};

export const getWorkshopById = (req: Request, res: Response) => {
  const workshopId = parseInt(req.params.id, 10);
  if (!isNaN(workshopId) && workshopId >= 0 && workshopId < workshopsData.length) {
    res.json(workshopsData[workshopId]);
  } else {
    res.status(404).json({ message: "Workshop not found" });
  }
};
