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

// app.get("/plant", (req, res) => {
//   const url = req.body.json()
//   fetch(url)
//   .then(res => res.json())
//   .then(data => res.send(data))
//
// });

// app.get("/plant/:id", (req,res) =>{
//   fetch(payload =("https://trefle.io/api/plants/".concat(token)),{
//   method: 'POST',
//   body: JSON.stringify(payload),
//   headers: {'Content-Type': 'application/json'}
// })
//   .then(res => res.json())
// });


// app.get("/hello", (req, res) => {
//   fetch("https://trefle.io/api/plants/:id").concat(token) )
// //   .then(res => res.json())
// //   .then(data => res.send(data))
// // });
//
// getInfo(link){
//   fetch(`${link}`.concat(token))
//   .then(res => res.json())
// };

app.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
