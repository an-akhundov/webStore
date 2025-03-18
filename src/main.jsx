import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/storeContent.js";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
