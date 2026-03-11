import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: String,
      quantity: Number
    }
  ],
  totalPrice: Number
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);