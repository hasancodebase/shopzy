import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const id = product._id || product.id;
  const name = product.name || product.title;
  const image = product.image;
  const price = product.price;

  const handleAddToCart = () => {
    addToCart({ ...product, _id: id, name });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      <img
        src={image}
        alt={name}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          marginBottom: "15px"
        }}
      />

      <h4 style={{
        fontSize: "15px",
        marginBottom: "10px",
        textAlign: "center",
        flexGrow: 1
      }}>
        {name}
      </h4>

      <p style={{
        fontWeight: "bold",
        marginBottom: "15px",
        fontSize: "16px",
        color: "#2563eb"
      }}>
        ${price}
      </p>

      <Link
        to={`/product/${id}`}
        style={{
          textDecoration: "none",
          width: "100%",
          marginBottom: "8px"
        }}
      >
        <button style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          background: "#f1f5f9",
          color: "#333",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px"
        }}>
          View Details
        </button>
      </Link>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: added ? "#16a34a" : "#111",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "background 0.3s"
        }}
      >
        {added ? "✓ Added!" : "Add to Cart"}
      </button>

    </div>
  );
}