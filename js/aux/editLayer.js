var busjson;
var chosenOne;
var findId;
exports.real = function(data) {

  busjson = JSON.parse(data);

  map.addLayer({
    "id": "places",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": busjson
    },
    "layout": {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
    },
  });
  map.on('click', 'places', function(e) {
    chosenOne = e.features[0].properties.title;
    for (i = 0; i < busjson.features.length; i++) {

      findId = busjson.features[i].properties.title;
      if (findId == chosenOne) {
        busjson.features.splice(i, 1);
        reload()
      }

    }
  });

  map.on('mouseenter', 'places', function() {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'places', function() {
    map.getCanvas().style.cursor = '';
  });

};

function reload() {
  map.removeLayer("places");
  map.removeSource("places");
  map.addLayer({
    "id": "places",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": busjson
    },
    "layout": {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
    },
  });
}
