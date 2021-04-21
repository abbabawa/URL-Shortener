var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = require('./schemas/schema');

let urlInputs = require("./db/data_store")

var root = require("./resolvers/resolvers")
var app = express();
app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/:code', (req, res)=>{
	if (!urlInputs[req.params.code]) {
      res.end('invalid code');
    }
	res.redirect(urlInputs[req.params.code])
})
module.exports = app;
