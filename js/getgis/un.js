
var nam;
var typ;
var coor;
var desc;
var un_layer;
var un_source;
var un_obj = [];
var paint;
var weather;

exports.sunship = function(unidad_geocoor, _l, clasification) {
  nam = unidad_geocoor.name;
  typ = unidad_geocoor.features[0].geometry.type;
  coor = unidad_geocoor.features[0].geometry.coordinates;
  desc = unidad_geocoor.features[0].properties;

  un_obj[0] = make_gunner(nam, typ, coor, desc);

  un_layer = make_tail(un_obj);
  un_source = tailgunner(clasification, nam, typ, un_layer);
  map.addLayer(un_source);
}

make_gunner = function(nam, typ, coor, desc) {
  var features;
  features = {
    "type": "Feature",
    "geometry": {
      "type": typ,
      "coordinates": coor
    },
    "properties": {
      "nombre": nam,
      "descripcion": desc,
    },
  }
  return features;
}
make_tail = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
tailgunner = function(clasification, nam, typ, un_layer) {
  color = "#5cb27c";

  if (typ == "Polygon" || typ == "MultiPolygon") {
    var type = "fill";
    paint = {
      "fill-color": color,
      "fill-opacity": 0.8
    };
  }
  weather = {
    "id": clasification,
    "type": type,
    "source": un_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather
}
