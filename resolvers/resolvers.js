const URL = require("url").URL;
const os = require("os");
let domain = "http://localhost:4000/"

let urlInputs = {}

const resolvers = {
	testGraphql: ()=>{
		return "Query was successfull"
	},
	shortenURL: (input)=>{
		let url = input.url
		if(isUrlValid(url)){
			let randomString = Math.random().toString(36).substr(6, 6)
			urlInputs.randomString = url
			return domain+""+randomString
		}else{
			return "The string passed is not a valid URL"
		}
	}
}

//Function to check if url is valid
const isUrlValid = (s) => {
    try {
      new URL(s);
      return true;
    } catch (err) {
      return false;
    }
};

module.exports = resolvers