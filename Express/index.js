import express from "express";
import { productRouter } from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use("/products", productRouter);

const auth = (req, res, next) => {
  if (req.query.password === "1234") {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.get("/", auth, (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Hello World from post");
});

app.listen(8000);
