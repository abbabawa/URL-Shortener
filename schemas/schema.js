const {buildSchema} = require('graphql')

const schema = buildSchema(`
	type Query{
	  testGraphql: String
	  shortenURL(url: String!): String
	}
`)

module.exports = schema