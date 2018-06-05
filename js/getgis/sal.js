// var hot = require('../../js/getgis/write.js');

var nam;
var typ;
var coor;
var desc;
var paint;
var sal_layer;
var sal_source;
var sal_obj = [];

exports.water = function(salud_geocoor, _l, clasification) {
  if (clasification == "establecimientos_hospitalarios") {
    nam = salud_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = salud_geocoor.features[i].geometry.type;
      coor = [salud_geocoor.features[i].geometry.coordinates[0], salud_geocoor.features[i].geometry.coordinates[1]];
      desc = salud_geocoor.features[i].properties;

      sal_obj[i] = make_wanaland(nam, typ, coor, desc);
    }
    sal_layer = make_polygond(sal_obj);
    sal_source = polygondwanaland(clasification, nam, typ, sal_layer);
  }
  if (clasification == "establecimientos_salud") {
    nam = salud_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = salud_geocoor.features[i].geometry.type;
      coor = salud_geocoor.features[i].geometry.coordinates;
      desc = salud_geocoor.features[i].properties;

      sal_obj[i] = make_wanaland(nam, typ, coor, desc);
    }
    sal_layer = make_polygond(sal_obj);
    sal_source = polygondwanaland(clasification, nam, typ, sal_layer);
  }
  if (clasification == "seremi_salud") {
    nam = salud_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = salud_geocoor.features[i].geometry.type;
      coor = salud_geocoor.features[i].geometry.coordinates;
      desc = salud_geocoor.features[i].properties;

      sal_obj[i] = make_wanaland(nam, typ, coor, desc);
    }
    sal_layer = make_polygond(sal_obj);
    sal_source = polygondwanaland(clasification, nam, typ, sal_layer);
  }

  if (clasification == "servicios_salud") {
    nam = salud_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = salud_geocoor.features[i].geometry.type;
      coor = salud_geocoor.features[i].geometry.coordinates;
      desc = salud_geocoor.features[i].properties;

      sal_obj[i] = make_wanaland(nam, typ, coor, desc);
    }
    sal_layer = make_polygond(sal_obj);
    sal_source = polygondwanaland(clasification, nam, typ, sal_layer);
  }
  // hot.water(sal_source);
  map.addLayer(sal_source);
}
make_wanaland = function(nam, typ, coor, desc) {
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
make_polygond = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
polygondwanaland = function(clasification, nam, typ, sal_layer) {
  if (clasification == "establecimientos_hospitalarios") {
    color = "#ac07ff";
  }
  if (clasification == "establecimientos_salud") {
    color = "#ff07c1";
  }
  if (clasification == "seremi_salud") {
    color = "#ff0766";
  }
  if (clasification == "servicios_salud") {
    color = "#6607ff";
  }

  if (typ == "Polygon" || typ == "MultiPolygon") {
    var type = "fill";
    paint = {
      "fill-color": color,
      "fill-opacity": 0.8
    };
  }
  if (typ == "Point") {
    var type = "circle";
    paint = {
      "circle-radius": 5,
      "circle-color": color,
    };
  }
  if (typ == "LineString" || typ == "MultiLineString") {
    var type = "line";
    paint = {
      "line-color": color,
      "line-width": 3
    }
  }
  weather = {
    "id": clasification,
    "type": type,
    "source": sal_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather
}
