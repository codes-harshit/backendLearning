import express from "express";

const server = express();

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

server.listen(8000);
