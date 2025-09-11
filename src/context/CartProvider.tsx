import { useReducer } from "react";
import { saveToStorage } from "../hooks/useLocalStorage";
import type { ReactNode } from "react";
import type CartItem from "../interfaces/CartItem";
import { CartContext } from "./CartContext";

type Action =
  | { type: "add"; payload: CartItem }
  | { type: "remove" }
  | { type: "update" }
  | { type: "total" };

function reducer(state: CartItem, action: Action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        id: action.payload.id,
        qty: 1,
        title: action.payload.title,
        image: action.payload.image,
        price: action.payload.price
      };
    case "remove":
      return
    case "update":
      // update item in cart
      break;
    case "total":
      // calculate total price
      break;
  }
}

export default function CartProvider({ children }: ReactNode) {
  const [state, dispatch] = useReducer<CartItem, Action>(reducer, {
    id: "",
    qty: 0,
    title: "",
    image: "",
    price: 0,
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
