import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Headline from "../Typography/Headline";
import "./HeroSection.css";
import image from "../../assets/Illustration.png";
import Body from "../Typography/Body";
import Centralizer from "../Centralizer/Centralizer";

export default function HeroSection() {
  return (
    <div className="HeroSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="frame-1">
            <div className="frame-text">
              <Headline size="h1" color="grey">
                Lessons and insights
              </Headline>
              <Headline size="h1" color="primary">
                from 8 years
              </Headline>
              <Body size="body1" weight="regular" color="grey">
                Where to grow your business as a photographer: site or social
                media?
              </Body>
              <div className="button">
                <ButtonCustom
                  appearence="primary"
                  size="medium"
                  title="Register"
                >
                  Register
                </ButtonCustom>
              </div>
            </div>
          </div>
          <div>
            <img className="image" src={image} />
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
