import express from "express";
import fs from "fs";

const server = express();

const auth = (req, res, next) => {
  if (req.query.password === "1234") {
    next();
  } else {
    res.sendStatus(401);
  }
};

server.use(express.json());

server.get("/", auth, (req, res) => {
  res.send("Hello World");
});

server.post("/", (req, res) => {
  res.send("Hello World from post");
});

const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Create POST /products

server.post("/products", (req, res) => {
  products.push(req.body);
  res.json(req.body);
});

// Read GET
server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});
server.listen(8000);

// Update PUT /products/:id

server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.findIndex((p) => p.id === id);
  products[product] = { id: id, ...req.body };
  res.status(201).json();
});

// Delete DELETE /products/:id

server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.findIndex((p) => p.id === id);
  products.splice(product, 1);
  res.status(202).json();
});
