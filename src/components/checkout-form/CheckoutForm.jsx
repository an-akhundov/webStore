import "./checkoutForm.css";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/storeSlices/cartSlice";

export default function CheckoutForm() {
  const items = useSelector((state) => state.cart.items);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === "submitting";

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

    const response = fetch("http://localhost:3000/orders", {
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
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" name="userName" required />
      </p>
      <p>
        <label htmlFor="number">Number</label>
        <input id="number" type="text" name="number" required />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" required />
      </p>
      <p>
        <label htmlFor="description">Additional Information</label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <div className="checkout-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting.." : "Proceed"}
        </button>
      </div>
    </form>
  );
}

export async function action({ request }) {
  console.log(request.body);
}
