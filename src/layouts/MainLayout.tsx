import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function MainLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className={`flex-1 py-5 ${
          theme === "light" ? "bg-neutral-dark" : "bg-neutral-light"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
