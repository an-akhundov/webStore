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
          onClick={() => changeRoute("/AutoClear")}
          closeNav={closeNav}
        >
          Auto Clear
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Primers")}
          closeNav={closeNav}
        >
          Primers
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Hardeners")}
          closeNav={closeNav}
        >
          Hardeners
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Polish")}
          closeNav={closeNav}
        >
          Polish
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Solvents")}
          closeNav={closeNav}
        >
          Solvents
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/Putties")}
          closeNav={closeNav}
        >
          Putties
        </MenuButton>
        <MenuButton
          classN="mobile-button"
          onClick={() => changeRoute("/ColorMatching")}
          closeNav={closeNav}
        >
          Color Matching
        </MenuButton>
      </ol>
    </nav>
  );
}
