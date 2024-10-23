import express, { Request, Response } from "express";
import cors from "cors";
import dummyController from "./controllers/dummyController";
import bannerLessonsController from "./controllers/bannerLessonsController";
import updateSectionController from "./controllers/updateSectionController";
import clientsLogoController from "./controllers/ClientsLogoController";
import communityBoxController from "./controllers/communityBoxControlleres";
import achievementsBoxController from "./controllers/achievementsBoxController";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const port = 5899;

app.get("/dummy", dummyController);
app.post("/banner-lessons", bannerLessonsController);
app.post("/update-section", updateSectionController);
app.post("/clients-logo", clientsLogoController);
app.post("/community-box", communityBoxController);
app.post("/achievements-box", achievementsBoxController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
