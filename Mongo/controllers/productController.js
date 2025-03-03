import { Product } from "../models/productSchema.js";

export const createProduct = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log incoming data

    const product = new Product(req.body);
    const savedProduct = await product.save();

    console.log("Product Saved:", savedProduct); // Log saved product
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Failed to save product" });
  }
};
