import AchievementsBox from "./AchievementsBox";
import achievementsBoxOneIcon from "../../assets/IconBoxOne.png";

function AchievementsBoxOne() {
  const titleText = "2,245,341";
  const descriptionText = "Members";
  return (
    <div className="AchievementsBox">
      <AchievementsBox
        title={titleText}
        description={descriptionText}
        image={achievementsBoxOneIcon}
      />
    </div>
  );
}

export default AchievementsBoxOne;
