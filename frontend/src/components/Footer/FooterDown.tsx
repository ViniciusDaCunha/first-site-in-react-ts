import Centralizer from "../Centralizer/Centralizer";
import "./FooterDown.css";
import logo from "../../assets/LogoFooter.svg";
import logoGit from "../../assets/Path.png";
import logoInsta from "../../assets/instagram.png";
import logoTwitter from "../../assets/twitter.png";
import logoYoutube from "../../assets/youtube.png";
import Body from "../Typography/Body";

export default function FooterDown() {
  return (
    <div className="FooterDown">
      <Centralizer>
        <div className="flex-grid">
          <div className="company-info">
            <div>
              <a href="/">
                <img className="logo" src={logo} />
              </a>
            </div>
            <div className="company-text">
              <Body size="body4" weight="regular" color="white">
                Copyright © 2020 Nexcent ltd.
              </Body>
              <Body size="body4" weight="regular" color="white">
                All rights reserved
              </Body>
            </div>
            <div className="company-midia">
              <a href="https://github.com//">
                <img className="logo" src={logoGit} />
              </a>
              <a href="https://www.instagram.com/">
                <img className="logo" src={logoInsta} />
              </a>
              <a href="https://twitter.com/">
                <img className="logo" src={logoTwitter} />
              </a>
              <a href="https://www.youtube.com/">
                <img className="logo" src={logoYoutube} />
              </a>
            </div>
          </div>
          <div className="social-links"></div>
        </div>
      </Centralizer>
    </div>
  );
}
