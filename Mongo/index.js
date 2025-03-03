import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { productRouter } from "./routes/productRoutes.js";
import { Product } from "./models/productSchema.js";

dotenv.config();
const app = express();
app.use(express.json());

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/ecommerece");
//   console.log("Database connected");
// }

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/products", productRouter);

// const port = process.env.PORT || 8080;
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
