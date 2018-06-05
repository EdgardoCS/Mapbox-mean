var power = require('../../js/edit/dead.js');

map.getCanvas().style.cursor = 'pointer';
map.on('click', 'Busqueda', function(e) {
  var location;
  var rut;
  var tapeworm;
  var silkworm;

  location = e.features[0].geometry.coordinates;
  rut = e.features[0].properties.rut;
  silkworm = e.features[0].properties.description;
  tapeworm = e.features[0].properties.status;

  promptEdit(rut, tapeworm, silkworm);

});

function promptEdit(rut, tapeworm, silkworm) {
  smalltalk.prompt('Herramienta de Edicion',  silkworm + '<br>' + 'Estado de usuario: ' + tapeworm + '<br>' + 'Opciones de edición: Activa, Inactiva, Fallecida', '').then(function(value) {
      var estado = value;
      var opciones = ["Activa", "Inactiva", "Fallecida"];
      var textLargo = estado.length;

      if (textLargo < 10) {
        if (estado == "Activa" || estado == "Inactiva" || estado == "Fallecida") {
          power.slave(rut, estado);
        } else {
          smalltalk.alert('Opcion Inválida!', 'Introduzca una de las opciones: Activa, Inactiva, Fallecida')
        }
      } else {
        smalltalk.alert('Exceso en cantidad de caracteres permitido!', 'Introduzca una de las opciones: Activa, Inactiva, Fallecida').then(function() {});
      }
    },
    function() {
      console.log('close');
    });
};
