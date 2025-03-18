import { Outlet, useRouteLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import AdBlock from "../components/ad-block/AdBlock";
import Footer from "../components/footer/Footer";
import { translation } from "../utils/translations";
import { useSelector } from "react-redux";

export default function Layout() {
  const data = useRouteLoaderData("root");
  const language = useSelector((state) => state.lang.language);

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
  const response = await fetch("https://avtoboya-api.onrender.com/goods");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: translation[language].couldNotFetchData }),
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
