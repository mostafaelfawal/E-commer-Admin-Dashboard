import { createContext } from "react";

// نوع الـContext
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// إنشاء الـContext
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
