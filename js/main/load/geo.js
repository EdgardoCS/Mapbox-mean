var rut;
var nombres;
var apellidoMaterno;
var apellidoPaterno;
var longitud;
var latitud;
var subsector;
var sexo;
var direccion;

var mena_inm_array = [];
var mena_am_array = [];

var mena_inm_source;
var mena_inm_layer;

var mena_am_source;
var mena_am_layer;

setFeatures = function(rut, nombres, apellidoMaterno, apellidoPaterno, sexo, direccion, subsector, latitud, longitud) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [longitud, latitud]
    },
    "properties": {
      "Descripcion": {
        "Rut": rut,
        "Nombres": nombres,
        "Apellido Paterno": apellidoPaterno,
        "Apellido Materno": apellidoMaterno,
      },
      "Geolocalizacion": {
        "Direccion": direccion,
        "Sub sector": subsector,
      }
    }
  };
  return pointFeatures;
}

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
