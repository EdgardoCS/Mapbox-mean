var mena_pscv_array = [];
var mena_pscv_source;
var mena_pscv_layer;


set_master_features = function(match, join) {

  var master_features;

  longitud = join.paciente.longitud;
  latitud = join.paciente.latitud;
  rut = join.paciente.rut;
  apellidoPaterno = join.paciente.apellidoPaterno;
  apellidoMaterno = join.paciente.apellidoMaterno;
  nombres = join.paciente.nombres;
  sexo = join.paciente.sexo;
  direccion = join.paciente.direccion;
  patologia = match.paciente.patologias;
  ficha = match.paciente.ficha;
  ultimocontrol = match.paciente.ultimocontrol;


  master_features = {
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
      "ficha clinica": {
        "ficha": ficha,
        "patologias": patologia,
      }
    },
  }
  return master_features;
}

make_master_source = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return geo;
}

make_master_layer = function(features) {
  var color = "#513250";

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
