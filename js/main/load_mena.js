var mena = {
  "id": "CESFAM MENA",
  "type": "circle",
  "source": {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-71.631230, -33.048942]
        },
        "properties": {},
      }]
    }
  },
  "layout": {
    'visibility': 'visible'
  },
  "paint": {
    "circle-radius": 7,
    "circle-color": "#69B5B2"
  },
};
map.addLayer(mena);
