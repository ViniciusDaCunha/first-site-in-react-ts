import { Request, Response } from "express";
import connectDatabase from "../lib/database";
import BannerLessonsType, { bannerLessonsMock, BannerLessonsTypeDb } from "../models/BannerLessonsModel";

async function bannerLessonsController(req: Request, res: Response) {

  const connection = connectDatabase();

  const rows = await connection<BannerLessonsTypeDb>(
    "banners_lessons"
  ).select("*");
    
  const response: BannerLessonsType[] = rows.map((item)=>{
    return {
      mainTitle: item.main_title,
      description: item.description,
      buttonLabel: item.button_label,
      buttonUrl: item.button_url
    }
  })
  

  res.status(200).send(response[0]);
  
}

export default bannerLessonsController;
