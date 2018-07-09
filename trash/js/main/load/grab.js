
setComolehades = function(result) {
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
