import "./goodsCard.css";
import MenuButton from "../menu-button/MenuButton";
import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context.jsx";
import { useNavigate } from "react-router-dom";

export default function ({ imgUrl, name, price, id }) {
  const ctxValue = useContext(CartContext);
  const navigate = useNavigate();

  function handleNavigate() {
    ctxValue.selectItem(id);
    navigate("/ProductInfo");
  }

  return (
    <div className="card">
      <img src={imgUrl} alt="" className="card__img" onClick={handleNavigate} />
      <h3 className="card__name">{name}</h3>
      <p className="card__price">{`$${price}`}</p>
      <MenuButton
        classN="card-button"
        onClick={() => ctxValue.addItemToCard(id)}
      >
        Add to cart
      </MenuButton>
    </div>
  );
}
