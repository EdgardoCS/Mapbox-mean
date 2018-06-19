var steps;
var watlong;
var waypoints = [
  [-71.631153, -33.048997]
];


map.on('click', function(e) {
  var point = [e.lngLat.lng, e.lngLat.lat];
  waypoints.push(point);
  waylong = waypoints.length;

  if (map.getLayer("route")) {
    map.removeSource("route");
    map.removeLayer("route");
    map.removeLayer("start");
    map.removeSource("start");
    map.removeLayer("waypoint-label");
  }

  if (waylong == 2) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1];
  }
  if (waylong == 3) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1];
  }
  if (waylong == 4) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1];
  }
  if (waylong == 5) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1];
  }
  if (waylong == 6) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1];
  }
  if (waylong == 7) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1];
  }
  if (waylong == 8) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1] + ';' + waypoints[7][0] + ',' + waypoints[7][1];
  }
  if (waylong == 9) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1] + ';' + waypoints[7][0] + ',' + waypoints[7][1] + ';' + waypoints[8][0] + ',' + waypoints[8][1];
  }
  if (waylong == 10) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1] + ';' + waypoints[7][0] + ',' + waypoints[7][1] + ';' + waypoints[8][0] + ',' + waypoints[8][1] + ';' + waypoints[9][0] + ',' + waypoints[9][1];
  }
  if (waylong == 11) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1] + ';' + waypoints[7][0] + ',' + waypoints[7][1] + ';' + waypoints[8][0] + ',' + waypoints[8][1] + ';' + waypoints[9][0] + ',' + waypoints[9][1] + ';' + waypoints[10][0] + ',' + waypoints[10][1];
  }
  if (waylong == 12) {
    steps = waypoints[0][0] + ',' + waypoints[0][1] + ';' + waypoints[1][0] + ',' + waypoints[1][1] + ';' + waypoints[2][0] + ',' + waypoints[2][1] + ';' + waypoints[3][0] + ',' + waypoints[3][1] + ';' + waypoints[4][0] + ',' + waypoints[4][1] + ';' + waypoints[5][0] + ',' + waypoints[5][1] + ';' + waypoints[6][0] + ',' + waypoints[6][1] + ';' + waypoints[7][0] + ',' + waypoints[7][1] + ';' + waypoints[8][0] + ',' + waypoints[8][1] + ';' + waypoints[9][0] + ',' + waypoints[9][1] + ';' + waypoints[10][0] + ',' + waypoints[10][1] + ';' + waypoints[11][0] + ',' + waypoints[11][1];
  }

  getRoute(steps, waypoints);
});

function getRoute() {

  var directionsRequest = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + steps + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
  $.ajax({
    method: 'GET',
    url: directionsRequest,
  }).done(function(data) {

    console.log("distancia recorrida: " + data.trips[0].distance + " mts");
    var time = data.trips[0].duration / 60;
    console.log("tiempo estimado: " + time + " minutos");

    var route = data.trips[0].geometry;

    var trip = [];
    var index = [];

    for (j = 0; j < waylong; j++) {
      index[j] = data.waypoints[j].waypoint_index;

      trip[j] = setWaypoints(waypoints[j], index[j])
    }

    var newRoute = makeroute(trip);

    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: route
        }
      },
      paint: {
        'line-width': 2,
        'line-color': "#223ff9",
      }
    });
    map.addLayer(newRoute);
    map.addLayer({
      "id": "waypoint-label",
      "type": "symbol",
      "source": "start",
      "layout": {
        "text-field": "{index}",
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Bold"
        ],
        "text-size": 15
      }
    });

  });
}

setWaypoints = function(waypoint, index) {
  var wayPoint;

  wayPoint = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": waypoint
    },
    "properties": {
      "index": index
    }
  }
  return wayPoint;
}

makeroute = function(trip) {
  var route = {
    "id": "start",
    "type": "circle",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": trip
      },
    },
    "paint": {
      "circle-radius": 15,
      "circle-color": "#ffffff",
      "circle-stroke-width": 1.5,
      "circle-stroke-color": "#000000"
    }
  }
  return route;
}
