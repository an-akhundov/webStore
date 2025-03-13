import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import CarPaints from "./pages/CarPaints";
import AutoClear from "./pages/AutoClear";
import Primers from "./pages/Primers";
import Hardeners from "./pages/Hardeners";
import Polish from "./pages/Polish";
import Solvents from "./pages/Solvents";
import Putties from "./pages/Putties";
import ColorMatching from "./pages/ColorMatching,";
import ProductInfo from "./pages/ProductInfo";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/Error";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/Checkout";
import { loader } from "./pages/Layout";
import { loader as adminLoader } from "./pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      loader: loader,
      id: "root",
      children: [
        { index: true, element: <MainPage /> },
        {
          path: "CarPaints",
          element: <CarPaints />,
        },
        { path: "AutoClear", element: <AutoClear /> },
        { path: "Primers", element: <Primers /> },
        { path: "Hardeners", element: <Hardeners /> },
        { path: "Polish", element: <Polish /> },
        { path: "Solvents", element: <Solvents /> },
        { path: "Putties", element: <Putties /> },
        { path: "Search", element: <SearchPage /> },
        { path: "ColorMatching", element: <ColorMatching /> },
        { path: "Checkout", element: <CheckoutPage /> },
        { path: "CarPaints/:id", element: <ProductInfo /> },
        { path: "AutoClear/:id", element: <ProductInfo /> },
        { path: "Primers/:id", element: <ProductInfo /> },
        { path: "Hardeners/:id", element: <ProductInfo /> },
        { path: "Polish/:id", element: <ProductInfo /> },
        { path: "Solvents/:id", element: <ProductInfo /> },
        { path: "Putties/:id", element: <ProductInfo /> },
        { path: "Admin", element: <Admin />, loader: adminLoader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
