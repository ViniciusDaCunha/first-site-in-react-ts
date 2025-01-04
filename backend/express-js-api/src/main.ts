import express, { Request, Response } from "express";
import cors from "cors";
import dummyController from "./controllers/dummyController";
import UpdateSectionController from "./controllers/UpdateSectionController";
import BannerLessonsController from "./controllers/BannerLessonsController";
import ClientsLogoController from "./controllers/ClientsLogoController";
import AchievementsBoxController from "./controllers/AchievementsBoxController";
import CommunityBoxController from "./controllers/CommunityBoxControllers";
import pixelGradeController from "./controllers/PixelGradeControllers";
import pixelFooterController from "./controllers/PixelFooterControllers";


const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const port = 5899;

app.get("/dummy", dummyController);
app.post("/banner-lessons", BannerLessonsController);
app.post("/update-section", UpdateSectionController);
app.post("/clients-logo", ClientsLogoController);
app.post("/community-box", CommunityBoxController);
app.post("/achievements-box", AchievementsBoxController);
app.post("/pixel-grade", pixelGradeController);
app.post("/pixel-footer", pixelFooterController);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
