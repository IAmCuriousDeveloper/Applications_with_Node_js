const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hey this is home page");
});

app.get("/about", (req, res) => {
  res.send("hey this is about page");
});

app.get("/title", (req, res) => {
  res.send("hey this is title page");
});

app.get("/weather", (req, res) => {
  res.send("hey this is weather page");
});

app.listen(3000, () => {
  console.log("we are listening on port 3000");
});
