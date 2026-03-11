import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <p>Loading product...</p>
    </div>
  );

  if (error) return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <p>{error}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );

  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      display: "flex",
      gap: "40px",
      flexWrap: "wrap"
    }}>

      {/* Product Image */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}
        />
      </div>

      {/* Product Info */}
      <div style={{ flex: "1", minWidth: "280px" }}>

        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          {product.name}
        </h2>

        <p style={{
          fontSize: "26px",
          fontWeight: "bold",
          color: "#2563eb",
          marginBottom: "20px"
        }}>
          ${product.price}
        </p>

        <p style={{
          color: "#555",
          lineHeight: "1.7",
          marginBottom: "30px"
        }}>
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            padding: "14px",
            background: added ? "#16a34a" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "12px",
            transition: "background 0.3s"
          }}
        >
          {added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            width: "100%",
            padding: "14px",
            background: "white",
            color: "#333",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          ← Back
        </button>

      </div>
    </div>
  );
}