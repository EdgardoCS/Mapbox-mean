var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var _n;
var coleccion = "maestro_AmMena";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;

  var ndb = db.db("mydb");

  ndb.collection(coleccion).find({}).toArray(function(err, result) {
    if (err) throw err;

    _n = result.length;

    for (i = 0; i < _n; i++) {
      mena_maestro_am_array[i] = setFeatures(result[i]);
    }

    mena_inm_source = makeGeo(mena_maestro_am_array);
    mena_inm_layer = inm_layer(mena_inm_source);

    db.close();
  });
