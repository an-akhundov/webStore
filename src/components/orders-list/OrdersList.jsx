import "./ordersList.css";
import OrderCard from "../order-card/OrderCard";
import MenuButton from "../menu-button/MenuButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderList({ orders }) {
  const [isOpenOrders, setIsOpenOrders] = useState(false);
  const [isOpenAddGoods, setIsOpenAddGoods] = useState(false);
  const navigate = useNavigate();

  function handleToggleOrders() {
    setIsOpenOrders((prev) => !prev);
  }

  function handleToggleAdd() {
    {
      setIsOpenAddGoods((prev) => !prev);
    }
  }

  async function handleDelete(id) {
    const response = await fetch("http://localhost:3000/orders/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      return new Response(
        { message: "Could not delete event." },
        {
          status: 500,
        }
      );
    }

    navigate("/Admin");
  }

  return (
    <>
      <MenuButton classN="header-button" onClick={handleToggleOrders}>
        Orders
      </MenuButton>
      <MenuButton classN="header-button" onClick={handleToggleAdd}>
        Add Goods
      </MenuButton>
      {isOpenOrders && (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id}>
              <OrderCard order={order} />
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
