import mongoose from "mongoose";
import express from "express";

const app = express();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerece");
  console.log("Database connected");
}

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
