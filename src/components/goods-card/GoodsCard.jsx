import "./goodsCard.css";
import MenuButton from "../menu-button/MenuButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice";

export default function ({ imgUrl, name, price, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNavigate() {
    dispatch(cartActions.selectItem(id));
    navigate("/ProductInfo");
  }

  return (
    <div className="card">
      <img src={imgUrl} alt="" className="card__img" onClick={handleNavigate} />
      <h3 className="card__name">{name}</h3>
      <p className="card__price">{`$${price}`}</p>
      <MenuButton
        classN="card-button"
        onClick={() => dispatch(cartActions.addItemToCard(id))}
      >
        Add to cart
      </MenuButton>
    </div>
  );
}
