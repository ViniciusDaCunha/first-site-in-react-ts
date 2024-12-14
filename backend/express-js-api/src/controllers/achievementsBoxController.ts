import { Request } from "express";
import { Response } from "express";
import AchievementsBoxItem, { mockAchievemetsBoxItems } from "../models/AchievementsBoxModel";
import connectDatabase from "../lib/database";

async function achievementsBoxController(req: Request, res: Response) {
  
  const connection = connectDatabase()

  const rows = await connection<AchievementsBoxItem[]>(
    "achievements_boxes"
  ).select("*");

  res.status(200).send(rows)
}

export default achievementsBoxController;
