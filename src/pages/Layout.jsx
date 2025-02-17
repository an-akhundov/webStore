import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import AdBlock from "../components/ad-block/AdBlock";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <AdBlock />
        <Outlet />
        <AdBlock />
      </main>
      <Footer />
    </>
  );
}
