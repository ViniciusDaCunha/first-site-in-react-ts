import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Headline from "../Typography/Headline";
import "./HeroSection.css";
import image from "../../assets/Illustration.png";
import Body from "../Typography/Body";
import Centralizer from "../Centralizer/Centralizer";
import { useEffect, useState } from "react";

type BannerLessonsType = {
  mainTitle: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
};

async function getHeroDataFromServer() {
  const result = await fetch("http://localhost:5899/banner-lessons", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });

  const finalData = (await result.json()) as BannerLessonsType;

  return finalData;
}

export default function HeroSection() {
  const [bannerData, setBannerData] = useState<BannerLessonsType>({
    mainTitle: "",
    buttonLabel: "",
    buttonUrl: "",
    description: "",
  });

  const [greyText, setGreyText] = useState<string>("");

  const [greenText, setGreenText] = useState<string>("");

  async function loadLocalVariables() {
    const localData = await getHeroDataFromServer();

    const tempGreyText = localData.mainTitle.replace("from 8 years", "");
    const tempGreenText = localData.mainTitle.replace(
      "Lessons and insights",
      ""
    );

    setGreyText(tempGreyText);
    setGreenText(tempGreenText);
    setBannerData(localData);
  }

  useEffect(() => {
    loadLocalVariables();
  }, []);

  return (
    <div className="HeroSection">
      <Centralizer>
        <div className="flex-grid">
          <div className="frame-1">
            <div className="frame-text">
              <Headline size="h1" color="grey">
                {greyText}
              </Headline>
              <Headline size="h1" color="primary">
                {greenText}
              </Headline>
              <Body size="body1" weight="regular" color="grey">
                {bannerData.description}
              </Body>
              <div className="button-area">
                <ButtonCustom
                  appearence="primary"
                  size="medium"
                  title="Register"
                >
                  {bannerData.buttonLabel}
                </ButtonCustom>
              </div>
            </div>
          </div>

          <div>
            <img className="image" src={image} />
          </div>
        </div>
        <div className="bullet-area">
          {[0, 1, 2].map((item) => {
            if (item === 0)
              return <span className="slider-bullet selected"></span>;

            return <span className="slider-bullet"></span>;
          })}
        </div>
      </Centralizer>
    </div>
  );
}
