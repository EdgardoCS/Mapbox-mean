var rut;
var nombres;
var apellidoMaterno;
var apellidoPaterno;
var longitud;
var latitud;
var subsector;
var sexo;
var direccion;
var patologias;

var mena_maestro_am_array = [];
var mena_inm_array = [];
var mena_tar_array = [];

var mena_inm_source;
var mena_inm_layer;

var mena_am_source;
var mena_am_layer;

var mena_tar_source;
var mena_tar_layer;


setFeatures = function(result) {
  var pointFeatures;

  longitud = result.paciente.longitud;
  latitud = result.paciente.latitud;
  rut = result.paciente.rut;
  apellidoPaterno = result.paciente.apellidoPaterno;
  apellidoMaterno = result.paciente.apellidoMaterno;
  nombres = result.paciente.nombres;
  sexo = result.paciente.sexo;
  direccion = result.paciente.direccion;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [longitud, latitud]
    },
    "properties": {
      "datos paciente": {
        "rut": rut,
        "nombres": nombres,
        "apellidos": apellidoPaterno + " " + apellidoMaterno,
        "sexo": sexo
      },
      "geolocalizacion": {
        "direccion": direccion
      },
    },
  }
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
