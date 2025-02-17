import "./footer.css";
import instImg from "../../assets/instagram.png";
import fbImg from "../../assets/facebook.png";
import twitImg from "../../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://www.instagram.com/avtoboya.az/">
          <img src={instImg} alt="" className="footer__links-link" />
        </a>
      </div>
      <div className="footer__sign">by AA</div>
    </footer>
  );
}
