const app = require("../server");
const supertest = require("supertest");

const resolver = require("../resolvers/resolvers")

const request = supertest(app);

test("Test Query", async (done) => {
 
  request
    .post("/graphiql")
    .send({
      query: `query{
	      	shortenURL(url: "http://www.domain.com/")
	  	}`,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.data.shortenURL).not.toEqual("The string passed is not a valid URL");
      done();
    });
});

