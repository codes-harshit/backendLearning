import http from "http";
import fs from "fs";

const index = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(index);
});

server.listen(3000);
