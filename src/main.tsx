import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
// import CartProvider from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
