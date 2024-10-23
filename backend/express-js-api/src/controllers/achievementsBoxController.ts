import { Request } from "express";
import { Response } from "express";
import { mockAchievemetsBoxItems } from "../models/AchievementsBoxModel";

async function achievementsBoxController(req: Request, res: Response) {
  res.status(200).send(mockAchievemetsBoxItems);
}

export default achievementsBoxController;
