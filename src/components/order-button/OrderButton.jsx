import "./orderButton.css";
import basketImg from "../../assets/basket.png";
import { useSelector } from "react-redux";

export default function OrderButton({ onClick }) {
  let countCss = "order-button__count";
  const cartQuantity = useSelector((state) => state.cart.items).length;

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
