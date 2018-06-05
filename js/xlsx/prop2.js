if (typeof window === 'undefined') {
  var expect = require('expect.js');
  var GeoJSON = require('geojson');
}
//rellenar con datos de csv
var data = [
  { title: 'Adulto Mayor', name: 'AJAX comolehaido 1', address: 'callefalsa123', "marker-color": '#2B8CBE', "marker-size":'large', "marker-symbol":'hospital', lat: 39.984, lng: -75.343 },
];
//var GeoJSON = require('geojson');
var gjson =GeoJSON.parse(data, {Point: ['lat', 'lng']});
console.log(gjson);
