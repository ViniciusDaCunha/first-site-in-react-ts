import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./Achievements.css";

import AchievementsBox, { AchievementsBoxParams } from "./AchievementsBox";
import { useEffect, useState } from "react";

async function getServerData(): Promise<AchievementsBoxParams[]> {
  const result = await fetch("http://localhost:5899/achievements-box", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });

  const finalData = (await result.json()) as AchievementsBoxParams[];

  return finalData;
}

function Achievements() {
  const [localAchievementsItems, setLocalAchievements] = useState<
    AchievementsBoxParams[]
  >([]);

  async function loadAchievementsItems() {
    const temp = await getServerData();

    setLocalAchievements(temp);
  }

  useEffect(() => {
    loadAchievementsItems();
  }, []);

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
            {localAchievementsItems.map((item) => {
              return (
                <AchievementsBox
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </Centralizer>
    </div>
  );
}

export default Achievements;
