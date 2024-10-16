import { Request, Response } from "express";
import { mockUpdateSectionItems } from "../models/UpdateSectionModel";
// import knex from "knex";

async function updateSectionController(req: Request, res: Response) {
  /*

  const connection = knex({
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "mysql",
      password: "root",
      database: "site_vini_dev",
    },
  });

  const rows = await connection<UpdateSectionBoxParams[]>(
    "update_section_items"
  ).select("*");

  */

  res.status(200).send(mockUpdateSectionItems);
}

export default updateSectionController;
