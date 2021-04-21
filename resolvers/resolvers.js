const URL = require("url").URL;

let domain = "https://ancient-meadow-13045.herokuapp.com/"

let urlInputs = require("../db/data_store")

const resolvers = {
	testGraphql: ()=>{
		return "Query was successfull"
	},
	shortenURL: (input)=>{
		let url = input.url
		if(isUrlValid(url)){
			//check if the url is a duplicate. If its a duplicate, return previously generated url
			for(const temp in urlInputs){console.log(urlInputs)
				if(urlInputs[temp] == url)
					return domain+""+temp
			}
			let randomString = Math.random().toString(36).substr(6, 6) //Generate random string
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