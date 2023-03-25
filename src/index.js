import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HairShopProvider } from "./context/HairShopContext";
import { ShopProvider } from "./context/ShopContext";
import { CheckOutProvider } from "./context/CheckOutContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HairShopProvider>
      <ShopProvider>
        <CheckOutProvider>
          <App />
        </CheckOutProvider>
      </ShopProvider>
    </HairShopProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
