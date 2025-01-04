import { Response } from "express";
import { Request } from "express";
import CommunityBoxItem, { mockCommunityBox } from "../models/CommunityBoxModels";
import connectDatabase from "../lib/database";

async function communityBoxController(req: Request, res: Response) {

  const connection = connectDatabase();

  const rows = await connection<CommunityBoxItem[]>(
    "community_boxes"
  ).select("*")
  
  res.status(200).send(rows);
}

export default communityBoxController;
