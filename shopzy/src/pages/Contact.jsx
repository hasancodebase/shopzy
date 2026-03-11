import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields");
      return;
    }
    setSubmitted(true);
  };

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
          Contact Us
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.85", maxWidth: "500px", margin: "0 auto" }}>
          We would love to hear from you. Send us a message and we will respond within 24 hours
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 40px",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap"
      }}>

        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "240px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>
            Get In Touch
          </h3>

          {[
            { icon: "📧", title: "Email", info: "support@shopzy.com" },
            { icon: "📞", title: "Phone", info: "+1 (555) 123-4567" },
            { icon: "📍", title: "Address", info: "123 Shop Street, Commerce City" },
            { icon: "🕐", title: "Hours", info: "Mon-Fri, 9am - 6pm" }
          ].map((item) => (
            <div key={item.title} style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              marginBottom: "24px"
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                background: "#eff6ff",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: "700", marginBottom: "2px" }}>{item.title}</div>
                <div style={{ color: "#888", fontSize: "14px" }}>{item.info}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div style={{ flex: "2", minWidth: "280px" }}>

          {submitted ? (
            <div style={{
              background: "#dcfce7",
              border: "1px solid #86efac",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ color: "#16a34a", fontWeight: "700", marginBottom: "8px" }}>
                Message Sent!
              </h3>
              <p style={{ color: "#555" }}>
                Thank you {form.name}! We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                style={{
                  marginTop: "20px",
                  padding: "10px 24px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px"
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div style={{
              background: "white",
              padding: "36px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)"
            }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
                Send a Message
              </h3>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "6px", fontSize: "14px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "6px", fontSize: "14px" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "6px", fontSize: "14px" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Send Message →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}