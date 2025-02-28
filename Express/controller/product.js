import fs from "fs";
const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const createProdcuts = (req, res) => {
  products.push(req.body);
  res.json(req.body);
};

const getProducts = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.findIndex((p) => p.id === id);
  products.splice(product, 1);
  res.status(202).json();
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.findIndex((p) => p.id === id);
  products[product] = { id: id, ...req.body };
  res.status(201).json();
};

export {
  createProdcuts,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
