var idNumber;
var indexInferior = 10;
var indexSuperior = 100;
document.getElementById('exportBus').onclick = function(e) {
  var data = mapDraw.getAll();

  for (i = 0; i < data.features.length; i++) {

    if (data.features.length > 0) {
      data.features[i].properties['icon'] = "bus";
      if (i < indexInferior) {
        data.features[i].properties['title'] = "id00" + i;
      }
      if (i >= indexInferior && i < indexSuperior) {
        data.features[i].properties['title'] = "id0" + i;
      }
      if (i >= indexSuperior){
        data.features[i].properties['title'] = "id" + i;
      }
      var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
      document.getElementById('exportBus').setAttribute('href', 'data:' + convertedData);
      document.getElementById('exportBus').setAttribute('download', 'data.geojson');
    } else {
      alert("No existen puntos dibujados");
    }

  }
};
document.getElementById('exportCab').onclick = function(e) {
  var data = mapDraw.getAll();

  for (i = 0; i < data.features.length; i++) {

    if (data.features.length > 0) {
      data.features[i].properties['icon'] = "car";
      if (i < indexInferior) {
        data.features[i].properties['title'] = "id00" + i;
      }
      if (i >= indexInferior && i < indexSuperior) {
        data.features[i].properties['title'] = "id0" + i;
      }
      if (i >= indexSuperior){
        data.features[i].properties['title'] = "id" + i;
      }
      var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
      document.getElementById('exportCab').setAttribute('href', 'data:' + convertedData);
      document.getElementById('exportCab').setAttribute('download', 'data.geojson');
    } else {
      alert("No existen puntos dibujados");
    }

  }
};
document.getElementById('exportDanger').onclick = function(e) {
  var data = mapDraw.getAll();

  for (i = 0; i < data.features.length; i++) {

    if (data.features.length > 0) {
      data.features[i].properties['icon'] = "information";
      if (i < indexInferior) {
        data.features[i].properties['title'] = "id00" + i;
      }
      if (i >= indexInferior && i < indexSuperior) {
        data.features[i].properties['title'] = "id0" + i;
      }
      if (i >= indexSuperior){
        data.features[i].properties['title'] = "id" + i;
      }
      var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
      document.getElementById('exportDanger').setAttribute('href', 'data:' + convertedData);
      document.getElementById('exportDanger').setAttribute('download', 'data.geojson');
    } else {
      alert("No existen puntos dibujados");
    }

  }
};
