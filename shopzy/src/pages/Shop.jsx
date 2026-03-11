import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/common/ProductCard.jsx";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Search + Sort
  useEffect(() => {
    let result = [...products];

    // Filter by search
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFiltered(result);
  }, [search, sortBy, products]);

  return (
    <div>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
        color: "white",
        padding: "50px 40px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px" }}>
          Our Shop
        </h1>
        <p style={{ fontSize: "16px", opacity: "0.85" }}>
          Browse all our products
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div style={{
        background: "white",
        padding: "20px 40px",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "10px 16px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "15px",
            outline: "none"
          }}
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "10px 16px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "15px",
            outline: "none",
            background: "white",
            cursor: "pointer"
          }}
        >
          <option value="default">Sort By: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>

        {/* Results Count */}
        <span style={{ color: "#888", fontSize: "14px", whiteSpace: "nowrap" }}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </span>

      </div>

      {/* Products Grid */}
      <div style={{ padding: "40px" }}>

        {loading ? (
          <div style={{ textAlign: "center", padding: "60px" }}>
            <p style={{ color: "#888" }}>Loading products...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px" }}>
            <p style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</p>
            <h3 style={{ marginBottom: "8px" }}>No products found</h3>
            <p style={{ color: "#888" }}>Try a different search term</p>
            <button
              onClick={() => setSearch("")}
              style={{
                marginTop: "16px",
                padding: "10px 24px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {filtered.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}