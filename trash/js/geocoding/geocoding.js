var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCoh4P70mtvYiX3S_A4hgqmIXtRIbpghNk'
});
var LatLang = require(path.resolve('js/geocoding', './database2.js'));
// exports.togeocoding = function(Rut, Nombre, Direccion, db) {
exports.togeocoding = function(n, nombre, direccion, db) {

  /*
    var Rut;
    var Nombre;
    var Direccion;
    var Latitud;
    var Longitud;
    */
  var n;
  var nombre;
  var direccion;
  var latitud;
  var longitud;

  var geocoder = new google.maps.Geocoder();

  googleMapsClient.geocode({
      address: direccion
    },
    function(err, response) {
      if (!err) {
        latitud = response.json.results[0].geometry.location.lat;
        longitud = response.json.results[0].geometry.location.lng;
        // LatLang.todatabase2(Rut, Latitud, Longitud, db);
        LatLang.todatabase2(n, nombre, latitud, longitud, db);
      } else {
        console.log(err);
      }
    }
  );
};
