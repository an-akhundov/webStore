import "./mobileNav.css";
import OrderButton from "../order-button/OrderButton";
import Brand from "../brand/Brand";
import MenuButton from "../menu-button/MenuButton";
import { useNavigate } from "react-router-dom";
import { translation } from "../../utils/translations";
import { useSelector } from "react-redux";

export default function MobileNav({ isNavActive, closeNav, onCartClick }) {
  const navigate = useNavigate();
  const language = useSelector((state) => state.lang.language);
  function changeRoute(route) {
    navigate(`${route}`);
  }

  return (
    <nav className={`mobile-nav ${isNavActive ? "open" : undefined}`}>
      <div className="mobile-nav__buttons">
        <Brand closeNav={closeNav}></Brand>
        <OrderButton onClick={onCartClick}></OrderButton>
      </div>
      <ol className="mobile-nav__items">
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/CarPaints")}
          closeNav={closeNav}
        >
          {translation[language].carPaints}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/AutoClear")}
          closeNav={closeNav}
        >
          {translation[language].avtoClear}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Primers")}
          closeNav={closeNav}
        >
          {translation[language].primers}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Hardeners")}
          closeNav={closeNav}
        >
          {translation[language].hardeners}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Polish")}
          closeNav={closeNav}
        >
          {translation[language].polish}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Solvents")}
          closeNav={closeNav}
        >
          {translation[language].solvents}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Putties")}
          closeNav={closeNav}
        >
          {translation[language].putties}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/ColorMatching")}
          closeNav={closeNav}
        >
          {translation[language].colorMatching}
        </MenuButton>
      </ol>
    </nav>
  );
}
