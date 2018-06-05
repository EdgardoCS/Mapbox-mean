var sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve('src/db', 'ams.db')
var db = new sqlite3.Database(dbPath);


var n;
var nombre;
var direccion;
var longitud;
var latitud;
var telefono1;
var telefono2;
var correo;
var moduloI;
var moduloII;
var moduloIII;
var moduloIV;

var agentesL;
var agentesS;
var agentesA = [];



db.all("SELECT * FROM agentes", function(err, row) {
  celda = row.length;
  if (row != null) {
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        agentesA[i] = setFeatures(row[i].n, row[i].nombre, row[i].direccion, row[i].longitud, row[i].latitud, row[i].telefono1, row[i].telefono2, row[i].correo, row[i].moduloI, row[i].moduloII, row[i].moduloIII, row[i].moduloIV);
      }
    }
  }
  agentesL = makeGeo(agentesA);
  agentesS = makeLayer(agentesL);

  map.on('load', function() {
    map.addLayer(agentesS);
  })

});

setFeatures = function(n, nombre, direccion, longitud, latitud, telefono1, telefono2, correo, moduloI, moduloII, moduloIII, moduloIV) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [longitud, latitud]
    },
    "properties": {
      "title": "Adulto Mayor",
      "id": n,
      "description": "Nombre: " + nombre + " " + " Direccion: " + direccion,
      "address": "Direccion: " + [direccion],
      "contact": "Telefono1: " + telefono1 + " telefono2: " + telefono2 + " correo: " + correo,
      "modulos AMS": "modulo I: " + moduloI + " moduloII: " + moduloII + " moduloIII: " + moduloIII + " moduloIV: " + moduloIV,
    }
  }
  return pointFeatures;
};

makeLayer = function(features) {
  var geoLayer = {
    "id": "agentes_multiplicadores",
    "type": "circle",
    "source": agentesL,
    "layout": {
      'visibility': 'visible'
    },
    "paint": {
      "circle-color": "#114f1b",
      "circle-radius": 5,
      // "circle-opacity":0.7,
    },
  }
  return geoLayer;
};
makeGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return geo;
}
