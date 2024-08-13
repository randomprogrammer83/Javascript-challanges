const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/Public")));

server.listen(5000, () => {
  console.log("Server started on port 5000");
});