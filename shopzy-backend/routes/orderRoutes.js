import express from "express";
import Order from "../models/Order.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE ORDER
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { products, totalPrice } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products in order" });
    }

    const order = await Order.create({
      user: req.user,
      products,
      totalPrice
    });

    res.status(201).json(order);

  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET MY ORDERS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user });
    res.json(orders);
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;