import "./mobileNav.css";
import OrderButton from "../order-button/OrderButton";
import Brand from "../brand/Brand";
import MenuButton from "../menu-button/MenuButton";
import { useNavigate } from "react-router-dom";

export default function MobileNav({ isNavActive, closeNav, onCartClick }) {
  const navigate = useNavigate();
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
          Car Paints
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/AutoChemical")}
          closeNav={closeNav}
        >
          Auto Chemical goods
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Wheels")}
          closeNav={closeNav}
        >
          Wheels
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Batteries")}
          closeNav={closeNav}
        >
          Batteries
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Spares")}
          closeNav={closeNav}
        >
          Spares
        </MenuButton>
      </ol>
    </nav>
  );
}
