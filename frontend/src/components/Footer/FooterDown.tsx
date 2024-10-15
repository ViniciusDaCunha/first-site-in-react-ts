import Centralizer from "../Centralizer/Centralizer";
import "./FooterDown.css";
import logo from "../../assets/LogoFooter.svg";
import logoGit from "../../assets/Path.png";
import logoInsta from "../../assets/instagram.png";
import logoTwitter from "../../assets/twitter.png";
import logoYoutube from "../../assets/youtube.png";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";
import FooterSetEmail from "./FooterSetEmail";

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
          <div className="social-links">
            <div className="about-company">
              <Headline size="h4" color="white">
                Company
              </Headline>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  About us
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Blog
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Contact us
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Pricing
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Testimonials
                </Body>
              </a>
            </div>
            <div className="about-company">
              <Headline size="h4" color="white">
                Support
              </Headline>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Help Center
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Terms of service
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Legal
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Privacy policy
                </Body>
              </a>
              <a href="/">
                <Body size="body3-0" weight="regular" color="white">
                  Status
                </Body>
              </a>
            </div>
            <div className="email-set">
              <Headline size="h4" color="white">
                Stay up to date
              </Headline>
              <FooterSetEmail></FooterSetEmail>
            </div>
          </div>
        </div>
      </Centralizer>
    </div>
  );
}
