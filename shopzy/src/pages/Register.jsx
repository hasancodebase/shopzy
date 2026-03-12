import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://shopzy-production.up.railway.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      background: "#f8fafc"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        padding: "40px"
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "8px" }}>
            Create Account 🎉
          </h2>
          <p style={{ color: "#888", fontSize: "15px" }}>
            Join Shopzy and start shopping today
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: "#fee2e2",
            border: "1px solid #fca5a5",
            color: "#dc2626",
            padding: "12px 16px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "14px"
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "6px",
            fontSize: "14px"
          }}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "6px",
            fontSize: "14px"
          }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "6px",
            fontSize: "14px"
          }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            background: loading ? "#93c5fd" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "20px"
          }}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {/* Login Link */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#888" }}>
          Already have an account?{" "}
          <Link to="/login" style={{
            color: "#2563eb",
            fontWeight: "600",
            textDecoration: "none"
          }}>
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}