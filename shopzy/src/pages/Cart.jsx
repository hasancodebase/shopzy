import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>

      <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px" }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Your cart is empty
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 24px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              {/* Product Info */}
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: "5px" }}>{item.name}</h4>
                <p style={{ color: "#2563eb", fontWeight: "bold" }}>
                  ${item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid #ddd",
                    background: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "18px"
                  }}
                >
                  −
                </button>

                <span style={{
                  fontWeight: "bold",
                  minWidth: "20px",
                  textAlign: "center"
                }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid #ddd",
                    background: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "18px"
                  }}
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div style={{ minWidth: "80px", textAlign: "right" }}>
                <p style={{ fontWeight: "bold" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                ✕
              </button>

            </div>
          ))}

          {/* Cart Total */}
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            marginTop: "20px"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px"
            }}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                width: "100%",
                padding: "14px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}