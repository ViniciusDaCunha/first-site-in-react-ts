import Centralizer from "../Centralizer/Centralizer";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import "./ClientsSection.css";
import image from "../../assets/Clients Logos.png";

export default function ClientsSection() {
  return (
    <div className="ClientsSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="clients-text">
            <Headline size="h2" color="grey">
              Our Clients
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              We have been working with some Fortune 500+ clients
            </Body>
          </div>
          <div>
            <img className="clients-logo" src={image} />
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
