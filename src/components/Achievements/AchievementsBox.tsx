import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./AchievementsBox.css";

type AchievementsBoxParams = {
  title: string;
  description: string;
  image: string;
};

function AchievementsBox({
  image = "",
  title = "",
  description = "",
}: AchievementsBoxParams) {
  return (
    <div className="row-item">
      <div className="row-image">
        <img src={image} alt="Achievements image" title="Achievements image" />
      </div>
      <div className="row-text">
        <Headline size="h3" color="grey">
          {title}
        </Headline>
        <Body size="body2-0" weight="regular" color="grey">
          {description}
        </Body>
      </div>
    </div>
  );
}

export default AchievementsBox;
