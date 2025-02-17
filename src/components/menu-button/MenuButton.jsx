import { Link, useNavigate } from "react-router-dom";
import "./menuButton.css";

export default function MenuButton({
  children,
  classN,
  onClick,
  closeNav = () => {},
}) {
  function handleClick() {
    onClick();
    closeNav();
  }

  return (
    <li className={classN} onClick={handleClick}>
      {children}
      {/* <Link to={`${route}`}>{name}</Link> */}
    </li>
  );
}
