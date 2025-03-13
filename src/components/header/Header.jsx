import "./header.css";

import searchImg from "../../assets/search-img.png";
import wpImg from "../../assets/whatsapp.png";
import homeImg from "../../assets/home.png";
import OrderButton from "../order-button/OrderButton";
import Brand from "../brand/Brand";
import MenuButton from "../menu-button/MenuButton";
import MobileNav from "../mobile-nav/MobileNav";
import CartModal from "../cart-modal/CartModal.jsx";
import { langActions } from "../../store/storeSlices/langSlice.js";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ferImage from "../../assets/fer.webp";
import lambaImg from "../../assets/lamba.jpg";
import { useDispatch, useSelector } from "react-redux";

export default function Header({ data }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);
  const modal = useRef();
  const search = useRef();
  const select = useRef();
  const cartQuantity = useSelector((state) => state.cart.items).length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (language === "AZ") {
    modalActions = <button>Bağla</button>;
  }

  if (language === "RU") {
    modalActions = <button>Закрыть</button>;
  }

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={() => changeRoute("/Checkout")}>Checkout</button>
      </>
    );
  }

  function handleToggleButton() {
    setMobileNavActive((prev) => !prev);
  }

  function changeRoute(route) {
    navigate(`${route}`);
  }

  function handleChangeLanguage() {
    dispatch(langActions.changeLanguage(select.current.value));
  }

  function searchProduct() {
    const searchArr = [];

    Object.keys(data).map((productsName) => {
      const arr = data[productsName];

      arr.map((product) => {
        if (
          product.name
            .toLowerCase()
            .trim()
            .split(" ")
            .join("")
            .includes(
              search.current.value.toLowerCase().trim().split(" ").join("")
            )
        ) {
          searchArr.push(product);
        }
      });
    });

    navigate("/Search", {
      state: {
        data: searchArr,
      },
    });
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
            <input type="text" className="header__search-input" ref={search} />
            <a src="#" className="header__search-button">
              <img
                src={searchImg}
                alt=""
                className="header__search-button--img"
                onClick={searchProduct}
              />
            </a>
          </div>
          <div className="header__contacts">
            <select
              ref={select}
              onChange={handleChangeLanguage}
              defaultValue={language}
            >
              <option value="EN">EN</option>
              <option value="RU">RU</option>
              <option value="AZ">AZ</option>
            </select>
            <div className="header__contacts-contact">
              <img src={wpImg} className="header__contacts-img"></img>
              <h1 className="header__contacts-text">+994(50)3233642</h1>
            </div>
            <div className="header__contacts-contact">
              <img src={homeImg} className="header__contacts-img"></img>
              <h1 className="header__contacts-text">
                Azerbaijan.Baku.Aga Neymatulla 79
              </h1>
            </div>
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
              onClick={() => changeRoute("/AutoClear")}
            >
              Auto Clear
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Primers")}
            >
              Primers
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Hardeners")}
            >
              Hardeners
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Polish")}
            >
              Polish
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Solvents")}
            >
              Solvents
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/Putties")}
            >
              Putties
            </MenuButton>
            <MenuButton
              classN="header-button"
              onClick={() => changeRoute("/ColorMatching")}
            >
              Color Matching
            </MenuButton>
          </nav>
        </div>
        <img src={lambaImg} alt="" className="header__image" />
      </header>
    </>
  );
}
