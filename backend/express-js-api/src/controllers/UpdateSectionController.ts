import { Request, Response } from "express";
import UpdateSectionBoxItem  from "../models/UpdateSectionModel";
import connectDatabase from "../lib/database";

async function updateSectionController(req: Request, res: Response) {

  const connection = connectDatabase();

  const rows = await connection<UpdateSectionBoxItem[]>(
    "update_section_items"
  ).select("*");
  
  res.status(200).send(rows);
}

export default updateSectionController;
