/*
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/new.db');
var next = require('../js/newFor.js');

var Nombre;
var Rut;
var Direccion;
var Sector;
var SubSector;
var Longitud;
var Latitud;
var Programa;
var Jefe_Equipo;
var Estado;
var Observaciones;
var Telefono1;
var Telefono2;

var inmovilizadoLayer;
var inmovilizadoSource;
var recordatorioLayer;
var recordatorioSource;
var adultoLayer;
var adultoSource;
*/

var katsushika = [];
var len;

exports.toi = function() {
  len = tojson.length;
  for (i = 0; i < len; i++) {
    katsushika[i] = makeLayer(tojson[i].id, tojson[i].properties.color, tojson[i].properties.size, tojson[i].properties.head);
  }
  console.log(katsushika);
}
makeLayer = function(id, color, size, head) {
  var geoLayer = {
    "id": id,
    "type": "circle",
    "source": head,
    "layout": {
      'visibility': 'visible'
    },
    "paint": {
      "circle-radius": size,
      "circle-color": color
    },
  }
  return geoLayer;
};
