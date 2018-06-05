var sqlite3 = require('sqlite3').verbose();

const path = require('path');
const dbPath = path.resolve('src/db','new.db')
var db = new sqlite3.Database(dbPath);

function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);

  db.all("SELECT * FROM Test WHERE Rut=?", [RUT], function(err, row) {
    celda = row.length;
    if (row != null) {

      var searchArray = [];
      if (celda == 1) {
        for (i = 0; i < celda; i++) {
          searchArray[i] = setSearchFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones);
        }
        searchLayer = makeSearchLayer(searchArray);
        searchSource = makeSearchGeo(searchArray);

        var busqueda = [searchSource, searchLayer];

        map.addSource(busqueda[1].source, busqueda[0]);
        map.addLayer(busqueda[1]);

      } else if (celda < 1) {
        smalltalk.alert('Error: Rut No Encontrado', 'Ingrese Rut válido!').then(function() {});
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });
}
setSearchFeatures = function(Rut, Nombre, Direccion, Sector, SubSector, Longitud, Latitud, Programa, Jefe_Equipo, Estado, Observaciones) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitud, Longitud]
    },
    "properties": {
      "title": "Adulto Mayor",
      "rut": Rut,
      "description": "RUT: " + Rut + ", " + "Nombre: " + Nombre,
      "address": "Direccion: " + [Direccion],
      "status": Estado,
      "program": Programa,
      "observations": Observaciones,
    }
  }
  return pointFeatures;
};

makeSearchLayer = function(features) {
  var id = "Busqueda";
  var color = "#6d6760";
  var fuente = "busquedaMarkers";

  var geoLayer = {
    "id": id,
    "type": "circle",
    "source": fuente,
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
makeSearchGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
}
