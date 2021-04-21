var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/url_shortener";
let connection
let conn = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //db.close();
  connection = db
});

module.exports = connection