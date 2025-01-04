import Centralizer from "../Centralizer/Centralizer";
import "./PixelGradeFooter.css";
import Headline from "../Typography/Headline";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Body from "../Typography/Body";
import { useEffect, useState } from "react";

type PixelFooterParams = {
  title: string;
  description: string;
  image: string;
};

async function getServerData() {
  const result = await fetch("http://localhost:5899/pixel-footer", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
  });

  const finalData = (await result.json()) as PixelFooterParams;

  return finalData;
}

export default function PixelFooter() {

  const [pixelData, setPixeldata] = useState<PixelFooterParams>({
    title: "",
    description: "",
    image: ""
  });

  async function loadPixelFooter() {
    const localData = await getServerData()

    setPixeldata(localData);
  }

  useEffect(()=> {
    loadPixelFooter();
  }, []);

  return (
    <div className="PixelGradeFooter">
      <Centralizer>
        <div className="grid-container">
          <div className="left-side">
            <img
              src={pixelData.image}
              alt="PixelGradeFooter image"
              title="PixelGradeFooter image"
            />
          </div>
          <div className="right-side">
            <Headline size="h2" color="grey">
              {pixelData.title}
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              {pixelData.description}
            </Body>
            <ButtonCustom title="Learn More" size="normal" appearence="primary">
              Learn More
            </ButtonCustom>
          </div>
        </div>
      </Centralizer>
    </div>
  );
}



