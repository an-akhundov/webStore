import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice";
import { translation } from "../../utils/translations";
import "./cart.css";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)} AZN`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `${item.price.toFixed(2)} AZN`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.updateItemQuantity({
                          productId: item.id,
                          amount: -1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.updateItemQuantity({
                          productId: item.id,
                          amount: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        {translation[language].cartTotal} <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
