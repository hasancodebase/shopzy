import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Success() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "80px auto",
      padding: "40px",
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
      textAlign: "center"
    }}>

      {/* Success Icon */}
      <div style={{
        width: "80px",
        height: "80px",
        background: "#dcfce7",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 24px auto",
        fontSize: "40px"
      }}>
        ✓
      </div>

      {/* Heading */}
      <h2 style={{
        fontSize: "28px",
        color: "#16a34a",
        marginBottom: "12px"
      }}>
        Order Placed Successfully!
      </h2>

      {/* Message */}
      <p style={{
        color: "#555",
        fontSize: "16px",
        lineHeight: "1.7",
        marginBottom: "10px"
      }}>
        Thank you{user ? `, ${user.name}` : ""}! Your order has been
        received and is being processed.
      </p>

      <p style={{
        color: "#888",
        fontSize: "14px",
        marginBottom: "40px"
      }}>
        You will receive a confirmation shortly.
      </p>

      {/* Divider */}
      <div style={{
        borderTop: "1px solid #eee",
        paddingTop: "30px",
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 28px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer"
          }}
        >
          Continue Shopping
        </button>

        <button
          onClick={() => navigate("/shop")}
          style={{
            padding: "12px 28px",
            background: "white",
            color: "#333",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer"
          }}
        >
          Browse Shop
        </button>

      </div>
    </div>
  );
}