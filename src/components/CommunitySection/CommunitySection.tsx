import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./CommunitySection.css";
import icon1 from "../../assets/membership.png";
import icon2 from "../../assets/nationalassociations.png";
import icon3 from "../../assets/clubs.png";

export default function CommunitySection() {
  return (
    <div className="CommunitySection">
      <Centralizer>
        <div className="flex-grid">
          <div className="community-text">
            <Headline size="h2" color="grey">
              Manage your entire community
            </Headline>
            <Headline size="h2" color="grey">
              in a single system
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              Who is Nextcent suitable for?
            </Body>
          </div>
          <div className="community-network">
            <div className="network-grid">
              <div className="icon-grid">
                <img src={icon1} />
              </div>
              <Headline size="h3" color="grey">
                Membership Organisations
              </Headline>
              <Body size="body3" color="grey" weight="regular">
                Our membership management software provides full automation of
                membership renewals and payments
              </Body>
            </div>
            <div className="network-grid">
              <div className="icon-grid">
                <img src={icon2} />
              </div>
              <Headline size="h3" color="grey">
                National Associations
              </Headline>
              <Body size="body3" color="grey" weight="regular">
                Our membership management software provides full automation of
                membership renewals and payments
              </Body>
            </div>
            <div className="network-grid">
              <div className="icon-grid">
                <img src={icon3} />
              </div>
              <Headline size="h3" color="grey">
                Clubs And Groups
              </Headline>
              <Body size="body3" color="grey" weight="regular">
                Our membership management software provides full automation of
                membership renewals and payments
              </Body>
            </div>
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
