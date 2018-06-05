var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");
  var obj = [{
      name: "badbadnotgood",
      album: "III"
    },
    {
      name: "Robohands",
      album: "Green"
    }
  ];
  ndb.collection("music").insertMany(obj, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount + " inserted to music");
    console.log(res); 
    db.close();
  });
});
