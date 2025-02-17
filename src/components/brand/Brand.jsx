import "./brand.css";
import brand from "../../assets/new_logo.png";
import { Link } from "react-router-dom";

export default function Brand({ closeNav }) {
  return (
    <div className="header-brand">
      <Link to="/" onClick={closeNav}>
        <img src={brand} alt="" />
      </Link>
    </div>
  );
}
