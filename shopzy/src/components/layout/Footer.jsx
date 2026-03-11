import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "#1e293b",
      color: "#94a3b8",
      padding: "50px 40px 24px 40px",
      marginTop: "60px"
    }}>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        marginBottom: "40px"
      }}>

        {/* Brand */}
        <div>
          <h3 style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "12px"
          }}>
            Shopzy 🛍
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
            Your trusted online store for quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            color: "white",
            fontWeight: "700",
            marginBottom: "16px",
            fontSize: "15px"
          }}>
            Quick Links
          </h4>
          {[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" }
          ].map((link) => (
            <div key={link.label} style={{ marginBottom: "8px" }}>
              <Link to={link.path} style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s"
              }}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Customer Service */}
        <div>
          <h4 style={{
            color: "white",
            fontWeight: "700",
            marginBottom: "16px",
            fontSize: "15px"
          }}>
            Customer Service
          </h4>
          {[
            "FAQ",
            "Shipping Policy",
            "Return Policy",
            "Track Order"
          ].map((item) => (
            <div key={item} style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "14px", cursor: "pointer" }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{
            color: "white",
            fontWeight: "700",
            marginBottom: "16px",
            fontSize: "15px"
          }}>
            Contact Us
          </h4>
          {[
            { icon: "📧", text: "support@shopzy.com" },
            { icon: "📞", text: "+1 (555) 123-4567" },
            { icon: "📍", text: "123 Shop Street, Commerce City" }
          ].map((item) => (
            <div key={item.text} style={{
              display: "flex",
              gap: "8px",
              marginBottom: "10px",
              fontSize: "14px"
            }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid #334155",
        paddingTop: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px"
      }}>
        <p style={{ fontSize: "13px" }}>
          © 2026 Shopzy. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "16px", fontSize: "13px" }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}
