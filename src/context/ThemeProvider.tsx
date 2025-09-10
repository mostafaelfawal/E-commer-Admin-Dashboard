import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { saveToStorage, getFromStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

// الـProvider
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">(
    getFromStorage<"light" | "dark">("theme") || "light"
  );

  // حفظ الوضع وتحديث الـdocument
  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );
    document.documentElement.classList.add(theme);
    saveToStorage("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
