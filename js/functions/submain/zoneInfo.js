var frame = require('./smsBuild.js');
var billabong = require('./userInfo.js');

var polygonInm18A;
var polygonRec18A;
var polygonAm18A;
var polygonInm18B;
var polygonRec18B;
var polygonAm18B;
var polygonInm18C;
var polygonRec18C;
var polygonAm18C;
var polygonInm27A;
var polygonRec27A;
var polygonAm27A;
var polygonInm27B;
var polygonRec27B;
var polygonAm27B;
var polygonInm27C;
var polygonRec27C;
var polygonAm27C;

var polySeleccion;
var polygono18A;
var polygono18B;
var polygono18C;
var polygono27A;
var polygono27B;
var polygono27C;

var newSubSector;
var newAdd;

var mostrarLargo;
var individualLargo = [];

var inArray = [];
var reArray = [];
var amArray = [];

var selecButton = document.getElementById('SubSec');

exports.habilitado = function(coorArray) {
  exports.subturf = function(objects) {

    polygono18A = setPolygon18A(coorArray);
    polygono18B = setPolygon18B(coorArray);
    polygono18C = setPolygon18C(coorArray);
    polygono27A = setPolygon27A(coorArray);
    polygono27B = setPolygon27B(coorArray);
    polygono27C = setPolygon27C(coorArray);

    objArray = objects;

    inArray = objArray[0].source;
    reArray = objArray[1].source;
    amArray = objArray[2].source;
  }
}
exports.tosubturf = function(isSubSectorSelected) {
  newSubSector = isSubSectorSelected;
}
exports.zonei = function(add) {
  newAdd = add;
}

var fury = document.getElementById('furyModal');
var storm = document.getElementsByClassName('furyclose')[0];

selecButton.onclick = function() {

  var InmMostrar =[];
  var RecMostrar =[];
  var AdmMostrar =[];

  var objetoL = objArray.length;

  if (newSubSector[0] == true) {
    polygonInm = turf.within(inArray.data, polygono18A);
    polygonRec = turf.within(reArray.data, polygono18A);
    polygonAm = turf.within(amArray.data, polygono18A);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  if (newSubSector[1] == true) {
    polygonInm = turf.within(inArray.data, polygono18B);
    polygonRec = turf.within(reArray.data, polygono18B);
    polygonAm = turf.within(amArray.data, polygono18B);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  if (newSubSector[2] == true) {
    polygonInm = turf.within(inArray.data, polygono18C);
    polygonRec = turf.within(reArray.data, polygono18C);
    polygonAm = turf.within(amArray.data, polygono18C);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  if (newSubSector[3] == true) {
    polygonInm = turf.within(inArray.data, polygono27A);
    polygonRec = turf.within(reArray.data, polygono27A);
    polygonAm = turf.within(amArray.data, polygono27A);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  if (newSubSector[4] == true) {
    polygonInm = turf.within(inArray.data, polygono27B);
    polygonRec = turf.within(reArray.data, polygono27B);
    polygonAm = turf.within(amArray.data, polygono27B);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  if (newSubSector[5] == true) {
    polygonInm = turf.within(inArray.data, polygono27C);
    polygonRec = turf.within(reArray.data, polygono27C);
    polygonAm = turf.within(amArray.data, polygono27C);

    if (newAdd[0] == true) {
      InmMostrar.unshift(polygonInm)
    }
    if (newAdd[1] == true) {
      RecMostrar.unshift(polygonRec)
    }
    if (newAdd[2] == true) {
      AdmMostrar.unshift(polygonAm)
    }
  }

  furyModal.style.display = "block"

  var isum = 0;
  var rsum = 0;
  var asum = 0;
  var setRec = [];
  var setInm = [];
  var setAdm = [];
  iLargo = InmMostrar.length;
  rLargo = RecMostrar.length;
  aLargo = AdmMostrar.length;

  for (i = 0; i < iLargo; i++) {
    setInm[i] = InmMostrar[i].features.length;
    isum = isum + setInm[i];
  }

  if (isum > 0) {
    document.getElementById('viewVal').innerHTML = "Usuarios programa Dismovilizado: " + " Usuarios programa Recordatorio de Citas: " + rsum + " Usuarios Seleccionados Adulto Mayor: " + asum;
  }

  for (i = 0; i < rLargo; i++) {
    setRec[i] = RecMostrar[i].features.length;
    rsum = rsum + setRec[i];
  }

  if (rsum > 0) {
    document.getElementById('viewVal').innerHTML = "Usuarios programa Dismovilizado: " + isum + " Usuarios programa Recordatorio de Citas: " + rsum + " Usuarios Seleccionados Adulto Mayor: " + asum;
  }

  for (i = 0; i < aLargo; i++) {
    setAdm[i] = AdmMostrar[i].features.length;
    asum = asum + setAdm[i];
  }

  /*
  var melting = [];
  melting.push(InmMostrar);
  melting.push(RecMostrar);
  melting.push(AdmMostrar);

  billabong.valley(melting);
  melting = [];
  */
  frame.byframe(AdmMostrar);

  if (asum > 0) {
    document.getElementById('viewVal').innerHTML = "Usuarios Seleccionados programa Dismovilizado: "  + " Usuarios programa Recordatorio de Citas: " + rsum + " Usuarios Seleccionados Adulto Mayor: " + asum;
  }

  storm.onclick = function() {
    fury.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == fury) {
      fury.style.display = "none";
    }
  }
}

setPolygon18A = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[0]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
setPolygon18B = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[1]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
setPolygon18C = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[2]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
setPolygon27A = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[3]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
setPolygon27B = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[4]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
setPolygon27C = function(coorArray) {
  var polygon;
  polygon = {
    "type": "FeatureCollection",
    "features": [{
      "type": "features",
      "geometry": {
        "type": "Polygon",
        "coordinates": [coorArray[5]]
      },
      "properties": {},
      "id": "PolygonoSubSector",
    }]
  }
  return polygon;
};
