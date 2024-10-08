import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./Achievements.css";
import AchievementsBoxFour from "./AchievementsBoxFour";
import AchievementsBoxOne from "./AchievementsBoxOne";
import AchievementsBoxThree from "./AchievementsBoxThree";
import AchievementsBoxTwo from "./AchievementsBoxTwo";

function Achievements() {
  return (
    <div className="Achievements">
      <Centralizer>
        <div className="grid-flex">
          <div className="left-side">
            <Headline color="grey" size="h2">
              Helping a local
            </Headline>
            <Headline color="primary" size="h2">
              business reinvent itself
            </Headline>
            <Body color="black" weight="regular" size="body2">
              We reached here with our hard work and dedication
            </Body>
          </div>
          <div className="right-side">
            <div className="row-flex">
              <AchievementsBoxOne></AchievementsBoxOne>
              <AchievementsBoxTwo></AchievementsBoxTwo>
            </div>
            <div className="row-flex">
              <AchievementsBoxThree></AchievementsBoxThree>
              <AchievementsBoxFour></AchievementsBoxFour>
            </div>
          </div>
        </div>
      </Centralizer>
    </div>
  );
}

export default Achievements;
