const express = require("express");

const app = express();
const fetch = require('node-fetch');

app.get("/hello", (req, res) => {
  fetch("https://trefle.io/api/plants?token=VDcyS2tlMmp3ejA1UlV3dktyenRKZz09")
  .then(res => res.json())
  .then(data => res.send(data))
});

app.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
