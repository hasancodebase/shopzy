import Order from "../models/orderModel.js";

// CREATE ORDER
export const addOrderItems = async (req, res) => {
  try {
    const { name, address, items, totalAmount } = req.body;

    const order = new Order({
      name,
      address,
      items,
      totalAmount,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    console.log("Order create error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET SINGLE ORDER
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// OPTIONAL (safe dummy functions)
export const getMyOrders = async (req, res) => res.json([]);
export const updateOrderToPaid = async (req, res) => res.json({});
export const updateOrderToDelivered = async (req, res) => res.json({});