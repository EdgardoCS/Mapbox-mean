exports.man = function(result) {
  sendArray = [];

  var text = result;
  var zmq = require('zmq'),
    sock = zmq.socket('req');

  for (i = 0; i < text.length; i++) {
    setPersonas(text[i].id, text[i].sms);
    sendArray[i] = setPersonas(text[i].id, text[i].sms)
  }

  var jsonArray = setHeader(text, sendArray);

  sock.connect('tcp://10.100.25.37:3000')
  console.log('Enviando a puerto 3000');

  sock.on('message', function(msg) {
    console.log('respuesta recibida: ', msg.toString());

  });

  var stringObject = JSON.stringify(jsonArray);
  sock.send(stringObject);
  console.log(stringObject);
  console.log('mensaje enviado');

  smalltalk.alert('Exito!', 'Su mensaje ha sido enviado correctamente!').then(function() {});
}

setPersonas = function(id, sms) {
  var pointPersonas;
  pointPersonas = {
    "type": "Feature",
    "properties": {
      "usuario": id,
      "mensaje": sms,
    }
  }
  return pointPersonas;
};
setHeader = function(text, pointPersonas) {
  var largo = text.length
  var cabecera = {
    "type": "json",
    "header": {
      "data": largo,
      "programa": "recordatorio de citas"
    },
    "features": sendArray
  }
  return cabecera;
}
