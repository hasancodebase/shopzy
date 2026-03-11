import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "Wireless Headphones",
    price: 99,
    image: "https://picsum.photos/seed/headphones/400/300",
    description: "Premium wireless headphones with noise cancellation"
  },
  {
    name: "Smart Watch",
    price: 199,
    image: "https://picsum.photos/seed/watch/400/300",
    description: "Feature packed smart watch with health tracking"
  },
  {
    name: "Running Shoes",
    price: 79,
    image: "https://picsum.photos/seed/shoes/400/300",
    description: "Comfortable and durable running shoes"
  },
  {
    name: "Backpack",
    price: 49,
    image: "https://picsum.photos/seed/backpack/400/300",
    description: "Durable everyday backpack with laptop compartment"
  },
  {
    name: "Sunglasses",
    price: 29,
    image: "https://picsum.photos/seed/sunglasses/400/300",
    description: "Stylish UV protection sunglasses"
  },
  {
    name: "Leather Wallet",
    price: 35,
    image: "https://picsum.photos/seed/wallet/400/300",
    description: "Slim genuine leather wallet"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");
    await Product.deleteMany();
    console.log("Old products cleared");
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
