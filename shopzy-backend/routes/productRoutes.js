import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET ALL PRODUCTS — from MongoDB, fallback to DummyJSON
router.get("/", async (req, res) => {
  try {
    const localProducts = await Product.find();

    if (localProducts.length > 0) {
      return res.json(localProducts);
    }

    // Fallback — fetch from DummyJSON if MongoDB empty
    const response = await fetch("https://dummyjson.com/products?limit=12");
    const data = await response.json();

    const products = data.products.map((p) => ({
      _id: p.id.toString(),
      name: p.title,
      price: p.price,
      image: p.thumbnail,
      description: p.description
    }));

    res.json(products);

  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    // Try MongoDB first
    const localProduct = await Product.findById(req.params.id).catch(() => null);

    if (localProduct) {
      return res.json(localProduct);
    }

    // Fallback — fetch from DummyJSON
    const response = await fetch(`https://dummyjson.com/products/${req.params.id}`);
    const p = await response.json();

    if (p.message) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      _id: p.id.toString(),
      name: p.title,
      price: p.price,
      image: p.thumbnail,
      description: p.description
    });

  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ADD PRODUCT
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

