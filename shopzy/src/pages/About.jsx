export default function About() {
  return (
    <div>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
        color: "white",
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "40px", fontWeight: "800", marginBottom: "12px" }}>
          About Shopzy
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.85", maxWidth: "500px", margin: "0 auto" }}>
          We are passionate about bringing you the best products at the best prices
        </p>
      </div>

      {/* Mission */}
      <div style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>
          Our Mission
        </h2>
        <p style={{
          color: "#555",
          fontSize: "17px",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          At Shopzy, we believe everyone deserves access to quality products
          without breaking the bank. Founded in 2024, we have been connecting
          customers with the products they love — fast, easy, and secure.
        </p>
      </div>

      {/* Stats */}
      <div style={{
        background: "#f8fafc",
        padding: "50px 40px",
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5"
      }}>
        {[
          { number: "10,000+", label: "Happy Customers" },
          { number: "500+", label: "Products" },
          { number: "50+", label: "Brands" },
          { number: "99%", label: "Satisfaction Rate" }
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#2563eb",
              marginBottom: "6px"
            }}>
              {stat.number}
            </div>
            <div style={{ color: "#888", fontSize: "15px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "40px" }}>
          Our Values
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px"
        }}>
          {[
            { icon: "🎯", title: "Quality First", desc: "Every product is carefully selected and quality checked" },
            { icon: "💰", title: "Best Prices", desc: "We work hard to offer the most competitive prices" },
            { icon: "🚀", title: "Fast Delivery", desc: "Quick and reliable shipping to your doorstep" },
            { icon: "❤️", title: "Customer Love", desc: "Your satisfaction is our number one priority" }
          ].map((value) => (
            <div key={value.title} style={{
              background: "white",
              padding: "30px 20px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)"
            }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{value.icon}</div>
              <h4 style={{ fontWeight: "700", marginBottom: "8px" }}>{value.title}</h4>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.6" }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}