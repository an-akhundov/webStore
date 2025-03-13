import { useLoaderData } from "react-router-dom";
import AdminAuth from "../components/admin-auth/AdminAuth";

export default function Admin() {
  const data = useLoaderData();

  return (
    <>
      <div className="main-page">
        <AdminAuth
          adminCredentials={data.adminData.admin}
          orders={data.ordersData.orders}
        />
      </div>
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:3000/admin");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch admin credentials!" }),
      {
        status: 500,
      }
    );
  } else {
    const adminData = await response.json();
    const ordersResponse = await fetch("http://localhost:3000/orders");
    if (!ordersResponse.ok) {
      throw new Response(
        JSON.stringify({ message: "Could not fetch admin credentials!" }),
        {
          status: 500,
        }
      );
    } else {
      const ordersData = await ordersResponse.json();

      const data = {
        adminData: adminData,
        ordersData: ordersData,
      };

      return data;
    }
  }
}
