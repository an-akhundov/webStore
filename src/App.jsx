import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import CarPaints from "./pages/CarPaints";
import AutoChemical from "./pages/AutoChemical";
import Wheels from "./pages/Wheels";
import Batteries from "./pages/Batteries";
import Spares from "./pages/Spares";
import ProductInfo from "./pages/ProductInfo";
import CartContextProvider from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="CarPaints" element={<CarPaints />} />
            <Route path="AutoChemical" element={<AutoChemical />} />
            <Route path="Wheels" element={<Wheels />} />
            <Route path="Batteries" element={<Batteries />} />
            <Route path="Spares" element={<Spares />} />
            <Route path="ProductInfo" element={<ProductInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
