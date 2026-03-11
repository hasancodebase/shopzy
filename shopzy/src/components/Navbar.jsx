import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "#2563eb" : "#333",
    fontWeight: isActive(path) ? "700" : "500",
    padding: "6px 10px",
    borderRadius: "6px",
    background: isActive(path) ? "#eff6ff" : "transparent",
    transition: "all 0.2s ease"
  });

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 40px",
      background: "#ffffff",
      borderBottom: "1px solid #e5e5e5",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>

      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={{
          color: "#2563eb",
          fontWeight: "800",
          fontSize: "22px",
          margin: 0,
          letterSpacing: "-0.5px"
        }}>
          Shopzy 🛍
        </h2>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/shop" style={linkStyle("/shop")}>Shop</Link>
        <Link to="/about" style={linkStyle("/about")}>About</Link>
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>

        {/* Cart */}
        <Link to="/cart" style={{
          textDecoration: "none",
          color: "#333",
          fontWeight: "500",
          padding: "6px 12px",
          borderRadius: "6px",
          background: cartItems.length > 0 ? "#eff6ff" : "transparent",
          border: "1px solid #e5e5e5",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}>
          🛒
          {cartItems.length > 0 && (
            <span style={{
              background: "#2563eb",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "700"
            }}>
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Auth */}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{
              color: "#555",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              👋 {user.name}
            </span>
            <button
              onClick={logout}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "7px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/login" style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "500",
              padding: "7px 14px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "14px"
            }}>
              Login
            </Link>
            <Link to="/register" style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              padding: "7px 14px",
              borderRadius: "6px",
              background: "#2563eb",
              fontSize: "14px"
            }}>
              Register
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}