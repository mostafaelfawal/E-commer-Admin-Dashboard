import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import OrdersTable from "./pages/dashboard/OrdersTable";
import UsersTable from "./pages/dashboard/UsersTable";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="orders" element={<OrdersTable />} />
            <Route path="users" element={<UsersTable />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
