import AchievementsBox from "./AchievementsBox";
import achievementsBoxTwoIcon from "../../assets/IconBoxTwo.png";

function AchievementsBoxTwo() {
  const titleText = "46,328";
  const descriptionText = "Clubs";
  return (
    <div className="AchievementsBox">
      <AchievementsBox
        title={titleText}
        description={descriptionText}
        image={achievementsBoxTwoIcon}
      />
    </div>
  );
}

export default AchievementsBoxTwo;
