// var wah = require('../../js/getgis/write.js');

var nam;
var typ;
var coor;
var desc;
var paint;
var div_layer;
var div_source;
var div_obj = [];

exports.luck = function(div_pol_adm, _l, clasification) {

  if (clasification == "Limite_Comunal") {
    nam = div_pol_adm.name;
    typ = div_pol_adm.features[0].geometry.type;
    coor = div_pol_adm.features[0].geometry.coordinates;
    desc = div_pol_adm.features[0].properties;

    div_obj[0] = make_andme(nam, typ, coor, desc);
    div_layer = make_spider(div_obj);
    div_source = spiderandme(clasification, nam, typ, div_layer);
  }
  if (clasification == "Limite_Urbano") {
    nam = div_pol_adm.name;
    typ = div_pol_adm.features[0].geometry.type;
    coor = div_pol_adm.features[0].geometry.coordinates;
    desc = div_pol_adm.features[0].properties;

    div_obj[0] = make_andme(nam, typ, coor, desc);
    div_layer = make_spider(div_obj);
    div_source = spiderandme(clasification, nam, typ, div_layer);
  }
  if (clasification == "Plazas") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = "LineString";
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;

      div_obj[i] = make_andme(nam, typ, coor, desc);
    }

    div_layer = make_spider(div_obj);
    div_source = spiderandme(clasification, nam, typ, div_layer);

  }
  if (clasification == "Sectores_dideco") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = "LineString";
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;

      div_obj[i] = make_andme(nam, typ, coor, desc);
    }
    div_layer = make_spider(div_obj);
    div_source = spiderandme(clasification, nam, typ, div_layer);
  }
  if (clasification == "Unidades_vecinales") {
    nam = div_pol_adm.name;
    for (i = 0; i < _l; i++) {
      typ = "LineString";
      coor = div_pol_adm.features[i].geometry.coordinates[0];
      desc = div_pol_adm.features[i].properties;

      div_obj[i] = make_andme(nam, typ, coor, desc);
    }
    div_layer = make_spider(div_obj);
    div_source = spiderandme(clasification, nam, typ, div_layer);
  }

  // wah.wah(div_source);
  map.addLayer(div_source);
}

make_spider = function(features) {
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
make_andme = function(nam, typ, coor, desc) {
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
spiderandme = function(clasification, nam, typ, div_layer) {

  if (clasification == "Limite_Comunal") {
    color = "#fc2900";
  }
  if (clasification == "Limite_Urbano") {
    color = "#ff7f00";
  }
  if (clasification == "Plazas") {
    color = "#648e00";
  }
  if (clasification == "Sectores_dideco") {
    color = "#6d0000";
  }
  if (clasification == "Unidades_vecinales") {
    color = "#728c01";
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

  var weather = {
    "id": clasification,
    "type": type,
    "source": div_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather;

}
