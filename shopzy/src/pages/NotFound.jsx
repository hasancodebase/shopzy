import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px"
    }}>

      <div style={{
        fontSize: "100px",
        marginBottom: "16px"
      }}>
        🛍️
      </div>

      <h1 style={{
        fontSize: "80px",
        fontWeight: "900",
        color: "#2563eb",
        marginBottom: "0px",
        lineHeight: 1
      }}>
        404
      </h1>

      <h2 style={{
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "12px",
        color: "#1e293b"
      }}>
        Page Not Found
      </h2>

      <p style={{
        color: "#888",
        fontSize: "16px",
        maxWidth: "400px",
        lineHeight: "1.7",
        marginBottom: "36px"
      }}>
        Oops! The page you are looking for does not exist.
        It may have been moved or deleted.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "13px 28px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Go Home
        </button>

        <button
          onClick={() => navigate("/shop")}
          style={{
            padding: "13px 28px",
            background: "white",
            color: "#333",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Browse Shop
        </button>
      </div>

    </div>
  );
}