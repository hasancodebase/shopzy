import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const placeOrder = async () => {
    if (!address) {
      setError("Please enter a shipping address");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const orderData = {
        products: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        shippingAddress: address,
        totalPrice: cartTotal,
      };

      await axios.post(
        "https://shopzy-production.up.railway.app/api/orders",
        
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      clearCart();
      navigate("/success");

    } catch (error) {
      setError("Order failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap"
    }}>

      {/* Order Summary */}
      <div style={{ flex: "2", minWidth: "280px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "24px" }}>
          Order Summary
        </h2>

        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          overflow: "hidden"
        }}>
          {cartItems.map((item, index) => (
            <div key={item._id} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 20px",
              borderBottom: index < cartItems.length - 1 ? "1px solid #f1f5f9" : "none"
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: "600", marginBottom: "4px", fontSize: "15px" }}>
                  {item.name}
                </p>
                <p style={{ color: "#888", fontSize: "13px" }}>
                  Qty: {item.quantity}
                </p>
              </div>
              <p style={{ fontWeight: "700", color: "#2563eb" }}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Total */}
          <div style={{
            padding: "16px 20px",
            background: "#f8fafc",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "800",
            fontSize: "18px"
          }}>
            <span>Total</span>
            <span style={{ color: "#2563eb" }}>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "24px" }}>
          Delivery Details
        </h2>

        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          padding: "24px"
        }}>

          {/* Error */}
          {error && (
            <div style={{
              background: "#fee2e2",
              border: "1px solid #fca5a5",
              color: "#dc2626",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "16px",
              fontSize: "14px"
            }}>
              ⚠️ {error}
            </div>
          )}

          <label style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "8px",
            fontSize: "14px"
          }}>
            Shipping Address
          </label>

          <textarea
            placeholder="Enter your full shipping address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              padding: "12px 14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              resize: "vertical",
              boxSizing: "border-box",
              marginBottom: "20px"
            }}
          />

          {/* Order Button */}
          <button
            onClick={placeOrder}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#93c5fd" : "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "12px"
            }}
          >
            {loading ? "Placing Order..." : `Place Order — $${cartTotal.toFixed(2)}`}
          </button>

          <button
            onClick={() => navigate("/cart")}
            style={{
              width: "100%",
              padding: "12px",
              background: "white",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              cursor: "pointer"
            }}
          >
            ← Back to Cart
          </button>

          {/* Security Note */}
          <p style={{
            textAlign: "center",
            color: "#888",
            fontSize: "13px",
            marginTop: "16px"
          }}>
            🔒 Your order is safe and secure
          </p>

        </div>
      </div>
    </div>
  );
}