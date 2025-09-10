import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
// import CartProvider from "./context/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
