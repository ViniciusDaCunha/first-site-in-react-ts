import ButtonCustom from "../ButtonCustom/ButtonCustom";
import HeadlineOne from "../Typography/HeadlineOne";

export default function HeroSection() {
  return (
    <div
      className="frame-1"
      style={{
        display: "flex",
        gap: "144px",
        padding: "96px 144px",
        alignItems: "center",
        background: "var(--silver)",
      }}
    >
      <div>
        <HeadlineOne></HeadlineOne>
        <h1>from 8 years</h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <div>
          <ButtonCustom appearence="primary" size="medium" title="Register">
            Register
          </ButtonCustom>
        </div>
      </div>
      <div>Imagem</div>
    </div>
  );
}
