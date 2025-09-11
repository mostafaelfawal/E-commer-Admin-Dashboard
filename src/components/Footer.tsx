import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-1 dark:border-t-0 border-neutral bg-neutral-dark dark:bg-neutral-light text-white dark:text-neutral-dark p-6 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 ">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-col">
          <img src={Logo} alt="logo" className="w-32" />
          <div className="w-full justify-around flex">
            <button>
              <FaFacebook className="hover:text-primary size-7 duration-300" />
            </button>
            <button>
              <FaTwitter className="hover:text-primary size-7 duration-300" />
            </button>
            <button>
              <FaInstagram className="hover:text-primary size-7 duration-300" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
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
          <li>
            <Link
              to="/login"
              className="hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* CopyRight */}
        <p className="text-sm text-white dark:text-neutral-dark">
          &copy; {new Date().getFullYear()} StoreHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
