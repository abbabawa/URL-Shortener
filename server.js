var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const path = require("path");

var schema = require('./schemas/schema');

let urlInputs = require("./db/data_store")

var root = require("./resolvers/resolvers")
var app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res)=>{
	res.render("index", {data: urlInputs})
})

app.get('/:code', (req, res)=>{
	if (!urlInputs[req.params.code]) {
      res.end('invalid code');
    }
	res.redirect(urlInputs[req.params.code])
})
module.exports = app;
