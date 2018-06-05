db.all("SELECT * FROM Recordatorio", function(err, row) {
  celda = row.length;
  if (row != null) {
    var recordatorioArray = [];
    var recordatorioLive = [];

    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        recordatorioArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);
        if (recordatorioArray[i].properties.status != "Fallecida") {
          recordatorioArray.slice(i);
          recordatorioLive.push(recordatorioArray[i])
        }
      }
    }
  }
  recordatorioSource = makeGeo(recordatorioLive);
  recordatorioLayer = rec_Layer(recordatorioSource);
});

document.getElementById('item2').addEventListener('change', function(e) {

  if (e.target.checked == true) {
    map.addLayer(recordatorioLayer);
  } else if (e.target.checked == false) {
    if (map.getLayer("Recordatorio")) {
      map.removeLayer("Recordatorio");
    }
  }
});


rec_Layer = function(features) {
  var color = "#A0149D";

  var geoLayer = {
    "id": "Recordatorio",
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
