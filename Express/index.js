import express from "express";

import {
  createProdcuts,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./controller/product.js";

const server = express();
const productRouter = express.Router();

server.use(express.json());
server.use("/api", productRouter);

const auth = (req, res, next) => {
  if (req.query.password === "1234") {
    next();
  } else {
    res.sendStatus(401);
  }
};

server.get("/", auth, (req, res) => {
  res.send("Hello World");
});

server.post("/", (req, res) => {
  res.send("Hello World from post");
});

// Create POST /products

productRouter.post("/products", createProdcuts);

// Read GET
productRouter.get("/products", getProducts);

productRouter.get("/products/:id", getProduct);

// Update PUT /products/:id

productRouter.put("/products/:id", updateProduct);

// Delete DELETE /products/:id

productRouter.delete("/products/:id", deleteProduct);

server.listen(8000);
