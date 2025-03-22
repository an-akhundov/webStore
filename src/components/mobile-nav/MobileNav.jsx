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
          onClick={() => changeRoute("/paint")}
          closeNav={closeNav}
        >
          {translation[language].carPaints}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/clear")}
          closeNav={closeNav}
        >
          {translation[language].avtoClear}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/primer")}
          closeNav={closeNav}
        >
          {translation[language].primers}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/hardener")}
          closeNav={closeNav}
        >
          {translation[language].hardeners}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/polish")}
          closeNav={closeNav}
        >
          {translation[language].polish}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/solvent")}
          closeNav={closeNav}
        >
          {translation[language].solvents}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/putty")}
          closeNav={closeNav}
        >
          {translation[language].putties}
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/matching")}
          closeNav={closeNav}
        >
          {translation[language].colorMatching}
        </MenuButton>
      </ol>
    </nav>
  );
}
