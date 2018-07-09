var nonagon = require("../../js/functions/query/query_join.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var coleccion1 = "maestro_AmMena";
var coleccion2 = "TARJETERO";

var maestro = [];
var tarjetero = [];
var match = [];
var search = [];
var join = [];
// var final = [];

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  first = function() {
    dbo.collection(coleccion1).find({}).toArray(function(err, result) {
      if (err) throw err;

      maestro = result;

      // search[i] = {
      //   'paciente.rut': {
      //     $eq: maestro[i].paciente.rut;
      //   }
      // };

      second(maestro, dbo);
    });
    // db.close();
  };
  first();
});
second = function(maestro, dbo) {

  dbo.collection(coleccion2).find({}).toArray(function(err, result) {
    if (err) throw err;
    tarjetero = result;

    third(maestro, tarjetero);
  });
}

third = function(maestro, tarjetero) {
  var _m = maestro.length;
  var _t = tarjetero.length;
  for (i = 0; i < _m; i++) {
    search = maestro[i].paciente.rut;
    for (j = 0; j < _t; j++) {
      if (search == tarjetero[j].paciente.rut) {
        match.push(tarjetero[j]);
      }
    }
    var _ma = match.length;
    for (k = 0; k < _ma; k++) {
      if (match[k].paciente.rut == maestro[i].paciente.rut) {
        join.push(maestro[i]);
      }
    }
  }
  for (i = 0; i < _ma; i++) {

    mena_pscv_array[i] = set_master_features(match[i], join[i]);
  }

  mena_pscv_source = make_master_source(mena_pscv_array);
  mena_pscv_layer = make_master_layer(mena_pscv_source);

  // console.log(mena_pscv_layer);
  // map.on('load', function() {
  // map.addLayer(mena_pscv_layer);
  // });
}
document.getElementById('cli1').addEventListener('change', function(e) {

  if (e.target.checked == true) {

    map.addLayer(mena_pscv_layer);

  } else if (e.target.checked == false) {

    if (map.getLayer("tarjetero")) {
      map.removeLayer("tarjetero");
    }
  }
});
