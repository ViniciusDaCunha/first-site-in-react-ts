import { Request, Response } from "express";
import { bannerLessonsMock } from "../models/BannerLessonsModel";

function bannerLessonsController(req: Request, res: Response) {
  res.status(200).json(bannerLessonsMock);
}

export default bannerLessonsController;
