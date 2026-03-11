import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    items: Array,
    totalAmount: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;