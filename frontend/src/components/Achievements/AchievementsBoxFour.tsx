import AchievementsBox from "./AchievementsBox";
import achievementsBoxFourIcon from "../../assets/IconBoxFour.png";

function AchievementsBoxFour() {
  const titleText = "1,926,436";
  const descriptionText = "Payments";
  return (
    <div className="AchievementsBox">
      <AchievementsBox
        title={titleText}
        description={descriptionText}
        image={achievementsBoxFourIcon}
      />
    </div>
  );
}

export default AchievementsBoxFour;
