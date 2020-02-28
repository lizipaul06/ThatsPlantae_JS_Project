const express = require("express");
const token = require("./token.js");
const app = express();
const fetch = require('node-fetch');

app.get("/hello", (req, res) => {
  fetch("https://trefle.io/api/plants/".concat(token).concat("&complete_data=true") )
  .then(res => res.json())
  .then(data => res.send(data))
});

// app.fetch("/plant")

// app.post("/hello", (req, res) => {
//   fetch("https://trefle.io/api/plants/".concat(token) )
//   .then(res => res.json())
//   .then(data => res.send(data))
// });

app.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
