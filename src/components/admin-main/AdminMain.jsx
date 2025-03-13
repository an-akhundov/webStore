import "./adminMain.css";
import OrderList from "../orders-list/OrdersList";

export default function AdminMain({ orders }) {
  return (
    <>
      <OrderList orders={orders} />
    </>
  );
}
