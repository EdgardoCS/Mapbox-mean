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
var Validado;

var inmovilizadoLayer;
var inmovilizadoSource;
var recordatorioLayer;
var recordatorioSource;
var adultoLayer;
var adultoSource;

setFeatures = function(Rut, Nombre, Direccion, Sector, SubSector, Longitud, Latitud, Programa, Jefe_Equipo, Estado, Observaciones, Telefono1, Telefono2, Validado) {
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
      "description": "Programa: " + Programa + " " + "/ Nombre: " + Nombre + " " + "/ Direccion: " + Direccion,
      "address": "Direccion: " + [Direccion],
      "status": Estado,
      "program": Programa,
      "observations": Observaciones,
      "contact": "Telefono1: " + Telefono1 + " Telefono2: " + Telefono2,
      "valid": Validado,
    }
  }
  return pointFeatures;
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
