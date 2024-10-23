import { Request, Response } from "express";
import { mockClientsLogoItems } from "../models/ClientsLogoModels";

async function clientsLogoController(req: Request, res: Response) {
  res.status(200).send(mockClientsLogoItems);
}

export default clientsLogoController;
