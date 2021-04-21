var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
  	testGraphql: String
  }
`)

var root = {
	testGraphql: ()=>{
		return "Query was successfull"
	}
}
var app = express();
app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
module.exports = app;
//git commit -m "Testing environment setup with jest and supertest"