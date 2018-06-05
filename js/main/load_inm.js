db.all("SELECT * FROM Inmovilizado", function(err, row) {
  celda = row.length;
  if (row != null) {
    var inmovilizadoArray = [];
    var inmovilizadoLive = [];
    
    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        inmovilizadoArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);
        if (inmovilizadoArray[i].properties.status != "Fallecida") {
          inmovilizadoArray.slice(i);
          inmovilizadoLive.push(inmovilizadoArray[i])
        }
      }
    }
  }
  inmovilizadoSource = makeGeo(inmovilizadoLive);
  inmovilizadoLayer = inm_Layer(inmovilizadoSource);
});

document.getElementById('item1').addEventListener('change', function(e) {

  if (e.target.checked == true) {
    map.addLayer(inmovilizadoLayer);
  } else if (e.target.checked == false) {
    if (map.getLayer("Inmovilizado")) {
      map.removeLayer("Inmovilizado");
    }
  }
});


inm_Layer = function(features) {
  var color = "#F4511E";

  var geoLayer = {
    "id": "Inmovilizado",
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
