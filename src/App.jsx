import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import { Suspense } from "react";

const Layout = lazy(() => import("./pages/Layout"));
const MainPage = lazy(() => import("./pages/MainPage"));
const CarPaints = lazy(() => import("./pages/CarPaints"));
const AutoClear = lazy(() => import("./pages/AutoClear"));
const Primers = lazy(() => import("./pages/Primers"));
const Hardeners = lazy(() => import("./pages/Hardeners"));
const Polish = lazy(() => import("./pages/Polish"));
const Solvents = lazy(() => import("./pages/Solvents"));
const Putties = lazy(() => import("./pages/Putties"));
const ColorMatching = lazy(() => import("./pages/ColorMatching"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const ErrorPage = lazy(() => import("./pages/Error"));
const ProductInfo = lazy(() => import("./pages/ProductInfo"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="main-page">
              <p>Loading...</p>
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
      errorElement: (
        <Suspense
          fallback={
            <div className="main-page">
              <p>Loading...</p>
            </div>
          }
        >
          <ErrorPage />
        </Suspense>
      ),
      loader: () => import("./pages/Layout").then((module) => module.loader()),
      id: "root",
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: "paint",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <CarPaints />
            </Suspense>
          ),
        },
        {
          path: "clear",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <AutoClear />
            </Suspense>
          ),
        },
        {
          path: "primer",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Primers />
            </Suspense>
          ),
        },
        {
          path: "hardener",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Hardeners />
            </Suspense>
          ),
        },
        {
          path: "polish",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Polish />
            </Suspense>
          ),
        },
        {
          path: "solvent",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Solvents />
            </Suspense>
          ),
        },
        {
          path: "putty",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Putties />
            </Suspense>
          ),
        },
        {
          path: "Search",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <SearchPage />
            </Suspense>
          ),
        },
        {
          path: "matching",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ColorMatching />
            </Suspense>
          ),
        },
        {
          path: "Checkout",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <CheckoutPage />
            </Suspense>
          ),
        },
        {
          path: "paint/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "clear/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "primer/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "hardener/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "polish/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "solvent/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "putty/:id",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <ProductInfo />
            </Suspense>
          ),
        },
        {
          path: "Admin",
          element: (
            <Suspense
              fallback={
                <div className="main-page">
                  <p>Loading...</p>
                </div>
              }
            >
              <Admin />
            </Suspense>
          ),
          loader: () =>
            import("./pages/Admin").then((module) => module.loader()),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
