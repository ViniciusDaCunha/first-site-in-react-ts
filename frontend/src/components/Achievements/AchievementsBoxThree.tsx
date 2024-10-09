import AchievementsBox from "./AchievementsBox";
import achievementsBoxThreeIcon from "../../assets/IconBoxThree.png";

function AchievementsBoxThree() {
  const titleText = "828,867";
  const descriptionText = "Event Bookings";
  return (
    <div className="AchievementsBox">
      <AchievementsBox
        title={titleText}
        description={descriptionText}
        image={achievementsBoxThreeIcon}
      />
    </div>
  );
}

export default AchievementsBoxThree;
