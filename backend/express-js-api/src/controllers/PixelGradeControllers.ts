import { Request, Response } from "express";
import connectDatabase from "../lib/database";
import PixelGrade from "../models/PixelGradeModels";


async function pixelGradeController(req: Request, res: Response) {
  
  const connection = connectDatabase();

  const rows = await connection<PixelGrade>(
    "grades_pixels"
  ).select("*");

  res.status(200).send(rows[0]);
}

export default pixelGradeController;