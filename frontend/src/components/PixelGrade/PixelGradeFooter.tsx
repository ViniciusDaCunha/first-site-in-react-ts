import Centralizer from "../Centralizer/Centralizer";
import "./PixelGradeFooter.css";
import Headline from "../Typography/Headline";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Body from "../Typography/Body";

type PixelGradeFooterParams = {
  title: string;
  description: string;
  image: string;
};

function PixelGradeFooter({
  image = "",
  title = "",
  description = "",
}: PixelGradeFooterParams) {
  return (
    <div className="PixelGradeFooter">
      <Centralizer>
        <div className="grid-container">
          <div className="left-side">
            <img
              src={image}
              alt="PixelGradeFooter image"
              title="PixelGradeFooter image"
            />
          </div>
          <div className="right-side">
            <Headline size="h2" color="grey">
              {title}
            </Headline>
            <Body size="body2" weight="regular" color="grey">
              {description}
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

export default PixelGradeFooter;
