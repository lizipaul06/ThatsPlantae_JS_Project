const express = require("express");
const token = require("./token.js");
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const parser = require('body-parser');

app.use(parser.json());
app.use(cors());

app.get("/hello", (req, res) => {
  fetch("https://trefle.io/api/plants/".concat(token).concat("&complete_data=true") )
  .then(res => res.json())
  .then(data => res.send(data))
});

app.get("/plant/:id", (req, res) => {
  fetch("http://trefle.io/api/plants/" + req.params.id + token)
  .then(res => res.json())
  .then(data => res.send(data))
});

app.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
