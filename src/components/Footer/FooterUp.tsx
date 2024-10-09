import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Centralizer from "../Centralizer/Centralizer";
import Headline from "../Typography/Headline";
import "./FooterUp.css";

export default function FooterUp() {
  return (
    <div className="FooterUp">
      <Centralizer>
        <div className="footer-up">
          <div className="footer-title">
            <Headline size="h1" color="black">
              Pellentesque suscipit fringilla libero eu.
            </Headline>
          </div>
          <ButtonCustom title="Get a Demo" size="normal" appearence="primary">
            Get a Demo
          </ButtonCustom>
        </div>
        <div className="footer-down"></div>
      </Centralizer>
    </div>
  );
}
