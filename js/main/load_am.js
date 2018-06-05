db.all("SELECT * FROM Users", function(err, row) {
  celda = row.length;
  if (row != null) {
    var amArray = [];
    var amLive = [];

    if (celda > 1) {
      for (i = 0; i < celda; i++) {
        amArray[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones, row[i].Telefono1, row[i].Telefono2, row[i].Validado);
        if (amArray[i].properties.status != "Fallecida") {
          amArray.slice(i);
          amLive.push(amArray[i])
        }
      }
    }
  }
  adultoSource = makeGeo(amLive);
  adultoLayer = am_Layer(adultoSource);
});

document.getElementById('item0').addEventListener('change', function(e) {

  if (e.target.checked == true) {
    map.addLayer(adultoLayer);
  } else if (e.target.checked == false) {
    if (map.getLayer("AdultoMayor")) {
      map.removeLayer("AdultoMayor");
    }
  }
});


am_Layer = function(features) {
  var color = "#007a68";

  var geoLayer = {
    "id": "AdultoMayor",
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
