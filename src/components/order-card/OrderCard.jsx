import "./orderCard.css";

export default function OrderCard({ order }) {
  return (
    <div className="order-card">
      <ul className="order-card__items">
        {order.items.map((item) => {
          const itemString =
            item.name +
            " x" +
            item.quantity +
            "      " +
            item.price * item.quantity +
            " AZN";
          return (
            <li key={item.id} className="order-card__item">
              <p>{itemString}</p>
            </li>
          );
        })}
      </ul>
      <div className="order-card__customer">
        <p>{order.customer.name}</p>
        <p>{order.customer.number}</p>
        <p>{order.customer.email}</p>
        <p>{order.customer.description}</p>
      </div>
    </div>
  );
}
