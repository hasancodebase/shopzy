// Link is used instead of <a> in React Router
// It allows navigation WITHOUT page reload
import { Link } from "react-router-dom";

// Header component (Navbar)
function Header() {
  return (
    <header style={styles.header}>
      {/* Logo / Brand Name */}
      <h2 style={styles.logo}>Shopzy 🛍</h2>

      {/* Navigation Links */}
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Simple inline styling (we will improve later with CSS)
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
};

export default Header;
