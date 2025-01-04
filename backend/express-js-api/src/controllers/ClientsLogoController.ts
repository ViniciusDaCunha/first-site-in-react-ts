import { Request, Response } from "express";
import ClientsLogoItems from "../models/ClientsLogoModels";
import connectDatabase from "../lib/database";

async function clientsLogoController(req: Request, res: Response) {

  const connection = connectDatabase();

  const rows = await connection<ClientsLogoItems[]>(
    "logo_clients"
  ).select("*");

  res.status(200).send(rows);
}

export default clientsLogoController;
