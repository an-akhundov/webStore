import { GOODS } from "../../data";
import { useState } from "react";
import MenuButton from "../menu-button/MenuButton.jsx";
import "./cardInfo.css";
import plusImg from "../../assets/plus.png";
import minusImg from "../../assets/minus.png";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice.js";

export default function CardInfo() {
  const selectedItem = useSelector((state) => state.cart.selectedItem);
  const dispatch = useDispatch();
  let product = GOODS.find((product) => product.id === selectedItem);
  const [quantity, setQuantity] = useState(0);

  if (!product) {
    product = JSON.parse(localStorage.getItem("item"));
  } else {
    localStorage.setItem("item", JSON.stringify(product));
  }

  function increaceQuantity() {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  }

  function decreaceQuantity() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleAdd() {
    for (let i = 0; i < quantity; i++) {
      dispatch(cartActions.addItemToCard(selectedItem));
    }
    setQuantity(0);
  }

  return (
    <div className="card-info">
      <img src={product.imgUrl} alt="" className="card-info__image" />
      <div className="card-info__product-info">
        <h2 className="card-info__product-info__name">{product.name}</h2>
        <p className="card-info__product-info__description">
          {product.description}
        </p>
        <p>
          <span className="card-info__product-info__price"> Price :</span> $
          {product.price}
        </p>
        <p>
          <span className="card-info__product-info__stock">In Stock :</span>{" "}
          {product.stock}
        </p>
        <div className="card-info__product-info__buttons">
          <MenuButton classN="card-info__button" onClick={increaceQuantity}>
            <img
              src={plusImg}
              alt=""
              className="card-info__product-info__buttons__image"
            />
          </MenuButton>
          <span>{quantity}</span>
          <MenuButton classN="card-info__button" onClick={decreaceQuantity}>
            <img
              src={minusImg}
              alt=""
              className="card-info__product-info__buttons__image"
            />
          </MenuButton>
          <MenuButton classN="card-info__button-order" onClick={handleAdd}>
            Add to Cart
          </MenuButton>
        </div>
      </div>
    </div>
  );
}
