var calcButton = document.getElementById('mapDraw');
var inner = [];
var mostrar = [];
var fromsubturf;
var ow = [];

var modal = document.getElementById('turfModal');
var span = document.getElementsByClassName("close")[0];

exports.toUInfo = function(objects) {
  var Low = objects.length;
  for (i = 0; i < Low; i++) {
    ow[i] = objects[i].source.data;
  }
  exports.useri = function(add) {
    calcButton.onclick = function() {
      var inmTotal = 0;
      var recTotal = 0;
      var amTotal = 0;


      var data = mapDraw.getAll();
      if (data.features.length > 0) {
        for (i = 0; i < Low; i++) {
          var ptsWithin = turf.within(ow[i], data);

          if (add[i] == true) {
            mostrar.unshift(ptsWithin);

            for (j = 0; j < ptsWithin.features.length; j++) {

              if (mostrar[0].features[j].properties.program == "Inmovilizado") {
                inmTotal = inmTotal + 1;
              }
              if (mostrar[0].features[j].properties.program == "Recordatorio") {
                recTotal = recTotal + 1;
              }
              if (mostrar[0].features[j].properties.program == "Adulto Mayor") {
                amTotal = amTotal + 1;
              }
              modal.style.display = "block";

              // var speakers = mostrar[0].features[j].properties.rut + "" + mostrar[0].features[j].properties.valid + "<hr>";
              var speakers = mostrar[0].features[j].properties.description+ "<hr>";

              inner.unshift(speakers);
              document.getElementById('viewValue').innerHTML = inner.join('')
              document.getElementById("viewQuantities").innerHTML = "Dismovilizado: " + inmTotal + " Recordatorio de Citas: " + recTotal + " Usuarios Adulto Mayor: " + amTotal;
            }
            mostrar = [];
          }
        }
      } else {
        alert("Use la herramienta de dibujo");
      }
    }
  }
  span.onclick = function() {
    modal.style.display = "none";
    inner = [];
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      inner = [];
    }
  }
}
