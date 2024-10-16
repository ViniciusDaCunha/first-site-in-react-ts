import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./UpdateSection.css";
import UpdateSectionBoxOne from "./UpdateSectionBoxOne";
import UpdateSectionBoxThree from "./UpdateSectionBoxThree";
import UpdateSectionBoxTwo from "./UpdateSectionBoxTwo";

function UpdateSection() {
  return (
    <div className="UpdateSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="grid-text">
            <Headline size="h2" color="grey">
              Caring is the new marketing
            </Headline>
            <Body size="body2" color="grey" weight="regular">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </Body>
          </div>
          <div className="community-update">
            <UpdateSectionBoxOne></UpdateSectionBoxOne>
            <UpdateSectionBoxTwo></UpdateSectionBoxTwo>
            <UpdateSectionBoxThree></UpdateSectionBoxThree>
          </div>
        </div>
      </Centralizer>
    </div>
  );
}

export default UpdateSection;
