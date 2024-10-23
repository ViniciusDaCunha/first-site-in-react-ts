import { Response } from "express";
import { Request } from "express";
import { mockCommunityBox } from "../models/CommunityBoxModels";

async function communityBoxController(req: Request, res: Response) {
  res.status(200).send(mockCommunityBox);
}

export default communityBoxController;
