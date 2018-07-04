var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var coleccion2 = "TARJETERO";

var tarjetero = [];
var mrbeat = [];
var evildeathroll = [];
var invisibleface = [];
var wahwah = [];

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  dbo.collection(coleccion2).find({}).toArray(function(err, result) {
    if (err) throw err;

    tarjetero = result;

    db.close();
  });
});
exports.infinity = function() {

  _m = maestro.length;
  _t = tarjetero.length;

  for (i = 0; i < _t; i++) {
    mrbeat[i] = tarjetero[i].paciente.rut;
    invisibleface[i] = tarjetero[i].paciente

    for (j = 0; j < _m; j++) {
      evildeathroll[j] = maestro[j].paciente.rut;
      wahwah[j] = maestro[j].paciente;

      if (evildeathroll[j] == mrbeat[i]) {
        mena_tar_array[j] = set_slave_features(wahwah[j], invisibleface[i])
      }
    }
  }
  mena_tar_source = makeGeo(mena_tar_array);
  mena_tar_layer = glue_trip(mena_tar_source);
}


glue_trip = function(features) {
  var color = "#bfbb00";

  var geoLayer = {
    "id": "tarjetero",
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

// document.getElementById('cli1').addEventListener('change', function(e) {
//
//   if (e.target.checked == true) {
//
//     console.log("hi");
//     console.log(mena_tar_layer);
//     map.addLayer(mena_tar_layer);
//
//
//   } else if (e.target.checked == false) {
//
//     if (map.getLayer("tarjetero")) {
//       map.removeLayer("tarjetero");
//     }
//   }
// });
