import Body from "../Typography/Body";
import Headline from "../Typography/Headline";

export type CommunitySectionBoxParams = {
  image: string;
  title: string;
  description: string;
};

function CommunitySectionBox({
  image = "",
  title = "",
  description = "",
}: CommunitySectionBoxParams) {
  return (
    <div className="network-grid">
      <div className="icon-grid">
        <img src={image} alt="Community Box" title="Community Box" />
      </div>
      <Headline size="h3" color="grey">
        {title}
      </Headline>
      <Body size="body3" color="grey" weight="regular">
        {description}
      </Body>
    </div>
  );
}

export default CommunitySectionBox;
