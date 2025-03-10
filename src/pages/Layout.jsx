import { Outlet, useRouteLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import AdBlock from "../components/ad-block/AdBlock";
import Footer from "../components/footer/Footer";

export default function Layout() {
  const data = useRouteLoaderData("root");

  return (
    <>
      <Header data={data} />
      <main className="main">
        <AdBlock />
        <Outlet />
        <AdBlock />
      </main>
      <Footer />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:3000/goods");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch data!" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
