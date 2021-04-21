const URL = require("url").URL;

let domain = "https://ancient-meadow-13045.herokuapp.com"

let urlInputs = require("../db/data_store")

const resolvers = {
	testGraphql: ()=>{
		return "Query was successfull"
	},
	shortenURL: (input)=>{
		let url = input.url
		if(isUrlValid(url)){
			let randomString = Math.random().toString(36).substr(6, 6)
			urlInputs[randomString] = url
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