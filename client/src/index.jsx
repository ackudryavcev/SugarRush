import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CartProvider from "./store/Context";

import AppWrapper from "./AppWrapper";
import App from "./App";
import { FavoritesProvider } from "./store/FavoritesContext";

ReactDOM.render(
  <FavoritesProvider>
    <CartProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </CartProvider>
  </FavoritesProvider>,

  document.getElementById("root")
);
