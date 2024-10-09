import { Request, Response } from "express";

function dummyController(req: Request, res: Response) {
  const responseApi = {
    data: {
      name: "dummy",
    },
  };

  res.status(200).json(responseApi);
}

export default dummyController;
