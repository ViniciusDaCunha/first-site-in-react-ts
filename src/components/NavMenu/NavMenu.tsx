import ButtonCustom from "../ButtonCustom/ButtonCustom";
import logo from "../../assets/Logo.svg";
import "./NavMenu.css";

export default function NavMenu() {
  return (
    <div className="NavMenu">
      <div>
        <a href="/">
          <img className="logo" src={logo} />
        </a>
      </div>
      <div className="container-menu">
        <div className="nav-menu-buttons">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Feature</a>
          <a href="#">Product</a>
          <a href="#">Testimonial</a>
          <a href="#">FAQ</a>
        </div>
      </div>
      <div>
        <div className="continer-buttons">
          <ButtonCustom title="Sign up" size="small" appearence="tertiary">
            Login
          </ButtonCustom>

          <ButtonCustom title="Sign up" size="small" appearence="primary">
            Sign up
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}
