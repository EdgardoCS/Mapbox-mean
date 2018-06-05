var utm = require('utm');

var _l;
var lcr;
var searching = [];
var protomartyr = [];
var exoplanet = [];
var voyage = [];
var voyage34 = [];

var easting = [];
var northing = [];
var zoneN = 19;
var zoneL = "H";
var northern;

exports.drifting = function(incoming) {
  exoplanet = incoming.features;
  _l = exoplanet.length;

  for (i = 0; i < _l; i++) {
    voyage[i] = exoplanet[i].geometry.coordinates[0];
    voyage34 = voyage.slice(i);


    o// protomartyr[i] = StaticGod(voyage34);
    StaticGod(voyage34);
  }
  // console.log(protomartyr);
}



StaticGod = function ( voyage34){
  // console.log(voyage34);
    lcr = voyage34[0].length;
    // console.log(lcr);
    for (j = 0; j<lcr; j++){
      console.log(j);
    }
}
