import express, { Request, Response } from "express";
import cors from "cors";
import dummyController from "./controllers/dummyController";
import bannerLessonsController from "./controllers/bannerLessonsController";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const port = 5899;

app.get("/dummy", dummyController);
app.post("/banner-lessons", bannerLessonsController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});