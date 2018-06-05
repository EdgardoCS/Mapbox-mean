// var mr = require('../../js/getgis/write.js');

var nam;
var typ;
var coor;
var desc;
var stipo;
var lev_layer;
var lev_source;
var lev_obj = [];
var paint;

var feat;
var name;
var tipo;
var subti;
var calletipo;
var descri;

var activa;
var cerro;
var coordinado;
var direccion;
var junta;

exports.desert = function(lev_comp_cat, _l, clasification) {

  if (clasification == "juntas_vecinos") {
    nam = lev_comp_cat.name;
    for (i = 0; i < _l; i++) {
      typ = lev_comp_cat.features[i].geometry.type;
      coor = lev_comp_cat.features[i].geometry.coordinates;
      desc = lev_comp_cat.features[i].properties;

      lev_obj[i] = make_light(nam, typ, coor, desc);
    }
    lev_layer = make_white(lev_obj);
    lev_source = whitelight(clasification, nam, typ, lev_layer);

  }
  if (clasification == "levantamiento_completo") {
    nam = lev_comp_cat.name;
    for (i = 0; i < _l; i++) {
      typ = lev_comp_cat.features[i].geometry.type;
      coor = [lev_comp_cat.features[i].geometry.coordinates[0], lev_comp_cat.features[i].geometry.coordinates[1]];
      desc = lev_comp_cat.features[i].properties;
      stipo = lev_comp_cat.features[i].properties.SUB_TIPO;

      lev_obj[i] = make_light(nam, typ, coor, desc, stipo);
    }
    lev_layer = make_white(lev_obj);
    lev_source = whitelight(clasification, nam, typ, stipo, lev_layer);

  }
  console.log(desc);
  // mr.beat(lev_source);
  map.addLayer(lev_source);
  var id = lev_source.id;

  if (map.getLayer(id)) {
    tooltip(id);
  }
}

make_light = function(nam, typ, coor, desc, stipo) {
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
      "subtipo": stipo,
    },
  }
  return features;
}
make_white = function(features) {
  nam
  var tail = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    },
  }
  return tail;
}
whitelight = function(clasification, nam, typ, stipo, lev_layer) {
  if (clasification == "juntas_vecinos") {
    color = "#1481a0";
  }
  if (clasification == "levantamiento_completo") {
    color = "#2614a0";
    // console.log(lev_layer);
  }
  for (i = 0; i < lev_layer.data.features.length; i++) {
    if (lev_layer.data.features[i].properties.subtipo == "BASURAL") {
      color = "#d68422";
    }
  }

  var type = "circle";
  paint = {
    "circle-radius": 4,
    "circle-color": color,
  };

  weather = {
    "id": clasification,
    "type": type,
    "source": lev_layer,
    "layout": {
      "visibility": "visible"
    },
    paint,
  }
  return weather
}

tooltip = function(id) {

  var popup = new mapboxgl.Popup({
    // closeButton: false,
    // closeOnClick: false
  });

  // map.on('mouseenter', id, function(e) {
  // map.getCanvas().style.cursor = 'pointer';
  map.on('click', id, function(e) {
    feat = JSON.parse(e.features[0].properties.descripcion);

    if (id == "levantamiento_completo") {
      name = feat.nom_calle;
      tipo = feat.TIPOLOGIA;
      subti = feat.SUB_TIPO;
      calletipo = feat.tipo_calle;
      descri = feat.descriptio;

      popup.setLngLat(e.features[0].geometry.coordinates)
        .setHTML(name + " " + descri)
        .addTo(map);
    }

    if (id == "juntas_vecinos") {
      activa = feat.ACTIVA;
      cerro = feat.CERRO_SECT;
      coordinado = feat.Coordinado;
      direccion = feat.direccion;
      junta = feat.Junta_de_V;

      popup.setLngLat(e.features[0].geometry.coordinates)
        .setHTML("Junta Vecinal: " + junta + " Coordinador: " + coordinado + " Activa: " + activa)
        .addTo(map);
    }
  });

  map.on('mouseenter', id, function() {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', id, function() {
    map.getCanvas().style.cursor = '';
    // popup.remove();
  });
}
