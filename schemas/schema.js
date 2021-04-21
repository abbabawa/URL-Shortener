const {buildSchema} = require('graphql')

const schema = buildSchema(`
	type Query{
	  testGraphql: String
	}
`)

module.exports = schema