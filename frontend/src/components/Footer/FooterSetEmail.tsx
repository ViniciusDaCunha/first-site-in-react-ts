import "./FooterSetEmail.css";
import sendImg from "../../assets/send.png";

function FooterSetEmail() {
  return (
    <div className="BG-input">
      <div className="email-input">
        <input type="email" placeholder="Your e-mail adress" />
      </div>
      <div className="send-email-img">
        <img src={sendImg} />
      </div>
    </div>
  );
}

export default FooterSetEmail;
