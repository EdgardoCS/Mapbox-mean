var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  var obj = [{
      name: "BadBadNotGood",
      album: "III"
    },
    {
      name: "Robohands",
      album: "Green"
    },
    {
      name: "Santana",
      album: "Santana"
    }, {
      name: "Psychedelic Porn Crumpets",
      album: "High Visceral"
    },
    {
      name: "Santana",
      album: "Abraxas"
    }
  ];

  /* INSERT */
  // ndb.collection("music").insertMany(obj, function(err, res) {
    // if (err) throw err;
    // console.log(res.insertedCount + " objetos insertados a coleccion music");

    /* FIND */
    // ndb.collection("music").find({}).toArray(function(err, result) {
    //   if (err) throw err;
    //   if (result.length == 0) {
    //     console.log("coleccion no encontrada");
    //   } else {
        // console.log(result);
    //   }

    /* QUERY */
    // var query = {
    //   album: "III"
    // };
    // ndb.collection("music").find(query).toArray(function(err, result) {
    //   if (err) throw err;

    //   var _l = result.length;
    //   for (i = 0; i < _l; i++) {
    //   console.log(result[i]);
    //   }
    // }

    /* SORT */
    // var orden = {
    //   name: -1
    // };
    // ndb.collection("music").find().sort(orden).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //
    //   db.close();
    // });

    /* DELETE */
    // var trash = {
    //   name: 'badbadnotgood'
    // };
    // ndb.collection("music").deleteOne(trash, function(err, obj) {
    //   if (err) throw err;
    //n es la cantidad de objetos eliminados
    //   console.log("objetos borrados: " + obj.result.n);

    /* DELETE COLLECTION */
    ndb.collection("postrado").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) {
        console.log("Coleccion postrado borrada");
      }

    /* UPDATE */
    // var oldDisc = {
    //   album: "High Visceral"
    // };
    // var newDisc = {
    //   $set: {
    //     album: "High Visceral II"
    //   }
    // };
    // ndb.collection("music").updateOne(oldDisc, newDisc, function(err, result) {
    //   if (err) throw err;
    //   console.log("coleccion actualizada");
    // });
    // ndb.collection("music").find({}).toArray(function(err, result) {
    //   if (err) throw err;
    //   if (result.length == 0) {
    //     console.log("coleccion no encontrada");
    //   } else {
    //     console.log(result);
    //   }

    /*############################################*/
    db.close();
  });
});
