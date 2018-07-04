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

  // console.log(Object.getOwnPropertyNames(result[j].paciente));
  // ndb.collection("postrado").find({
  // "paciente.apellidoMaterno": "Escobar"
  // }).toArray(function(err, result) {
  // console.log(result);
  // });
});

document.getElementById('cli0').addEventListener('change', function(e) {

  if (e.target.checked == true) {
    map.addLayer(mena_inm_layer);
  } else if (e.target.checked == false) {
    if (map.getLayer("AdultoMayor")) {
      map.removeLayer("AdultoMayor");
    }
  }
});

inm_layer = function(features) {
  var color = "#007a68";

  var geoLayer = {
    "id": "AdultoMayor",
    "type": "circle",
    "source": features,
    "layout": {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": 5,
      "circle-color": color
    },
  }
  return geoLayer;
};
