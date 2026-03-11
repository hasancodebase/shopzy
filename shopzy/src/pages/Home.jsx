import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
        color: "white",
        padding: "80px 40px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "16px",
          letterSpacing: "-1px"
        }}>
          Welcome to Shopzy 🛍
        </h1>

        <p style={{
          fontSize: "20px",
          opacity: "0.85",
          marginBottom: "36px",
          maxWidth: "500px",
          margin: "0 auto 36px auto",
          lineHeight: "1.6"
        }}>
          Discover amazing products at unbeatable prices
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/shop")}
            style={{
              padding: "14px 32px",
              background: "white",
              color: "#2563eb",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Shop Now
          </button>

          <button
            onClick={() => navigate("/about")}
            style={{
              padding: "14px 32px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ===== FEATURES STRIP ===== */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0px",
        background: "#f8fafc",
        borderBottom: "1px solid #e5e5e5",
        flexWrap: "wrap"
      }}>
        {[
          { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
          { icon: "🔄", title: "Easy Returns", desc: "30 day return policy" },
          { icon: "🔒", title: "Secure Payment", desc: "100% protected" },
          { icon: "💬", title: "24/7 Support", desc: "Always here to help" }
        ].map((feature) => (
          <div key={feature.title} style={{
            padding: "24px 40px",
            textAlign: "center",
            borderRight: "1px solid #e5e5e5"
          }}>
            <div style={{ fontSize: "28px", marginBottom: "6px" }}>{feature.icon}</div>
            <div style={{ fontWeight: "700", fontSize: "14px", marginBottom: "2px" }}>{feature.title}</div>
            <div style={{ color: "#888", fontSize: "13px" }}>{feature.desc}</div>
          </div>
        ))}
      </div>

      {/* ===== FEATURED PRODUCTS ===== */}
      <div style={{ padding: "60px 40px" }}>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "8px" }}>
            Featured Products
          </h2>
          <p style={{ color: "#888", fontSize: "16px" }}>
            Handpicked just for you
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p style={{ color: "#888" }}>Loading products...</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => navigate("/shop")}
            style={{
              padding: "14px 40px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            View All Products →
          </button>
        </div>

      </div>

    </div>
  );
}