import { createContext } from "react";
import type CartItem from "../interfaces/CartItem";

export const CartContext = createContext<CartItem>({
  id: "",
  qty: 0,
  title: "",
  image: "",
  price: 0,
});
