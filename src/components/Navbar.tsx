import { Link } from "react-router-dom";
import logo from "../assets/logoS.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-10 flex justify-between items-center px-8 py-4 bg-neutral-dark dark:bg-neutral-light dark:text-black text-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <span className="text-white dark:text-neutral-dark text-xl font-bold tracking-wide">
          ShopHub
        </span>
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6 text-white dark:text-neutral-dark font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-primary transition-colors duration-200"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/home"
              className="hover:text-primary transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login / Toggle */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-primary hover:bg-primary-light text-white py-1.5 px-4 rounded transition-all duration-200"
        >
          Login
        </Link>

        <div>
          <div className="rounded-full w-5 h-5 p-2 bg-error border border-white dark:border-black flex justify-center items-center relative top-1 left-4">
            2
          </div>
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </div>

        {/* Toggle Button */}
        <div
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
            theme === "dark" ? "bg-primary" : "bg-neutral"
          }`}
          onClick={() => toggleTheme()}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
              theme === "dark" ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
}
