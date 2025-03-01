import express from "express";

import {
  createProdcuts,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controller/product.js";

export const productRouter = express.Router();

// Create POST /products

productRouter.post("/", createProdcuts);

// Read GET
productRouter.get("/", getProducts);

productRouter.get("/:id", getProduct);

// Update PUT /products/:id

productRouter.put("/:id", updateProduct);

// Delete DELETE /products/:id

productRouter.delete("/:id", deleteProduct);
