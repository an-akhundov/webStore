import "./header.css";

import searchImg from "../../assets/search-img.png";
import wpImg from "../../assets/whatsapp.png";
import homeImg from "../../assets/home.png";
import OrderButton from "../order-button/OrderButton";
import Brand from "../brand/Brand";
import MenuButton from "../menu-button/MenuButton";
import MobileNav from "../mobile-nav/MobileNav";
import CartModal from "../cart-modal/CartModal.jsx";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ferImage from "../../assets/fer.webp";
import lambaImg from "../../assets/lamba.jpg";
import { useSelector } from "react-redux";

export default function Header({ ...props }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navigate = useNavigate();
  const modal = useRef();
  const cartQuantity = useSelector((state) => state.cart.items).length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  function handleToggleButton() {
    setMobileNavActive((prev) => !prev);
  }

  function changeRoute(route) {
    navigate(`${route}`);
  }

  return (
    <>
      <div
        class={`backdrop ${mobileNavActive ? "open" : undefined}`}
        id="backdrop"
        onClick={handleToggleButton}
      ></div>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <MobileNav
        onCartClick={handleOpenCartClick}
        isNavActive={mobileNavActive}
        closeNav={handleToggleButton}
      ></MobileNav>

      <header className="header">
        <img src={ferImage} alt="" className="header__image" />
        <div className="header_wrap">
          <Brand></Brand>
          <div className="header__search">
            <input type="text" className="header__search-input" />
            <a src="#" className="header__search-button">
              <img
                src={searchImg}
                alt=""
                className="header__search-button--img"
              />
            </a>
          </div>
          <div className="header__contacts">
            <img src={wpImg} className="header__contacts-img"></img>
            <h1 className="header__contacts-text">+994(50)3233642</h1>

            <img src={homeImg} className="header__contacts-img"></img>
            <h1 className="header__contacts-text">
              Azerbaijan.Baku.Aga Neymatulla 79
            </h1>
          </div>

          <div className="header__buttons">
            <button
              className="header__buttons-toggle-button"
              onClick={handleToggleButton}
            >
              <span className="header__buttons-toggle-button--bar"></span>
              <span className="header__buttons-toggle-button--bar"></span>
              <span className="header__buttons-toggle-button--bar"></span>
            </button>

            <OrderButton onClick={handleOpenCartClick}></OrderButton>
          </div>

          <nav className="header__menu">
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/CarPaints")}
            >
              Car Paints
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/AutoChemical")}
            >
              Auto Chemical goods
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Wheels")}
            >
              Wheels
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Batteries")}
            >
              Batteries
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Spares")}
            >
              Spares
            </MenuButton>
          </nav>
        </div>
        <img src={lambaImg} alt="" className="header__image" />
      </header>
    </>
  );
}
