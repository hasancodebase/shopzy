// React Router system for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Navbar (top navigation)
import Navbar from "../components/Navbar";

// Import all pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";

// This component handles ALL routing of our app
function AppRoutes() {
  return (
    // BrowserRouter enables navigation without full page reload
    <BrowserRouter>

      {/* 🔝 Navbar will appear on ALL pages */}
      <Navbar />

      {/* Routes define which page shows on which URL */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Shop page */}
        <Route path="/shop" element={<Shop />} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout page */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Authentication pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Info pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product details page (dynamic id) */}
        {/* Example: /product/1 */}
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>

    </BrowserRouter>
  );
}

// Export this component
export default AppRoutes;
