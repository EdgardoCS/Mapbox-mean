var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var coleccion = "AmMena"
MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  ndb.collection(coleccion).drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) {
      console.log("Coleccion " + coleccion + " borrada");
    }
    db.close();
  });
});
