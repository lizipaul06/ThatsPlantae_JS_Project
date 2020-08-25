const token = require("./token.js");
const apolloServerExpress = require("apollo-server");
const {ApolloServer} = apolloServerExpress;
const schema = require('./schema.js');


const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 4000;

const server = new ApolloServer({
  schema
});



async function run(){
  const {url} = await server.listen(GRAPHQL_PORT);
  console.log(`***** SERVER READY AT ${url} ********`)
}



run();
