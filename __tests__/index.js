const app = require("../server");
const supertest = require("supertest");

const request = supertest(app);

test("Test Query", async (done) => {
 
  request
    .post("/graphiql")
    .send({
      query: `query{
	      	testGraphql
	  	}`,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);console.log(res.body)
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.data.testGraphql).toEqual("Query was successfull");
      done();
    });
});