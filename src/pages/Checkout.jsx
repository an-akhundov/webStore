import Cart from "../components/cart/Cart";
import CheckoutForm from "../components/checkout-form/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="main-page">
      <div className="checkout">
        <Cart />
        <CheckoutForm />
        <div className="checkout__form"></div>
      </div>
    </div>
  );
}
