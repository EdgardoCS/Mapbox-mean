var hillbilly = require('./smsSend.js');
var smsButton = document.getElementById('mapSMS');
var smsArray = [];
var text;
var speakersArray;
var innerArray = [];
var fromturf;

exports.byframe = function(AdmMostrar) {
  fromturf = AdmMostrar;
}
exports.build = function(objects) {
    var smsjson = objects.source.data;
    var objectL = objects.length;
    
    exports.alowsms = function(add) {
    smsButton.onclick = function() {
      if (add[0] == false && add[1] == false && add[2] == true) {

        var dataArray = mapDraw.getAll();
        if (dataArray.features.length > 0) {

          innerArray = [];

          var ptsWithin = turf.within(smsjson, dataArray);
          console.log(ptsWithin);

          for (i = 0; i < ptsWithin.features.length; i++) {
            speakersArray = ptsWithin.features[i].properties.rut;
            var key = "id";
            innerArray.push({
              [key]: speakersArray
            });
          }
          console.log("listo");
          promptWindow(speakersArray);

        } else if (fromturf != undefined) {

          var ptsWithin = fromturf[0];
          console.log(ptsWithin);

          for (i = 0; i < ptsWithin.features.length; i++) {
            speakersArray = ptsWithin.features[i].properties.rut;
            var key = "id";
            innerArray.push({
              [key]: speakersArray
            });
          }
          console.log("listo");
          promptWindow(speakersArray);
        } else {
          alert("Use la herramienta de dibujo");
        }
      } else {
        alert("Seleccione solo los usuarios actualizados");
      }
    }
  }
}

function promptWindow() {
  smalltalk.prompt('Escriba su mensaje a continuación', 'Recuerde no utilizar más de 160 caracteres', '').then(function(value) {
    text = value;
    textLargo = text.length;
    if (textLargo <= 160) {
      var result = innerArray.map(function(el) {
        var o = Object.assign({}, el);
        o.sms = text;
        return o;
      });
      hillbilly.man(result);
    } else {
      smalltalk.alert('Error: Mensaje no enviado', 'Mensaje excede cantidad de caracteres permitido!').then(function() {});
    }
  }, function() {
    console.log('close');
  });
};
