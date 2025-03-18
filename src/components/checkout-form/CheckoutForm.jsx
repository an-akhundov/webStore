import "./checkoutForm.css";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice";
import { translation } from "../../utils/translations";

export default function CheckoutForm() {
  const items = useSelector((state) => state.cart.items);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === "submitting";
  const language = useSelector((state) => state.lang.language);

  function submitHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const userData = {
      name: fd.get("userName"),
      number: fd.get("number"),
      email: fd.get("email"),
      description: fd.get("description"),
    };

    const fetchData = {
      order: {
        items: items,
        customer: userData,
      },
    };

    const response = fetch("https://avtoboya-api.onrender.com/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fetchData),
    });

    // if (!response.ok) {
    //   return new Response({ message: "Could not add order" }, { status: 500 });
    // }
    dispatch(cartActions.clearCart());
    navigate("/");
  }

  return (
    <form method="post" className="checkout-form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="userName">{translation[language].userName}</label>
        <input id="userName" type="text" name="userName" required />
      </p>
      <p>
        <label htmlFor="number">{translation[language].number}</label>
        <input id="number" type="text" name="number" required />
      </p>
      <p>
        <label htmlFor="email">{translation[language].email}</label>
        <input id="email" type="text" name="email" required />
      </p>
      <p>
        <label htmlFor="description">
          {translation[language].additionalInformation}
        </label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <div className="checkout-actions">
        <button disabled={isSubmitting}>
          {isSubmitting
            ? translation[language].submitting
            : translation[language].proceed}
        </button>
      </div>
    </form>
  );
}
