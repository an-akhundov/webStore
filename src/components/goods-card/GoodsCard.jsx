import "./goodsCard.css";
import MenuButton from "../menu-button/MenuButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice";
import { translation } from "../../utils/translations";

export default function ({ image, name, price, id, isProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((state) => state.lang.language);

  function handleNavigate() {
    dispatch(cartActions.selectItem(id));
    navigate(`${id}`);
  }

  return (
    <div className="card">
      <img
        src={`http://localhost:3000/${image}`}
        alt=""
        className="card__img"
        onClick={isProduct ? handleNavigate : undefined}
      />
      <h3 className="card__name">{name}</h3>
      <p className="card__price">{`${price} AZN`}</p>
      {isProduct && (
        <MenuButton
          classN="card-button"
          onClick={() =>
            dispatch(
              cartActions.addItemToCard({
                image,
                name,
                price,
                id,
              })
            )
          }
        >
          {translation[language].addToCart}
        </MenuButton>
      )}
    </div>
  );
}
