const token = require("./token.js");
const express = require("express");
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql');
const fetch = require('node-fetch');
const cors = require('cors');
const parser = require('body-parser');
const schema = require('./schema.js');



const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))
app.use(parser.json());
app.use(cors());


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
