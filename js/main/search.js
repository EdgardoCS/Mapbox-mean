function search() {
  searchButton = document.getElementById('search').value;
  var RUT = (searchButton);

  db.all("SELECT * FROM Users WHERE Rut=?", [RUT], function(err, row) {
    celda = row.length;

    if (row != null) {

      var searchArray = [];
      if (celda == 1) {
        for (i = 0; i < celda; i++) {
          searchArray[i] = setSearchFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Sector, row[i].SubSector, row[i].Latitud, row[i].Longitud, row[i].Programa, row[i].Jefe_Equipo, row[i].Estado, row[i].Observaciones);
        }
        searchLayer = makeSearchLayer(searchArray);
        searchSource = makeSearchGeo(searchArray);

        var busqueda = [searchSource, searchLayer];
        map.addSource(busqueda[1].source, busqueda[0]);
        map.addLayer(busqueda[1]);

        map.on('click', 'Busqueda', function(e) {
          new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
        });
        map.on('mouseenter', 'Busqueda', function() {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'Busqueda', function() {
          map.getCanvas().style.cursor = '';
        });
      } else if (celda < 1) {
        smalltalk.alert('Error: Rut No Encontrado', 'Ingrese Rut válido!').then(function() {});
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });
}
setSearchFeatures = function(Rut, Nombre, Direccion, Sector, SubSector, Longitud, Latitud, Programa, Jefe_Equipo, Estado, Observaciones) {
  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitud, Longitud]
    },
    "properties": {
      "title": "Adulto Mayor",
      "rut": Rut,
      "description": "Programa: " + Programa + " " + "/ Nombre: " + Nombre + " " + "/ SubSector: " + SubSector,
      "address": "Direccion: " + [Direccion],
      "status": Estado,
      "program": Programa,
      "observations": Observaciones,
    }
  }
  return pointFeatures;
};

makeSearchLayer = function(features) {
  var id = "Busqueda";
  var color = "#6d6760";
  var fuente = "busquedaMarkers";

  var geoLayer = {
    "id": id,
    "type": "circle",
    "source": fuente,
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
makeSearchGeo = function(features) {
  var geo = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  }
  return geo;
}
