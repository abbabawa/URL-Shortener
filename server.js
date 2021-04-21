var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = require('./schemas/schema');

var root = require("./resolvers/resolvers")
var app = express();
app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
module.exports = app;
