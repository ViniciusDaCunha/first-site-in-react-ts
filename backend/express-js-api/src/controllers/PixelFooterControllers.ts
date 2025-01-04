import { Request, Response } from "express";
import connectDatabase from "../lib/database";
import PixelFooter from "../models/PixelFooterModels";

async function pixelFooterController(req:Request, res:Response) {
  
const connection = connectDatabase();

const rows = await connection<PixelFooter>(
  "pixels_footers"
).select("*");

res.status(200).send(rows[0]);

}

export default pixelFooterController;


