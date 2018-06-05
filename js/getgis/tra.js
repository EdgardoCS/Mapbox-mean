// var road = require('../../js/getgis/write.js');

var nam;
var typ;
var coor;
var desc;
var paint;
var tra_layer;
var tra_source;
var tra_obj = [];
var coordin = [];

exports.thesink = function(transporte_geocoor, _l, clasification) {

  if (clasification == "ascensores") {
    nam = transporte_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = transporte_geocoor.features[i].geometry.type;
      coor = transporte_geocoor.features[i].geometry.coordinates;
      desc = transporte_geocoor.features[i].properties;

      tra_obj[i] = make_cell(nam, typ, coor, desc);
    }
    tra_layer = make_inner(tra_obj);
    tra_source = innercell(clasification, nam, typ, tra_layer);
  }
  if (clasification == "recorridos_microbuses") {
    nam = transporte_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = transporte_geocoor.features[i].geometry.type;
      coor = transporte_geocoor.features[i].geometry.coordinates;
      desc = transporte_geocoor.features[i].properties;
      tra_obj[i] = make_cell(nam, typ, coor, desc);
    }

    tra_layer = make_inner(tra_obj);
    tra_source = innercell(clasification, nam, typ, tra_layer);
  }
  if (clasification == "recorridos_taxicolectivos") {
    nam = transporte_geocoor.name;
    for (i = 0; i < _l; i++) {
      typ = transporte_geocoor.features[i].geometry.type;
      coor = transporte_geocoor.features[i].geometry.coordinates;
      desc = transporte_geocoor.features[i].properties;

      tra_obj[i] = make_cell(nam, typ, coor, desc);
    }
    tra_layer = make_inner(tra_obj);
    tra_source = innercell(clasification, nam, typ, tra_layer);
  }
  // road.train(tra_source)
  map.addLayer(tra_source);
}
make_cell = function(nam, typ, coor, desc) {
  var features;
  features = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": coor
    },
    "properties": {
      "nombre": nam,
      "descripcion": desc,
    },
  }
  return features;
}
make_inner = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
innercell = function(clasification, nam, typ, div_layer) {
  if (clasification == "ascensores") {
    color = "#07fff2";
  }
  if (clasification == "recorridos_microbuses") {
    color = "#07b0ff";
  }
  if (clasification == "recorridos_taxicolectivos") {
    color = "#0250d8";
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
    "source": div_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather
}
