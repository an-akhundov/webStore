import "./orderButton.css";
import basketImg from "../../assets/basket.png";
import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";

export default function OrderButton({ onClick }) {
  let countCss = "order-button__count";
  const ctxValue = useContext(CartContext);
  const cartQuantity = ctxValue.items.length;

  if (cartQuantity > 0) {
    countCss += " visible";
  }

  return (
    <div className="order-button" onClick={onClick}>
      <img src={basketImg} alt="basket-image" className="order-button__img" />
      <div className={countCss}>{cartQuantity}</div>
    </div>
  );
}
